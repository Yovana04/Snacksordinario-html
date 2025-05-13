
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/paquetes')
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById('lista-paquetes');
            if (!contenedor) return;
            data.forEach(pkg => {
                const card = document.createElement('div');
                card.className = 'card m-2 p-2';
                card.innerHTML = `
                    <h5>${pkg.nombre}</h5>
                    <p>${pkg.descripcion}</p>
                    <strong>Precio: $${pkg.precio}</strong>
                    <p>Incluye: ${pkg.productos.join(', ')}</p>
                `;
                contenedor.appendChild(card);
            });
        });
});
