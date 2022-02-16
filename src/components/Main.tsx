
interface props {
    text: string;
}

function Main(text: props) {
    return (
        <div className="Main">{text.text}</div>
    )
}

export default Main;