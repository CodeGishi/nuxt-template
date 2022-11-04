<template>
  <div class="__image">
    <img :src="placeholderImage" alt="placeholder" />
  </div>
</template>

<script>
    export default {
        name: 'PlaceholderImage',
        components: {},
        props: {
            width: {
                type: Number,
                default: 100
            },
            height: {
                type: Number,
                default: 100
            },
        },
        computed: {
            placeholderImage() {
                return `https://picsum.photos/${this.width}/${this.height}`
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.__image {
  background-color: #ccc;
  img {
    object-fit: cover;
  }
}
</style>