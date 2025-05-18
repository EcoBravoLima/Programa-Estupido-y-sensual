document.getElementById('tarjetaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const destinatario = document.getElementById('destinatario').value;
    const mensaje = document.getElementById('mensaje').value;
    
    document.getElementById('tarjetaHeader').textContent = `Para: ${destinatario}`;
    document.getElementById('tarjetaMensaje').textContent = mensaje;
    
    document.getElementById('tarjetaGenerada').style.display = 'block';

    document.getElementById('tarjetaGenerada').scrollIntoView({ behavior: 'smooth' });
    
    document.getElementById('tarjetaForm').reset();
});