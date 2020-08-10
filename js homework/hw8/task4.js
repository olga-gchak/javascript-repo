function replace(str) {
    let regExp = /(\w+)\s(\w+)/;
    let newstr = str.replace(regExp, '$2, $1');
    console.log(newstr);
}

replace("Java Script");