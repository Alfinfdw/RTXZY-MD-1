var fetch = require("node-fetch")
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
    if (!text) throw `Contoh:\n${usedPrefix + command} berikan contoh kode html`

var aii = await fetch(`https://mfarels.my.id/api/openai?text=${text}`)

 let hasil = await aii.json()
 m.reply(`${hasil.result}`.trim())
    };  
handler.command = handler.help = ['ai'];
handler.tags = ['internet'];
module.exports = handler;
