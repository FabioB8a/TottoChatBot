import { FC } from "react"
import Header from './Header';
import UtilitiesBar from "./UtilitiesBar";
import RoutesBar from "./RoutesBar";

const HomePage: FC= () =>{
    return  <div className="h-screen w-screen flex flex-col">
                <Header/>
                <UtilitiesBar/>
                <RoutesBar/>
            </div>
}

export default HomePage