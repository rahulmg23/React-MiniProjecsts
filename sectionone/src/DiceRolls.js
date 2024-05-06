import Die from "./Die"
import "./DiceRoll.css"
export default function DiceRoll(){
        return(
            <div>
               
               <div className = "DiceRolls">
               <h1 className="Headings">DiceRoll</h1>
                <Die/>
                <Die/>
                <Die/>
               </div>
               
               <div className = "DiceRolls">
               <h1 className="Headings">DiceRoll</h1>
                <Die/>
                <Die/>
                <Die/>
               </div>

               <div className = "DiceRolls">
               <h1 className="Headings">DiceRoll</h1>
                <Die/>
                <Die/>
                <Die/>
               </div>
                
                
                
            </div>
        )
}