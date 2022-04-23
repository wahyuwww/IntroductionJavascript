const fromZero = (num) => {
    if (typeof num !== 'number') {
        console.log("harus number yaa gais");
    } else {
         let str = num.toString().split("0");
         let result = "";
         str.map((item) => {
           result += item.split("").sort().join("");
           console.log(result);
         });
         console.log("------------");
         console.log(result);
    }
   
}
fromZero(true)
