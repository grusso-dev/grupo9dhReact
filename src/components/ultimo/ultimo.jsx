import { useEffect, useState } from 'react'
export function Ultimo({ children }){
  const [ultimo, setConcierto] = useState({image:'',artista:'',id:'',name:''});
  
  useEffect(() => {
    fetch('https://soundstage.onrender.com/api/ultimoconcert')
      .then((res) => res.json() )
      .then((json) => { 
        console.log(json.ultimo)

        setConcierto(json.ultimo);
      })
  }, []);
  

  return(
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Ultimo concierto creado </h6>
      </div>
      <div className="card-body">
        <div className="text-center">
          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" Style="width: 25rem;" src={"https://linsock.com.ar/soundstage/public/images/" + ultimo.image  } alt="image dummy"/>
        </div>

        <p><strong>{ultimo.artista}:</strong> {ultimo.name}</p>
        <a target="_blank" rel="nofollow" href={ 'https://soundstage.onrender.com/conciertos/detail/' + ultimo.id} >ver concierto</a>
      </div>
    </div>
  );
}