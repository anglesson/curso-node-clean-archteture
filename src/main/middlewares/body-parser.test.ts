import request from 'supertest'
import app from '../config/app'

describe('Body parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })

    const anyObject = { anyProperty: 'any' }

    await request(app)
      .post('/test_body_parser')
      .send(anyObject)
      .expect(anyObject)
  })
})
