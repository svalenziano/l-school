import templates from "./templates.js"

/*
class Gallery
  constructor($slidesDiv, $infoHeader)
    

  async init()
    - render the photoInformation template into $infoHeader
    - render the photos template into $slidesDiv
*/

class Gallery {
  constructor({$slidesDiv, $infoHeader, $commentUL}) {
    this.$slidesDiv = $slidesDiv;
    this.$infoHeader = $infoHeader;
    this.$commentUL = $commentUL
  }

  async init() {
    const FIRST_PHOTO_INDEX = 0;

    // POPULATE PHOTOS & INFO HEADER WITH FIRST PHOTO
    // fetch photos
    const photosResponse = await fetch("./photos")
    const photosArray = await photosResponse.json()
    console.log(photosArray);

    // render photos and information
    this.$slidesDiv.innerHTML = templates.photos(photosArray);
    this.$infoHeader.innerHTML = templates.photoInformation(
      photosArray[FIRST_PHOTO_INDEX]
    );

    // const firstID = Math.min(photosArray.map((obj) => obj.id))
    const firstID = photosArray[FIRST_PHOTO_INDEX]['id']

    // POPULATE COMMENTS FOR FIRST PHOTO
    // fetch comments
    const firstCommentResponse = await fetch(`./comments?photo_id=${firstID}`);
    const commentsArray = await firstCommentResponse.json()
    console.log(commentsArray)

    // render comments
    this.$commentUL.innerHTML = templates.comments(commentsArray)
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  let gal = new Gallery({
      $slidesDiv: document.querySelector("div#slides"),
      $infoHeader: document.querySelector("header#information"),
      $commentUL: document.querySelector("div#comments ul")
  })

  gal.init();
})