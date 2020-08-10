function checkEmail(str) {
    let regExp = /\w+\@\w+\.\w+/g;
    if (str.match(regExp)) {
        console.log ("True");
    } else {
        console.log ("False");
    }
}

checkEmail("Qmail2@gmail.com");