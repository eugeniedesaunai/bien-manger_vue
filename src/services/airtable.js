class AirtableAPI {
  // Example of how to set a vue
  constructor({ url }) {
    this.baseURL = url
    this.options = {
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer keyBBAVx1ha03kF1G' }, // Of course, this token should not be here.
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
  url: "https://api.airtable.com/v0/appcCZi8CySwsHTVJ/" // Of course, this should be set as env variable API_URL

})