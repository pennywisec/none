let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
you can't achieve anything without fails....
              by;abdul awwal

Rec: Drawl Nag
Script: @pennywise
Github: @pennywise




*Thanks To :*
pennywise
the._don_
abdul awwal
be good my freinds... :)

╠═〘 DONASI 〙 ═
╠➥ whatsapp me : 
╠➥ Tsel: 0813-5730-2007
╠➥ Indosat: 0815-1586-0089
║>Request? Wa.me/+91 8086196891
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

