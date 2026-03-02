import { useState } from "react";
import  Saludo  from "./Saludo";
function App() {
  //const estado = useState(10)
  //console.log(estado)
  //console.log(estado[0])
  //console.log(estado[1])
  const [contador, cambiaContador] = useState(0)
  const [mensaje, setMensaje] = useState("Binvenido")
  //console.log(estado)
  
  const titulo = "Mi pagina React"
//  let contador = 0;
  const incrementar = () => {
    cambiaContador(contador+1)
    console.log(contador)
    //contador++
    //console.log(contador);
  }

  const cambiarMensaje = () => {
    setMensaje('Adios')
  }

  return (
    <>
      <h1>{titulo}</h1>
      <h2>Subtitulo</h2>
      <p onClick={cambiarMensaje}>{mensaje}</p>
      <Saludo nombre="Coderhouse" rol="instituto"/>
      <Saludo nombre="Adrian" rol="profesor"/>
      <Saludo nombre="David" rol="tutor"/>


      <h1>Contador</h1>
      <button onClick={incrementar}>incrementar</button>
      {/* <p>{contador}</p> */}
      <p>{contador}</p>
    </>
  );
} 



export default App
