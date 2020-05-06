function truncateString(str, num) {
    var i;
    var newstr='';
    for(i=0; i<num; i+=1){
        newstr+=str[i];
    }
    console.log(newstr);
    if (newstr.length == str.length){
        return str
        console.log(str)
    }
    else {
        return newstr + '...'
        console.log(newstr + '...')
    }

}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);