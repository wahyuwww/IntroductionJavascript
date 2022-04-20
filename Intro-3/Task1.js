const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },300)
    })
}



// promise
// then catch tanpa menggunakan asyn await tidak menunggu terlebih dahulu di konstanta 
// tetapi langsung di asynscronus sesuai diatas kemudian dijalankan
cekHariKerja('rabu')
    .then((item) => {
        console.log("then")
        console.log(item);
    })
    .catch((error) => {
        console.log("catch")
        console.log(error);
    })



    // mempermudah ketika ada asycronus
    // tanpa promise asyn await, try catch juga bisa digunakan dicode lain untuk menangani error
const kerja = async () => {
    try {
        const result = await cekHariKerja("kamis");
        console.log("try");
           console.log(result);
    } catch (error) {
         console.log("catch");
        console.log(error);
    }

}
kerja()

// await bersifat menunggu apabila settimeout sdh dijalankan maka await juga dijalankan
// mirip dengan penggunaan syncronus walau await mnunggu dulu karena balikannya promise 
// jadi menunggu code diatas dijalankan baru await dijalankan