
export default function Slots({val1, val2, val3}) {
    const isWinner  = val1 === val2 && val1 === val3;
    return (
    <div>
      <h1>
        {val1} {val2} {val3}
      </h1>
        <p>
            {isWinner? "winnwe": "false"}
        </p>
    </div>
  )
}
