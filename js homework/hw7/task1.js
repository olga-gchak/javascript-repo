let myWindow;
function openWin() {
    myWindow = window.open("", "l", "width=300, height=300");
}
openWin();

function resizeWin() {
    myWindow.resizeTo(500, 500);                            
    myWindow.focus();                                        
}
setTimeout(resizeWin, 2000);

function move() {
    myWindow.moveTo(200, 200);
    myWindow.focus();   
}
setTimeout(move, 4000);

function close() {
    myWindow.close();
}
setTimeout(close, 6000);
