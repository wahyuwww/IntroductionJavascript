const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}


// janji
// lalu tangkap tanpa menggunakan asyn menunggu tanpa menunggu terlebih dahulu di konstanta
// tetapi langsung di asyncscronus sesuai diatas kemudian dijalankan
cekHariKerja("rabu")
  .then((item) => {
    // console.log("then")
    console.log(`hari ini hari kerja ${item}`);
  })
  .catch((error) => {
    // console.log("catch")
    console.log(error);
  });



    // mempermudah ketika ada asycronus
    // tanpa janji asyn menunggu, try catch juga bisa digunakan dikode lain untuk menangani error
const kerja = async (day) => {
  try {
    const result = await cekHariKerja(day);
    // console.log("try");
    console.log(`hari ini adalah hari kerja ${result}`);
  } catch (error) {
    //  console.log("catch");
    console.log(error);
  }
};
kerja("senin");
// menunggu sedang menunggu apabila settimeout sdh dijalankan maka menunggu juga dijalankan
// mirip dengan penggunaan syncronus walau menunggu mnunggu dulu karena janji balikannya
// jadi menunggu kode diatas dijalankan baru menunggu dijalankan



