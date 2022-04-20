let fetchRes = fetch("https://jsonplaceholder.typicode.com/usersf");
// console.log(fetchRes);

fetchRes
  .then((res) => res.json())
  .then((d) => {
      d.map((item) => {
        console.log(item.name);
    })
  })
    .catch((error) => {
        console.log(error);
    });

// const checkName = () => {
//     return fetch("https://jsonplaceholder.typicode.com/users").
//         then(
//             (response) => {
//                 return response
//                     .json()
//                     .then((data) => {
//                         data.map((item) => {
//                             console.log(item.name);
//                         })
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                     });
//             }
//         );
// }
// checkName((item) => {
//   console.log(item);
// });  
// const getDataPost = (url) => {
//   return new Promise((resolve, reject) => {
//    let fetchRes = fetch(url);
//     console.log(fetchRes);
//       if (fetchRes.status === 200) {
//         // const result = ajax.responseText;
//         result = JSON.parse(fetchRes.responseText);
//           resolve(result);
//           //console.log(result);
//       } else {
//         reject(new Error("gagal !!"));
//       }
//   });
//   //callback(ajax)
// };

// const handle = async () => {
//   try {
//     const hasil = await getDataPost(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     hasil.map((item) => {
//       console.log(item.title);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// handle();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (response.status !== 200) {
            console.log(`${response.status} Opss`);
            return
        }
        response.json().then((data) => {
            data.map((item) => {
              console.log(item.name);
            });
        })
    })
    .catch((err) => {
        console.log(err);
    });