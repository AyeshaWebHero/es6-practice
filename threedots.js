const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [77, 55, 99, 101];
//const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];

console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const takaPoisa = [1000, 55500, 6000, 2000];
const takaPoisaa = Math.max(...takaPoisa);
console.log(takaPoisaa);