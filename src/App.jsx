import Header from './components/Header'
import Form from './components/Form'
import { useState, Fragment } from 'react'
import Mensaje from './components/Mensaje'
import Resultado from './components/Resultado'
import Spinner from './components/spinner'
function App() {

  const [cantidad, setCantidad] = useState(0)
  const [plazo, setPlazo] = useState('')
  const [total, setTotal] = useState(0)
  const [cargando, setCargando] = useState(false)

  let component
  if(cargando) {
    component = <Spinner />
  }
  else if(total === 0) {
    component = <Mensaje />
  }else {
    component = <Resultado 
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
    />
  }

  return (
      <Fragment>
        <Header 
          title="Loan quoter"
        />

        <div className="container">
          <Form 
            cantidad={cantidad}
            setCantidad={setCantidad}
            plazo={plazo}
            setPlazo={setPlazo}
            total={total}
            setTotal={setTotal}
            setCargando={setCargando}
          />

          {}
          <div className="mensajes">
            { component }
          </div>
        </div>
      </Fragment>
  )
}

export default App
