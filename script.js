const inputs = [
    document.getElementById('R'),
    document.getElementById('fp'),
    document.getElementById('ne'),
    document.getElementById('fl'),
    document.getElementById('fi'),
    document.getElementById('fc'),
    document.getElementById('L')
];

const pantallaTotal = document.getElementById('total-N');

function calcularResultado() {
    let resultado = 1;

    inputs.forEach(input => {
        let valor = parseFloat(input.value);
 
        if (isNaN(valor)) {
            valor = 0; 
        }
        
        resultado *= valor;
    });

    pantallaTotal.textContent = resultado.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

inputs.forEach(input => {
    input.addEventListener('input', calcularResultado);
});

calcularResultado();
