function makeDoggo(name) {
  let favoriteSticks = [];
  return {
    name,
    addStick(description) {
      favoriteSticks.push(description)
    }
  };
}

let hanna = makeDoggo('hanna');
hanna.addStick("Bamboo")
hanna.addStick("From the wood pile")
hanna.addStick("Birthday stick")