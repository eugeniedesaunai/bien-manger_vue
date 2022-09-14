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



  create({ resource, data }) {
    let url = this.baseURL + resource
    let options = {
      ...this.options,
      method: 'POST',
      body: JSON.stringify(data),
    }
    return fetch(url, options)
      .then(data => data.json())
  }
  /*
  get({ resource, id, query }) {
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
  url: process.env.VUE_APP_AIRTABLE_API_URL // Of course, this should be set as env variable API_URLain
})