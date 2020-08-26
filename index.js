const express = require('express')
const app = express()
const app_name = 'ping-pong-app'
const port = 3000

app.get('/', (req, res) => {
	return res.json({data: "ok" });
})

app.get('/ping', (req, res) => {
	return res.json({data: "pong" });
})

app.get('/health', (req, res) => {
	return res.json({status: `${app_name} is running on port ${port}`, data: "Application healthy"});
})

app.listen(port, () => {
  	console.log(`Example app listening at http://localhost:${port}`)
})
