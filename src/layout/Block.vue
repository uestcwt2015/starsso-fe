<template>
  <div class="block-container">
    <p class="title">
      <slot name="title">
        <a :href="`#${ anchor }`">{{ title }}</a>
      </slot>
    </p>
    <div class="block-main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    title: String,
    anchor: String
  }
}
</script>

<style lang="less" scoped>
.title {
  text-align: left;

  a {
    text-decoration: none;
    color: #222;
  }
}
</style>
