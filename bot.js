const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

const token = process.env.TELEGRAM_BOT_TOKEN || '7867409184:AAEnGQgPv-5XXxBCgwgNXLoLSAq9VV3tVvk';
const bot = new TelegramBot(token, {
  polling: {
    interval: 1000,       // mỗi giây check 1 lần
    autoStart: true,
    params: {
      timeout: 10
    }
  }
});

// Khi user bấm /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.username || `user${msg.from.id}`;

  const opts = {
    reply_markup: {
      inline_keyboard: [
        [{ text: '👉 Tài liệu đánh vần', url: `https://khongduoc.click/?subid=telegram1_${username}` }],
        [{ text: '🎁 Cái này KHÔNG PHẢI', url: `https://tuyetdoikhong.click/?subid=telegram2_${username}` }]
      ]
    }
  };

  bot.sendMessage(chatId, `👋 Chào bạn ${username}!\nĐại đại đi 🤭`, opts);
});

// Dummy web để giữ bot sống trên Render
app.get('/', (req, res) => {
  res.send('🤖 Telegram bot is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Bot server is live at port ${PORT}`);
});
