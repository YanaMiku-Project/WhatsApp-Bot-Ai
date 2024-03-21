const fetch = require('node-fetch');

exports.run = {
   async: async (m, { yanamiku, setting, Func }) => {
      try {
         if (setting.ai) {
            if (m.mtype === 'extendedTextMessage' && m.mtype === 'conversation');
            yanamiku.sendReact(m.chat, '❤️', m.key);
            const url = `https://api-yanamiku.vercel.app/api/ai/hercai?message=${encodeURIComponent(m.text)}`;
            const response = await fetch(url);
            const json = await response.json();

            if (json.reply) {
               yanamiku.reply(m.chat, json.reply, m);
               yanamiku.sendReact(m.chat, '✅', m.key);
            } else {
               yanamiku.reply(m.chat, '❌ An error occurred while processing your request. Please try again later.', m);
            }
         }
      } catch (e) {
         console.error(e);
         yanamiku.reply(m.chat, Func.texted('bold', '❌ An error occurred while processing your request. Please try again later.'), m);
      }
   },
   error: false,
   location: __filename,
};
