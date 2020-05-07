function truncateString(str, num) {
    var i;
    var newstr='';
    for(i=0; i<num; i+=1){
        newstr+=str[i];
    }
    // console.log(newstr.length> str.length);
    if (newstr.length == str.length){
        console.log('равно')
        return str
    }
    else if (newstr.length > str.length){
        console.log('больше на 2')
        return str
    }
    else {
        console.log('меньше')
        return newstr + '...'

    }

}
// console.log("A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);