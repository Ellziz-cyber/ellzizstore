document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('#productTable tbody tr');

    rows.forEach(row => {
        row.addEventListener('click', function() {
            alert(`Anda memilih produk: ${this.cells[0].innerText}`);
        });
    });
});
