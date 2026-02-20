

function Tarjeta({titulo, descripcion="Curso dictado por Coderhouse"}){
    //const {titulo} = props
    console.log(titulo)
    return (
      <div>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
    );
}

function App() {
    return (
      <>
        <Tarjeta titulo="Curso React" descripcion="Curso dictado por Adrian y David" />
        <Tarjeta titulo="Curso Angular"/>
        <Tarjeta titulo="Curso Javascript"/>
        <Tarjeta titulo="Curso Node"/>
      </>
    );
        
}





const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
