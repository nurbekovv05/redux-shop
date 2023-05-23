import './App.scss';

import Header from "./components/Header";
// import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Basket from "./components/page/Basket";
import Product from "./components/page/Home";
import Favorites from "./components/page/Favorites";





function App() {
// const dispatch = useDispatch()
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/favorites" element={<Favorites/>}/>

        </Routes>
    </div>
  );
}

export default App;
