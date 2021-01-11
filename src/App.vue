<template>
  <div id="app">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/tabbar";
export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>
<style>
@import "//at.alicdn.com/t/font_2268963_dtckdp6s5dt.css"

</style>
