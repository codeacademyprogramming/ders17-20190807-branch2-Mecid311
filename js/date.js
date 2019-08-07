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



function showDateTime(diff = 0) {
    let dateTime = new Date(Date.now() - diff);
    // console.log(typeof dateTime.getMonth());
    let dateTimeString = dateTime.getDate().padLeft('00') + '.'
        + (dateTime.getMonth() + 1).padLeft('00') + '.'
        + dateTime.getFullYear().padLeft('0000') + ' '
        + dateTime.getHours().padLeft('00') + ':'
        + dateTime.getMinutes().padLeft('00') + ':'
        + dateTime.getSeconds().padLeft('00');
    document.getElementById('output').innerHTML = dateTimeString;
}


function timeInfinitive(diff = 0/*optional parameter */) {
    // if(diff== undefined)
    // diff=0;
    console.log(diff);
    showDateTime(diff);
    let pid = setInterval(showDateTime, 1000,diff);

    document.getElementById('btnStop').setAttribute('pid', pid);
}
// '7'.padLeft('00');

Number.prototype.padLeft = function (template) {
    // console.log(typeof this,this);
    return template.substring(0, template.length - this.toString().length)
        + this.toString();
}


function timeStop(el) {
    console.log(el.getAttribute('pid'));
    clearInterval(parseInt(el.getAttribute('pid')));
}

//07.08.2019 21:03:22
function timeStart() {
    let oldDateTimeString = document.getElementById('output').innerHTML;
    let oldDateTimeArr = oldDateTimeString.split(' ');
    let year, month, day;
    let oldDateArr = oldDateTimeArr[0].split('.');
    year = parseInt(oldDateArr[2]);
    month = parseInt(oldDateArr[1]) - 1;
    day = parseInt(oldDateArr[0]);

    let hour, minute, second;
    let oldTimeArr = oldDateTimeArr[1].split(':');
    hour = parseInt(oldTimeArr[0]);
    minute = parseInt(oldTimeArr[1]);
    second = parseInt(oldTimeArr[2]);

    let oldDateTime = new Date(year, month, day, hour, minute, second);
    // console.log(Date.now() - oldDateTime.getTime());
    timeInfinitive(Date.now() - oldDateTime.getTime());
}

