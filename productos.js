
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/productos')
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById('lista-productos');
            if (!contenedor) return;
            data.forEach(prod => {
                const card = document.createElement('div');
                card.className = 'card m-2 p-2';
                card.innerHTML = `
                    <h5>${prod.nombre}</h5>
                    <p>${prod.descripcion}</p>
                    <strong>Precio: $${prod.precio}</strong>
                `;
                contenedor.appendChild(card);
            });
        });
});
