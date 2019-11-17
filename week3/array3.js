let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];
const dataHandling2 = input => {
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provensi Bandar Lampung");
  input.splice(4, 1, "SMA Internasional Metro");
  let date = input[3].split("/");
  let month = date[1];
  switch (month) {
    case "01":
      month = "Januari";
      break;
    case "02":
      month = "Februari";
      break;
    case "03":
      month = "Maret";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "Mei";
      break;
    case "06":
      month = "Juni";
      break;
    case "07":
      month = "Juli";
      break;
    case "08":
      month = "Agustus";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "Oktober";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "Desember";
      break;
  }
  console.log(input);
  console.log(month);
  console.log(input[3].split('/').sort((a, b) => b - a));
  console.log(input[3].split("/").join("-"));
  console.log(input[1].slice(0, 15));
};
dataHandling2(input);