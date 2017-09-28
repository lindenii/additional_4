module.exports = function multiply(first, second) {
    var digit = [];
    var sum = [];
    var save = 0;
    /*var row = [];*/
    first = first.split('').reverse();
    second = second.split('').reverse();
    var digit= new Array(first.length + second.length).fill(0);

    for( i = 0; i < second.length; i++){
        var mas = [];
        for( j = 0; j < first.length; j++)
            mas.push(first[j] * second[i]);
        sum[i] = mas;
    }

    for ( i = 0; i < second.length; i++)
        for ( j = 0; j < first.length; j++)
            digit[i+j] += sum[i][j];

    for (i = 0; i < digit.length; i++) {
        digit[i] += save;
        save = Math.floor(digit[i] / 10);
        digit[i] = digit[i] % 10;
    }

    if(digit[digit.length-1]==0)
        digit.pop();

    return digit.reverse().join('');
}
