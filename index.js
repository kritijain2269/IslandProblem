A rectangular map consisting of N rows and M columns of square areas is given. Each area is painted with a certain color. Two areas on the map belong to the same country if the following conditions are met: The map can be described by a zero-indexed matrix A consisting of N rows and M columns of integers. The color of each area is described by the corresponding element of the matrix. Two areas have the same color if and only if their corresponding matrix elements have the same value. For example, consider the following matrix A consisting of seven rows and three columns: A[0][0] = 5 A[0][1] = 4 A[0][2] = 4 A[1][0] = 4 A[1][1] = 3 A[1][2] = 4 A[2][0] = 3 A[2][1] = 2 A[2][2] = 4 A[3][0] = 2 A[3][1] = 2 A[3][2] = 2 A[4][0] = 3 A[4][1] = 3 A[4][2] = 4 A[5][0] = 1 A[5][1] = 4 A[5][2] = 4 A[6][0] = 4 A[6][1] = 1 A[6][2] = 1 Matrix A describes a map that is colored with five colors. The areas on the map belong to eleven different countries (C1−C11), as shown in the following figure: Write a function that, given a zero-indexed matrix A consisting of N rows and M columns of integers, returns the number of different countries to which the areas of the map described by matrix A belong. For example, given matrix A consisting of seven rows and three columns corresponding to the example above, the function should return 11.




const checkNeighbourCountry = (A, B, i, j, N, M) => {
  if(B[i][j] === -1) return;
  B[i][j] = -1;
  if(i+1 < N) {
    if(A[i+1][j] === A[i][j]) {
      checkNeighbourCountry(A, B, i+1, j, N, M);
    }
  }
  if(i-1 >= 0) {
    if(A[i-1][j] === A[i][j]) {
      checkNeighbourCountry(A, B, i-1, j, N, M);
    }
  }
  if(j+1 < M) {
    if(A[i][j+1] === A[i][j]) {
      checkNeighbourCountry(A, B, i, j+1, N, M);
    }
  }
  if(j-1 >= 0) {
    if(A[i][j-1] === A[i][j]) {
      checkNeighbourCountry(A, B, i, j-1, N, M);
    }
  }
}

const solution = (A) => {
  let sum = 0;
  const N = A.length;
  const M = A[0].length;
  if (N === 0 || M === 0) return 0;
  const B = A.map(inner => inner.slice());
  for (let i=0; i<N; i++) {
    for (let j=0; j<M; j++) {
       if (B[i][j] >= 0) {
        checkNeighbourCountry(A, B, i, j, N, M);
        sum += 1;
      }
    }
  }
  return sum;
}

console.log('sum', solution([
  [5,4,4],
  [4,3,4],
  [3,2,4],
  [2,2,2],
  [3,3,4],
  [1,4,4],
  [4,1,1]
]));
