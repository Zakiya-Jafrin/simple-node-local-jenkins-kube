const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Kube, This is running from local Kubernetes Cluster!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})