const ipa =80;
const mtk = 80;
const bhs_indo =80;
const bahasaInggris = 80;

if (typeof ipa !== "number" || typeof mtk !== "number" || typeof bhs_indo !== "number" || typeof bahasaInggris !== "number")  {
  console.log(" isi data dengan benar");
} else {
  let mapel = [ipa, mtk, bhs_indo, bahasaInggris];
  let Avg = 0;
  let count = mapel.length;
  mapel.map((count) => {
    Avg += count
  })
  // for (let i = 0; i < count; i++) {
  //   Avg += mapel[i];
  // }
  let nilai = Avg / count;
  
  console.log(`nilai rata-rata adalah : ${nilai}`);
  
  if (nilai >= 90) console.log("Grade : A");
  else if (nilai >= 80) console.log("Grade : B");
  else if (nilai >= 70) console.log("Grade : C");
  else if (nilai >= 60) console.log("Grade : D");
  else if (nilai >= 0) console.log("Grade : E");
}