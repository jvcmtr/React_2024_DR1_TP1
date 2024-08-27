import {box} from "../utils"
export default function Exercicio3() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 3: Crie um container flexível com três itens. Configure o primeiro item para crescer (flex-grow) mais que os outros dois quando o container for redimensionado.</p>
      <div class="exercicio3" style={{display:"flex", justifyContent:"center"}}> 

        <div  style={box(
          { backgroundColor: "red", flexGrow: "2", maxWidth: "200px" }  )}> 
          1
        </div>

        <div  style={box(
          { backgroundColor: "green", flexGrow: "0" }  )}> 
          2
        </div>

        <div  style={box(
          { backgroundColor: "blue", flexGrow: "0" }  )}> 
          3
        </div>

      </div>
    </div>
  )
}
