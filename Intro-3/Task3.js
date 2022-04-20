const User = (name) => {
    return new Promise((resolve,reject) => {
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
            if (search) {
              resolve(search);
            } else {
              reject(new Error("Nama tidak ditemukan"));
            }
        },200)
    })
}

User("an")
  .then((item) => {
    console.log(item);
  })
  .catch((error) => {
    console.log(error);
  });


const seacrhName = async () => {
    try {
      const result = await User("Amanda");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
seacrhName();
  

const random = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let result = ''
            let number = Math.floor(Math.random() * 100);
            console.log(number);
            if (number % 4 === 0) {
                result = `data berikut adalah kelipatan 4 :  ${number}`
                resolve(result);
            } else {
                reject(new Error(`data berikut bukan kelipatan 4 : ${number}`))
            }
        },200)
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