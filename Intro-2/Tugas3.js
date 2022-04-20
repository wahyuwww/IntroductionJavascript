const filterByLimit = (awal, akhir, arr, data) => {
  let res = [];

  if (awal >= akhir) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  } else if (arr.length <= 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  } else {
    res = arr.filter((element) => {
      return element >= awal && element <= akhir;
    });
    res.sort((a, b) => {
      return a - b;
    });
  }
  // if (!res.length) {
  //   return "data tidak ada";
  // }
  !res.length ? console.log("Nilai tidak ditemukan") : data(res);
};
filterByLimit(5, 40, [5, 40, 22, 12, 34, 20], (data) => {
  console.log(data);
});
// console.log(filterByLimits( ));
