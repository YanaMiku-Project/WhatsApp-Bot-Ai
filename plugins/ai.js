const fetch = require('node-fetch');

exports.run = {
   async: async (m, { yanamiku, setting, Func, text }) => {
      try {
         if (setting.ai === true && m.mtype === 'conversation') {
         /*const args = m.text.trim().split(/\s+/);
         const text = args.slice(1).join(' ');*/
         yanamiku.sendReact(m.chat, '❤️', m.key)

         const url = `https://hercai.onrender.com/v3/hercai?question=${encodeURIComponent(text)}`;
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
}
