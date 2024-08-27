import {colorBox, flexContainer} from '../utils.jsx'

export default function Exercicio11() {

  let row = (
    <div style={flexContainer({flexDirection:"row"})}>
      <div style={colorBox("red")}> 1</div>
      <div style={colorBox("yellow")} > 2</div>
      <div style={colorBox("green")} > 3</div>
      <div style={colorBox("blue")} > 4</div>
    </div>
  )
  
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 11: Crie um layout com três containers flexíveis aninhados. O container externo deve distribuir três containers internos verticalmente, e cada container interno deve distribuir quatro itens horizontalmente.</p>
      <div class="exercicio11" style={{flexDirection:"column", display : "flex"}}> 
        {row}
        {row}
        {row}
      </div>
    </div>
  )
}
