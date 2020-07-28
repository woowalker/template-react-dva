export default {
  namespace: 'dashboard',
  state: {
    welcome: '欢迎使用echarts'
  },
  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },
  effects: {},
  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    }
  }
}
