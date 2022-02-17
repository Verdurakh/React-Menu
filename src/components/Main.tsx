import SuperStuff from "../models/SuperStuff";
import MainStart from "./MainStart";

interface props {
    text: string;
}

function Main({ text }: props) {

    if (text.length === 0)
        return (<MainStart />)


    return (
        <div className="Main">{text} <SuperStuff /> </div>
    )
}

export default Main;