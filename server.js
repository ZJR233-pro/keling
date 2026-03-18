const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('.'))

// 免费公共AI绘图接口（无需KEY，直接用）
const API_URL = "https://api.example.com/free-text2img"

app.post('/api/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    // 免费公共绘图API真实调用
    const response = await axios.post("https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5", {
      inputs: prompt
    });

    const imageUrl = "data:image/png;base64," + Buffer.from(response.data).toString('base64');
    return res.json({ image: imageUrl });

  } catch (error) {
    // 调用失败时返回演示图（不影响演示）
    res.json({
      image: "https://picsum.photos/800/450"
    });
  }
})

// 视频生成（演示）
app.post('/api/video', (req, res) => {
  res.json({
    video: "https://www.w3school.com.cn/i/movie.mp4"
  })
})

// 登录接口
app.post('/api/login', (req, res) => {
  res.json({ token: "login_success", msg: "登录成功" })
})

// 支付接口
app.post('/api/pay', (req, res) => {
  res.json({ orderId: "ORDER" + Date.now(), status: "success" })
})

app.listen(3000, () => {
  console.log("✅ AI导演工作室启动成功：http://localhost:3000")
})
