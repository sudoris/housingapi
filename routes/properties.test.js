const mongoose = require('mongoose')
const Property = require('../schemas/property');

const connect = function() {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost/housingdb', { useNewUrlParser: true, useUnifiedTopology: true })      
      .then(res => {
        console.log('connected to db')
        resolve('connected')
      })   
      .catch(err => {
        console.log('failed to connect to db')
        reject(err)
      })    
  })
}

describe('save property', () => {
  let connection

  beforeAll(async () => {
    connection = await connect()
  })

  afterAll(async () => {
    await connection.close()
  })

  test('save doc to collection', async () => {
    let property = new Property({
      name: 'White House'
    })       
    
    await property.save()
    expect(property.isNew).toBe(false)   
  })
})
