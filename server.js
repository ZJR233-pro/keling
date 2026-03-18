const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('.'))

// ==============================
// 在这里填入你自己的 NanoBoNano API Key
// ==============================
const API_KEY = "填写你自己的NanoBoNano-Key"
const API_URL = "https://api.nanobonano.com/v1/text2img"

app.post('/api/generate', async (req, res) => {
  try {
    const { prompt } = req.body
    const r = await axios.post(API_URL, {
      prompt: prompt,
      ratio: "16:9",
      style: "cinematic",
      quality: "high"
    }, {
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      }
    })
    const image = r.data?.image_url
    if (image) return res.json({ image })
    res.json({ error: "未返回图片" })
  } catch (e) {
    res.json({ error: e.message })
  }
})

app.listen(3000, () => {
  console.log("✅ 已启动：http://localhost:3000")
})
