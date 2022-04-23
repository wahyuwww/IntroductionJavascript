const divideAndSort = (num) => {
  if (typeof num !== "number") {
    console.log("harus number yaa gais");
  } else {
    let str = num.toString().split("0");
    let result = "";
    str.map((item) => {
      result += item.split("").sort().join("");
    });
    console.log(`${num} memisahkan dengan 0 hasil : ${result}`);
  }
};
divideAndSort(28374520539506973)
