import fastify from 'fastify'
import { env } from './env/index.js'

const app = fastify()

app.get('/hello', () => {
  console.log('hello')
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('server running')
  })
