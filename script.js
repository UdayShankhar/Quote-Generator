
function clock(){
var today = new Date();
var hr = today.getHours();
var min = today.getMinutes();
var period = "AM";
if(hr>12){
    hr = hr-12;
    period = "PM";
}if(hr<10){
    hr="0"+hr;
}if(hr==00){
    hr = 12;
}
if(min<10){
    min="0"+min;
}
document.getElementById("time").innerHTML = `${hr}:${min} ${period}`
setTimeout(clock(),1000)
}
clock();
function quotes(){

let quote = [
    '"You can get everything in life you want if you will just help enough other people get what they want"-Zig Ziglar',
    '"Inspiration does exist, but it must find you working"-Pablo Picasso',
    '"Dont settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had"-Angela Bassett',
    '"Show up, show up, show up, and after a while the muse shows up, too" -Isabel Allende',
    '"Dont bunt. Aim out of the ballpark. Aim for the company of immortals" -David Ogilvy',
    '"I have stood on a mountain of no’s for one yes" -Barbara Elaine Smith',
    '"If you believe something needs to exist, if its something you want to use yourself, dont let anyone ever stop you from doing it"-Tobias Lütke',
    '"The best way out is always through" -Robert Frost',
    '"If there is no struggle, there is no progress" -Frederick Douglass',
    '"Courage is like a muscle. We strengthen it by use"-Ruth Gordo',
    '"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success"-Dale Carnegie',
    '"Relentlessly prune bullshit, dont wait to do things that matter, and savor the time you have. Thats what you do when life is short"-Paul Graham',
    '"More is lost by indecision than wrong decision" -Marcus Tullius Cicero'
]


let result = quote[Math.floor(Math.random()*quote.length)];

document.getElementById("out").innerHTML=`${result}`
}
