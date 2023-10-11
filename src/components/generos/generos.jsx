import { render } from "react-dom";
import { Genero } from '../genero/genero.jsx'



export function Generos({ children ,cant}){
  return(
    <div class="col-lg-6 mb-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">{children}: {cant}</h6>
        </div>
        <div class="card-body">
          <div class="row">
            <Genero parametro1='pepe'>Genero 1</Genero>
            <Genero>Genero 2</Genero>
            <Genero>Genero 3</Genero>
            <Genero>Genero 4</Genero>
            <Genero>Genero 5</Genero>
            <Genero>Genero 6</Genero>
          </div>
        </div>
      </div>
    </div>
  )
} 