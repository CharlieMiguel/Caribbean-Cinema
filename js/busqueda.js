        document.addEventListener('DOMContentLoaded', function () {
            const input = document.getElementById('buscar');
            const peliculas = document.querySelectorAll('.pelicula');

            input.addEventListener('input', function () {
                const filtro = input.value.toLowerCase();
                peliculas.forEach(function (pelicula) {
                    const nombre = pelicula.querySelector('.nombre').textContent.toLowerCase();
                    if (nombre.includes(filtro)) {
                        pelicula.style.display = '';
                    } else {
                        pelicula.style.display = 'none';
                    }
                });
            });
        });



        //series

                document.addEventListener('DOMContentLoaded', function () {
            const input = document.getElementById('buscar');
            const peliculas = document.querySelectorAll('.serie');

            input.addEventListener('input', function () {
                const filtro = input.value.toLowerCase();
                peliculas.forEach(function (pelicula) {
                    const nombre = pelicula.querySelector('.nombre').textContent.toLowerCase();
                    if (nombre.includes(filtro)) {
                        pelicula.style.display = '';
                    } else {
                        pelicula.style.display = 'none';
                    }
                });
            });
        });