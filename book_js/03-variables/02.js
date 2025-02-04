let age = 37;
let durations = [10, 20, 30 ,40];
for (var idx in durations) {
  console.log(`In ${durations[idx]} years, you will be ${age + durations[idx]} years old.`)
}