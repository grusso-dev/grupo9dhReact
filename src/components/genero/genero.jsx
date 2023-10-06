export function Genero({ children }){
  return(
    <div class="col-lg-6 mb-4">
      <div class="card bg-info text-white shadow">
        <div class="card-body">
        {children}
        </div>
      </div>
    </div>
  );
}