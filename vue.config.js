/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: webpack 配置项
 * @Date: 2019-03-31 09:21:26
 * @LastEditTime: 2019-06-25 03:20:28
 */
const path = require('path')
const config = require('./config')
const merge = require('webpack-merge')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const resolve = dir => path.join(__dirname, dir)
const IS_PROD = process.env.NODE_ENV === 'production'

const cfg = IS_PROD ? config.prd.env : config.dev.env

const __VERSION__ = '1.0.1'

module.exports = {
  baseUrl: './',
  publicPath: IS_PROD ? JSON.parse(cfg.host) : '/',
  outputDir: 'dist',

  // 生产打开 sourceMap
  productionSourceMap: false,

  chainWebpack: config => {
    // 压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
    // 重命名输出文件
    config.output
      .set('filename', `js/[name].[hash:8]-v${__VERSION__}.js`)
      .set('chunkFilename', `js/[id].[hash:8]-v${__VERSION__}.js`)

    config.resolve.alias
      .set('@', resolve('src'))
      .set('_com', resolve('src/components'))
      .set('_img', resolve('src/assets/images')) // 在样式中使用别名时，需要加 ~前缀  ~_img/logo.png
      .set('_css', resolve('src/assets/css'))
      .set('_mock', resolve('src/mock'))
      .set('_ser', resolve('src/core/services'))
      .set('_lib', resolve('src/lib'))
      .set('_util', resolve('src/utils'))

    // 图片地址解析
    // config.module
    //   .rule('images') // 解析图片
    //   .use('url-loader')
    //   .tap(options => {
    //     merge(options, {
    //       // 图片大小限制为 10KB
    //       limit: 10
    //     })
    //   })

    // 配置 stylus
    config.module
      .rule('stylus')
      .oneOf('vue')
      .use('postcss-loader')
      .tap(options =>
        merge(options, {
          config: {
            path: path.resolve(__dirname, 'postcss.config.js')
          }
        })
      )

    // 配置 VUE_APP_xxx
    config.plugin('define').tap(args => {
      let name = 'process.env'
      // 使用 merge 保证原始值不变
      args[0][name] = merge(args[0][name], cfg)
      return args
    })

    // 生产环境
    if (IS_PROD) {
      // #region 分析打包体积
      if (process.env.IS_ANALYZE) {
        config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
          {
            analyzerMode: 'static'
          }
        ])
      }
    }
  },

  configureWebpack: () => ({
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: 'styles',
            test: /\.(sty|sc|c)ss$/,
            chunks: 'all',
            enforce: true
          },
          runtimeChunk: {
            name: 'manifest'
          }
        }
      }
    }
  }),

  // 服务配置
  devServer: {
    port: '8080', // 代理端口
    https: false, // 使用https提供服务
    open: false, // 项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
    proxy: {
      '/': {
        target: 'http://ccelorealtest.comeyes.net/ba', // 服务器api地址
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    },
    progress: true
  },

  // 在webpack编译的时候把样式注入到全局样式中
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/style/styl/index.styl']
      }
      // postcss: {
      //   plugins: [
      //     require('postcss-px2rem')({
      //       remUnit: 30
      //     }) // 换算的基数
      //   ]
      // }
    },
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  }
}
