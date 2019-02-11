// countDownWhile(startingPoint, stoppingPoint)
function countDownWhile (startingPoint, stoppingPoint) {
    while (startingPoint >= stoppingPoint) {
        console.log('countDownWhile: ' + startingPoint);
        startingPoint--;
    }
}

// countDownFor
function countDownFor (startingPoint, stoppingPoint) {
    for (; startingPoint >= stoppingPoint; startingPoint--) {
        console.log('countDownFor: ' + startingPoint);
    }
}

countDownWhile(10, 0);
countDownFor(10, 0);