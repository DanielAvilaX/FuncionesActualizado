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

