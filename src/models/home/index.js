import api from '@/plugins/api'

export default {
  namespace: 'home',
  state: {
    welcome: 'Yay! Welcome to dva!'
  },
  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },
  effects: {
    * fetchTest ({ payload, cb }, { call, put }) {
      const response = yield call(api['home/test'], payload, {
        method: 'POST',
        url: 'http://192.168.2.98:3112/api/PF/PageCustom/GetCustomPageConfigInfo',
        noShowDefaultError: false
      })
      cb instanceof Function && cb(response)
      yield put({ type: 'save', payload: { orgList: response.Data } })
    }
  },
  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    }
  }
}
