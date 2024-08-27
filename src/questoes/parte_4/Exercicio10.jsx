import {box, colorBox} from '../utils.jsx'
export default function Exercicio10() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 10: Crie um layout com dois containers flexíveis aninhados. O container externo deve distribuir dois containers internos horizontalmente, e cada container interno deve distribuir três itens verticalmente.</p>
      <div class="exercicio10" style={{display:"flex", flexDirection:"row"}}> 
        <div style={box({backgroundColor: "gray", flexGrow: "1", display:'flex', flexDirection:"column",  alignItems:'center' })}>

          <div style={colorBox("red")}> 1</div>
          <div style={colorBox("green")} > 2</div>
          <div style={colorBox("blue")} > 3</div>
        </div>
        <div style={box({backgroundColor: 'gray', flexGrow: "1", display:'flex', flexDirection:"column",  alignItems:'center'})}>
          <div style={colorBox("orange")}> 1</div>
          <div style={colorBox("yellow")}> 2</div>
          <div style={colorBox("rgb(0, 170, 255)")} > 3</div>
        </div>
      </div>
  </div>
  )
}
