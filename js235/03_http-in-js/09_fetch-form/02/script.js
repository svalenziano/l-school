class Form {
  constructor(formID, messageID) {
    this.$form = document.getElementById(formID);
    this.$message = document.getElementById(messageID);

    this.$form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.$message.style.display = "none";

      let keysAndValues = this.getFormValues(this.$form);


      keysAndValues = keysAndValues
        .filter(([key, value]) => value !== '')
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&")
      console.log(keysAndValues);
    })
  }

  getFormValues($form) {
    // returns array of keys and values
    let keysAndValues = [];
      for (let ele of this.$form.elements) {  // label elements are omitted!
        if (!(ele instanceof HTMLButtonElement && ele.type === 'submit')) {
          keysAndValues.push([ele.name, ele.value]);
          // keysAndValues[]
        }
      }
      return keysAndValues;
  }

  convertValuesToURIString(keysAndValues) {
    
  }
}

new Form('form', 'message')