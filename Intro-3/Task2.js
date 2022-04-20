const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ["januari", "febuari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"]
      if (!error) {
          callback(null, month);
            // error === null ? callback(null) : callback(month);
        } else {
            callback(new Error("Sorry Data Not Found"))
        }
    },100)
}

getMonth((error, callback) => {
   if (error) {
     console.log(error);
   } else {
       callback.map((item) => {
         console.log(item);
       })
   }
  
});
