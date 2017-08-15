array = []

function forLoop(array) {
  for (let i = 0; i <25; i++) {
    if (i === 1) {
      array[i] = "I am 1 strange loop."
    } else {
      array[i] = `I am ${i} strange loops.`
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n -= 1)
  }
  return `done`
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.shift()
  } while (array.length > 0 && maybeTrue())
  //do while array still has values and maybeTrue is true
  //if array is 0, it'll stop. If maybeTrue is false, it'll stop
  return array
}
