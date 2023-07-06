import { Routes,Route } from "react-router-dom";
import App from "./App";
// import Header from "./header/Content";
import Home from "./Home/Home";
let Rou=()=>{
    return(
        <>
        <div>
            
        <Routes>
            <Route path="/" element={<App></App>}/>
            <Route path="/contect" element={<Home/>}/>
        </Routes>
    </div>
        </>
    )
}
export default Rou;