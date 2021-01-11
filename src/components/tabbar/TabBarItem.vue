<template>
  <div class="tab-bar-item" @click="tabItemClick" :class="{active:isActive}">
    <slot name="slot-icon"></slot>
    <slot name="slot-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {}
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    tabItemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}

.tab-bar-item.active {
  color: red;
}
</style>
