document.getElementById('calculate').addEventListener('click', function() {
    const price = parseFloat(document.getElementById('price').value);
    const taxPercentage = parseFloat(document.getElementById('tax').value);
    
    if (isNaN(price) || isNaN(taxPercentage) || price < 0 || taxPercentage < 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    const taxAmount = (price * taxPercentage) / 100;
    const totalAmount = price + taxAmount;

    document.getElementById('taxAmount').textContent = `Tax Amount: $${taxAmount.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
});
