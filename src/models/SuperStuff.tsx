function GetSuper() {
    const sup: string[] = [
        "is the best node.",
        "is looking good.",
        "is only okay.",
        "didn't wash it's hands.",
        "is celebrating birthday.",
        "appears in a flash.",
        "is a good boi.",
        "is sparkling.",
    ]



    const random = Math.floor(Math.random() * sup.length);

    return (
        <span>{sup[random]}</span>
    )
}

export default GetSuper;