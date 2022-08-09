import React from 'react'
import { Link } from 'react-router-dom';
import bg from  '../../static/images/bg.png';
import './index.css'

export default function My() {
  return ( 
    <div className='my'>
        <img src={bg} alt='背景' className='bg'/>
        <div className='login'>
          <Link to={'/login'}>登录</Link>
          <div style={{fontWeight:'600'}}>ONE一个</div>
        </div>
        <div className='iszc'>还没有账号？点击注册</div>
    </div>
  )
}
