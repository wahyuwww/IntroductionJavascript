const printSegitiga = 5;
if (typeof printSegitiga === "number") {
  for (i = 0; i <= printSegitiga; i++) {
    let segitiga = "";
    for (j = 1; j <= printSegitiga - i; j++) {
      // segitiga += j;
      segitiga += j;
    }
    console.log(segitiga);
  }
} else {
  console.log("data harus number");
}
