function myfunction() {
    var div = document.getElementById('myelement');
    var i = 1;
    for (i = 1; i <= 30; i++) {
        if (((i % 3) == 0) && ((i % 5) == 0)) {
            div.innerHTML = div.innerHTML + 'Fizz Buzz' + '<br />';
        } else if ((i % 3) == 0) {
            div.innerHTML = div.innerHTML + 'Fizz' + '<br />';
        } else if ((i % 5) == 0) {
            div.innerHTML = div.innerHTML + 'Buzz' + '<br />';
        } else {
            div.innerHTML = div.innerHTML + i + '<br />';
        }
    }
}
