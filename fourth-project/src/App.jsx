import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bloglist from "./Bloglist";
import Blogdetail from "./Blogdetail";
import Slider from "./ImageSlider/Slider";

function App() {
  return (
    <Slider url={'https://picsum.photos/v2/list'} page={1} limit={10}/>
  );
}

export default App;
