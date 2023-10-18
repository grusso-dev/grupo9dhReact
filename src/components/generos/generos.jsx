import { render } from "react-dom";
import { useEffect, useState } from 'react'
import { Genero } from '../genero/genero.jsx'

export function Generos({ children, cant }) {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:3000/api/generos')
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
  }, []);


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">{children}: {cant}</h6>
        </div>
        <div className="card-body">
          <div className="row">
            {
              generos.map((genero) => {
                <Genero id={genero.id}>{genero.description}</Genero>
              })
            }
            {/*             
              <Genero id='pepe'>Genero 1</Genero>
              <Genero>Genero 2</Genero>
              <Genero>Genero 3</Genero>
              <Genero>Genero 4</Genero>
              <Genero>Genero 5</Genero>
              <Genero>Genero 6</Genero>
            */}


            {generos}
          </div>
        </div>
      </div>
    </div>
  )
} 