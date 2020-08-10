function check(str) {
    let regExp = /d(b+)(d)/gi;
    let result = regExp.exec(str);
    console.log(result);
}

check("cdbBdbsbz");