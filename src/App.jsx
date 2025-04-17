import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/services";
import Text from "./components/hometext";

import Contact from "./pages/contact ";




function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
      <Route index element={<Text/>}></Route>
      
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Service/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>



  );

}
export default App;