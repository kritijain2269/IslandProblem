const checkNeighbourIsland = (A, B, i, j, N, M) => {
  if(B[i][j] === -1) return;
  B[i][j] = -1;
  if(i+1 < N) {
    if(A[i+1][j] === A[i][j]) {
      checkNeighbourIsland(A, B, i+1, j, N, M);
    }
  }
  if(i-1 >= 0) {
    if(A[i-1][j] === A[i][j]) {
      checkNeighbourIsland(A, B, i-1, j, N, M);
    }
  }
  if(j+1 < M) {
    if(A[i][j+1] === A[i][j]) {
      checkNeighbourIsland(A, B, i, j+1, N, M);
    }
  }
  if(j-1 >= 0) {
    if(A[i][j-1] === A[i][j]) {
      checkNeighbourIsland(A, B, i, j-1, N, M);
    }
  }
}

const numberOfIslands = (A) => {
  let sum = 0;
  const N = A.length;
  const M = A[0].length;
  if (N === 0 || M === 0) return 0;
  const B = A.map(inner => inner.slice()); // Destructuring does not support deep cloning of array.
  for (let i=0; i<N; i++) {
    for (let j=0; j<M; j++) {
       if (B[i][j] >= 0) {
        checkNeighbourIsland(A, B, i, j, N, M);
        sum += 1;
      }
    }
  }
  return sum;
}

console.log('islands: ', numberOfIslands([
  [5,4,4],
  [4,3,4],
  [3,2,4],
  [2,2,2],
  [3,3,4],
  [1,4,4],
  [4,1,1]
]));
