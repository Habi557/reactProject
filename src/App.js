import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import './global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Post from './components/Post';
import Header from './components/Header';

function App() {
  return (
       <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />

      </Routes>
    </BrowserRouter>

    

  );
}



export default App;
