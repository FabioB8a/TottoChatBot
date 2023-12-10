import { FC } from "react"
import Header from './Header';
import UtilitiesBar from "./UtilitiesBar";
import RoutesBar from "./RoutesBar";
import Advertising from "./Advertising";

const HomePage: FC= () =>{
    return  <div className="h-screen w-screen bg-white flex flex-col">
                <Header/>
                <UtilitiesBar/>
                <RoutesBar/>
                <Advertising/>
            </div>
}

export default HomePage