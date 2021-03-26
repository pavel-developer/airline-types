import express from 'express';
import cors from 'cors';
import airline from './src/airline'
// import airport from './src/airport'
// import flight from './src/flight'

const app = express();

app.use(cors())
app.use(express.json())

app.use('/aitlines', airline)
// app.use(airport)
// app.use(flight)

export default app

