import Login from '../component/Login';
import Find from '../views/Find';
import Home from '../views/Home';
import My from '../views/My';
import Serialization from '../views/Serialization';
const isShow = true
const routers =[
  {path :'/',element:<Home></Home>},
  {path :'/find',element:<Find></Find>},
  {path :'/serialization',element:<Serialization></Serialization>},
  {path :'/my',element:<My></My>},
  {path :'/login:'+isShow+'',element:<Login></Login>}
]

export default routers
// <Routes>
// <Route path='/' element={<Home></Home>}></Route>
// <Route path='/find' element={<Find></Find>}></Route>
// <Route path='/serialization' element={<Serialization></Serialization>}></Route>
// <Route path='/my' element={<My></My>}></Route>
// </Routes>