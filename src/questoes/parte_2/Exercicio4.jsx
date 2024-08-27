import {box} from "../utils"
export default function Exercicio4() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 4: Crie um container flexível com quatro itens. Configure o terceiro item para encolher (flex-shrink) menos que os outros três quando o container for redimensionado.</p>
      <div class="exercicio4" style={{display:"flex", justifyContent:"center"}}> 

        <div  style={box(
          { backgroundColor: "red", flexShrink: "50" }  )}> 
          1
        </div>

        <div  style={box(
          { backgroundColor: "yellow", flexShrink: "50"}  )}> 
          2
        </div>

        <div  style={box(
          { backgroundColor: "green", flexShrink: "1"}  )}> 
          3
        </div>

        <div  style={box(
          { backgroundColor: "blue", flexShrink: "50"}  )}> 
          4
        </div>

      </div>
    </div>
  )
}
