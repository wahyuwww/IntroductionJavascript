const PijarFood = (harga, voucher, jarak, pajak) => {
  let potongan = 0
  let ongkir = 5000;
  let km = parseInt(jarak);
  let price = parseInt((harga));

  if (
    typeof harga !== "number" ||
    typeof jarak !== "number" ||
    typeof pajak !== "boolean"
  ) {
    console.log("harus number bro");
  } else {
    // potongan
    if (voucher === "pijarFoodD5") {
      if (price > 50000) {
        potongan = price * (50 / 100);
        if (potongan >= 50000) {
          potongan = 50000;
        }
      }
    } else if (voucher === "ditraktirPijar") {
      if (price >= 25000) {
        potongan = price * (60 / 100);
        if (potongan >= 30000) {
          potongan = 30000;
        }
      }
    } 

    // ongkir
    if (km <= 2) {
      ongkir;
    } else if (km > 2) {
      for (let i = 2; i < km; i++) {
        ongkir += 3000;
      }
    }

    // pajak
    pajak ? (pajak = price * 5 / 100) : (pajak = 0);

  console.log(
      `
          total harga : Rp ${price}
          potongan    : Rp ${parseInt(potongan)}
          pajak       : Rp ${parseInt(pajak)}
          biaya antar : Rp ${parseInt(ongkir)}
          subTotal    : Rp ${parseInt(price - potongan + ongkir + pajak)},-
          `
    );
  }
};
PijarFood(150000, "ditraktirPijar", 5, true);




