import {colorBox, gridBox} from '../utils.jsx'
export default function Exercicio16() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 16: Crie um layout de grade com três colunas e três linhas. Configure as colunas para terem larguras diferentes (e.g., 1fr, 2fr, 1fr).</p>
      <div class="exercicio16" style={{display:"grid", margin: "10px", gridTemplateColumns:'1fr 1fr 2fr', gridTemplateRows:'40px 40px 40px 40fr', gridGap:'10px'}}>
        <div style={gridBox("red")}> 1.1</div>
        <div style={gridBox("orange")} > 1.2</div>
        <div style={gridBox("yellow")} > 1.3</div>

        <div style={gridBox("darkgreen")} > 2.1</div>
        <div style={gridBox("green")} > 2.2</div>
        <div style={gridBox("limegreen")} > 2.3</div>

        <div style={gridBox("darkblue")} > 3.1</div>
        <div style={gridBox("blue")} > 3.2</div> 
        <div style={gridBox("DodgerBlue")} > 3.4</div>
      </div>
    </div>
  )
}
