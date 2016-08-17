function myfunction() {
    var div = document.getElementById('myelement');
    var num=parseInt(prompt("Insert a no 1 to 100"));
    
    for (var i = 1; i <= num; i++) {
        if (((i % 3) == 0) && ((i % 5) == 0)) {
            div.innerHTML += 'Fizz Buzz' + '<br />';
        } else if ((i % 3) == 0) {
            div.innerHTML +=  'Fizz' + '<br />';
        } else if ((i % 5) == 0) {
            div.innerHTML +=  'Buzz' + '<br />';
        } else {
            div.innerHTML +=  i + '<br />';
        }
    }
}
function utility(message, value){
    console.log("message:"+message+value);

}
 var names=["brenda", "earl", "bob","Ishmael"];
 var compliment="is great";
 function complimentGiver(names,compliment)
 {
    var completed=[];
    for(var i=0;i<4;i++)
    {
        completed.push(names[i]+compliment);
    }
    return completed;
 }
var count=0;
function counter(){
    return ++count;
 }
