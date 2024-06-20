document
  .getElementById("formUsia")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const usia = parseInt(document.getElementById("usia").value);
    let kategori;

    if (usia < 0) {
      kategori = "Usia tidak valid";
    } else if (usia <= 2) {
      kategori = "Bayi";
    } else if (usia <= 12) {
      kategori = "Anak-anak";
    } else if (usia <= 17) {
      kategori = "Remaja";
    } else if (usia <= 59) {
      kategori = "Dewasa";
    } else if (usia <= 74) {
      kategori = "Tua";
    } else {
      kategori = "Lanjut usia";
    }

    document.getElementById(
      "hasil"
    ).textContent = `Usia ${usia} tahun dikategorikan sebagai: ${kategori}`;
  });
