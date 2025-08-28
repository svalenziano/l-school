import templates from "./templates.js"

/*
class Gallery
  constructor($slidesDiv, $infoHeader)
    

  async init()
    - render the photoInformation template into $infoHeader
    - render the photos template into $slidesDiv
*/

class Gallery {
  constructor({$slidesDiv, $infoHeader}) {
    this.$slidesDiv = $slidesDiv;
    this.$infoHeader = $infoHeader;
  }

  async init() {
    // try {

    // } catch (error) {

    // }
    const photosResponse = await fetch("./photos")
    const photosArray = await photosResponse.json()
    this.$slidesDiv.innerHTML = templates.photos(photosArray);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  let gal = new Gallery({
      $slidesDiv: document.querySelector("div#slides"),
      $infoHeader: document.querySelector("header#information"),
  })

  await gal.init();
})