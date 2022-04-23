const PijarFood = (price, voucher, jarak, pajak) => {

  let ongkir = 5000;
  let km = parseInt(jarak);

  if (typeof price !== "number" || typeof jarak !== "number" || typeof pajak !== 'boolean') {
    console.log("harus number bro");
  } else {
    if (voucher == "pijarFoodD5") {
        if (price >= 50000) {
            potongan = price * (50 / 100);
        }
    } else if (voucher == "ditraktirPijar") {
        if (price <= 25000) {
            potongan = price * (30 / 100);
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
    pajak ? pajak = (price * 5) / 100 : pajak = 0;
    
    console.log(`
          total harga : Rp ${price},00
          potongan : Rp ${potongan},00
          pajak : Rp ${pajak},00
          jarak : Rp ${ongkir}
          subTotal : Rp ${price - potongan + ongkir + pajak},-
          `.replace(/\B(?=(?:\d{3})+\b)/g,'.'))
  }
};
PijarFood(9008700, 43, 33, true);


