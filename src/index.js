const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '     ': ' '
};

function decode(expr) {
    let arr=[];
    while(expr.length%10!=0) {expr+='0';}//добавляю ноли

    for (let i =0;i<expr.length;i+=10)//нарезаю по 10 элементов
    {
        arr.push(expr.slice(i,i+10));
    }
    let arrsmall=[];
    for(let i =0;i<expr.length;i+=2)//нарезаю по 2 элемента
    {
        if(arr[i]=='**********') arr.splice(i,5,"**");
        arrsmall.push(expr.slice(i,i+2)); 
    }
    for(let i=0;i<arrsmall.length;i++) {//
        switch (arrsmall[i])
        {
         case '10': arrsmall.splice(i,1,'.');break;
         case '11': arrsmall.splice(i,1,'-');break;
         case '00': arrsmall.splice(i,1,'');break; 
         case '**': arrsmall.splice(i,1,' ');break; 
        }
    }
    let arrbig=[];
    for(let i=0;i<arrsmall.length;i+=5)
    {
        arrbig.push(arrsmall.slice(i,i+5));
    }
    
    for (let i=0;i<arrbig.length;i++)
    {
        arrbig[i]=arrbig[i].join('');
    }
    let str='';
for(let i=0;i<arrbig.length;i++)
{
str+=MORSE_TABLE[arrbig[i]];
}
    return str;
}

module.exports = {
    decode
}
