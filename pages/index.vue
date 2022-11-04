<template>
  <div class="__content">
    <template-component />
  </div>
</template>

<script>
import TemplateComponent from "~/components/TemplateComponent.vue"

export default {
  name: 'IndexPage',
  components: {
    TemplateComponent
  },
}
</script>

<style lang="scss" scoped>
.__content {
  display: flex;
  width: 100%;
  height: 100vh;
}
</style>
