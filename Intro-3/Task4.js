fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (response.status !== 200) {
            console.log(`${response.status} Opss`);
            return
        }
        // then lagi karena ini termasuk promise
        response.json().then((data) => {
            data.map((item,i) => {
              console.log(`${++i} : ${item.name}`);
            });
        })
    })
    .catch((err) => {
        console.log(err.message);
    });