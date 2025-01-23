
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Agregué un evento DOMContentLoaded para asegurarme de que el código se ejecute después de que el HTML haya cargado.

document.addEventListener('DOMContentLoaded', function() {
  const $n = document.querySelector('.name');
  const $b = document.querySelector('.blog');
  const $l = document.querySelector('.location');

  if ($n && $b && $l) {
    async function displayUser(username) {
      try {
        $n.textContent = 'cargando...';
        const response = await fetch(`${usersEndpoint}/${username}`);
       //Agregué la línea const data = await response.json(); para parsear la respuesta del servidor como JSON.

        const data = await response.json();
        console.log(data);
        $n.textContent = `${data.name}`;
        $b.textContent = `${data.blog}`;
        $l.textContent = `${data.location}`;
      } catch (err) {
        handleError(err);
      }
    }

    // Modifiqué la función displayUser para que sea asíncrona y utilice try-catch para manejar errores.




    function handleError(err) {
      console.log('OH NO!');
      console.log(err);
      $n.textContent = `Algo salió mal: ${err}`;
    }

    displayUser('stolinski');
  } else {
    console.error('No se encontraron los elementos con las clases name, blog o location');
  }
});

//Eliminé la llamada a displayUser con .catch(handleError) y en su lugar agregué una llamada a handleError dentro de la función displayUser para manejar errores.


