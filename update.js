document.addEventListener("DOMContentLoaded", function() {
  // Mendapatkan elemen-elemen HTML
  const toko = document.getElementById("toko");
  const modal = document.getElementById("modal");
  const tanggal = document.getElementById("tanggal");

  // Mengisi nilai input dari local storage jika tersedia
  if (localStorage.getItem("updatedToko")) {
    toko.value = localStorage.getItem("updatedToko");
    updateModal();
  }

  if (localStorage.getItem("jumlahModal")) {
    modal.value = localStorage.getItem("jumlahModal");
  }

  if (localStorage.getItem("updatedTanggal")) {
    tanggal.value = localStorage.getItem("updatedTanggal");
  }

  toko.addEventListener("change", function() {
    updateModal();
  });
});

function updateModal() {
    const updatedToko = document.getElementById("toko").value;
    let jmlhModalbaru = "";

    // Menggunakan switch untuk menentukan negara berdasarkan kota
    switch (updatedToko) {
        case "Prapatan":
            jmlhModalbaru = "2.000.000";
            break;
        case "Gunung guntur":
            jmlhModalbaru = "1.200.000";
            break;
        case "Gunung sari":
            jmlhModalbaru = "2.200.000";
            break;
        case "Graha":
            jmlhModalbaru = "1.500.000";
            break;
        case "Pasar baru":
            jmlhModalbaru = "1.200.000";
            break;
        case "Mulawarman":
            jmlhModalbaru = "1.500.000";
            break;
        case "PJHI/Batakan":
            jmlhModalbaru = "1.300.000";
            break;
        case "Manggar":
            jmlhModalbaru = "1.300.000";
            break;
        default:
            jmlhModalbaru = "";
            break;
    }

    // Mengupdate nilai input negara
    modal.value = jmlhModalbaru;
}

function saveChanges() {
  // Mendapatkan nilai dari elemen-elemen HTML
  const updatedToko = document.getElementById("toko").value;
  const jumlahModal = document.getElementById("modal").value;
  const updatedTanggal = document.getElementById("tanggal").value;

  // Menyimpan nilai ke local storage
  localStorage.setItem("updatedToko", updatedToko);
  localStorage.setItem("jumlahModal", jumlahModal);
  localStorage.setItem("updatedTanggal", updatedTanggal);

  // Menampilkan perubahan pada UI
  alert("Perubahan berhasil disimpan!");
}
