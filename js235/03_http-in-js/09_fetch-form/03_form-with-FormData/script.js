


class Form {
  constructor(formID, messageID) {
    this.$form = document.getElementById(formID);
    this.$message = document.getElementById(messageID);
    this.addListeners();

  }

  addListeners() {
    this.$form.addEventListener("submit", async (event) => {
      event.preventDefault();
      this.$message.style.display = "none";

      let keysAndValues = this.getFormValues(this.$form);
      keysAndValues = this.convertValuesToURIString(keysAndValues);

      this.submitForm(keysAndValues);
      // this.display(keysAndValues)
      // console.log(keysAndValues);
    });
  }

  async submitForm(body) {
    const response = await fetch(
      `https://lsjs230-book-catalog.herokuapp.com/${this.$form.getAttribute('action')}`,
      {
        method: this.$form.method, 
        headers: {
          'Content-Type': "application/x-www-form-urlencoded; charset=utf-8",
        },
        body,
      }
    );

    const text = await response.text();
    // this.display(text);
    this.display(`CODE: ${response.status}\n MESSAGE: ${text}`);
  }

  getFormValues($form) {
    // returns array of keys and values
    let keysAndValues = [];
      for (let ele of $form.elements) {  // label elements are omitted!
        if (!(ele instanceof HTMLButtonElement && ele.type === 'submit')) {
          keysAndValues.push([ele.name, ele.value.trim()]);
          // keysAndValues[]
        }
      }
      return keysAndValues;
  }

  convertValuesToURIString(keysAndValues) {
    return keysAndValues
        .filter(([key, value]) => value !== '')
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&")
  }

  display(msg) {
    this.$message.textContent = msg;
    this.$message.style.display = "block";
  }
}

new Form('form', 'message')