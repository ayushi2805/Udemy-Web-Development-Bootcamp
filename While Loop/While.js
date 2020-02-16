console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
var num=-10;
while(num<=19) {
    console.log(num);
    num++;
}
console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40");
num=10;
while(num<=40) {
    if(num%2===0) {
        console.log(num);
    }
    num++;
}
console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
num=300;
while(num<=333) {
    if(num%2===1) {
        console.log(num);
    }
    num++;
}
console.log("PRINTING ALL NUMBERS DIVISIBLE BETWEEN 5 AND 3 AND 5 AND 50");
num=5;
while(num<=50) {
    if(num%15===0) {
        console.log(num);
    }
    num++;
}
var input;
input=prompt("Are we there yet?");
while(input!="yes" || input!="yeah") {
    input=prompt("Are we there yet?");
}
alert("Yay, we finally made it!")
