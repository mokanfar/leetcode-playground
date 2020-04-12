const c = console.log.bind(console);
//=============
let test = ["cool", "lock", "cook"];
var commonChars = function(A) {
  let found = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      let kkk = [];
      for (let k = 0; k < A.length; k++) {
        kkk.push(A[k].indexOf(A[i][j]));
      }

      //kkk.push(A[i][j]);

      if (kkk.indexOf(-1) == -1) {
        let ooo = A[i][j];
        A[i] = A[i].replace(ooo, " ");
        found.push(ooo);
        c(kkk);
        //c("ooo: " + ooo, kkk, "A[i]: " + A[i], " " + A[i][kkk[i]]);
      }
    }
  }

  return found;
};
c(commonChars(test));
