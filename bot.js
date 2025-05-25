const TelegramBot = require('node-telegram-bot-api');
const token = '7867409184:AAEnGQgPv-5XXxBCgwgNXLoLSAq9VV3tVvk';
const bot = new TelegramBot(token, { polling: true });

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
