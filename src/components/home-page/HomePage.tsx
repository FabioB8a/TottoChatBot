import { FC } from "react"
import Header from './Header';
import UtilitiesBar from "./UtilitiesBar";

const HomePage: FC= () =>{
    return  <div className="h-screen w-screen flex flex-col">
                <Header/>
                <UtilitiesBar/>
            </div>
}

export default HomePage