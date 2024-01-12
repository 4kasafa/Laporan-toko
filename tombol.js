// fungsi tombol salin
function salinLaporan() {
  // mengambil data input user
  const resultText = `
\`\`\`
LAPORAN TOKO LAY ${document.getElementById('toko').value}
TANGGAL : ${document.getElementById('tanggal').value}

MODAL KASIR : RP${document.getElementById('modal').value}

TELUR        = ${document.getElementById('telur').innerText} IKAT
GULA         = ${document.getElementById('gula').innerText} KRG
TEPUNG       = ${document.getElementById('tepung').innerText} KRG
GULA MERAH   = ${document.getElementById('gulmer').innerText} KRG
KACANG HIJAU = ${document.getElementById('kacangHijau').innerText} KRG
KACNAG TANAH = ${document.getElementById('kacangTanah').innerText} KRG
BERAS KETAN  = ${document.getElementById('ketan').innerText} KRG

---------------------------

MINYAK KITA     = ${document.getElementById('kita').innerText} DUS
KUNCI MAS 2 LTR = ${document.getElementById('kunciMas').innerText} DUS
FILMA 1 LTR     = ${document.getElementById('filmaSatu').innerText} DUS
FILMA 2 LTR     = ${document.getElementById('filmaDua').innerText} DUS
MASKU 1 LTR     = ${document.getElementById('maskuSatu').innerText} DUS
MASKU 2 LTR     = ${document.getElementById('maskuDua').innerText} DUS

---------------------------

BUAH LAY 25 KG = ${document.getElementById('buahlay_25').innerText} KRG
BUAH LAY 5 KG  = ${document.getElementById('buahlay_5').innerText} BKS

---------------------------

GUNUNG MANGGAR 25 KG = ${document.getElementById('gunungManggar_25').innerText} KRG
GUNUNG MANGGAR 5 KG  = ${document.getElementById('gunungManggar_5').innerText} BKS

---------------------------

SM BERAS JAGUNG 5 KG = ${document.getElementById('jagung').innerText} BKS

---------------------------

LAMPION 25 KG = ${document.getElementById('lampion_25').innerText} KRG
LAMPION 10 KG = ${document.getElementById('lampion_10').innerText} KRG
LAMPION 5 KG  = ${document.getElementById('lampion_5').innerText} BKS

---------------------------

MACAN TERBANG 25 KG = ${document.getElementById('macan_25').innerText} KRG
MACAN TERBANG 10 KG = ${document.getElementById('macan_10').innerText} KRG
MACAN TERBANG 5 KG  = ${document.getElementById('macan_5').innerText} BKS

---------------------------

MAWAR SAKURA 25 KG = ${document.getElementById('mawar_25').innerText} KRG
MAWAR SAKURA 10 KG = ${document.getElementById('mawar_10').innerText} KRG
MAWAR SAKURA 5 KG  = ${document.getElementById('mawar_5').innerText} BKS

---------------------------

RAJAWLAI 25 KG = ${document.getElementById('rajawali_25').innerText} KRG
RAJAWALI 10 KG = ${document.getElementById('rajawali_10').innerText} KRG
RAJAWALI 5 KG  = ${document.getElementById('rajawali_5').innerText} BKS

---------------------------

BERAS SJ 25 KG = ${document.getElementById('sj_25').innerText} KRG
BERAS SJ 10 KG = ${document.getElementById('sj_10').innerText} KRG
BERAS SJ 5 KG  = ${document.getElementById('sj_5').innerText} BKS

---------------------------

SM BIRU 25 KG = ${document.getElementById('smBiru_25').innerText} KRG
SM BIRU 10 KG = ${document.getElementById('smBiru_10').innerText} KRG
SM BIRU 5 KG  = ${document.getElementById('smBiru_5').innerText} BKS

---------------------------

SM HIJAU 25 KG = ${document.getElementById('smHijau_25').innerText} KRG
SM HIJAU 5 KG  = ${document.getElementById('smHijau_5').innerText} BKS

---------------------------

SM MERAH 25 KG = ${document.getElementById('smMerah_25').innerText} KRG
SM MERAH 5 KG  = ${document.getElementById('smMerah_5').innerText} BKS

---------------------------

TOMBO LUWE 25 KG = ${document.getElementById('tombo_25').innerText} KRG
TOMBO LUWE 5 KG  = ${document.getElementById('tombo_5').innerText} BKS\`\`\`
    `;
  // web API coppy format
  navigator.clipboard.writeText(resultText).then(function() { alert('Laporan berhasil di salin!'); }).catch(function(err) { console.error('Error \n Tidak dapat menyalin hasil laporan!'); })
}

function bagiLaporan() {
  const resultText = `
\`\`\`
LAPORAN TOKO LAY ${document.getElementById('toko').value}
TANGGAL : ${document.getElementById('tanggal').value}

MODAL KASIR : RP${document.getElementById('modal').value}

TELUR        = ${document.getElementById('telur').innerText} IKAT
GULA         = ${document.getElementById('gula').innerText} KRG
TEPUNG       = ${document.getElementById('tepung').innerText} KRG
GULA MERAH   = ${document.getElementById('gulmer').innerText} KRG
KACANG HIJAU = ${document.getElementById('kacangHijau').innerText} KRG
KACNAG TANAH = ${document.getElementById('kacangTanah').innerText} KRG
BERAS KETAN  = ${document.getElementById('ketan').innerText} KRG

---------------------------

MINYAK KITA     = ${document.getElementById('kita').innerText} DUS
KUNCI MAS 2 LTR = ${document.getElementById('kunciMas').innerText} DUS
FILMA 1 LTR     = ${document.getElementById('filmaSatu').innerText} DUS
FILMA 2 LTR     = ${document.getElementById('filmaDua').innerText} DUS
MASKU 1 LTR     = ${document.getElementById('maskuSatu').innerText} DUS
MASKU 2 LTR     = ${document.getElementById('maskuDua').innerText} DUS

---------------------------

BUAH LAY 25 KG = ${document.getElementById('buahlay_25').innerText} KRG
BUAH LAY 5 KG  = ${document.getElementById('buahlay_5').innerText} BKS

---------------------------

GUNUNG MANGGAR 25 KG = ${document.getElementById('gunungManggar_25').innerText} KRG
GUNUNG MANGGAR 5 KG  = ${document.getElementById('gunungManggar_5').innerText} BKS

---------------------------

SM BERAS JAGUNG 5 KG = ${document.getElementById('jagung').innerText} BKS

---------------------------

LAMPION 25 KG = ${document.getElementById('lampion_25').innerText} KRG
LAMPION 10 KG = ${document.getElementById('lampion_10').innerText} KRG
LAMPION 5 KG  = ${document.getElementById('lampion_5').innerText} BKS

---------------------------

MACAN TERBANG 25 KG = ${document.getElementById('macan_25').innerText} KRG
MACAN TERBANG 10 KG = ${document.getElementById('macan_10').innerText} KRG
MACAN TERBANG 5 KG  = ${document.getElementById('macan_5').innerText} BKS

---------------------------

MAWAR SAKURA 25 KG = ${document.getElementById('mawar_25').innerText} KRG
MAWAR SAKURA 10 KG = ${document.getElementById('mawar_10').innerText} KRG
MAWAR SAKURA 5 KG  = ${document.getElementById('mawar_5').innerText} BKS

---------------------------

RAJAWLAI 25 KG = ${document.getElementById('rajawali_25').innerText} KRG
RAJAWALI 10 KG = ${document.getElementById('rajawali_10').innerText} KRG
RAJAWALI 5 KG  = ${document.getElementById('rajawali_5').innerText} BKS

---------------------------

BERAS SJ 25 KG = ${document.getElementById('sj_25').innerText} KRG
BERAS SJ 10 KG = ${document.getElementById('sj_10').innerText} KRG
BERAS SJ 5 KG  = ${document.getElementById('sj_5').innerText} BKS

---------------------------

SM BIRU 25 KG = ${document.getElementById('smBiru_25').innerText} KRG
SM BIRU 10 KG = ${document.getElementById('smBiru_10').innerText} KRG
SM BIRU 5 KG  = ${document.getElementById('smBiru_5').innerText} BKS

---------------------------

SM HIJAU 25 KG = ${document.getElementById('smHijau_25').innerText} KRG
SM HIJAU 5 KG  = ${document.getElementById('smHijau_5').innerText} BKS

---------------------------

SM MERAH 25 KG = ${document.getElementById('smMerah_25').innerText} KRG
SM MERAH 5 KG  = ${document.getElementById('smMerah_5').innerText} BKS

---------------------------

TOMBO LUWE 25 KG = ${document.getElementById('tombo_25').innerText} KRG
TOMBO LUWE 5 KG  = ${document.getElementById('tombo_5').innerText} BKS\`\`\`
    `;

  // web share API untuk mentriger fungsi share
  if (navigator.share) {
    navigator.share({
      text: resultText,
    })
      .then(() => console.log('berhasil membagikan laporan!'))
      .catch((error) => console.error('error sharing:', error));
  } else {
    alert('Web Share API is not supported in this browser.');
  }
}