const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const seacrh = (keyword, angka, data) => {
  keyword.toLowerCase();
  result = name.filter((element) => {
    return element.includes(keyword);
  });
  result.length = angka;

  result = result.filter((item) => item !== undefined);
  // callback di eksekusi didalam function
  data(result);
};

const ready = (text) => {
  console.log(`data yang tersedia : ${text.length}`);
  text.length ? console.log(text) : console.log("data tidak ada");
};

// fungsi yang diteruskan ke fungsi lain
seacrh("Al", 10, ready);

// const seacrhName = (data, seacrh) => {
//   seacrh(data);
// };
