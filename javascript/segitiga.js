// Fungsi validasi angka positif
function isInputValid(value) {
  return !isNaN(value) && value > 0;
}

// Buat elemen input + tombol secara dinamis
function buatFormSegitiga() {
  const app = document.getElementById("app");

  // ===== FORM LUAS =====
  const h2Luas = document.createElement("h2");
  h2Luas.textContent = "Luas Segitiga";

  const inputAlas = document.createElement("input");
  inputAlas.type = "number";
  inputAlas.id = "alas";
  inputAlas.placeholder = "Alas";

  const inputTinggi = document.createElement("input");
  inputTinggi.type = "number";
  inputTinggi.id = "tinggi";
  inputTinggi.placeholder = "Tinggi";

  const btnLuas = document.createElement("button");
  btnLuas.id = "btnLuas";
  btnLuas.textContent = "Hitung Luas";

  const hasilLuas = document.createElement("p");
  hasilLuas.id = "hasilLuas";

  // ===== FORM KELILING =====
  const h2Keliling = document.createElement("h2");
  h2Keliling.textContent = "Keliling Segitiga";

  const s1 = document.createElement("input");
  s1.type = "number";
  s1.id = "s1";
  s1.placeholder = "Sisi 1";

  const s2 = document.createElement("input");
  s2.type = "number";
  s2.id = "s2";
  s2.placeholder = "Sisi 2";

  const s3 = document.createElement("input");
  s3.type = "number";
  s3.id = "s3";
  s3.placeholder = "Sisi 3";

  const btnKeliling = document.createElement("button");
  btnKeliling.id = "btnKeliling";
  btnKeliling.textContent = "Hitung Keliling";

  const hasilKeliling = document.createElement("p");
  hasilKeliling.id = "hasilKeliling";

  // Tambahkan ke halaman
  app.append(
    h2Luas, inputAlas, inputTinggi, btnLuas, hasilLuas,
    h2Keliling, s1, s2, s3, btnKeliling, hasilKeliling
  );

  // Event Hitung Luas
  btnLuas.addEventListener("click", () => {
    const alas = parseFloat(inputAlas.value);
    const tinggi = parseFloat(inputTinggi.value);

    if (!isInputValid(alas) || !isInputValid(tinggi)) {
      hasilLuas.textContent = "❌ Masukkan angka positif untuk alas dan tinggi.";
      return;
    }

    const luas = 0.5 * alas * tinggi;
    hasilLuas.textContent = `✅ Luas Segitiga: ${luas}`;
  });

  // Event Hitung Keliling
  btnKeliling.addEventListener("click", () => {
    const val1 = parseFloat(s1.value);
    const val2 = parseFloat(s2.value);
    const val3 = parseFloat(s3.value);

    if (!isInputValid(val1) || !isInputValid(val2) || !isInputValid(val3)) {
      hasilKeliling.textContent = "❌ Masukkan angka positif untuk semua sisi.";
      return;
    }

    const keliling = val1 + val2 + val3;
    hasilKeliling.textContent = `✅ Keliling Segitiga: ${keliling}`;
  });
}

// Jalankan saat halaman dimuat
window.onload = buatFormSegitiga;
