const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month = ["januari", "febuari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"]
        if (!error) {
            error === null ? callback(null) : callback(month);
        } else {
            callback(new Error("Sorry Data Not Found"))
        }
    },100)
}

getMonth((...call) => {
   call.map((item) => {
     console.log(item);
   });
  
  // console.log(error);
});
