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
    if (voucher == "pijarFoodD5") {
      if (price >= 50000) {
        potongan = price * (50 / 100);
        if (potongan >= 50000) {
          potongan = 50000;
        }
      }
    } else if (voucher == "ditraktirPijar") {
      if (price >= 25000 && price <= 50000) {
        potongan = price * (60 / 100);
      }
    } else if (voucher != "ditraktirPijar" || voucher != "pijarFoodD5") {
      potongan = 0;
    }

    if (km <= 2) {
      km = ongkir;
    } else if (km > 2) {
      for (let i = 2; i < km; i++) {
        ongkir += 3000;
      }
    }
    pajak ? (pajak = price * 5 / 100) : (pajak = 0);

    subTotal = console.log(
      `
          total harga : Rp ${price}
          potongan : Rp ${parseInt(potongan)}
          pajak : Rp ${parseInt(pajak)}
          jarak : Rp ${parseInt(ongkir)}
          subTotal : Rp ${parseInt(price - potongan + ongkir + pajak)},-
          `.replace(/\B(?=(?:\d{3})+\b)/g, ".")
    );
  }
};
PijarFood(99000, "pijarFoodD5", 15, true);




