function wordReverse(str) {
  if (typeof str === "string") {
    let word = str.length - 1;

    let akhir = word + 1;

    let result = "";
    for (let i = word; i >= 0; i--) {
      if (str[i] == " ") {
        for (let j = i + 1; j != akhir; j++) {
          result = result + str[j];
        }
        result += " ";
        akhir = i;
      }
    }

    for (let x = 0; x != akhir; x++) {
      result += str[x];
    }
    return result;
  } else {
    return "maaf ini bukan string";
  }
}

console.log(wordReverse("wahyu dwi purwanto"));


function poli(str) {
  if (typeof str === "string") {
    const cek = str.length - 1;
    for (let i = 1; i < cek / 2; i++) {
      if (str[i] !== str[cek - i]) {
        return "bukan polindrom";
      } else {
        return "polindrom";
      }
    }
  } else {
    return "maaf ini bukan string";
  }
}

const re = poli("ppoli");
console.log(re);
