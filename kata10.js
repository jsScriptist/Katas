function doneOrNot(board) {
    const standard = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const invertedBoard = []
    const regions = []
    for (i in board) {
        invertedBoard[i] = []
        for (k in board[i]) {
            invertedBoard[i].push(board[k][i])
        }
    }
    let q = 0
    let j = 0
    for (i in board) {
        regions[i] = [] 
        regions[i].push(board[j][q])
        regions[i].push(board[j][q+1])
        regions[i].push(board[j][q+2])
        regions[i].push(board[j+1][q])
        regions[i].push(board[j+1][q+1])
        regions[i].push(board[j+1][q+2])
        regions[i].push(board[j+2][q])
        regions[i].push(board[j+2][q+1])
        regions[i].push(board[j+2][q+2])
        q = q + 3
        if (q === board.length) {
            q = 0
            j = j + 3
        }
    }
    console.log(regions)
    for (i in board) {
        if (JSON.stringify(board[i].sort()) !== standard
        || JSON.stringify(invertedBoard[i].sort()) !== standard
        || JSON.stringify(regions[i].sort()) !== standard) return 'Try again!'
    }
    return 'Finished!'
}

function doneOrNot2(board){
    for (let i = 0; i < 9; i++) {
      const [r,c] = [Math.floor(i/3)*3,(i%3)*3];
      if ((board[i].reduce((s,v)=>s.add(v),new Set()).size != 9) ||
          (board.reduce((s,v)=>s.add(v[i]),new Set()).size != 9) ||
          (board.slice(r,r+3).reduce((s,v)=>v.slice(c,c+3).reduce((s,v)=>s.add(v),s),new Set()).size != 9)) 
           return 'Try again!';
    }
    return 'Finished!';
  }


console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                        [6, 7, 2, 1, 9, 5, 3, 4, 8],
                        [1, 9, 8, 3, 4, 2, 5, 6, 7],
                        [8, 5, 9, 7, 6, 1, 4, 2, 3],
                        [4, 2, 6, 8, 5, 3, 7, 9, 1],
                        [7, 1, 3, 9, 2, 4, 8, 5, 6],
                        [9, 6, 1, 5, 3, 7, 2, 8, 4],
                        [2, 8, 7, 4, 1, 9, 6, 3, 5],
                        [3, 4, 5, 2, 8, 6, 1, 7, 9] ]))

// console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
//                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
//                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
//                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
//                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
//                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
//                         [3, 0, 0, 4, 8, 1, 1, 7, 9] ]))                   
