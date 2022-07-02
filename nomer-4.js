function baseSix(number){
    if(number < 0){
        return 'Harus > 0';
    }

    let result = [];
    let n = number;
    let temp;

    while(n !== 0){
        temp = n % 6;
        n = (n- temp)/6;
        result = [temp , ...result];
    }
    return result.join('');
}

console.log(baseSix(-76))
console.log(baseSix(100))
