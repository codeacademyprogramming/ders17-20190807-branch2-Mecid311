function test() {
    var a = 2;
    a++;
    throw 'Agilli ol'
    console.log(a);
}


function testWithoutProblem() {

    try {
        var a = 2;
        a++;
        var b=JSON.parse('____');
        console.log(a);
    }
    catch(er){
        console.error(er);
        console.log('biraz sonra yeniden yoxlayin');
    }
}