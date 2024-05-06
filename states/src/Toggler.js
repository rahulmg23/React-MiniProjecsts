import {useState} from "react"

export default function Toggler() {
    const[isHappy,setIsHappy ] = useState(true);
    const toggleIsHappy = () => setIsHappy(!isHappy)
    
    const [ count, setCount] = useState(0);
    const Increment = () => setCount(count+1);
    return (
    <div>
      <p  onClick={toggleIsHappy}>
        {isHappy ? "HAPPY": "SED"}
      </p>
      <p>{count}</p>
      <button onClick={Increment}> +</button>
    </div>
  )
}
