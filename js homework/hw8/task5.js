function checkNumber(num) {
    let regExp = /^(\d{4})(\-\d{4}){3}$/;
    if (num.match(regExp)) {
        console.log ("True");
    } else {
        console.log ("False");
    }
}

checkNumber("9999-9999-9999-9999");
