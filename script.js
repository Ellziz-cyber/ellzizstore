document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('#productTable tbody tr');

    rows.forEach(row => {
        row.addEventListener('click', function() {
            alert(`Anda memilih produk yang sudah habis: ${this.cells[0].innerText}`);
        });
    });
});
