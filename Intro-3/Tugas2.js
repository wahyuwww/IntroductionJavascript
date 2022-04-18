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

  console.log(`Data yang tersedia : ${result.length}`);

  result.length ? console.log(result) : console.log("data tidak ada");
  data(result);
};
const seacrhName = (hasil) => {
  return hasil;
};
seacrh("ar", 7, seacrhName);