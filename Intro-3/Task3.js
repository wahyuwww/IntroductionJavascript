const random = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let result = ''
            // math flor untuk menampilkan data bulatkan ke bawah
            let number = Math.floor(Math.random() * 100);
            // console.log(number);
            if (number % 4 === 0) {
                result = `data berikut adalah kelipatan 4 :  ${number}`
                resolve(result);
            } else {
                reject(new Error(`data berikut bukan kelipatan 4 : ${number}`))
            }
        },500)
    })
}

random()
    .then((item) => {
    console.log(item);
    })
    .catch((error) => {
        console.log(error);
    })
const Multiples = async() => {
    try {
        result = await random()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
Multiples()


const User = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let username = [
        "Abigail",
        "Alexandra",
        "Alison",
        "Amanda",
        "Angela",
        "Bella",
        "Carol",
      ];
      let search = username.filter((element) => {
        return element.includes(name);
      });
      if (search.length != 0) {
        resolve(search);
      } else {
        reject(new Error("Nama tidak ditemukan"));
      }
    }, 2000);
  });
};

User("ng")
  .then((item) => {
    item.map((element) => {
      console.log(element);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const checkName = async () => {
  try {
    const result = await User("au");
    // const result1 = await User("Al");
     result.map((element) => {
       console.log(element);
     });
  } catch (error) {
    console.log(error);
  }
};
checkName();