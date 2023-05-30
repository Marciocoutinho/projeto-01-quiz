import './styles/global.css'

export function MeuNome() {
  return (
    <h2>Marcio Coutinho</h2>
  )
}

export function App() {
  return (
    <>
      <div>
       <h1>Hello word</h1>
       <MeuNome />
      </div>
    </>
  )
}