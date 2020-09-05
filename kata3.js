var uniqueInOrder = function(iterable){
    if (typeof iterable === "string") iterable = iterable.split('')
    return iterable.filter((value,index) => iterable[index] === iterable[index+1]
            ? iterable[index] = undefined
            : iterable[index] = value)
}

var uniqueInOrder2 = function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

const uniqueInOrder3 = iterable => [...iterable].filter((a, i) => a !== iterable[i-1])

  console.log(uniqueInOrder('ABBCcAD'))
  console.log(uniqueInOrder([1,2,1,2,2]))

  console.log(uniqueInOrder3('ABBCcAD'))
  console.log(uniqueInOrder3([1,2,1,2,2]))
