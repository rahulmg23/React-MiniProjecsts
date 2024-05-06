function clicked(){
    alert("clicked button working")
}

export default function HandleClick() {
  return (
    <div>
      <p>BUTTTON ME</p>
      <button onClick={clicked}>CLICKK MEE</button>
    </div>
  )
}
