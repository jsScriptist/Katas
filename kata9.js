var hammings = [0,1];
var _2 = [1, 2];
var _3 = [1, 3];
var _5 = [1, 5];

function min() {
    return Math.min( _2[_2.length-1], _3[_3.length-1], _5[_5.length-1] );
}

function hamming (n) {
    if (hammings[n]) return hammings[n];

    var next = min();
    hammings[n] = next;
    if (_2[_2.length-1] == next) _2.push(hammings[_2.length]*2);
    if (_3[_3.length-1] == next) _3.push(hammings[_3.length]*3);
    if (_5[_5.length-1] == next) _5.push(hammings[_5.length]*5);

    return hammings[n];
}

function hamming2(n) {
    const seq = [1]
    let i2 = 0, i3 = 0, i5 = 0
    for (let i = 1; i < n; i++) {
      const x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5])
      seq.push(x)
      if (2 * seq[i2] <= x) i2++
      if (3 * seq[i3] <= x) i3++
      if (5 * seq[i5] <= x) i5++
    }
    return seq[n-1]
}

console.log(hamming2(30))
console.log(hamming2(60))
console.log(hamming2(70))
console.log(hamming2(100000000))
console.log(hamming(100000000)) //It doesn't work but why?
