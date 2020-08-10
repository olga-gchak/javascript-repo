function checkEmail(str) {
    let regExp = /^[a-zA-Z0-9]+[_-]\w+\@\w+\.[a-z]{2,4}$/i;
    if (str.match(regExp)) {
        console.log ("Email is correct!");
    } else {
        console.log ("Email is not correct!");
    }
}

checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");