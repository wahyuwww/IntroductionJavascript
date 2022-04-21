const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month = ["januari", "febuari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"]
      if (!error) {
          callback(null, month);
            // error === null ? callback(null) : callback(month);
        } else {
            callback(new Error("Sorry Data Not Found",[]))
        }
    },4000)
}

getMonth((error, callback) => {
  error ? console.log(error)
    : callback.map((item) => {
         console.log(item);
       });
});
