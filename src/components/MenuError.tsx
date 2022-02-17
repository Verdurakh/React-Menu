import { StringProp } from "../models/Props";


function MenuError({ text }: StringProp) {
    return (
        <div className="Sidebar Error"> Failed to load Menu. Message was :({text}).
            <div>The problem might be that the mockey api route have expired</div> </div>
    )
}

export default MenuError;