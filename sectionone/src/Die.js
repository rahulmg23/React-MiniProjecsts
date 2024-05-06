export default function Die() {
    const roll = Math.floor( Math.random()*5)+1;
    return(
        <>
        <h5>{roll}: Dice Rolled</h5>
        </>
    )
}