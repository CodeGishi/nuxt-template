<template>
  <div class="__template">
    <div class="__template__content">
      <div class="__template__content__title">
        <div class="__template__content__title">
          <placeholder-image :width="1200" :height="400" />
        </div>
        <h1>Content Template</h1>
      </div>
      <div class="__template__content__inner">
        <div class="__template__content__inner__left">
          <div class="__template__content__inner__left__title">
            <h1><template-icon /> LEFT</h1>
          </div>
          <div class="__template__content__inner__left__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsa voluptas repellat praesentium beatae earum dolores facilis
              sit incidunt quidem mollitia accusamus eum nam, hic maxime iste
              illo! Nesciunt, necessitatibus?
            </p>
          </div>
        </div>
        <div class="__template__content__inner__right">
          <div class="__template__content__inner__right__title">
            <h1><template-icon /> RIGHT</h1>
          </div>
          <div class="__template__content__inner__right__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsa voluptas repellat praesentium beatae earum dolores facilis
              sit incidunt quidem mollitia accusamus eum nam, hic maxime iste
              illo! Nesciunt, necessitatibus?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TemplateIcon from "../assets/icons/TemplateIcon.vue"
import PlaceholderImage from "../assets/images/PlaceholderImage.vue"
export default {
  name: 'TemplateComponent',
  components: {PlaceholderImage, TemplateIcon},
  props: {},
  data() {
    return {}
  },
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.__template {
  margin: 0 auto;

  &__content {
    @include flex-column;
    @include center;
    width: 1200px;
    margin-top: 3rem;

    &__title {
      @include flex-column;
      @include center;
      width: 100%;
      margin-bottom: 1rem;

      h1 {
        font-size: 3rem;
        font-weight: 700;
        color: #000;
        margin-bottom: 1rem;
      }
    }

    &__inner {
      @include flex-row;

      h1 {
        @include flex-row;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 700;

        span {
          margin-right: 1rem;
        }
      }

      &__left {
        width: 50%;

        &__title {
          color: rgb(79, 84, 144);
        }

        &__text {
          p {
            font-size: 1.5rem;
            font-weight: 400;
            color: rgb(67, 80, 104);
          }
        }
      }
      &__right {
        width: 50%;

        &__title {
          color: rgb(144, 79, 100);
        }

        &__text {
          p {
            font-size: 1.5rem;
            font-weight: 400;
            color: rgb(96, 38, 58);
          }
        }
      }
    }
  }
}
</style>
