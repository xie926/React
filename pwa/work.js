// DOM XXX NOT
let sum = 0;
for(let i = 0; i < 10000000; i++) {
  sum += 1;
}

this.postMessage(sum)