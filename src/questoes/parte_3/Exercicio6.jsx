import {colorBox} from '../utils.jsx'

export default function Exercicio6() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 6: Crie um container flexível com cinco itens e alinhe todos os itens ao início do container (flex-start).</p>
      <div class="exercicio6" style={{display:"flex", flexDirection:"row", justifyContent:"flex-start"}}> 

        <div   style={colorBox("red")}  > 1</div>
        <div style={colorBox("yellow")} > 2</div>
        <div style={colorBox("green")}  > 3</div>
        <div style={colorBox("#00aaff")}> 4</div>
        <div  style={colorBox("blue")}  > 5</div>

      </div>
    </div>
  )
}
