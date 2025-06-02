        const carruselImg = document.getElementById('carrusel-img');
        let current = 1;
        const total = 9;
        setInterval(() => {
            current = current < total ? current + 1 : 1;
            carruselImg.src = `img/baners/${current}.webp`;
        }, 3000);

        const btnPrev = document.getElementById('atras');
        const btnNext = document.getElementById('adelante');

        btnPrev.addEventListener('click', () => {
            current = current > 1 ? current - 1 : total;
            carruselImg.src = `img/baners/${current}.webp`;
        });

        btnNext.addEventListener('click', () => {
            current = current < total ? current + 1 : 1;
            carruselImg.src = `img/baners/${current}.webp`;
        });