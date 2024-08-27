import {colorBox} from '../utils.jsx'
export default function Exercicio9() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 9: Crie um container flexível com seis itens e distribua o espaço de forma igual entre os itens (space-between).</p>
      <div class="exercicio9" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 

        <div style={colorBox("red")}> 1</div>
        <div style={colorBox("orange")}> 2</div>
        <div style={colorBox("yellow")}> 3</div>
        <div style={colorBox("green")} > 4</div>
        <div style={colorBox("rgb(0, 170, 255)")} > 5</div>
        <div style={colorBox("blue")} > 6</div>
      </div>
    </div>
  )
}
