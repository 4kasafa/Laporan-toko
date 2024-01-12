document.addEventListener("DOMContentLoaded", function() {

  // Fungsi untuk mengambil data dari local storage
  function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  }

  // Fungsi untuk menyimpan data ke local storage
  function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Fungsi untuk mengupdate jumlah item pada tabel
  function updateJumlahItem(id, value) {
    const element = document.getElementById(id);
    const storedData = getDataFromLocalStorage("laporanStok");

    // Update nilai di tabel dan local storage
    element.textContent = value;
    storedData[id] = value;

    // Simpan data ke local storage
    saveDataToLocalStorage("laporanStok", storedData);
  }

  // Fungsi untuk mengambil nilai dari local storage dan mengupdate tabel
  function loadLaporanFromLocalStorage() {
    const storedData = getDataFromLocalStorage("laporanStok");

    // Periksa apakah ada data di local storage
    if (Object.keys(storedData).length > 0) {
      // Iterasi setiap item pada tabel
      for (const key in storedData) {
        if (storedData.hasOwnProperty(key)) {
          const value = storedData[key];
          const element = document.getElementById(key);

          // Update nilai di tabel
          element.textContent = value;
        }
      }
    }
  }

  // Fungsi untuk meng-handle event klik pada tombol Edit
  function editJumlah(item) {
    const inputJumlah = prompt(`Masukkan jumlah ${item}:`);

    // Periksa apakah pengguna membatalkan input atau memasukkan nilai yang tidak valid
    if (inputJumlah === null || isNaN(inputJumlah)) {
      alert("Input tidak valid atau dibatalkan.");
    } else if (inputJumlah === "") {
      inputJumlah = "0";
    } else {
      // Update jumlah item
      updateJumlahItem(item, inputJumlah);
    }
  }

  // Memanggil fungsi untuk mengambil nilai dari local storage dan mengupdate tabel
  loadLaporanFromLocalStorage();

  // Memperbarui laporan ketika tombol "Salin Laporan" diklik
  function salinLaporan() {
    // ... implementasikan salin laporan ...
  }

  // Membagi laporan ketika tombol "Kirim Laporan" diklik
  function bagiLaporan() {
    // ... implementasikan kirim laporan ...
  }

  // Menyambungkan fungsi ke elemen HTML menggunakan event listener
  document.getElementById("copyBtn").addEventListener("click", salinLaporan);
  document.getElementById("shareBtn").addEventListener("click", bagiLaporan);

  // Mengaitkan fungsi editJumlah dengan tombol Edit
  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach((button) => {
    button.addEventListener("click", function() {
      const itemId = button.parentElement.previousElementSibling.id;
      editJumlah(itemId);
    });
  });
});

