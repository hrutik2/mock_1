import {  Route,Routes} from "react-router-dom";
import { Login } from "../pages/login";
import { Feed } from "../pages/feed";
export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/auth" element={<Login/>}></Route>
            <Route path="/feed" element={<Feed/>}></Route>
            <Route path="/feed/:id" element={<Login/>}></Route>
        </Routes>
    )
}