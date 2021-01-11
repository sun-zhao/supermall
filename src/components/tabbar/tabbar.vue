<template>
  <div class="tabbar">
    <TabBarItem path="/home">
      <i class="iconfont icon-shouye" slot="slot-icon"></i>
      <p slot="slot-text">首页</p>
    </TabBarItem>
    <TabBarItem path="/category">
      <i class="iconfont icon-huodong" slot="slot-icon"></i>
      <p slot="slot-text">分类</p>
    </TabBarItem>
    <TabBarItem path="/cart">
      <i class="iconfont icon-huodong1" slot="slot-icon"></i>
      <p slot="slot-text">购物车</p>
    </TabBarItem>
    <TabBarItem path="/profile">
      <i class="iconfont icon-personal" slot="slot-icon"></i>
      <p slot="slot-text">我的</p>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name: 'Tabbar',
  components: {
    TabBarItem
  }
};
</script>
<style>
.tabbar {
  position: fixed;
  width: 100%;
  height: 49px;
  background: #f5f5f5;
  border-top: 1px solid #eee;
  bottom: 0;
  left: 0;
  display: flex;
  font-size: 12px;
}

.tabbar p {
  margin-top: 0;
}

.tabbar .iconfont {
  display: inline-block;
  font-size: 20px;
  margin: 4px 0;
}
</style>
