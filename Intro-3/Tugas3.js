const filterByLimits = (awal, akhir,arr) => {
  let res = [];

  if (awal >= akhir) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  } else if (arr.length <= 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  } else {
    res = arr.filter((element) => {
      return element >= awal && element <= akhir;
    });
    res.sort();
  }
  // if (!res.length) {
  //   return "data tidak ada";
  // }
  return !res.length ? "Nilai tidak ditemukan" : res;
  // return res;
};
console.log(filterByLimits( 5, 10,[18, 23, 22, 12,34,20]));
