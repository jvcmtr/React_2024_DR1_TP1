import {box} from '../utils'  
export default function Exercicio5() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 5: Crie um container flexível com cinco itens. Configure o segundo item para ter uma base (flex-basis) de 200px, enquanto os outros itens têm bases automáticas.</p>
      <div class="exercicio5" style={{display:"flex", justifyContent:"center"}}> 
        <div  style={box(
          { backgroundColor: "red", flexBasis: "auto" }  )}> 
          1
        </div>

        <div  style={box(
          { backgroundColor: "#ff8000", flexBasis: "200px"}  )}> 
          2
        </div>

        <div  style={box(
          { backgroundColor: "yellow", flexBasis: "auto"}  )}> 
          3
        </div>

        <div  style={box(
          { backgroundColor: "green", flexBasis: "auto"}  )}> 
          4
        </div>

        <div  style={box(
          { backgroundColor: "blue", flexBasis: "auto"}  )}> 
          5
        </div>
      
      </div>
    </div>
  )
}
