import {colorBox} from '../utils.jsx'

export default function Exercicio12() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 12: Crie um container flexível onde todos os itens são centralizados tanto horizontalmente quanto verticalmente no container.</p>
      <div class="exercicio12" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        
        <div style={colorBox("yellow", {scale:"0.5"})}> 1</div>
      </div>
    </div>
  )
}
