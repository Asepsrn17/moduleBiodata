const biodata = require("./module/biodata")();

console.log(
  `
    Nama          : ${biodata.name}
    Tempat Lahir  : ${biodata.placeBirth}
    Tanggal Lahir : ${biodata.dateBirth}
    Alamat        : ${biodata.address}
    `
);
