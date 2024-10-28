// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #



const lineOne = ' # # # # '

const lineTwo = '# # # #'

const chessboard = function() {
  console.log(lineOne)
  console.log(lineTwo)
  console.log(lineOne)
  console.log(lineTwo)
  console.log(lineOne)
  console.log(lineTwo)
  console.log(lineOne)
  console.log(lineTwo)
}

console.log(chessboard())