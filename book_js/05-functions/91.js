function evenOrOdd(num) {
  if (typeof num == 'number') {
    let even = !(num % 2)
    console.log(`num -> ${num}`)
    if (even) {console.log('even')}
    else {console.log('odd')}
  } else {
    console.log("Not a number!  Panic!!!")
  }
}

evenOrOdd(0)
evenOrOdd(1)
evenOrOdd(2)
evenOrOdd(999)
evenOrOdd(1000)
evenOrOdd('abc123')