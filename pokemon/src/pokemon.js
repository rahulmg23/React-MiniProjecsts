export default function Pokemon() {
    const pok = Math.floor(Math.random() * 151) + 1;
    return (
    <div>
    <h1>pokemon #{pok}</h1>
   </div>
  )
}
