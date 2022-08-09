import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

export default class TabBar extends Component {
  
  render() {
    console.log(this);
    return (
      <div className='TabBar'>
        <Link to='/'> <i className='iconfont icon-weixuanzhongyuanquan'></i> 首页</Link>
        <Link to='/find'> <i className='iconfont icon-042fangkuai'></i> 发现</Link>
        <Link to='/serialization'> <i className='iconfont icon-xuexishuben'></i> 连载</Link>
        <Link to='/my'> <i className='iconfont icon-31wode'></i> 我的</Link>
      </div>
    )
  }
}
