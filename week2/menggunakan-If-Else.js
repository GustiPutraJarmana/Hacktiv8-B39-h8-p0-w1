let nama = "Gusti";
let peran = "Tabib";
if (!nama) {
  console.log(`Nama harus diisi!`);
} else if (!peran) {
  console.log(`Peran harus diisi!`);
} else if (peran === "Ksatria") {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran === "Tabib") {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(
    `Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`
  );
} else if (peran === "Penyihir") {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(
    `Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
  );
} else {
  console.log(`Maaf ${nama} peran yang anda masukan tidak ada dalam pilihan`);
}
