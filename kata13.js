const theLift = function(queues, capacity) {
    console.log(queues, capacity)
    let result = [], load = [], up = true
    function toLift(queues, capacity) {     
        for(let k = 0; k < queues.length; k++) {
            console.log(load.includes(k), k, load)
            if(queues[k].some(v => v > k) || load.includes(k)) reload(k, up)
        }
        for(let k = queues.length - 1; k >= 0; k--) {
            console.log(load.includes(k), k, load)
            if(queues[k].some(v => v < k) || load.includes(k)) reload(k, !up)
        }
        console.log(queues)
        if(queues.some(v=> v.length !== 0)) toLift(queues, capacity)
        function reload(k, up) {
            let qk = queues[k]
            if(result[result.length - 1] !== k) result.push(k)
            load = load.filter(v => v !== k)
            for(v in qk) {
                if((up && load.length < capacity && qk[v] > k)
                    || (!up && load.length < capacity && qk[v] < k)) {
                    load.push(qk[v])
                    delete qk[v]
                }
            }
            queues[k] = qk.filter(e => e !== undefined)
        }
    } 
    toLift(queues, capacity)
    if(result[0] !== 0) result.unshift(0)
    if(result[result.length - 1] !== 0) result.push(0)
    return result
}

function theLift2(queues, capacity) {
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

console.log(theLift([
                        [],                 //0
                        [ 5 ],              //1
                        [ 8 ],              //2
                        [ 9, 2 ],           //3
                        [ 19, 15 ],         //4
                        [],                 //5
                        [ 12, 11, 4, 11 ],  //6
                        [],                 //7
                        [],                 //8
                        [ 10, 0, 13, 20 ],  //9
                        [ 11, 18, 2 ],      //10
                        [ 0, 4 ],           //11
                        [ 18 ],             //12
                        [ 7 ],              //13
                        [ 3, 6, 5 ],        //14
                        [ 17 ],             //15
                        [ 19, 8 ],          //16
                        [ 0, 6, 19, 6 ],    //17
                        [],                 //18
                        [ 15, 2, 9, 17 ],   //19
                        [ 12, 14 ]          //20
                                    ], 2)) // 0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12,
                                    //        15, 16, 17, 18, 19, 20, 19, 17, 16, 14,
                                    //        13, 12, 11, 10, 9, 6, 3, 2, 0, 3, 4, 6,
                                    //         9, 10, 13, 16, 19, 17, 16, 15, 14, 13,
                                    //        11, 10, 9, 6, 4, 2, 4, 6, 9, 10, 11, 15,
                                    //        19, 17, 16, 14, 13, 11, 10, 9, 0, 6, 9,
                                    //        10, 11, 20, 17, 16, 14, 13, 11, 10, 6, 10,
                                    //        18, 16, 14, 13, 11, 10, 8, 5, 13, 11, 10,
                                    //         7, 4, 10, 2, 0
