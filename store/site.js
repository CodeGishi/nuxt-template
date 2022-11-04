/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

export const state = () => ({
  currentPage: '',
  currentLanguage: 'pl',
  device: {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  },
  height: 0,
  width: 0,
})

export const getters = {
  getCurrentPage: (state) => state.currentPage,
  getCurrentLanguage: (state) => state.currentLanguage,
  isMobile: (state) => state.device.isMobile,
  isTablet: (state) => state.device.isTablet,
  isDesktop: (state) => state.device.isDesktop,
  getHeight: (state) => state.height,
  getWidth: (state) => state.width,
}

export const actions = {
  setDevice({ commit }, viewWidth) {
    commit('SET_DEVICE', viewWidth)
  },
  setHeight({ commit }, viewHeight) {
    commit('SET_HEIGHT', viewHeight)
  },
  setWidth({ commit }, viewWidth) {
    commit('SET_WIDTH', viewWidth)
  },
}

export const mutations = {
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page
  },
  SET_DEVICE(state, viewWidth) {
    if (viewWidth < 768) {
      state.device.isMobile = true
      state.device.isTablet = false
      state.device.isDesktop = false
    }
    if (viewWidth >= 768 && viewWidth < 1024) {
      state.device.isMobile = false
      state.device.isTablet = true
      state.device.isDesktop = false
    }
    if (viewWidth >= 1024) {
      state.device.isMobile = false
      state.device.isTablet = false
      state.device.isDesktop = true
    }
  },
  SET_HEIGHT(state, viewHeight) {
    state.height = viewHeight
  },
  SET_WIDTH(state, viewWidth) {
    state.width = viewWidth
  },
}
