function combinations(nums, k) {
  let candidate = [];
  let result = [];
  let visited = new Set();
  backtrack();
  console.log(result)
  return result;

  function backtrack() {
    // success?
    if (candidate.length === k) {
      result.push([...candidate]);
      return;
    }
    for (let idx = 0; idx < nums.length; idx++) {
      // dead end / pruning
      if (visited.has(idx)) {
        continue;
      }
      //setup
      visited.add(idx);
      candidate.push(nums[idx])
      // recurse
      backtrack();
      // cleanup
      candidate.pop();
      visited.delete(idx);
    }
  }
}