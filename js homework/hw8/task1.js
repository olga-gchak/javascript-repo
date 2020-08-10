function checkLogin(login) {
    let regExp = /^(?=.{2,10}$)[a-z]+(\d+\.\d+)[a-z]+(\d+)/;
    let result = login.match(regExp);
    if (result) {
        console.log("True " + result[1] + " " + result[2]);
    } else {
        console.log("False");
    }
}

checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");
