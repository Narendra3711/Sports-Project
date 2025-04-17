import { Outlet} from "react-router-dom";

import Head from "../components/header";
import Foot from "../components/footer";

function Home(){


    return(
        <>
        <Head/>
        
        <Outlet/>
        <Foot/>
        
        </>


    );

}
export default  Home;