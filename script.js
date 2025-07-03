document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        // Obtener valores de los inputs
        const t1 = parseFloat(document.getElementById('t1').value);
        const d1 = parseFloat(document.getElementById('d1').value);
        const d2 = parseFloat(document.getElementById('d2').value);

        // Validar entradas
        if (isNaN(t1) || isNaN(d1) || isNaN(d2)) {
            resultDiv.innerHTML = 'Error: por favor, ingrese todos los valores.';
            resultDiv.style.backgroundColor = '#ffebee';
            resultDiv.style.borderColor = '#ffcdd2';
            resultDiv.style.display = 'block';
            return;
        }

        if (d1 <= 0) {
            resultDiv.innerHTML = 'Error: la "Distancia al objeto real" debe ser mayor que cero.';
            resultDiv.style.backgroundColor = '#ffebee';
            resultDiv.style.borderColor = '#ffcdd2';
            resultDiv.style.display = 'block';
            return;
        }

        // Calcular T2
        const t2 = t1 * (d2 / d1);

        // Mostrar resultado
        const t2_cm = t2 * 100;
        resultDiv.innerHTML = `La imagen debe medir:<br><span style="font-size: 1.4em;">${t2.toFixed(2)} metros</span><br>(${t2_cm.toFixed(0)} cm)`;
        
        // Estilo y visualización del resultado
        resultDiv.style.backgroundColor = '#e9f5ff';
        resultDiv.style.borderColor = '#b3d7ff';
        resultDiv.style.display = 'block';
    });
});