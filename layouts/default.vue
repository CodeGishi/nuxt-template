<template>
  <div class="__page">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {},
  data() {
    return {
      observer: false,
    }
  },
   head() {
    return {
      title: this.pageTitle(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pageDescription(),
        },
        /* FACEBOOK OPEN GRAPH */
        {
          property: 'og:url',
          content: `https://clarin-pl.eu/index.php/en/home/`,
        },
        {
          property: 'og:title',
          content: `${this.pageTitle()}`,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:description',
          content: `${this.pageDescription()}`,
        },
        {
          property: 'og:image',
          content: `${this.pageImage()}`,
        },
        /* GOOGLE ITEMPROP */
        {
          itemprop: 'name',
          content: `${this.pageTitle()}`,
        },
        {
          itemprop: 'description',
          content: `${this.pageDescription()}`,
        },
        {
          itemprop: 'image',
          content: `${this.pageImage()}`,
        },
        /* TWITTER META */
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: `${this.pageTitle()}`,
        },
        {
          name: 'twitter:description',
          content: `${this.pageDescription()}`,
        },
        {
          name: 'twitter:image',
          content: `${this.pageImage()}`,
        },
      ],
    }
  },
  computed: {
    isDesktop() {
      return this.$store.getters['site/isDesktop']
    },
    isTablet() {
      return this.$store.getters['site/isTablet']
    },
    isMobile() {
      return this.$store.getters['site/isMobile']
    },
  },
  mounted() {
    this.ResizeObserver()
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
  methods: {
    ResizeObserver() {
      this.observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const cr = entry.contentRect
          this.$store.dispatch('site/setDevice', cr.width)
          this.$store.dispatch('site/setHeight', cr.height)
        }
      })
      this.observer.observe(document.body)
    },
    pageTitle() {
      return 'CLARIN-PL'
    },
    pageDescription() {
      const desc =
        'CLARIN-PL is a language technology research infrastructure for science, artificial intelligence and industry'
      return desc
    },
    pageURL() {
      const pageURL = this.$nuxt.$route.path
      return pageURL
    },
    pageImage() {
      const pageImage =
        'https://cdn.discordapp.com/attachments/580160742762872842/1038054947448700938/clarin-thumbnail.jpg'
      return pageImage
    },
  },
}
</script>

<style lang="scss" scoped>
.__desktop {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.__tablet {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.__mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.__page {
  width: 100%;
  height: 100vh;
}
</style>

<style>
#__nuxt {
  width: 100%;
  height: 100%;
}
#__layout {
  width: 100%;
  height: 100%;
}

/* Page-transition styles must be global */
/* page is used by default */
.page-leave-active,
.page-enter-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
