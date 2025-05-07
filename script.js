
function calculate() {
    const shape = document.getElementById('shape').value;
    let output = document.getElementById('output');
    if (shape === 'cone') {
        const r = parseFloat(prompt("Радиус (R):"));
        const h = parseFloat(prompt("Биіктік (h):"));
        const l = Math.sqrt(r*r + h*h);
        const volume = (1/3) * Math.PI * r*r * h;
        const area = Math.PI * r * (r + l);
        output.innerHTML = `<p>Көлемі: ${volume.toFixed(2)}</p><p>Ауданы: ${area.toFixed(2)}</p>`;
    } else if (shape === 'cylinder') {
        const r = parseFloat(prompt("Радиус (R):"));
        const h = parseFloat(prompt("Биіктік (h):"));
        const volume = Math.PI * r*r * h;
        const area = 2 * Math.PI * r * (r + h);
        output.innerHTML = `<p>Көлемі: ${volume.toFixed(2)}</p><p>Ауданы: ${area.toFixed(2)}</p>`;
    } else if (shape === 'pyramid') {
        const b = parseFloat(prompt("Негіз ауданы (B):"));
        const h = parseFloat(prompt("Биіктік (h):"));
        const volume = (1/3) * b * h;
        output.innerHTML = `<p>Көлемі: ${volume.toFixed(2)}</p><p>Ауданы: —</p>`;
    }
}
