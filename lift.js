function theLift(queues, capacity) {
    let elevator = [],
        isExistPeople = () => queues.some(queue => queue.length > 0) || elevator.length > 0,
        history = [];

    let currentFloor = 0,
        prevFloor = -1,
        direction = 1;

    do {
        let existSuitablePeople = false;

        [elevator, released] = elevator.reduce((res, floor) => {
            res[floor !== currentFloor ? 0 : 1].push(floor);
            return res;
        }, [[], []]);

        direction = currentFloor === queues.length - 1 ? -1 : currentFloor === 0 ? 1 : direction;

        queues[currentFloor] = queues[currentFloor].filter(floor => {
            existSuitablePeople = existSuitablePeople || Math.sign(floor - currentFloor) === direction;
            if (Math.sign(floor - currentFloor) === direction && elevator.length < capacity) {
                elevator.push(floor);
                return false;
            }
            return true;
        });

        if ((existSuitablePeople || released.length > 0) && prevFloor !== currentFloor) {
            prevFloor = currentFloor;
            history.push(currentFloor);
        }

        currentFloor += direction;
    } while (isExistPeople());

    if(history[0] !== 0) history.unshift(0);
    if(history[history.length - 1] !== 0) history.push(0);

    return history;
}