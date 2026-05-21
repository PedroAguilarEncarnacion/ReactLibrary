import '../css/Header.css'


function Header({ total, completados }) {
  return (
    <h1 className='pepito'>
      Has completado {completados} de {total} tareas
    </h1>
  );
}

export { Header };
