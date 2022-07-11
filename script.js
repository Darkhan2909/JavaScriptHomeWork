function name() {
    let name = prompt('Vvedite vashe "@polnoe@" imya: ', 'Polzovatel: ');
    let num = prompt('Vvedite chislo: ', 10);
    
    alert("Hello world to JS! " + name);
    alert("Vashe chislo v kvadrate " + Math.pow(num,2));
}

function srednee() {
    let num3 = prompt('Vvedite chislo: ', 5);
    let num4 = prompt('Vvedite chislo: ', 7);
    let num1 = parseInt(prompt('Vvedite chislo: ', 5));
    let num2 = parseInt(prompt('Vvedite chislo: ', 7));
    const numSred = (num1 + num2) / 2;
    const numstr = (num3 + num4) / 2;
    // console.log(num1,num2);
    alert(numSred);
    alert(numstr);
    console.log(typeof(numSred));
    console.log(typeof(numstr));
    console.log(typeof '42');
}


function kilometr() {
    const km = prompt('Vvedite rasstoyanie: ', 5);
    const mile = 0.621371;
    let result = km * mile;
    alert(result);
    console.log(typeof(km));
    const num1 = prompt('Vvedite chislo: ', 3);
    alert(typeof num1);
    alert(typeof +num1);
}

function convertation() {
    const num1 = parseInt(prompt('Vvedite', 5));
    const num2 = parseInt(prompt('Vvedite', 5));
    
    let result = 'Summa: ' + (num1 + num2);
    let result2 = 'Summa: ' + (num1 * num2);
    let result3 = 'Summa: ' + (num1 - num2);
    let result4 = 'Summa: ' + (num1 / num2);
    alert(result);
    alert(result2);
    alert(result3);
    alert(result4);
}
function uravnenie() {
    const a = parseInt(prompt('Vvedite', 5));
    const b = parseInt(prompt('Vvedite', 5));
    let result = 'Summa: ' + (-b/a);
    alert(result);
}
function vremya () {
    const hours = parseInt(prompt('Hours'));
    const mins = parseInt(prompt('Minute'));
    // let result = (23-hours) + 'hours and ' + (59-mins) + 'minute do polunochi';
    let result = `${23 - hours} hours and  ${59-mins} minute do polunochi`;
    alert(result);
}
function ostatok () {
    // const hours = parseInt(prompt('Hours'));
    const num = parseInt(prompt('Chislo'));
    // let result = (23-hours) + 'hours and ' + (59-mins) + 'minute do polunochi';
    let result = num % 100;
    // let newresult = Math.trunc(result/10);
    let resultstr = num.toString();
    let newresult = Math.trunc(result/10);

    // alert(newresult);
    alert(resultstr[0]);
}
function stroki() {
    const hours = parseInt(prompt('Hours'));
    // const mins = parseInt(prompt('Minute'));

let step1 = (num % 10).toString;
let step2 = (Math.trunc(num/10).toString();
let step3 = step1 + step2;






alert(step3);
    
}
// zdes v funcii kilometr peremennaya result avtomaticheskii preobrazovyvaetsya v number
// let - v sluchae esli dinamicheskaya peremennaya.