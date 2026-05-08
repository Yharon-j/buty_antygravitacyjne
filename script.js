        const darkModeBtn = document.getElementById('darkModeBtn');
        const body = document.body;
        const heroImage = document.getElementById('heroImage');

        darkModeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            darkModeBtn.textContent = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
            
            if (body.classList.contains('dark-mode')) {
                heroImage.src = 'lightmode.jpg';
            } else {
                heroImage.src = 'darkmode.jpg';
            }

            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));``
        });

        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
            darkModeBtn.textContent = '☀️ Light Mode';
            heroImage.src = 'lightmode.jpg';
        }

        function calculateDiscount() {
            const q1 = document.querySelector('input[name="q1"]:checked')?.value;
            const q2 = document.querySelector('input[name="q2"]:checked')?.value;
            const q3 = document.querySelector('input[name="q3"]:checked')?.value;

            if (!q1 || !q2 || !q3) {
                alert('Proszę odpowiedzieć na wszystkie pytania!');
                return;
            }

            const yesCount = [q1, q2, q3].filter(a => a === 'yes').length;
            const discountCodeEl = document.getElementById('discountCode');
            
            let code = '';
            let discount = '';

            if (yesCount === 3) {
                code = 'SUPER' + Math.random().toString(36).substr(2, 9).toUpperCase();
                discount = '50%';
            } else if (yesCount === 2) {
                code = 'MEGA' + Math.random().toString(36).substr(2, 9).toUpperCase();
                discount = '30%';
            } else {
                code = 'BOOST' + Math.random().toString(36).substr(2, 9).toUpperCase();
                discount = '15%';
            }

            discountCodeEl.innerHTML = `<strong>Kod rabatowy:</strong> ${code} <br> <strong>Rabat:</strong> ${discount}`;
            discountCodeEl.classList.add('show');
        }