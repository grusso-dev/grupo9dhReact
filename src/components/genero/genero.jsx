export function Genero({ children ,parametro1}){
  return(
    <div class="col-lg-6 mb-4" id={parametro1}>
      <div class="card bg-info text-white shadow">
        <div class="card-body">
        {children}
        </div>
      </div>
    </div>
  );
}