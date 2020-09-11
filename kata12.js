function martingale(bank, outcomes) {
    let bet = 100
    for(k in outcomes) {
        if(outcomes[k] === 1) {
            bank += bet
            bet = 100
        }
        if(outcomes[k] === 0) {
            bank -= bet
            bet *= 2
        }
    } 
    return bank
}

console.log(martingale(1000, [1, 1, 0, 0, 1])) // 1300

function smaller(nums) {
    return nums.map((m, i) =>
      nums.reduce((s, n, j) =>
        j <= i || m <= n
          ? s
          : s + 1, 0
      )
    )
}

console.log(smaller([5, 4, 3, 2, 1])) // [4, 3, 2, 1, 0] 
console.log(smaller([1, 2, 3])) // [0, 0, 0]
console.log(smaller([1, 1, -1, 0, 0])) //[3, 3, 0, 0, 0]
