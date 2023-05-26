import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Feed from './component/Feed';
import Layout from './component/Layout';
import Videodetail from './component/Videodetail';
import Chaneldetail from './component/Chaneldetail';
import Searchbar from './component/Searchbar';
import SearchNews from './component/SearchNews';

function App() {


const router = createBrowserRouter([

  {path:'',element:<Layout/> ,children :[

    {path:'/',element:<Feed/>},
    {path:'/videodetail/:id',element:<Videodetail/>},
    {path:'/chanel/:id',element:<Chaneldetail/>},
    {path:'/search/:searchTerm',element:<SearchNews/>},

    // {path:'login',element:<Login/>},

  ]}
])
  
  return (

    <div className="App">
      
      <RouterProvider  router={router} />



    </div>
  );
}
export default App;
