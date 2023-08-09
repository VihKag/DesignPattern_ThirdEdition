function* twoWayGenerator() {
    try {
        const number = yield null;
        if(number%2==0){
            yield "Hello "+number;
        }else if(number%2==1){
            yield "Bonjour ";
        }
    } catch (err) {
        yield "Halo " + err.message;
    }
}

const twoWay = twoWayGenerator();

const twoWay1 = twoWayGenerator();
twoWay1.next();
console.log(twoWay1.next(2014));

const twoWay2 = twoWayGenerator();
twoWay2.next();
console.log(twoWay2.next(2013));

const twoWay3 = twoWayGenerator();
twoWay3.next();
console.log(twoWay3.throw(new Error("Bug!")));

const twoWay4 = twoWayGenerator();
console.log(twoWay3.return("ReturnValue"));
