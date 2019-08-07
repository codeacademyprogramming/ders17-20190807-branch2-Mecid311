// let date=new Date();

// // document.getElementById('output').innerHTML=date;

// document.write('Native: '.bold()+date+'<br>');
// document.write('DateTime As String: '.bold()+date.toLocaleString()+'<br>');
// document.write('Date As String: '.bold()+date.toLocaleDateString()+'<br>');
// document.write('Time As String: '.bold()+date.toLocaleTimeString()+'<br>');
// document.write('Year As String: '.bold()+date.getFullYear()+'<br>');
// document.write('Month As String: '.bold()+date.getMonth()+'<br>');
// document.write('Day As String: '.bold()+date.getDay()+'<br>');
// document.write('Hours As String: '.bold()+date.getHours()+'<br>');
// document.write('Minutes As String: '.bold()+date.getMinutes()+'<br>');
// document.write('Second As String: '.bold()+date.getSeconds()+'<br>');
// document.write('<hr>');

// document.write('Utc Hour As String: '.bold()+date.getUTCHours()+'<br>');
// document.write('Utc Minute As String: '.bold()+date.getUTCMinutes()+'<br>');
// document.write('Utc Second As String: '.bold()+date.getUTCSeconds()+'<br>');



function showDateTime() {
    var dateTime = new Date();
    // console.log(typeof dateTime.getMonth());
    var dateTimeString = dateTime.getDate().padLeft('00') + '.'
        + (dateTime.getMonth() + 1).padLeft('00') + '.'
        + dateTime.getFullYear().padLeft('0000') + ' '
        + dateTime.getHours().padLeft('00') + ':'
        + dateTime.getMinutes().padLeft('00') + ':'
        + dateTime.getSeconds().padLeft('00');
    document.getElementById('output').innerHTML = dateTimeString;
}


function timeInfinitive() {
    showDateTime();
    var pid = setInterval(showDateTime, 1000);

    document.getElementById('btnStop').setAttribute('pid',pid);
}
// '7'.padLeft('00');

Number.prototype.padLeft = function (template) {
// console.log(typeof this,this);
    return template.substring(0, template.length - this.toString().length)
        + this.toString();
}


function timeStop(el)
{
    console.log(el.getAttribute('pid'));
    clearInterval(parseInt(el.getAttribute('pid')));
}

