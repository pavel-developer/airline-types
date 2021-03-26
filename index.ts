import http from 'http'

import api from './server'

const server = http.createServer(api)
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})