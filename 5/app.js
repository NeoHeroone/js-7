let matn = prompt("Matn kiriting:");
let sozlar = matn.toLowerCase().split(" ");

let whaaaat = sozlar.reduce((acc, soz) => {
  acc[soz] = (acc[soz] || 0) + 1;
  return acc;
}, {});

for (let [soz, soni] of Object.entries(whaaaat)) {
  alert(`So'z: "${soz}" - ${soni} marta uchradi`);
}