document.getElementById('numbersForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const numbersInput = document.getElementById('numbersInput').value;
    const quotes = document.getElementById('quotes').value;
    
    // Dividir por cualquier cantidad de espacios o saltos de línea y eliminar entradas vacías
    let numbersArray = numbersInput
        .split(/\s+/) // Dividir por espacios, tabulaciones o saltos de línea
        .filter(num => num.trim().length > 0); // Eliminar entradas vacías
    
    // Si se selecciona "sí", envolver los números entre comillas simples
    if (quotes === 'yes') {
        numbersArray = numbersArray.map(num => `'${num}'`);
    }
    
    // Unir los números separados por comas
    const result = numbersArray.join(', ');
    document.getElementById('resultNumbers').innerText = `Números: ${result}`;
});


document.getElementById('countForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const countInput = document.getElementById('countInput').value;
    const numbersArray = countInput.split(/[\s,]+/).filter(Boolean);
    
    const count = numbersArray.length;
    document.getElementById('resultCount').innerText = `Total de números: ${count}`;
});

document.getElementById('compareForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const list1Input = document.getElementById('list1Input').value;
    const list2Input = document.getElementById('list2Input').value;
    
    const list1 = list1Input.split(/[\s,]+/).filter(Boolean);
    const list2 = list2Input.split(/[\s,]+/).filter(Boolean);
    
    const lengthComparison = list1.length > list2.length ? 'Lista 1 es más larga' : 'Lista 2 es más larga';
    const missingInList1 = list2.filter(num => !list1.includes(num));
    const missingInList2 = list1.filter(num => !list2.includes(num));
    
    const differencesCount = missingInList1.length + missingInList2.length;
    
    const result = `${lengthComparison}\nFaltan en Lista 1: ${missingInList1.join(', ') || 'Ninguno'}\nFaltan en Lista 2: ${missingInList2.join(', ') || 'Ninguno'}\nTotal de diferencias: ${differencesCount}`;
    document.getElementById('resultCompare').innerText = result;
});
document.getElementById('numbersForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const numbersInput = document.getElementById('numbersInput').value;
    const quotes = document.getElementById('quotes').value;
    
    let numbersArray = numbersInput.split(' ').map(num => num.trim());
    if (quotes === 'yes') {
        numbersArray = numbersArray.map(num => `'${num}'`);
    }
    
    const result = numbersArray.join(', ');
    document.getElementById('resultNumbers').innerText = `Números: ${result}`;
});

document.getElementById('countForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const countInput = document.getElementById('countInput').value;
    const numbersArray = countInput.split(/[\s,]+/).filter(Boolean);
    
    const count = numbersArray.length;
    document.getElementById('resultCount').innerText = `Total de números: ${count}`;
});

document.getElementById('compareForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const list1Input = document.getElementById('list1Input').value;
    const list2Input = document.getElementById('list2Input').value;
    
    const list1 = list1Input.split(/[\s,]+/).filter(Boolean);
    const list2 = list2Input.split(/[\s,]+/).filter(Boolean);
    
    const lengthComparison = list1.length > list2.length ? 'Lista 1 es más larga' : 'Lista 2 es más larga';
    const missingInList1 = list2.filter(num => !list1.includes(num));
    const missingInList2 = list1.filter(num => !list2.includes(num));
    
    const differencesCount = missingInList1.length + missingInList2.length;
    
    const result = `${lengthComparison}\nFaltan en Lista 1: ${missingInList1.join(', ') || 'Ninguno'}\nFaltan en Lista 2: ${missingInList2.join(', ') || 'Ninguno'}\nTotal de diferencias: ${differencesCount}`;
    document.getElementById('resultCompare').innerText = result;
});

document.getElementById('removeDuplicatesForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const duplicatesInput = document.getElementById('duplicatesInput').value;
    const dataArray = duplicatesInput.split(/[\s,]+/).filter(Boolean);

    const uniqueItems = [];
    const duplicateCounts = {};

    // Procesar la lista para identificar elementos únicos y contar repeticiones
    dataArray.forEach(item => {
        if (uniqueItems.includes(item)) {
            duplicateCounts[item] = (duplicateCounts[item] || 1) + 1;
        } else {
            uniqueItems.push(item);
        }
    });

    // Crear mensaje de resultados
    const duplicatesList = Object.entries(duplicateCounts)
        .map(([item, count]) => `${item} (${count} veces)`)
        .join(', ');
    const resultMessage = `
        <p><strong>Lista sin repetidos:</strong> ${uniqueItems.join(', ')}</p>
        <p><strong>Datos repetidos:</strong> ${duplicatesList || 'Ninguno'}</p>
    `;

    // Mostrar los resultados
    document.getElementById('resultDuplicates').innerHTML = resultMessage;

    // Mostrar el botón para copiar
    const copyButton = document.getElementById('copyDuplicates');
    copyButton.style.display = 'block';

    // Agregar funcionalidad al botón para copiar el resultado
    copyButton.addEventListener('click', function () {
        const copyText = `Lista sin repetidos: ${uniqueItems.join(', ')}\nDatos repetidos: ${duplicatesList || 'Ninguno'}`;
        copyToClipboard(copyText);
        alert('Resultado copiado al portapapeles.');
    });
});
document.getElementById('numbersForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const numbersInput = document.getElementById('numbersInput').value;
    const quotes = document.getElementById('quotes').value;
    let numbersArray = numbersInput.split(/\s+/).filter(Boolean);

    if (quotes === 'yes') {
        numbersArray = numbersArray.map(num => `'${num}'`);
    }

    const result = numbersArray.join(', ');
    document.getElementById('resultNumbers').innerText = `Números: ${result}`;

    // Mostrar el botón para copiar
    const copyButton = document.getElementById('copyNumbers');
    copyButton.style.display = 'block';

    // Agregar funcionalidad al botón para copiar el resultado
    copyButton.addEventListener('click', function () {
        copyToClipboard(result);
        alert('Resultado copiado al portapapeles.');
    });
});
function copyToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}


document.getElementById('contractForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const contractsInput = document.getElementById('contractInput').value.trim();
    const contractsArray = contractsInput.split(/\s+/); // Dividir contratos por espacios
    
    // Limpiar los resultados previos
    const tbody = document.getElementById('contractResult').querySelector('tbody');
    tbody.innerHTML = '';
    
    contractsArray.forEach(contract => {
        let empresa, sucursal, anio, secuencial;
        
        if (contract.startsWith('011') && contract.length === 15) {
            // Si el contrato comienza con "011" y tiene 15 dígitos, se trata de un contrato de la empresa 11
            empresa = '11';
            sucursal = contract.slice (3, 6); // Siguientes 3 dígitos sin ceros iniciales
            anio = contract.slice(6, 10);                        // Siguientes 4 dígitos (año completo)
            secuencial = contract.slice(10);                     // Últimos 5 dígitos (secuencial completo)
        } else {
            // Contratos estándar
            empresa = contract.slice(0, 3).replace(/^0+|0+$/g, ''); // Primeros 3 dígitos sin ceros al inicio o final
            sucursal = '0' +contract.slice(3, 5);     // Siguientes 2 dígitos sin ceros iniciales
            anio = contract.slice(5, 9);                            // Siguientes 4 dígitos (año completo)
            secuencial = contract.slice(9);                         // Últimos 5 dígitos (secuencial completo)
        }
        
        // Crear una nueva fila para cada contrato
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${empresa}</td>
            <td>${sucursal}</td>
            <td>${anio}</td>
            <td>${secuencial}</td>
        `;
        tbody.appendChild(row);
    });
    
    document.getElementById('contractResult').style.display = 'table';
});

