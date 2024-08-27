import {colorBox} from '../utils.jsx'
export default function Exercicio8() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 8: Crie um container flexível com três itens e centralize todos os itens horizontalmente (center).</p>
      <div class="exercicio7" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}> 
        
        <div style={colorBox("red")}  > 1</div>
        <div style={colorBox("green")}> 2</div>
        <div style={colorBox("blue")} > 3</div>
      </div>
    </div>
  )
}
