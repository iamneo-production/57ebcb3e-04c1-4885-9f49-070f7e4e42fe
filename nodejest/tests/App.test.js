const request = require('supertest')
const app = require('../server')
const crypto = require('crypto')

var random = crypto.randomBytes(2).toString('hex');

// Signup
it('test_case16', async () => {

  const res1 = await request("http://localhost:8080")
    .post('/signup')
    .send({
      email: "test"+random+"@gmail.com",
      username: "test",
      role: "ADMIN",
      password: `${random}`,
      mobileNumber: "8596748596",
      role: "USER",
      active: true
    })

  expect(res1.statusCode).toEqual(200)
})

// Login
it('test_case17', async () => {
    // Login
  const res2 = await request("http://localhost:8080")
    .post('/login')
    .send({
      email: "test"+random+"@gmail.com",
      password: random
    })
  expect(res2.statusCode).toEqual(200)
})

// Add Product
it('test_case18', async () => {
    const res = await request("http://localhost:8080")
      .post('/admin/addProduct')
      .send({
        productName: "book",
        description: "test book",
        price: "120",
        imageUrl: "abcd",
        quantity: "10"
      })
    expect(res.statusCode).toEqual(200)
})

// Home
it('test_case19', async () => {
  const res = await request("http://localhost:8080")
    .get('/home')
  expect(res.statusCode).toEqual(200)
})

// Orders
it('test_case20', async () => {
  const res = await request("http://localhost:8080")
    .get('/admin/orders')
  expect(res.statusCode).toEqual(200)
})

it('test_case21', async () => {
  const res = await request("http://localhost:8080")
    .get("/cart/Test"+random+"@gmail.com")
  expect(res.statusCode).toEqual(200)
})