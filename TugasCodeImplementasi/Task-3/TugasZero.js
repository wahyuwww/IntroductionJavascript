const divideAndSort = (num) => {
  if (typeof num !== "number") {
    console.log("harus number yaa");
  } else {
    let str = num.toString().split('0')
    let result = "";
    for (let i = 0; i < str.length; i++) {
     result += str[i]
       .split("")
       .sort((a, b) => a - b)
       .join("");
    }

    console.log(`${num} memisahkan dengan 0 hasil : ${result}`);
  }
};
divideAndSort(2830745205395)





