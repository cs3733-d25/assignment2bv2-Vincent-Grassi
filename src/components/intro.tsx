type introProps = {
    names: string[]
}

export function Intro(props: introProps) {
    return (
        <>
        <p>I'm {props.names[0]}. I'm a Junior studying Computer Science and Interactive Media and Game Design. I'm an avid Magic: the Gathering player, and the president of the corresponding club.</p>
        <p>I'm {props.names[1]}. I'm a Sophomore studying Computer Science with a minor in Financial Technology. I am the comptroller in the Alpha Tau Omega fraternity at Worcester Polytechnic Institute.</p>
        </>
    )
}