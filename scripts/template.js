/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: template 模板
 * @Date: 2019-03-31 09:42:58
 * @LastEditTime: 2019-03-31 13:17:32
 */

module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <div class="${compoenntName}">
    ${compoenntName}
  </div>
</template>
<script>
export default {
  name: "${compoenntName}"
}
</script>
<style lang="scss" scoped>
.${compoenntName} {

}
</style>
`
  },
  entryTemplate: `import Main from './main.vue'
export default Main
`
}
