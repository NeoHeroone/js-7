let massiv = [2, 3, 4, 8, 5, 77, 1, 6];
let kotta = massiv[0];
for (let i = 1; i < massiv.length; i++) {
  if (massiv[i] > kotta) {
    kotta = massiv[i];
  }
}
alert("natija:  " + kotta);