import {colorBox} from '../utils.jsx'

export default function Exercicio13() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 13: Crie um container flexível onde os itens são distribuídos ao redor do centro do container (space-around).</p>
      <div class="exercicio13" style={{display:"flex", flexDirection:'row' ,justifyContent:"space-around", alignItems:"space-around", flexWrap:"wrap"}}>

        <div style={colorBox("red")}> 1</div>
        <div style={colorBox("green")} > 2</div>
        <div style={colorBox("blue")} > 3</div>
      </div>
    </div>
  )
}
