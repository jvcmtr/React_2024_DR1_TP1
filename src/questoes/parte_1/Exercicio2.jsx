import {colorBox} from '../utils.jsx'

export default function Exercicio2() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 2: crie um container flexível que distribua quatro itens em uma coluna vertical (column) e inverta a ordem dos itens. Use a propriedade flex-direction.</p>

      <div class="exercicio2" style={{display:"flex", flexDirection:"column-reverse", alignItems:"center"}}> 

        <div  style={colorBox("red")} > 1</div>
        <div style={colorBox("green")}> 2</div>
        <div style={colorBox("blue")} > 3</div>

      </div>
    </div>
  )
}
