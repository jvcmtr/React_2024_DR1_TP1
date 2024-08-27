a = """
1 Entender flexbox através dos conceitos de direção e eixo

Exercício 1: Crie um container flexível que distribua três itens em uma linha horizontal (row) e inverta a ordem dos itens. Use a propriedade flex-direction.

Exercício 2: crie um container flexível que distribua quatro itens em uma coluna vertical (column) e inverta a ordem dos itens. Use a propriedade flex-direction.

2 Utilizar propriedades flex-grow, flex-shrink e flex-basis para alterar o tamanho de containers e itens

Exercício 3: Crie um container flexível com três itens. Configure o primeiro item para crescer (flex-grow) mais que os outros dois quando o container for redimensionado.

Exercício 4: Crie um container flexível com quatro itens. Configure o terceiro item para encolher (flex-shrink) menos que os outros três quando o container for redimensionado.

Exercício 5: Crie um container flexível com cinco itens. Configure o segundo item para ter uma base (flex-basis) de 200px, enquanto os outros itens têm bases automáticas.

3 Utilizar propriedades como flex-start, flex-end, center, stretch para ajustar o alinhamento e o espaçamento de itens dentro de um container

Exercício 6: Crie um container flexível com cinco itens e alinhe todos os itens ao início do container (flex-start).

Exercício 7: Crie um container flexível com quatro itens e alinhe todos os itens ao final do container (flex-end).

Exercício 8: Crie um container flexível com três itens e centralize todos os itens horizontalmente (center).

Exercício 9: Crie um container flexível com seis itens e distribua o espaço de forma igual entre os itens (space-between).

4 Criar layouts com Flex containers aninhados com outros flex containers

Exercício 10: Crie um layout com dois containers flexíveis aninhados. O container externo deve distribuir dois containers internos horizontalmente, e cada container interno deve distribuir três itens verticalmente.

Exercício 11: Crie um layout com três containers flexíveis aninhados. O container externo deve distribuir três containers internos verticalmente, e cada container interno deve distribuir quatro itens horizontalmente.

5 Criar um layout onde elementos são centralizados em um container

Exercício 12: Crie um container flexível onde todos os itens são centralizados tanto horizontalmente quanto verticalmente no container.

Exercício 13: Crie um container flexível onde os itens são distribuídos ao redor do centro do container (space-around).

6 Construir layouts em CSS3 com Grid Layout

Exercício 14: Crie um layout de grade (grid) com quatro colunas e três linhas. Preencha cada célula da grade com um item.

Exercício 15: Crie um layout de grade onde o primeiro item ocupa duas colunas e o segundo item ocupa duas linhas.

Exercício 16: Crie um layout de grade com três colunas e três linhas. Configure as colunas para terem larguras diferentes (e.g., 1fr, 2fr, 1fr).
"""

app_css= """
body{
  margin:0;
  x:0;
  y:0;
}

p{
  font-family: Helvetica, "sans-serif";
}

.title{
  font-size: 50px;
  font-weight: 300;
  margin-top: 100px;
  padding: 0;
}

.app{
  margin:0;
  background: linear-gradient(to right, #ffffff, #eeeeff);

  font-family: Helvetica, "sans-serif";
  font-color: #303030;
  padding: 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
}

.parte_container{  
  width: 50vw;
  min-width: 500px;
  
  box-shadow: 8px 5px 15px #888888;
  margin-top: 5vh;
  padding: 20px;
  background: white;
  box-shadow: 8px 5px 15px rgba(0,0,0,50%);
}

.parte{
  text-align: center;
  margin-top: 20px ;
  border-radius: 20px;
}


.ex_container{
  margin:20px;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  border-radius: 5px;

  border-color: #000;
  border-style:solid; 
  border-width: 1px;

  min-height:100px;
  box-shadow: 8px 5px 15px rgba(0,0,0,50%);
  background-color: #606060
}

.enunciado{
  font-weight: bold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding:15px;
  margin-top:0;

  border-color: #888888;
  border-top-color: #000;
  background-color: rgba(140, 220, 255)
}
"""

app_js= """
export default function App() {
return (
  <div className="app">
"""

default_js = """
export default function @COMPONENT() {
  return (
    <div className="ex_container">
      <p className="enunciado"> @ENUNCIADO</p>
      <div class="@CLASS"> </div>
    </div>
  )
}
"""

p_js = """
export default function @COMPONENT() {
return (
  <div className="parte_container">
    <h3 className="parte"> @ENUNCIADO</h3>
"""

p_end = """
  </div>
)
}
"""

import os

parte = 0
path_parte = ""
parte_ex = []
partes = []


def escrever_arquivo(path, str, type='w'):
  try:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, type) as file:
      file.write(str)
      print(f" atualizado o arquivo : {path}")
  except Exception:
    print(f"@ERRO ao escrever o arquivo: {Exception}")


def ler_arquivo(path):
  try:
    f = open(path, "r")
    return "" + f.read()
  except:
    print(f"@ERRO ao ler o arquivo: {path}")
  return ""


def open_parte(line):
  global parte, path_parte, parte_ex, partes
  try:
    parte = int(line[0])
    partes.append(parte)
    path_parte = f"questoes/parte_{parte}/Parte{parte}.jsx"
    parte_ex = []

    js = p_js.replace("@COMPONENT",
                      f"Parte{parte}").replace("@ENUNCIADO", line)
    escrever_arquivo(path_parte, js)

  except Exception:
    print(f"@@@ ERRO {Exception} \t\t linha : {line[:10]}")


def close_parte():
  global parte, path_parte, p_imp, p_end
  if (parte == 0):
    return

  p_str = ler_arquivo(path_parte)
  p_imp = ""
  p_comp = ""
  for i in parte_ex:
    p_imp = p_imp + f"import Exercicio{i} from './Exercicio{i}.jsx'\n"
    p_comp = p_comp + f"<Exercicio{i} />"

  js = p_imp + p_str + p_comp + p_end
  escrever_arquivo(path_parte, js)


def get_exercicio_info(line):
  n = line.replace("Exercício ", "").replace(":", " ")[:2].strip()
  path = f"questoes/parte_{parte}/Exercicio{n}.jsx"

  js = default_js \
  .replace("@COMPONENT", f"Exercicio{n}" ) \
  .replace("@ENUNCIADO", line) \
  .replace("@CLASS", f'exercicio{n}')

  return (n, path, js)

def escrever_app():
  global partes
  escrever_arquivo('./App.css', app_css)
  
  s = "import './App.css' \n"
  for i in partes:
    s = s + f"import Parte{i} from './questoes/parte_{i}/Parte{i}';\n"

  s = s + "\n" + app_js
  s = s + "<h1 class='title'> JOAO CICERO DR2 TP1</h1>"
  for i in partes:
    s = s + f"<Parte{i}></Parte{i}>\n"

  s = s + p_end
  escrever_arquivo('./App.jsx', s)

def main():
  global parte, default_js, path_parte

  for line in a.split("\n"):
    if (("Exercício" not in line) and (len(line) > 1)):
      close_parte()
      open_parte(line)

    if line.startswith("Exercício"):
      (n, path, js) = get_exercicio_info(line)
      escrever_arquivo(path, js)
      parte_ex.append(n)

  close_parte()
  escrever_app()


if __name__ == '__main__':
  main()
