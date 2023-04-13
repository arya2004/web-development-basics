var multiply = function(num1, num2) {
    let m = 0;
    for(let i = 0; i < num2.length;i++){
        m = m*10 + (num2 * num1[i]);
    }
    return(m).toString();
};

var plusOne = function(digits) {
    return (digits.toString().replaceAll(',','') - (-1)).toString().split("")
};
var addBinary = function(a, b) {
    return(BigInt(('0b'+a).toString(10)) - (-(BigInt(('0b'+b).toString(10))))).toString(2)
};

var addBinary1 = function(a, b) {
    let aa = '0b' + a;let bb = '0b' + b;
    if(a == 0){
        return b;
    }
    if(b == 0){
        return a;
    }
    if(a == b){
        return (aa*0b10).toString(2);
    }
    return (((aa ** 0b10) - (bb ** 0b10))/ (aa - bb)) 
};


var addToArrayForm = function(num, k) {
   return (BigInt(num.toString().replaceAll(',','')) - (-BigInt(k))).toString().split("")
};
var addToArrayForm1 = function(num, k) {
    num = num.toString();num = num.replaceAll(',','');
    let sum = 0n;
    sum = BigInt(num) - (-BigInt(k));
    sum = sum.toString().split('')
    return sum
 };

 var test = function(s) {
    s = s.split("*");
    let m = 1;
    for(let i in s){
        m = m + i;
    }
    return m;
 };
console.log(test("2+(3*2)*4"))
