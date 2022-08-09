import { useRoutes } from 'react-router-dom';
import routers from './routers';
import './App.css'
import TabBar from './component/TabBar/index';
function App() {
  let element = useRoutes(routers)
  return (
    <div className='main'>
      <div className='content'>
        {element}
      </div>
      <div>
        <TabBar ></TabBar>
      </div>
    </div>
  );
}

export default App;
