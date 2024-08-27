import {colorBox, gridBox} from '../utils.jsx'
export default function Exercicio14() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 14: Crie um layout de grade (grid) com quatro colunas e três linhas. Preencha cada célula da grade com um item.</p>
      <div class="exercicio14" style={{display:"grid", margin: "10px", gridTemplateColumns:'1fr 1fr 1fr 1fr', gridTemplateRows:'40px 40px 40px'}}>

        <div style={gridBox("red")}> 1.1</div>
        <div style={gridBox("orange")} > 1.2</div>
        <div style={gridBox("yellow")} > 1.3</div>
        <div style={gridBox("pink")} > 1.4</div>
        
        <div style={gridBox("brown")} > 2.1</div>
        <div style={gridBox("green")} > 2.2</div>
        <div style={gridBox("limegreen")} > 2.3</div>
        <div style={gridBox("rgb(0, 170, 255)")} > 2.4</div>

        <div style={gridBox("purple")} > 3.1</div>
        <div style={gridBox("MediumSeaGreen")} > 3.2</div> 
        <div style={gridBox("cyan")} > 3.3</div>
        <div style={gridBox("blue")} > 3.4</div>
      </div>
    </div>
  )
}
