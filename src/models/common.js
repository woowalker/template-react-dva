import api from '@/plugins/api'
import consts from '@/plugins/const'
// import queryString from 'query-string'

export default {
  namespace: 'common',
  state: {
    $api: api,
    $consts: consts
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        // const parsed = queryString.parse(search)
        // if (parsed.sysCode) {
        //   dispatch({
        //     type: 'getVarApis',
        //     payload: {
        //       sysCode: parsed.sysCode
        //     }
        //   })
        // }
      })
    }
  },
  effects: {
    *getOrgList ({ payload, cb }, { call, put }) {  // eslint-disable-line
      const response = yield call(api['common/getOrgList'], payload)
      cb instanceof Function && cb(response)
      yield put({ type: 'save', payload: { orgList: response.Data } })
    }
  },
  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    },
    onError (state, action) {
      // do something with action.error
      console.error(action.error)
      return state
    }
  }
}
