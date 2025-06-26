function isInputValid(value) {
  return !isNaN(value) && value > 0;
}

window.onload = function () {
  // LUAS
  const btnLuas = document.getElementById("hitungLuas");
  btnLuas.addEventListener("click", () => {
    const alas = parseFloat(document.getElementById("Alas").value);
    const tinggi = parseFloat(document.getElementById("Tinggi").value);

    let hasil = document.getElementById("hasilLuas");
    if (!hasil) {
      hasil = document.createElement("p");
      hasil.id = "hasilLuas";
      btnLuas.insertAdjacentElement("afterend", hasil);
    }

    if (!isInputValid(alas) || !isInputValid(tinggi)) {
      hasil.textContent = "❌ Masukkan angka positif untuk alas dan tinggi.";
      return;
    }

    const luas = 0.5 * alas * tinggi;
    hasil.textContent = `✅ Luas Segitiga: ${luas}`;
  });

  // KELILING
  const btnKeliling = document.getElementById("hitungKeliling");
  btnKeliling.addEventListener("click", () => {
    const s1 = parseFloat(document.getElementById("Sisi1").value);
    const s2 = parseFloat(document.getElementById("Sisi2").value);
    const s3 = parseFloat(document.getElementById("Sisi3").value);

    let hasil = document.getElementById("hasilKeliling");
    if (!hasil) {
      hasil = document.createElement("p");
      hasil.id = "hasilKeliling";
      btnKeliling.insertAdjacentElement("afterend", hasil);
    }

    if (!isInputValid(s1) || !isInputValid(s2) || !isInputValid(s3)) {
      hasil.textContent = "❌ Masukkan angka positif untuk semua sisi.";
      return;
    }

    const keliling = s1 + s2 + s3;
    hasil.textContent = `✅ Keliling Segitiga: ${keliling}`;
  });
};