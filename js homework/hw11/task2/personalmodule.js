const os = require("os");
module.exports.greeting = function () {
    const currentDate = new Date();
    global.date = currentDate;
    global.name = os.userInfo().username;
    const hour = currentDate.getHours();
    if(hour > 16)
        return  global.date + "<br/>Good evening, " + global.name;
    else if(hour > 10)
        return global.date + "<br/>Good day, " + name;
    else
        return global.date + "<br/>Good morning, " + name;
}
