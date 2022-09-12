class AirtableAPI {
  // Example of how to set a vue
  constructor({ url }) {
    this.baseURL = url
    this.options = {
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + process.env.VUE_APP_AIRTABLE_API_KEY }, // Of course, this token should not be here.

    }
  }

  // REST Methods
  find({ resource, query }) {
    let url = this.baseURL + resource + '?' + query
    return fetch(url, this.options)
      .then(data => data.json())
  }

  /*
  get({ resource, id, query }) {
  }
 
  create({ resource, data, query }) {
    let options = {
      ...this.options,
      mode: 'POST'
    }
  }
 
  update({ resource, id, data, query }) {
    let options = {
      ...this.options,
      mode: 'PUT'
    }
  }
 
  destroy({ resource, id }) {
    let options = {
      ...this.options,
      mode: 'DELETE'
    }
  }
  */
}

export default new AirtableAPI({
<<<<<<< HEAD
  url: process.env.VUE_APP_AIRTABLE_API_URL // Of course, this should be set as env variable API_URL

=======
  url: process.env.VUE_APP_API_URL // Of course, this should be set as env variable API_URL
>>>>>>> 323845a3a20852e8643179c2c1f5fc0da0d9a8d0

})