export function Genero({ children ,id}){
  return(
    <div className="col-lg-6 mb-4" id={id}>
      <div className="card bg-info text-white shadow">
        <div className="card-body">
        {children}
        </div>
      </div>
    </div>
  );
}