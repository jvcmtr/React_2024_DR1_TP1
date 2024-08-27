import {colorBox} from '../utils.jsx'

export default function Exercicio1() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 1: Crie um container flexível que distribua três itens em uma linha horizontal (row) e inverta a ordem dos itens. Use a propriedade flex-direction.</p>
      
      <div class="exercicio1" style={{display:"flex", flexDirection:"row-reverse", justifyContent:"center"}}> 
        
        <div  style={colorBox("red")} > 1</div>
        <div style={colorBox("green")}> 2</div>
        <div style={colorBox("blue")} > 3</div>
      
      </div>
    </div>
  )
}