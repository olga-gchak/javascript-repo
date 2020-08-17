function mul(...args) {
    let mult = 1;
    let count = 0;
    for (let arg of args)  {
        if(typeof(arg)==="number") {
            mult *= arg;
            count++;
        }
    }
    if (count==0) return 0;
    return mult;
    }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0
 