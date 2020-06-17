import React, { useState } from 'react'
import { connect } from 'dva'
import { Button } from 'antd'
import styles from './index.css'

function HomePage (props) {
  function setWelcome (welcome) {
    props.dispatch({
      type: 'home/save',
      payload: {
        welcome
      }
    })
  }

  function setCount (count) {
    setState({ count })
  }

  function navTo () {
    props.history.push({
      pathname: '/dashboard',
      search: '?name=xqqq',
      hash: '#dashTest',
      state: { some: 'something' }
    })
  }

  function getApiTest () {
    props.dispatch({
      type: 'common/getOrgList',
      payload: {
        Order: 0,
        Sort: 'CODE'
      }
    })
  }

  function getErrApiTest () {
    props.dispatch({
      type: 'home/fetchTest'
    })
  }

  const [state, setState] = useState({
    count: 0,
    job: 'web'
  })
  const { home, common, loading } = props
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>{home.welcome}</h1>
      <Button type='primary' onClick={() => setWelcome('你好')}>更新props欢迎词</Button>
      <h1>本地state count: {state.count}</h1>
      <Button type='primary' onClick={() => setCount(10)}>更新state count</Button>
      <h1>路由跳转</h1>
      <Button type='primary' onClick={navTo}>跳转</Button>
      <h1>API请求测试</h1>
      {/* <p>orgList: { common.orgList && JSON.stringify(common.orgList) }</p> */}
      <Button type='primary' onClick={getApiTest}>请求</Button>
      <h1>API错误请求测试</h1>
      <Button type='primary' onClick={getErrApiTest}>发起报错请求</Button>
      <h1>consts的用法</h1>
      <p>{common.$consts['COMMON/COMMON_TEST']}</p>
      <h1>接口loading状态</h1>
      <p>{!loading.effects['common/getOrgList'] ? <span>加载完</span> : null}</p>
      <p>{loading.effects['common/getOrgList'] ? <span>加载中</span> : null}</p>
    </div>
  )
}

HomePage.propTypes = {
}

export default connect(({ common, home, loading }) => ({ common, home, loading }))(HomePage)
