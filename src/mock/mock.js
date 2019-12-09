/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: mock 数据
 * @Date: 2019-03-31 16:01:11
 * @LastEditTime: 2019-06-25 14:28:30
 */

import checkDev from './checkDev'

class Mock {

  @checkDev
  static getCmsData(tar, name, des) {
    des.value = async function() {
      return {
        code: 0,
        data: {
          list: [],
          all: false,
          lotteryrecord: [],
          isprovicy: 0,
          livedata: {
            content: 'ready',
            link: 'https://www.baidu.com'
          }
        }
      }
    }
    return des
  }

  @checkDev
  static checkAuth(tar, name, des) {
    des.value = async function() {
      console.log('这是checkAuth的mock')
      return 'godkun'
    }
    return des
  }

  @checkDev
  static getUserInfo(tar, name, des) {
    des.value = async function() {
      console.log('这是recordUserId的mock')
      return {
        code: 0,
        data: {
          list: [],
          all: false,
          lotteryrecord: [],
          isprovicy: 0,
          livedata: {
            content: 'ready',
            link: 'https://www.baidu.com'
          }
        }
      }
    }
    return des
  }

  @checkDev
  static recordUserId(tar, name, des) {
    des.value = async function() {
      console.log('这是recordUserId的mock')
      return {
        code: 0,
        data: 1,
        status: true
      }
    }
    return des
  }

  @checkDev
  static setProvicy(tar, name, des) {
    des.value = async function() {
      console.log('这是setProvicy的mock')
      return {
        code: 0,
        data: {
          list: [],
          all: false,
          lotteryrecord: [],
          isprovicy: 0,
          livedata: {
            content: 'ready',
            link: 'https://www.baidu.com'
          }
        }
      }
    }
    return des
  }

  @checkDev
  static getShopList(tar, name, des) {
    des.value = async function() {
      console.log('这是recordUserId的mock')
      return {
        code: 0,
        data: [
          {
            provice: '北京',
            infos: {
              北京市: [
                {
                  storename: '北京翠微',
                  storeaddress:
                    '北京市海淀区复兴路33号翠微百货1层化妆品植村秀 ',
                  storemobile: '010-68266730',
                  storeconcat: 'shu.cn-bej.cuiwe@lorealposasia.com'
                },
                {
                  storename: '北京百盛',
                  storeaddress: '复兴门内大街101号',
                  storemobile: '010-66535417',
                  storeconcat: 'shu.cn-bej.parkson@lorealposasia.com'
                },
                {
                  storename: '北京SKP',
                  storeaddress: '朝阳区建国路87号SKP华联新光',
                  storemobile: '010-65331972',
                  storeconcat: 'shu.cn-bej.xinguang@lorealposasia.com'
                },
                {
                  storename: '北京汉光百货',
                  storeaddress: '西单北大街176号',
                  storemobile: '010-66022033',
                  storeconcat: 'shu.cn-bej.zhongyou@lorealposasia.com'
                },
                {
                  storename: '北京双安',
                  storeaddress: '北京市海淀区北三环西路38号',
                  storemobile: '010-82102230',
                  storeconcat: 'shu.cn-bej.shuangan@lorealposasia.com'
                },
                {
                  storename: '北京新世界',
                  storeaddress: '北京市东城区崇文门外大街5号',
                  storemobile: '010-56225602',
                  storeconcat: 'shu.cn-bej.newworld@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '上海',
            infos: {
              上海市: [
                {
                  storename: '上海久光',
                  storeaddress: '上海市静安区南京西路1618号',
                  storemobile: '021-662999853',
                  storeconcat: 'shu.cn-sha.sogo@lorealposasia.com'
                },
                {
                  storename: '上海国金IFC',
                  storeaddress:
                    '自由贸易试验区世纪大道8号上海国金中心D座地下二层LG2-39室',
                  storemobile: '021-58980528',
                  storeconcat: 'shu.cn-sha.swire@lorealposasia.com'
                },
                {
                  storename: '上海太古汇',
                  storeaddress:
                    '上海市静安区石门一路366号兴业太古汇商场一层N136号单元',
                  storemobile: '021-52998726',
                  storeconcat: 'shu.cn-sha.swire@lorealposasia.com'
                },
                {
                  storename: '上海东方商厦 南东店',
                  storeaddress: '西藏中路500号第一百货A管1楼',
                  storemobile: '021-63510730',
                  storeconcat: 'shu.cn-sha.yidian@lorealposasia.com'
                },
                {
                  storename: '上海八佰伴',
                  storeaddress: '张扬路501号',
                  storemobile: '021-20559405',
                  storeconcat: 'shu.cn-sha.yaohan@lorealposasia.com'
                },
                {
                  storename: '上海徐家汇太平洋',
                  storeaddress: '衡山路932号',
                  storemobile: '021-64479006',
                  storeconcat: 'shu.cn-sha.pacific@lorealposasia.com'
                },
                {
                  storename: '上海淮海百盛',
                  storeaddress: '淮海中路918号',
                  storemobile: '021-64155203',
                  storeconcat: 'shu.cn-sha.parkson@lorealposasia.com'
                },
                {
                  storename: '上海梅龙镇伊势丹',
                  storeaddress: '南京西路1038号',
                  storemobile: '021-62187355',
                  storeconcat: 'shu.cn-sha.isetan@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '重庆',
            infos: {
              重庆市: [
                {
                  storename: '重庆世纪新都',
                  storeaddress: '重庆市江北区观音桥步行街1号',
                  storemobile: '023－89001795',
                  storeconcat: 'shu.cn-chq.ncentury@lorealposasia.com'
                },
                {
                  storename: '重庆茂业',
                  storeaddress: '重庆市 区建兴北路16号重庆茂业天地',
                  storemobile: '023-67912265',
                  storeconcat: 'shu.cn-chq.maoye@lorealposasia.com'
                },
                {
                  storename: '重庆新光',
                  storeaddress:
                    '重庆市渝北区龙溪街道红锦大道89号新光天地B区一楼',
                  storemobile: '023-6727807',
                  storeconcat: 'shu.cn-chq.xinguang@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '天津',
            infos: {
              天津市: [
                {
                  storename: '天津伊势丹',
                  storeaddress: '天津市和平区108号现代城伊势丹商场',
                  storemobile: '022-27188219',
                  storeconcat: 'shu.cn-tij.isetan@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '广东省',
            infos: {
              广州市: [
                {
                  storename: '广州百货',
                  storeaddress: '广州市越秀区北京路广百百货一楼旧翼植村秀专柜',
                  storemobile: '020-83326906',
                  storeconcat: 'shu.cn-gzh.baihuo@lorealposasia.com'
                },
                {
                  storename: '广州TeeMall',
                  storeaddress:
                    '广州市天河区天河路208号天河城购物中心第一层K113B商铺',
                  storemobile: '020-85592571',
                  storeconcat: 'shu.cn-gzh.tmall@lorealposasia.com'
                }
              ],
              深圳市: [
                {
                  storename: '深圳茂业百货',
                  storeaddress: '深圳市福田区华强北路茂业百货1F植村秀专柜',
                  storemobile: '0755-83019367',
                  storeconcat: 'shu.cn-shz.maoye@lorealposasia.com'
                },
                {
                  storename: '深圳茂业东门店',
                  storeaddress:
                    '深圳市罗湖区东门中路2047号东门茂业百货一楼植村秀专柜',
                  storemobile: '0755-25845060',
                  storeconcat: 'shu.cn-shz.nsmaoye2@lorealposasia.com'
                },
                {
                  storename: '深圳COCO PARK',
                  storeaddress:
                    '深圳市福田区福田街道福华三路北星河cocopark商场负二层\r\n'
                },
                {
                  storename: '深圳海雅缤纷城',
                  storeaddress:
                    '深圳市宝安区建安路海雅缤纷城一楼L143植村秀专柜',
                  storemobile: '0755-23500114',
                  storeconcat: 'shu.cn-shz.haiya@lorealposasia.com'
                },
                {
                  storename: '深圳壹方城',
                  storeaddress:
                    '深圳市宝安去新安街道海旺社区N12区新湖路99号壹方中心1层082A',
                  storemobile: '0755-29792304'
                }
              ]
            }
          },
          {
            provice: '江苏省',
            infos: {
              南京市: [
                {
                  storename: '南京金鹰百货',
                  storeaddress: '南京市建邺区汉中路89号',
                  storemobile: '025-84700439',
                  storeconcat: 'shu.cn-naj.goldeneg@lorealposasia.com'
                },
                {
                  storename: '南京德基',
                  storeaddress: '南京市玄武区中山路18号',
                  storemobile: '025-86777858',
                  storeconcat: 'shu.cn-naj.deji@lorealposasia.com'
                },
                {
                  storename: '南京河西金鹰',
                  storeaddress: '南京市建邺区应天大街888号',
                  storemobile: '025-58701992',
                  storeconcat: 'shu.cn-naj.goldeneg2@lorealposasia.com'
                },
                {
                  storename: '南京中央',
                  storeaddress: '南京市白下区中山南路79号',
                  storemobile: '025-84700824',
                  storeconcat: 'shu.cn-naj.zhyang@lorealposasia.com'
                },
                {
                  storename: '南京新百',
                  storeaddress: '南京市中山南路1号南京新街口百货A座一楼植村秀',
                  storemobile: '025- 89620537',
                  storeconcat: 'shu.cn-nan.xinbai@lorealposasia.com'
                }
              ],
              宁波市: [
                {
                  storename: '宁波银泰百货',
                  storeaddress: '宁波市中山东路188号',
                  storemobile: '0574-87092649',
                  storeconcat: 'shu.cn-nib.intime@lorealposasia.com'
                },
                {
                  storename: '宁波鄞州万达',
                  storeaddress: '宁波市鄞州区四明中路909号银泰百货1楼植村秀',
                  storemobile: '0574-83057655',
                  storeconcat: 'shu.cn-yiz.wanda@lorealposasia.com'
                }
              ],
              无锡市: [
                {
                  storename: '无锡三阳百盛',
                  storeaddress: '无锡市人民中路127号',
                  storemobile: '0510-82723831',
                  storeconcat: 'shu.cn-wux.parkson@lorealposasia.com'
                },
                {
                  storename: '无锡商业大厦',
                  storeaddress:
                    '江苏省无锡市梁溪区崇安区街道中山路343号大东方百货A座一层植村',
                  storemobile: '0510-85027357',
                  storeconcat: 'shu.cn-wux.shangye@lorealposasia.com'
                }
              ],
              徐州市: [
                {
                  storename: '徐州金鹰',
                  storeaddress: '徐州市中山北路2号金鹰国际购物中心一楼  ',
                  storemobile: '0516-83701795',
                  storeconcat: 'shu.cn-xzh.goldeneg@lorealposasia.com'
                }
              ],
              常州市: [
                {
                  storename: '常州购物中心',
                  storeaddress: '常州市天宁区延陵西路1号常州购物中心',
                  storemobile: '0519-88159157',
                  storeconcat: 'shu.cn-chz.baihuo@lorealposasia.com'
                }
              ],
              苏州市: [
                {
                  storename: '苏州泰华',
                  storeaddress: '苏州人民路23－29号泰华商城',
                  storemobile: '0512-68135370',
                  storeconcat: 'shu.cn-szh.taihua@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '浙江省',
            infos: {
              杭州市: [
                {
                  storename: '杭州IN77',
                  storeaddress: '杭州市上城区延安路239号IN77',
                  storemobile: '0571-81996838',
                  storeconcat: 'shu.cn-hzh.intime77@lorealposasia.com'
                },
                {
                  storename: '杭州银泰',
                  storeaddress: '延安路530号',
                  storemobile: '0571-85179252',
                  storeconcat: 'shu.cn-hzh.intime@lorealposasia.com'
                },
                {
                  storename: '杭州银西百货',
                  storeaddress: '杭州市上城区延安路98号-1',
                  storemobile: '0571-87002289',
                  storeconcat: 'shu.cn-hzh.intime2@lorealposasia.com'
                }
              ],
              温州市: [
                {
                  storename: '温州银泰',
                  storeaddress:
                    '浙江省温州市鹿城区解放南路与荷花路口银泰百货一楼',
                  storemobile: '0577-88008550',
                  storeconcat: 'shu.cn-wzh.intime@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '陕西省',
            infos: {
              西安市: [
                {
                  storename: '西安金花高新店',
                  storeaddress: '西安市高新区科技路33号',
                  storemobile: '029-62961058',
                  storeconcat: 'shu.cn-xia.jinhua2@lorealposasia.com'
                },
                {
                  storename: '西安开元',
                  storeaddress: '西安市碑林区钟楼开元商城一楼化妆品区',
                  storemobile: '029-87367576',
                  storeconcat: 'shu.cn-xia.kaiyuan@lorealposasia.com'
                },
                {
                  storename: '西安金花',
                  storeaddress: '西安市西大街1号',
                  storemobile: '029-87631968',
                  storeconcat: 'shu.cn-xia.jinhua@lorealposasia.com'
                },
                {
                  storename: '西安skp',
                  storeaddress: '陕西省西安市碑林区长安北路261号',
                  storemobile: '029-83699921',
                  storeconcat: 'shu.cn-xia.skp@lorealposasia.com'
                },
                {
                  storename: '西安赛格',
                  storeaddress: '西安市雁塔区长安中路123号赛格国际购物中心1F',
                  storemobile: '029-89327894',
                  storeconcat: 'shu.cn-xia.saige@lorealposasia.com'
                },
                {
                  storename: '西安群光',
                  storeaddress:
                    '西安市碑林区东大街301号端履门十字东北角群光广场',
                  storemobile: '029-87382953',
                  storeconcat: 'shu.cn-xia.chicony@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '湖北省',
            infos: {
              武汉市: [
                {
                  storename: '武汉群光',
                  storeaddress: '武汉市洪山区珞瑜路6号 ',
                  storemobile: '027-87634540',
                  storeconcat: 'shu.cn-wuh.chicony@lorealposasia.com'
                },
                {
                  storename: '武汉光谷大洋',
                  storeaddress: '东湖新技术开发区光谷世界城光谷街3号-1区-101号',
                  storemobile: '027_87418521',
                  storeconcat: 'shu.cn-wuh.ggocean@lorealposasia.com'
                },
                {
                  storename: '武汉广场',
                  storeaddress: '武汉市解放大道688号',
                  storemobile: '027-85715050',
                  storeconcat: 'shu.cn-wuh.plaza@lorealposasia.com'
                },
                {
                  storename: '武汉中山大洋',
                  storeaddress: '武汉市江汉区中山大道756号',
                  storemobile: '027-82450222',
                  storeconcat: 'shy.cn-wuh.ocean1@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '河南省',
            infos: {
              郑州市: [
                {
                  storename: '郑州丹尼斯',
                  storeaddress: '郑州市人民路2号',
                  storemobile: '0371-66265589',
                  storeconcat: 'shu.cn-zhz.dannis@lorealposasia.com'
                },
                {
                  storename: '郑州丹尼斯花园店',
                  storeaddress: '郑州市郑花路1号丹尼斯百货一楼 ',
                  storemobile: '0371-86256237',
                  storeconcat: 'shu.cn-zhz.dannis2@lorealposasia.com'
                },
                {
                  storename: '郑州丹尼斯大卫城',
                  storeaddress:
                    '郑州市金水区北二七路与太康路交叉口丹尼斯大卫城',
                  storemobile: '0371-56157003',
                  storeconcat: 'shu.cn-zhz.dannis3@lorealposasia.com'
                },
                {
                  storename: '郑州360',
                  storeaddress:
                    '郑州花园路农业路交叉口大商总店一楼化妆品植村秀专柜',
                  storemobile: '0371-61732577',
                  storeconcat: 'shu.cn-zhz.360@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '四川省',
            infos: {
              成都市: [
                {
                  storename: '成都王府井百货',
                  storeaddress: '成都市总府路15号',
                  storemobile: '028-86789078',
                  storeconcat: 'shu.cn-chd.wangfj@lorealposasia.com'
                },
                {
                  storename: '成都王府井2',
                  storeaddress: '成都市武侯区科华中路9号',
                  storemobile: '028-85578981',
                  storeconcat: 'shu.cn-chd.wangfj2@lorealposasia.com'
                },
                {
                  storename: '成都伊势丹',
                  storeaddress: '成都市大科甲巷8号B座成都伊势丹百货 ',
                  storemobile: '028-86670013',
                  storeconcat: 'shu.cn-chd.isetan@lorealposasia.com'
                },
                {
                  storename: '成都百盛',
                  storeaddress: '四川省成都市锦江区总府路2号',
                  storemobile: '028-62102125',
                  storeconcat: 'shu.cn-chd.parkson@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '黑龙江',
            infos: {
              哈尔滨: [
                {
                  storename: '哈尔滨远大',
                  storeaddress: '哈尔滨市南岗区奋斗路386号',
                  storemobile: '0451-18182719983',
                  storeconcat: 'shu.cn-heb.yuanda@lorealposasia.com'
                },
                {
                  storename: '哈尔滨群力',
                  storeaddress: '哈市道里区群力大道1176号',
                  storemobile: '0451-51022141',
                  storeconcat: 'shu.cn-heb.yuanda2@lorealposasia.com'
                },
                {
                  storename: '哈尔滨百盛',
                  storeaddress: '哈尔滨市道里区中央大街222号百盛购物中心一层',
                  storemobile: '0451-85981267',
                  storeconcat: 'shu.cn-heb.parkson@lorealposasia.com'
                },
                {
                  storename: '哈尔滨松雷',
                  storeaddress: '哈尔滨市南岗区东大街329号',
                  storemobile: '0451-58827527',
                  storeconcat: 'shu.cn-heb.songlei@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '福建省',
            infos: {
              福州市: [
                {
                  storename: '福州中城大洋',
                  storeaddress: '福州市鼓楼区八一七北路133号',
                  storemobile: '0591-88319193',
                  storeconcat: 'shu.cn-fzh.ocean@lorealposasia.com'
                },
                {
                  storename: '福州东百',
                  storeaddress: '福州市817北路84号东百商场',
                  storemobile: '0591-8752 5636‬',
                  storeconcat: 'shu.cn-fzh.dongbai@lorealposasia.com'
                }
              ],
              厦门市: [
                {
                  storename: '厦门中华城',
                  storeaddress: '厦门市思明区思明南路189号中华城购物中心1楼',
                  storemobile: '059-22106620',
                  storeconcat: 'shu.cn-xim.zhonghua@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '贵州省',
            infos: {
              贵阳市: [
                {
                  storename: '贵阳国贸',
                  storeaddress: '贵阳市云岩区中华北路1号',
                  storemobile: '0851-5371517',
                  storeconcat: 'shu.cn-guy.guomao@lorealposasia.com'
                },
                {
                  storename: '贵阳南国花锦',
                  storeaddress:
                    '贵州省贵阳市云岩区中华中路130号南国花锦购物中心',
                  storemobile: '0851-85868338',
                  storeconcat: 'shu.cn-guy.nanguohj@lorealposasia.com'
                },
                {
                  storename: '贵阳逸天城',
                  storeaddress: '贵阳市市南路逸天城购物中心一楼化妆品',
                  storemobile: '0851-85504226',
                  storeconcat: 'shu.cn-guy.estee@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '湖南省',
            infos: {
              长沙市: [
                {
                  storename: '长沙王府井',
                  storeaddress:
                    '湖南省长沙市天心区黄兴中路 王府井百货1楼植村秀柜台',
                  storemobile: '0731-85307797'
                },
                {
                  storename: '长沙平和堂',
                  storeaddress: '长沙市黄兴忠88号',
                  storemobile: '0731-89784917',
                  storeconcat: 'shu.cn-chs.pinght@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '云南省',
            infos: {
              昆明市: [
                {
                  storename: '昆明百盛',
                  storeaddress: '昆明市五华区三市街6号柏联百盛一楼植村秀专柜',
                  storemobile: '0871-63620240',
                  storeconcat: 'shu.cn-kum.parkson@lorealposasia.com'
                },
                {
                  storename: '昆明百货',
                  storeaddress: '昆明市东风西路1号',
                  storemobile: '(0871) 6332 9060',
                  storeconcat: 'shu.cn-kum.baihuo@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '甘肃省',
            infos: {
              兰州市: [
                {
                  storename: '兰州国芳',
                  storeaddress: '城关区广场南路4-6号（东方红广场东侧 ）\r\n',
                  storemobile: '0931-8636934',
                  storeconcat: 'shu.cn-lzh.guofang@lorealposasia.com'
                },
                {
                  storename: '兰州中心',
                  storeaddress:
                    '甘肃兰州市七里河区西津西路16号兰州中心一楼植村秀专柜',
                  storeconcat: 'shu.cn-lzh.zhongxin@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '宁夏回族自治区',
            infos: {
              银川市: [
                {
                  storename: '银川王府井',
                  storeaddress: '宁夏银川兴庆区新华东街56号东方王府井一楼',
                  storemobile: '0951-8762526',
                  storeconcat: 'shu.cn-ych.wfj@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '山东省',
            infos: {
              青岛市: [
                {
                  storename: '青岛海信广场',
                  storeaddress: '青岛市市南区澳门路117号',
                  storemobile: '0532-66788189',
                  storeconcat: 'shu.cn-qid.hisense@lorealposasia.com'
                },
                {
                  storename: '青岛啤酒城',
                  storeaddress:
                    '青岛市崂山区香港东路195号乙(香港路与海尔路交汇处) 金狮广场',
                  storemobile: '0532-15318760489',
                  storeconcat: 'shu.cn-qid.beercity@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '吉林省',
            infos: {
              长春市: [
                {
                  storename: '长春卓展',
                  storeaddress:
                    '吉林省长春市朝阳区重庆路1255号 卓展购物广场一楼 ',
                  storemobile: '0431-88986139',
                  storeconcat: 'shu.cn-chc.zhuozhan@lorealposasia.com'
                },
                {
                  storename: '长春欧亚',
                  storeaddress: '长春市朝阳区工农大路1128号欧亚商都',
                  storemobile: '0431-85627796',
                  storeconcat: 'shu.cn-chc.ouya@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '江西省',
            infos: {
              南昌市: [
                {
                  storename: '南昌百盛',
                  storeaddress: '南昌市东湖区中山路177号',
                  storemobile: '0791-86732502',
                  storeconcat: 'shu.cn-nch.baisheng@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '广西壮族自治区',
            infos: {
              南宁市: [
                {
                  storename: '南宁百盛',
                  storeaddress: '南宁市朝阳路青云街18号',
                  storemobile: '0771-2874871',
                  storeconcat: 'shu.cn-nan.parkson@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '安徽省',
            infos: {
              合肥市: [
                {
                  storename: '合肥百盛',
                  storeaddress:
                    '合肥市庐阳区淮河路步行街77号百盛购物中心一楼植村秀专柜',
                  storemobile: '0551-62628379',
                  storeconcat: 'shu.cn-hef.shangzhd@lorealposasia.com'
                }
              ]
            }
          },
          {
            provice: '新疆维吾尔自治区',
            infos: {
              乌鲁木齐市: [
                {
                  storename: '新疆汇嘉',
                  storeaddress: '乌鲁木齐市新市区北京路汇嘉时代广场一楼',
                  storemobile: '0991-3815043',
                  storeconcat: 'shu.cn-alp.huijia@lorealposasia.com'
                },
                {
                  storename: '乌鲁木齐天百',
                  storeaddress: '新疆乌鲁木齐市天山区和平北路16号天山百货大楼',
                  storemobile: '0991-2338070',
                  storeconcat: 'shu.cn-wlq.tianbai@lorealposasia.com'
                }
              ]
            }
          }
        ],
        status: '1'
      }
    }
    return des
  }
}

export default Mock
