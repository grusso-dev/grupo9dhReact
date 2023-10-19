import { render } from "react-dom";
import { useEffect, useState } from 'react'
import { Genero } from '../genero/genero.jsx'

export function Generos({ children }) {
  const [generos, setGeneros] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/api/generos')
      .then((res) => res.json() )
      .then((json) => { 
        let generosAdd=[]
        json.generos.map((genero) => {
          const newGenero = {
            id: genero.id,
            description:genero.description,
            cantidad:genero.concierto.length
          }
          generosAdd.push(newGenero)
        })
        setGeneros(generosAdd);
      })
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">{children}: {generos.length}</h6>
        </div>
        <div className="card-body">
          <div className="row">
            {
              generos.map((genero) => {
                return(
                <Genero 
                  key={genero.id} 
                  id={genero.id}
                >
                <strong>{genero.description}:</strong> <br/> {genero.cantidad} conciertos 
                </Genero>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
} 