function factorial(n) {
  if (n < 1) return undefined;
  let product = 1;
  for (i=1; i<=n; i++) {
    product *= i
  }
  return product
}

for (i=0; i<=8; i++) {
  console.log(`${i} -> ${factorial(i)}`)
}