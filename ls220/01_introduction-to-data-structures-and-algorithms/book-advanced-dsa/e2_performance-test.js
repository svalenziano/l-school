// javascript

// v1 - Variable assignment approach
function hoppingChaosV1(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    const temp = prev1 + prev2;
    prev2 = prev1;
    prev1 = temp;
  }

  return prev1;
}

// v2 - Array operations approach
function hoppingChaosV2(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let [a, b] = [1, 2];
  let result;
  for (let i = 3; i <= n; i++) {
    result = a + b;
    [a, b] = [b, result];
  }
  return result;
}

// Function to run multiple trials and measure average execution time
function profileFunction(fn, input, trials = 1000) {
  const times = [];
  
  for (let i = 0; i < trials; i++) {
    const start = performance.now();
    fn(input);
    const end = performance.now();
    times.push(end - start);
  }
  
  // Calculate average time
  const avgTime = times.reduce((sum, time) => sum + time, 0) / trials;
  
  // Calculate standard deviation for more robust comparison
  const variance = times.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / trials;
  const stdDev = Math.sqrt(variance);
  
  return { avgTime, stdDev };
}

// Run profiling for different inputs
const inputSizes = [10, 20, 30, 40, 50, 100, 500, 1000, 10000, 100000];
const trials = 1000;

console.log(`Running ${trials} trials for each function and input size...`);
console.log('Input Size | Version 1 (ms) | Version 2 (ms) | V2/V1 Ratio');
console.log('----------|----------------|----------------|------------');

inputSizes.forEach(size => {
  const v1Results = profileFunction(hoppingChaosV1, size, trials);
  const v2Results = profileFunction(hoppingChaosV2, size, trials);
  const ratio = v2Results.avgTime / v1Results.avgTime;
  
  console.log(
    `${size.toString().padEnd(10)}| ` +
    `${v1Results.avgTime.toFixed(6).padEnd(16)}| ` +
    `${v2Results.avgTime.toFixed(6).padEnd(16)}| ` +
    `${ratio.toFixed(2)}x`
  );
});