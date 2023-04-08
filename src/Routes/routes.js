import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../containers/home";
import Pedidos from "../containers/pedidos";

function Myroutes() {

    return(
        <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/orders" element={<Pedidos/>}/>
            </Routes>
        </Router>
    )
}
export default Myroutes