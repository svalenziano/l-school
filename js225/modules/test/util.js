export function random(low, hi) {
  return Math.floor(Math.random() * (hi - low) + low);
}

export function multiRandom(qty) {
  let avg = 0;
  for (let i = 0; i < qty; i++) {
    avg += random(1, 10);
  }
  return avg / qty;
}