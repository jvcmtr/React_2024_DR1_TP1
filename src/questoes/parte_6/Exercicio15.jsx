import {colorBox, gridBox} from '../utils.jsx'
export default function Exercicio15() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 15: Crie um layout de grade onde o primeiro item ocupa duas colunas e o segundo item ocupa duas linhas.</p>
      <div class="exercicio15" style={{display:"grid", margin: "10px", gridTemplateColumns:'1fr 1fr 1fr', gridTemplateRows:'40px 40px'}}>

        <div style={gridBox("yellow", {gridColumnStart:"span 2", gridColumnEnd:"3"})} > 1</div>
        <div style={gridBox("blue", { gridRowEnd:"span 2"})} > 1</div>
      </div>
    </div>
  )
}
