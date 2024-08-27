import {colorBox} from '../utils.jsx'

export default function Exercicio7() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 7: Crie um container flexível com quatro itens e alinhe todos os itens ao final do container (flex-end).</p>
      <div class="exercicio7" style={{display:"flex", flexDirection:"row", justifyContent:"flex-end", }}> 

          <div   style={colorBox("red")}  > 1</div>
          <div style={colorBox("yellow")} > 2</div>
          <div style={colorBox("green")}  > 3</div>
          <div  style={colorBox("blue")}  > 4</div>

        </div>
    </div>
  )
}
