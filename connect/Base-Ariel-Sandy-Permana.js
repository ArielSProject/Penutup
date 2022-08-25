require('../config')
var { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
var path = require('path')
var os = require('os')
var moment = require('moment-timezone')
var { JSDOM } = require('jsdom')
var speed = require('performance-now')
var { performance } = require('perf_hooks')
var { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('../message/myfunc')
var { help } = require('../connect/language/help')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

var tebaklagu = db.data.game.tebaklagu = []
var _family100 = db.data.game.family100 = []
var kuismath = db.data.game.math = []
var tebakgambar = db.data.game.tebakgambar = []
var tebakkata = db.data.game.tebakkata = []
var caklontong = db.data.game.lontong = []
var caklontong_desk = db.data.game.lontong_desk = []
var tebakkalimat = db.data.game.kalimat = []
var tebaklirik = db.data.game.lirik = []
var tebaktebakan = db.data.game.tebakan = []

//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = arielspkece = async (arielspkece, ftroli, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
 var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = isCmd ? body[0] : ''
var isCmd = body.startsWith(prefix)
var command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var botNumber = await arielspkece.decodeJid(arielspkece.user.id)
var isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == botNumber ? true : false
var text = q = args.join(" ")
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
var isMedia = /image|video|sticker|audio/.test(mime)
var groupMetadata = m.isGroup ? await arielspkece.groupMetadata(m.chat).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
 var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
 var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
 var isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

//WAKTU INDONESIA
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")

//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
    
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}

var creator = global.footer
		
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
}
	    
} catch (err) {
console.error(err)
}
	    
//SALAM
let loli = './connect/image/loli.jpg'
if (body.includes(`assalamualaikum`) || body.includes(`Asalamu'alaikum`) || body.includes(`Assalamualaikum`) || body.includes(`Asalamualaikum`) || body.includes(`asalamu'alaikum`) || body.includes(`assalamu'alaikum`) || body.includes(`Assalamu'alaikum`) || body.includes(`Assalamu'alaikum`) || body.includes(`asalamualaikum`) || body.includes(`asalamu'alaikum`)) {
arielspkece.sendImageAsSticker(m.chat, loli, m, { packname: global.botname, author: global.packname })
}
//Toxic
let galak = './connect/image/Anjay.jpg'
if (body.includes(`kontol`) || body.includes(`Bangsat`) || body.includes(`memek`) || body.includes(`Memek`) || body.includes(`bangsat`) || body.includes(`Bacot`) || body.includes(`bacot`) || body.includes(`Kontol`)){
arielspkece.sendImageAsSticker(m.chat, galak, m, { packname: global.botname, author: global.packname })
}
//━━━━━━━━━━━━━━━[ PUBLIC & SELF ]━━━━━━━━━━━━━━━━━//

if (!arielspkece.public) {
if (!m.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ RESET LIMIT ]━━━━━━━━━━━━━━━━━//

let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
        
//━━━━━━━━━━━━━━━[ AUTO SET BIO ]━━━━━━━━━━━━━━━━━//

if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await arielspkece.setStatus(`${arielspkece.user.name} | Runtime : ${runtime(uptime)}`)
setting.status = new Date() * 1
}
}
	    
//━━━━━━━━━━━━━━━[ FUNCTION GROUP ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
let gclink = (`https://chat.whatsapp.com/`+await arielspkece.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
arielspkece.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
        
//━━━━━━━━━━━━━━━[ MUTE ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}


//══════════[ WAKTU ]══════════//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🇮🇩'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🇮🇩'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🇮🇩'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🇮🇩'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🇮🇩'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam 🇮🇩'
}

//══════════[ WAKTU ]══════════//

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const fgi = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `${wib} *𝑾𝒊𝒃*\n      ${wita} *𝑾𝒊𝒕𝒂*\n      ${wit} *𝑾𝒊𝒕*`,"h": `${wib} *𝑾𝒊𝒃*\n      ${wita} *𝑾𝒊𝒕𝒂*\n      ${wit} *𝑾𝒊𝒕*`,'duration': '99999', 'gifPlayback': 'true', 'caption': `${wib} *𝑾𝒊𝒃*\n      ${wita} *𝑾𝒊𝒕𝒂*\n      ${wit} *𝑾𝒊𝒕*`,'jpegThumbnail': fs.readFileSync('./connect/image/logo.jpg')}}}
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 99999999999,status: 200, thumbnail: thumbnail, surface: 200, message: `Hallo Kak ${m.pushName}\n${ucapanWaktu}`, orderTitle: 'Ariel SP', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fonceimg = {key: {fromMe: false,participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: {imageMessage: {viewOnce: true},},};
const ftok = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289523258649-1604595598@g.us" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": thumbnail },"title": `Hallo Kak ${m.pushName}`, "description": `${global.botname}`, "currencyCode": "USD","priceAmount1000": "2000","retailerId": `Hallo Kak ${m.pushName}\n${ucapanWaktu}`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}

//━━━━━━━━━━━━━━━[ RESPON CMD ]━━━━━━━━━━━━━━━━━//

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: arielspkece.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, arielspkece.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
arielspkece.ev.emit('messages.upsert', msg)
}
	    
if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
arielspkece.sendText(m.chat, caption, ftroli, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`}, { quoted: ftroli } )
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `🎮 Kuis Math 🎮\n\nJawaban Benar 🎉`}, { quoted: ftroli } )
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`}, { quoted: ftroli } )
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`}, { quoted: ftroli } )
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉`}, { quoted: ftroli } )
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`}, { quoted: ftroli } )
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`}, { quoted: ftroli } )
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
	    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`}, { quoted: ftroli } )
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await arielspkece.sendText(room.x, str, ftroli, { mentions: parseMention(str) } )
await arielspkece.sendText(room.o, str, ftroli, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
arielspkece.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, ftroli)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
arielspkece.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, ftroli, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) arielspkece.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, ftok)
if (!roof.pilih2) arielspkece.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, ftok)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) arielspkece.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
arielspkece.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, ftroli)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) arielspkece.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) arielspkece.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
arielspkece.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), ftroli, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
luser.afkReason = ''
}

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch(command) {

case 'menu3': {
menu =`${(help(prefix, author, botname, owner))}`
let btn = [{
urlButton: {
displayText: 'YouTube',
url: 'https://youtube.com/c/ArielSPSus'
}
}, {
urlButton: {
displayText: 'Group Bot',
url: 'https://chat.whatsapp.com/GDdlaFZDuLZFN32LqFhhWK'
}
}, {
quickReplyButton: {
displayText: 'Button Menu',
id: '#menu'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: '#owner'
}
}]
arielspkece.send5ButImg(m.chat, menu, creator, thumbnail, btn)
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await arielspkece.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await arielspkece.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await arielspkece.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await arielspkece.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'public': {
                if (!isCreator) throw mess.owner
                arielspkece.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                arielspkece.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Teks Nya Mana Bos ?'
await arielspkece.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Teks Nya Mana Bos ?'
await arielspkece.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await arielspkece.downloadAndSaveMediaMessage(quoted)
await arielspkece.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await arielspkece.downloadAndSaveMediaMessage(quoted)
                await arielspkece.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `──── ⌜ Tag All ⌟ ────
 
 ❗ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
arielspkece.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
arielspkece.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftroli })
}

break
case 'kisahnabi':
const  Searchnabi  = require('./scrape/kisahnabi.js')
const res = await Searchnabi(q)
const result = `*Nama* : ${res.name}\n*Wafat* : ${res.wafat_usia}\n*Kelahiran* : ${res.kelahiran}\n*Singgah* : ${res.singgah}\n*Kisah* : ${res.kisah}`
arielspkece.sendMessage(m.chat, { image: { url : 'https://i.ibb.co/Kw282gw/b54b1faadf3b.jpg' }, caption: result}, { quoted: ftroli } )
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await arielspkece.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await arielspkece.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await arielspkece.sendButtonText(m.chat, buttons, `Mode Group`, creator, ftroli)
}
}
break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await arielspkece.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await arielspkece.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await arielspkece.sendButtonText(m.chat, buttons, `Mode Edit Info`, creator, ftroli)
}
}
break
case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await arielspkece.sendButtonText(m.chat, buttons, `Mode Antilink`, creator, ftok)
}
}
break
case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${arielspkece.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${arielspkece.user.name} telah di unmute di group ini !`)
} else {
let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await arielspkece.sendButtonText(m.chat, buttons, `Mute Bot`, creator, ftok)
}
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
let response = await arielspkece.groupInviteCode(m.chat)
arielspkece.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`}, { quoted: ftroli })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await arielspkece.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await arielspkece.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
arielspkece.sendMessage(m.chat, { text: jawab, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
arielspkece.sendMessage(m.chat, { text: jawab, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
arielspkece.sendText(m.chat, `Berhasil delete session TicTacToe`, ftroli)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("../message/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await arielspkece.sendText(room.x, str, ftroli, { mentions: parseMention(str) } )
await arielspkece.sendText(room.o, str, ftroli, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await arielspkece.sendText(m.chat, hasil, ftok),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await arielspkece.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: ftroli })
arielspkece.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `Waktu Habis\n\nJawaban: ${tebaklagu[m.sender.split('@')[0]]}`}, { quoted: ftroli } )
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
arielspkece.sendMessage(m.chat, { image: { url : result.img }, caption: `Silahkan Jawab Anj\n${result.deskripsi}`}, { quoted: ftroli } ).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `Waktu Habis\n\nJawaban: ${tebakgambar[m.sender.split('@')[0]]}`}, { quoted: ftroli } )
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
arielspkece.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, ftroli).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `Waktu Habis\n\nJawaban: ${tebakkata[m.sender.split('@')[0]]}`}, { quoted: ftroli } )
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
arielspkece.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, ftroli).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `Waktu Habis\n\nJawaban: ${tebakkalimat[m.sender.split('@')[0]]}`}, { quoted: ftroli } )
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
arielspkece.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, ftroli).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `Waktu Habis\n\nJawaban: ${tebaklirik[m.sender.split('@')[0]]}`}, { quoted: ftroli } )
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
arielspkece.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, ftroli).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `Waktu Habis\n\nJawaban: ${caklontong[m.sender.split('@')[0]]}`}, { quoted: ftroli } )
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('../json/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`}, { quoted: ftok } ).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: `Waktu Habis\n\nJawaban: ${kuismath[m.sender.split('@')[0]]}`}, { quoted: ftroli } )
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await arielspkece.sendText(m.chat, caption, ftroli, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) arielspkece.sendText(m.chat, `_Waktu suit habis_`, ftroli)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'tahta':
if (args.length < 1) return m.reply(`*Example* :\n#tahta Ariel SP`)
m.reply(mess.wait)
buffer = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`
arielspkece.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!"}, {quoted:ftroli})
break
case 'ppcp':
case 'couple': {
let coupleea = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = coupleea[Math.floor(Math.random() * coupleea.length)]
arielspkece.sendMessage(m.chat, { image: { url: random.male }, caption: `Done` }, { quoted: ftroli })
arielspkece.sendMessage(m.chat, { image: { url: random.female }, caption: `Done` }, { quoted: ftok })
}
break
case 'sound1':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://l.top4top.io/m_23268bsoq0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
    case 'sound2':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://l.top4top.io/m_23269i60f0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
  case 'sound3':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://a.top4top.io/m_2353wssxf0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
  case 'sound4':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://b.top4top.io/m_23266l2s00.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
  case 'sound5':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://i.top4top.io/m_23266hn860.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
  case 'sound6':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://f.top4top.io/m_2326z7znw0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound7':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://j.top4top.io/m_2353nnowu0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound8':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://e.top4top.io/m_23533o1ju0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound9':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://h.top4top.io/m_2353xuwlp0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound10':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://f.top4top.io/m_2353y4qv70.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound11':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://j.top4top.io/m_23534642l0.mp4`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound12':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://h.top4top.io/m_235991jjn0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound13':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://j.top4top.io/m_23594d72t1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound14':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://k.top4top.io/m_23595i6io2.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound15':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://a.top4top.io/m_2359x5g8j4.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound16':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://l.top4top.io/m_2359l01x13.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound17':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://b.top4top.io/m_2359ola665.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound18':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://c.top4top.io/m_2359n6agj6.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound19':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://d.top4top.io/m_2359fok3u7.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound20':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://e.top4top.io/m_2359q1yyh8.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound21':{
   arielspkece.sendMessage(m.chat, { audio: {url : `https://f.top4top.io/m_2359l8lje9.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  break
case 'sound22':{
	arielspkece.sendMessage(m.chat, { audio: {url : `https://h.top4top.io/m_2392t494n0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  break
case 'sound23':{
	arielspkece.sendMessage(m.chat, { audio: {url : `https://l.top4top.io/m_2392z9iat0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  break
case 'sound24':{
	arielspkece.sendMessage(m.chat, { audio: {url : `https://c.top4top.io/m_2392tu9dn0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  break
case 'sound25':{
	arielspkece.sendMessage(m.chat, { audio: {url : `https://a.top4top.io/m_2392iyw8o0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  break
case 'sound26':{
	arielspkece.sendMessage(m.chat, { audio: {url : `https://g.top4top.io/m_2392b6qt30.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  break
case 'sound27':{
	arielspkece.sendMessage(m.chat, { audio: {url : `https://d.top4top.io/m_2392qrken0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  break
case 'sound28':{
	arielspkece.sendMessage(m.chat, { audio: {url : `https://j.top4top.io/m_2392flgek0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  break
case 'sound29':{
	arielspkece.sendMessage(m.chat, { audio: {url : `https://d.top4top.io/m_2392aqut40.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  break
case 'arielpetir':{
    if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link1 = `https://textpro.me/online-thunder-text-effect-generator-1031.html`
     let anu1 = await textpro(link1, q)
     console.log(anu1)
    arielspkece.sendMessage(m.chat, { image: { url : anu1 }, caption: `Makasih Kak`}, { quoted: ftroli } )
   
}
  break
case 'blackpink':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link2 = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anu2 = await textpro(link2, q)
     console.log(anu2)
    arielspkece.sendMessage(m.chat, { image: { url : anu2 }, caption: `${global.owner}`}, { quoted: ftroli } )
   
}
  break
case 'pottery':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link3 = `https://textpro.me/create-3d-pottery-text-effect-online-1088.html`
     let anu3 = await textpro(link3, q)
     console.log(anu3)
    arielspkece.sendMessage(m.chat, { image: { url : anu3 }, caption: `${global.botname}`}, { quoted: fonceimg } )
   
}
  break
case 'lightglow':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link4 = `https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html`
     let anu4 = await textpro(link4, q)
     console.log(anu4)
    arielspkece.sendMessage(m.chat, { image: { url : anu4 }, caption: `${global.botname}`}, { quoted: ftok } )
   
}
  break
case 'glass':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link5 = `https://textpro.me/green-glass-text-effect-910.html`
     let anu5 = await textpro(link5, q)
     console.log(anu5)
    arielspkece.sendMessage(m.chat, { image: { url : anu5 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
case 'horror_blood':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link6 = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anu6 = await textpro(link6, q)
     console.log(anu6)
    arielspkece.sendMessage(m.chat, { image: { url : anu6 }, caption: `${global.botname}`}, { quoted: fonceimg } )
   
}
  break
  
  case 'sand':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link7 = `https://textpro.me/sand-engraved-3d-text-effect-989.html`
     let anu7 = await textpro(link7, q)
     console.log(anu7)
    arielspkece.sendMessage(m.chat, { image: { url : anu7 }, caption: `${global.botname}`}, { quoted: ftok } )
   
}
  break
  
  
  case 'magma':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link8 = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anu8 = await textpro(link8, q)
     console.log(anu8)
    arielspkece.sendMessage(m.chat, { image: { url : anu8 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'sketch':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link9 = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anu9 = await textpro(link9, q)
     console.log(anu9)
    arielspkece.sendMessage(m.chat, { image: { url : anu9 }, caption: `${global.botname}`}, { quoted: fonceimg } )
   
}
  break
  
  
  case 'batman':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link10 = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
     let anu10 = await textpro(link10, q)
     console.log(anu10)
    arielspkece.sendMessage(m.chat, { image: { url : anu10 }, caption: `${global.botname}`}, { quoted: ftok } )
   
}
  break
case 'demon':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link11 = `https://textpro.me/create-green-horror-style-text-effect-online-1036.html`
     let anu11 = await textpro(link11, q)
     console.log(anu11)
    arielspkece.sendMessage(m.chat, { image: { url : anu11 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'sci_fi':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link12 = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anu12 = await textpro(link12, q)
     console.log(anu12)
    arielspkece.sendMessage(m.chat, { image: { url : anu12 }, caption: `${global.botname}`}, { quoted: fonceimg } )
   
}
  break
  
  
  case 'sea_metal':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link13 = `https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html`
     let anu13 = await textpro(link13, q)
     console.log(anu13)
    arielspkece.sendMessage(m.chat, { image: { url : anu13 }, caption: `${global.botname}`}, { quoted: ftok } )
   
}
  break
  
  
  case 'skeleton':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link14 = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
     let anu14 = await textpro(link14, q)
     console.log(anu14)
    arielspkece.sendMessage(m.chat, { image: { url : anu14 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'transformer':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link15 = `https://textpro.me/create-a-transformer-text-effect-online-1035.html`
     let anu15 = await textpro(link15, q)
     console.log(anu15)
    arielspkece.sendMessage(m.chat, { image: { url : anu15 }, caption: `${global.botname}`}, { quoted: fonceimg } )
   
}
  break
case 'warning':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link16 = `https://textpro.me/road-warning-text-effect-878.html`
     let anu16 = await textpro(link16, q)
     console.log(anu16)
    arielspkece.sendMessage(m.chat, { image: { url : anu16 }, caption: `${global.botname}`}, { quoted: ftok } )
   
}
  break
  
  
  case 'denim':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link17 = `https://textpro.me/denim-text-effect-online-919.html`
     let anu17 = await textpro(link17, q)
     console.log(anu17)
    arielspkece.sendMessage(m.chat, { image: { url : anu17 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'neon':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link18 = `https://textpro.me/neon-text-effect-online-963.html`
     let anu18 = await textpro(link18, q)
     console.log(anu18)
    arielspkece.sendMessage(m.chat, { image: { url : anu18 }, caption: `${global.botname}`}, { quoted: fonceimg } )
   
}
  break
  
  
  case 'waterpipeariel':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link19 = `https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html`
     let anu19 = await textpro(link19, q)
     console.log(anu19)
    arielspkece.sendMessage(m.chat, { image: { url : anu19 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'business3d':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link20 = `https://textpro.me/3d-business-sign-text-effect-1078.html`
     let anu20 = await textpro(link20, q)
     console.log(anu20)
    arielspkece.sendMessage(m.chat, { image: { url : anu20 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
case 'stoneariel3d':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link21 = `https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html`
     let anu21 = await textpro(link21, q)
     console.log(anu21)
    arielspkece.sendMessage(m.chat, { image: { url : anu21 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  case 'neon3dariel':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link22 = `https://textpro.me/create-3d-neon-light-text-effect-online-1028.html`
     let anu22 = await textpro(link22, q)
     console.log(anu22)
    arielspkece.sendMessage(m.chat, { image: { url : anu22 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'impresivariel':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link23 = `https://textpro.me/create-impressive-glitch-text-effects-online-1027.html`
     let anu23 = await textpro(link23, q)
     console.log(anu23)
    arielspkece.sendMessage(m.chat, { image: { url : anu23 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'neondevil3dariel':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link24 = `https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html`
     let anu24 = await textpro(link24, q)
     console.log(anu24)
    arielspkece.sendMessage(m.chat, { image: { url : anu24 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'underwater3d':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link25 = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anu25 = await textpro(link25, q)
     console.log(anu25)
    arielspkece.sendMessage(m.chat, { image: { url : anu25 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
case 'bears3dariel':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link26 = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anu26 = await textpro(link26, q)
     console.log(anu26)
    arielspkece.sendMessage(m.chat, { image: { url : anu26 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  case 'fireworkbucin':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link27 = `https://textpro.me/firework-sparkle-text-effect-930.html`
     let anu27 = await textpro(link27, q)
     console.log(anu27)
    arielspkece.sendMessage(m.chat, { image: { url : anu27 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'metaldarkariel':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link28 = `https://textpro.me/metal-dark-gold-text-effect-984.html`
     let anu28 = await textpro(link28, q)
     console.log(anu28)
    arielspkece.sendMessage(m.chat, { image: { url : anu28 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  case 'halloweenariel':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link29 = `https://textpro.me/halloween-fire-text-effect-940.html`
     let anu29 = await textpro(link29, q)
     console.log(anu29)
    arielspkece.sendMessage(m.chat, { image: { url : anu29 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'captainamerikabyariel':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link30= `https://textpro.me/captain-america-text-effect-905.html`
     let anu30 = await textpro(link30, q)
     console.log(anu30)
    arielspkece.sendMessage(m.chat, { image: { url : anu30 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
case 'spacetext':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link31 = `https://textpro.me/create-space-text-effects-online-free-1042.html`
     let anu31 = await textpro(link31, q)
     console.log(anu31)
    arielspkece.sendMessage(m.chat, { image: { url : anu31 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'plastic3d':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link32 = `https://textpro.me/plastic-bag-drug-text-effect-867.html`
     let anu32 = await textpro(link32, q)
     console.log(anu32)
    arielspkece.sendMessage(m.chat, { image: { url : anu32 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'dropwater3d':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link33 = `https://textpro.me/dropwater-text-effect-872.html`
     let anu33 = await textpro(link33, q)
     console.log(anu33)
    arielspkece.sendMessage(m.chat, { image: { url : anu33 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'arielpetir2':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link34 = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anu34 = await textpro(link34, q)
     console.log(anu34)
    arielspkece.sendMessage(m.chat, { image: { url : anu34 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'avengerslogo3d':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link35 = `https://textpro.me/create-3d-avengers-logo-online-974.html`
     let anu35 = await textpro(link35, q)
     console.log(anu35)
    arielspkece.sendMessage(m.chat, { image: { url : anu35 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
case 'brokenglass':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link36 = `https://textpro.me/broken-glass-text-effect-free-online-1023.html`
     let anu36 = await textpro(link36, q)
     console.log(anu36)
    arielspkece.sendMessage(m.chat, { image: { url : anu36 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'typography':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link37 = `https://textpro.me/create-artistic-typography-online-1086.html`
     let anu37 = await textpro(link37, q)
     console.log(anu37)
    arielspkece.sendMessage(m.chat, { image: { url : anu37 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'wonderfulgrafity3d':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link38 = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anu38 = await textpro(link38, q)
     console.log(anu38)
    arielspkece.sendMessage(m.chat, { image: { url : anu38 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  case 'futuristicneon3d':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link39 = `https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html`
     let anu39 = await textpro(link39, q)
     console.log(anu39)
    arielspkece.sendMessage(m.chat, { image: { url : anu39 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'skytext3d':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link40 = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anu40 = await textpro(link40, q)
     console.log(anu40)
    arielspkece.sendMessage(m.chat, { image: { url : anu40 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'robotr2':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link41 = `https://textpro.me/robot-r2-d2-text-effect-903.html`
     let anu41 = await textpro(link41, q)
     console.log(anu41)
    arielspkece.sendMessage(m.chat, { image: { url : anu41 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'breakwall':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link42 = `https://textpro.me/break-wall-text-effect-871.html`
     let anu42 = await textpro(link42, q)
     console.log(anu42)
    arielspkece.sendMessage(m.chat, { image: { url : anu42 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
  
  
  case 'matrixstyle':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.botname}`)
    const { textpro } = require('./scrape/textpro') 
     m.reply(`*Tunggu Kak ><*`)
     let link43 = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anu43 = await textpro(link43, q)
     console.log(anu43)
    arielspkece.sendMessage(m.chat, { image: { url : anu43 }, caption: `${global.botname}`}, { quoted: ftroli } )
   
}
  break
case 'pornhub':{
if (args.length < 1) return m.reply(`*Example* : ${prefix + command} ${global.owner}|Kece`, { quoted : ftroli } )
const { textpro } = require('./scrape/textpro') 
m.reply(mess.wait)
ariel1 = q.split("|")[0]
ariel2 = q.split("|")[1]
await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${ariel1}`,`${ariel2}`])
  .then((data) => arielspkece.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: ftroli }))
  .catch((err) => console.log(err));
}
break
case 'teksto':
if (args.length < 1) return m.reply(`*Example* :\n#teksto Ariel SP`)
m.reply(mess.wait)
buffer = `https://leyscoders-api.herokuapp.com/api/textto-image?text=${q}`
arielspkece.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!"}, {quoted:ftroli})
break
case 'nulis': case 'nuliskanan':{
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskanan* teks`)
m.reply(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./connect/nulis/buku/sebelumkanan.jpg','-font','./connect/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./connect/nulis/buku/setelahkanan.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
               arielspkece.sendMessage(m.chat, { image: fs.readFileSync('./connect/nulis/buku/setelahkanan.jpg')}, {quoted: ftroli, caption: `Jangan Malas Kak...`})
                })
            }
break
case 'waifu': case 'megumin':
case 'shinobu':
case 'awoo': case 'neko':{
m.reply(`*Tunggu Kak ><*`)
   let arielkeceabis = await fetchJson(`https:/\/\waifu.pics/api/sfw/${command}`)
     arielspkece.sendMessage(m.chat, { image: { url : arielkeceabis.url }, caption: `Makasih Kak`}, { quoted: ftroli } )
  }
 break
case 'husbu':
var buser = await fetchJson(`https://dt-04.herokuapp.com/api/husbu`)
var ress = buser
var hii = `*Char : ${ress.teks}*\n\n*Aespi Botz*`
arielspkece.sendMessage(m.chat, { image: { url: ress.gambar }, caption: hii }, { quoted: ftroli })
break
case 'neko2':
var buser = await fetchJson(`https://dt-04.herokuapp.com/api/neko`)
var resss = buser
var hii = `*Aespi Botz*`
arielspkece.sendMessage(m.chat, { image: { url: resss.gambar }, caption: hii }, { quoted: ftroli })
break
case 'apakah':
if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Saya Gay?`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul','Mungkin Iya','YNTKTS']
const kah = apa[Math.floor(Math.random() * apa.length)]
arielspkece.sendMessage(m.chat, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: ftroli })
break
case 'rate':
if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Ariel SP`)
const ra = ['0/10', '0,4/10', '1/10', '1,2/10','1,5/10','2/10','2,1/10','3/10','3,3/10','4/10','4,8/10','5/10','5,3/10','6/10','6,4/10','7/10','7,2/10','8/10','8,5/10','9/10','9,1/10','10/10']
const te = ra[Math.floor(Math.random() * ra.length)]
arielspkece.sendMessage(m.chat, { text: `「 *${q}* 」\n\n*Rate* : ${te}` }, { quoted: ftroli })
break
case 'bisakah':
if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Saya Berhenti Coli?`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!','Gak bisa lahh tolol aowkwowk']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
arielspkece.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: ftroli })
break
case 'bagaimanakah':
if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Menjadi Wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
arielspkece.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: ftroli })
break
case 'gantengcek':
case 'cekganteng':
if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Ariel SP`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
arielspkece.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: ftroli })
break
case 'cantikcek':
  case 'cekcantik':
if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Nama Cewe`)
	const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
arielspkece.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: ftroli })
break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Nama Lu`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
arielspkece.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: ftroli })
break
case 'kapankah':
				if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
arielspkece.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: ftroli })
break
case 'cekmati':
              if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Nama Lu`)
              const ajall = ['5', '10', '15','20', '25','30','2','6','17','8','55','1','4','70','75','80','85','90','100']
              const ajal = ajall[Math.floor(Math.random() * ajall.length)]
              arielspkece.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${ajal} Tahun lagi*\n\n*Tobat Bro Ajal Gada Yang Tau, Kalo Jumpscare Dan Lu Tiba² Mati Kan Ga Lucu*` }, { quoted: ftroli })
              break
case 'orangpintar': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let pintar = member[Math.floor(Math.random() * member.length)]
let orangpintargg = `Orang Pintar & Cerdas Di Group *${groupMetadata.subject}*\n\n@${pintar.split('@')[0]}`
arielspkece.sendMessage(m.chat, { text: orangpintargg, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'quotes':
case 'qoutes':
const { pickRandom } = require('./function')
var kotes2 = JSON.parse(fs.readFileSync("./Ariel-SP_Ganteng/quotes.json"))
var hasil = pickRandom(kotes2)
arielspkece.sendMessage(m.chat, {text: hasil.quotes}, { quoted: ftroli })
break
case 'gombalan':
const { arielRandom } = require('./function')
var gom = JSON.parse(fs.readFileSync("./Ariel-SP_Ganteng/gombalan.json"))
var bal = arielRandom(gom)
arielspkece.sendMessage(m.chat, {text: bal}, { quoted: ftroli })
break
case 'orangbego': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let bego = member[Math.floor(Math.random() * member.length)]
let orangbegoo = `Orang Bego & Beban Di Group *${groupMetadata.subject}*\n\n@${bego.split('@')[0]}`
arielspkece.sendMessage(m.chat, { text: orangbegoo, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'anakbuangan': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let yteam = member[Math.floor(Math.random() * member.length)]
let najis = `Anak Buangan & Suka Ngemis Di Group *${groupMetadata.subject}*\n\n@${yteam.split('@')[0]}`
arielspkece.sendMessage(m.chat, { text: najis, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'listadmin':
if (!m.isGroup) throw mess.group
   var mems = []
      var teks = `*「 All Admin 」*\n${q !== undefined ? q : `Pesan Tidak Ada`}\n`
      for (let i of groupAdmins) {
        teks += `> @${i.split("@")[0]}\n`
        mems.push(i)
      }
      arielspkece.sendMessage(m.chat, { text: teks, mentions: mems}, { quoted: ftroli })
      break
case 'nuliskiri':{
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskiri* teks`)
m.reply(mess.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./connect/nulis/buku/sebelumkiri.jpg','-font','./connect/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./connect/nulis/buku/setelahkiri.jpg'])
.on('error', () => m.reply('error'))
.on('exit', () => {
arielspkece.sendMessage(m.chat, { image: fs.readFileSync('./connect/nulis/buku/setelahkiri.jpg')}, {quoted: ftroli, caption: `Jangan Malas Kak...`})
})
}
break
case 'foliokiri':{
 if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokiri* teks`)
m.reply(mess.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./connect/nulis/buku/folio/sebelumkiri.jpg','-font','./connect/nulis/font/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./connect/nulis/buku/folio/setelahkiri.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
                arielspkece.sendMessage(m.chat, { image: fs.readFileSync('./connect/nulis/buku/folio/setelahkiri.jpg')}, {quoted: ftok, caption: `Jangan Malas Kak...`})
                })
            }
            
break
case 'foliokanan':{
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokanan* teks`)
m.reply(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./connect/nulis/buku/folio/sebelumkanan.jpg','-font','./connect/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./connect/nulis/buku/folio/setelahkanan.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
                arielspkece.sendMessage(m.chat, { image: fs.readFileSync('./connect/nulis/buku/folio/setelahkanan.jpg')}, {quoted: ftroli, caption: `Jangan Malas Kak...`})
                })
            }
break
case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await arielspkece.sendImageAsSticker(m.chat, res.url, ftroli, { packname: global.botname, author: global.packname, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await arielspkece.sendImageAsSticker(m.chat, res.url, ftok, { packname: global.botname, author: global.packname, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case 'attp': {
const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
arielspkece.sendMessage(m.chat, { sticker : buff}, { quoted: ftroli }) 
}
break
case 'patrik':
case 'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await arielspkece.sendImageAsSticker(m.chat, wifegerakx, ftroli, { packname: global.botname, author: global.packname })
await fs.unlinkSync(encmedia)
}
break
case 'terjemahan': {
if (!args.join(" ")) return m.reply("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
arielspkece.sendText(m.chat, `🌐Translate : ${Detek}\n\n📘Hasil : ${Infoo}`, ftok)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await arielspkece.sendImageAsSticker(m.chat, wifegerakx, ftok, { packname: global.botname, author: global.packname })
await fs.unlinkSync(encmedia)
}
break
case 'doge':
case 'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await arielspkece.sendImageAsSticker(m.chat, wifegerakx, ftok, { packname: global.botname, author: global.packname })
await fs.unlinkSync(encmedia)
}
break
case 'bucinstick':
case 'bucin' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await arielspkece.sendImageAsSticker(m.chat, wifegerakx, ftok, { packname: global.botname, author: global.packname })
await fs.unlinkSync(encmedia)
}
break
case 'prem': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`*Example* : #prem add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isPremium = premium.includes(orgnye)
if (args[0] === "add") {
if (isPremium) return m.reply('User sudah menjadi Premium')
premium.push(orgnye)
m.reply(`*Succes ${q}*\n*Menjadi User Premium*`)
} else if (args[0] === "del") {
if (!isPremium) return m.reply('User bukan premium')
let delprem = premium.indexOf(orgnye)
premium.splice(delpreftroli, 1)
m.reply(`*Succes ${q}*\n*Dari User Premium*`)
} else {
m.reply("Error")
}
}
break
case 'ping': case 'speed': case 'tes':
let timestamp = speed()
let latensi = speed() - timestamp
m.reply(`*Status Bot Online*\nSpeed : ${latensi.toFixed(4)} _Second_\n\n*Runtime : ${runtime(process.uptime())}*`)
break
case 'runtime':
m.reply(`*Runtime : ${runtime(process.uptime())}*`)
break
case 'status': case 'botstatus': case 'statusbot': {
var mono = '```'
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `> *_Internal Bot Server_*
${mono}RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}${mono}

> *_NodeJS Memory Usaage_*
${mono}${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}${mono}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'owner': case 'creator': {
arielspkece.sendContact(m.chat, global.owner, m)
}
break
case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
arielspkece.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'waslayer':
m.reply('Silahkan Ketik #mediafire https://www.mediafire.com/file/j4eha2ddb5eyp1a/Aespi+Botz+V3.apk/file')
break
case 'waiphonev1':
m.reply('Silahkan Ketik #mediafire https://www.mediafire.com/file/mz37h4v0hmaj0ox/Aespi-Botz.apk/file')
break
case 'waiphonev2':
m.reply('Silahkan Ketik #mediafire https://www.mediafire.com/file/i6ydzle6dfjhjvi/Aespi+Botz+V2.apk/file')
break
case 'tomp3': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await arielspkece.downloadMediaMessage(qmsg)
let { toAudio } = require('../message/converter')
let audio = await toAudio(media, 'mp4')
arielspkece.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : ftroli })
}
break
case 'tomp4': case 'tovideo': {
if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('../connect/scrape/uploader')
let media = await arielspkece.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await arielspkece.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Done' } }, { quoted: ftroli })
await fs.unlinkSync(media)
}
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await arielspkece.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
arielspkece.sendMessage(m.chat, { image: buffer }, { quoted: ftroli })
fs.unlinkSync(ran)
})
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await arielspkece.sendImageAsSticker(m.chat, media, ftroli, { packname: global.botname, author: global.packname })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await arielspkece.sendVideoAsSticker(m.chat, media, ftroli, { packname: global.botname, author: global.packname })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
m.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await arielspkece.downloadMediaMessage(qmsg)
let { floNime } = require('./scrape/smeme')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await arielspkece.sendImageAsSticker(m.chat, smeme, ftok, { packname: global.botname, author: global.packname })
await fs.unlinkSync(FaTiH)
}
break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
let [teks1, teks2] = text.split`|`
if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await arielspkece.sendImageAsSticker(m.chat, media, ftroli, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await arielspkece.sendVideoAsSticker(m.chat, media, fonceimg, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await arielspkece.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await arielspkece.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await arielspkece.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'creategc':
if (!isCreator) throw mess.owner
if (args.length < 1) return m.reply(`*Contoh* :\n#creategc namagroup`)
let cret = await arielspkece.groupCreate(args.join(" "), [])
let response = await arielspkece.groupInviteCode(cret.id)
teks = `  「 *Create Group* 」

_▸ Nama : ${cret.subject}_
_▸ Pembuat : @${cret.owner.split("@")[0]}_
_▸ Waktu : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_

https://chat.whatsapp.com/${response}
`
m.reply(teks)
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let txt = `「 *Broadcast* 」\n\n${text}`
arielspkece.sendMessage(yoi, { image: { url : './connect/image/thumb.jpg' }, caption: txt }, { quoted: ftroli } )
}
m.reply('Sukses Broadcast')
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await arielspkece.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let txt = `「 *Broadcast* 」\n\n${text}`
arielspkece.sendMessage(i, { image: { url : './connect/image/thumb.jpg' }, caption: txt }, { quoted: ftroli } )
}
m.reply('Sukses Broadcast')
}
break
case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./scrape/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                arielspkece.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: ftroli })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./scrape/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                arielspkece.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: ftroli })
            }
            break
case 'tiktokmp3':{
const { TiktokDownloader } = require('./scrape/tiktokdl') 
  if (!q) throw `Contoh : #tiktokmp3 Link Video Tiktok`
  if (!q.includes('tiktok')) throw `Itu bukan link tiktok!`
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply('Error Bang') 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.media[2].url
    arielspkece.sendMessage(m.chat, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break

  case 'tiktoknowm':{
const { TiktokDownloader } = require('./scrape/tiktokdl') 
  if (!q) throw `Contoh : #tiktoknowm Link Video Tiktok`
  if (!q.includes('tiktok')) throw `Itu bukan link tiktok!`
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply('Error Bang') 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.media[1].url
    arielspkece.sendMessage(m.chat, { video: { url: musim_duren_v }, caption: `Done` }, { quoted: m })
   }
  break
case 'happymod': {
const yogipw = require("tod-api")
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} Winning Eleven`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
arielspkece.sendMessage(m.chat, { image: { url : res[0].icon }, caption: teks}, { quoted: ftok } )
})
}
break
case 'pinterest': {
const { pinterest } = require('./scrape/ApiOrScrap')
const arielPinter = await pinterest(q)
const hasil = arielPinter[Math.floor(Math.random(), arielPinter.length)]
arielspkece.sendMessage(m.chat, { image: { url: hasil }, caption: '▹ Ariel Kece' }, { quoted: ftok })
}
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let arielTiktod1 = await yts(text)
let ggAbiss1 = arielTiktod1.videos[Math.floor(Math.random() * arielTiktod1.videos.length)];
let arielTiktod2 = await yts(text)
let ggAbis2 = arielTiktod2.videos[Math.floor(Math.random() * arielTiktod2.videos.length)];
let arielTiktod3 = await yts(text)
let ggAbis3 = arielTiktod3.videos[Math.floor(Math.random() * arielTiktod3.videos.length)];
let arielTiktod4 = await yts(text)
let ggAbis4 = arielTiktod4.videos[Math.floor(Math.random() * arielTiktod4.videos.length)];
let arielTiktod5 = await yts(text)
let ggAbis5 = arielTiktod5.videos[Math.floor(Math.random() * arielTiktod5.videos.length)];
let arielTiktod6 = await yts(text)
let ggAbis6 = arielTiktod6.videos[Math.floor(Math.random() * arielTiktod6.videos.length)];
let arielTiktod7 = await yts(text)
let ggAbis7 = arielTiktod7.videos[Math.floor(Math.random() * arielTiktod7.videos.length)];
let arielTiktod8 = await yts(text)
let ggAbis8 = arielTiktod8.videos[Math.floor(Math.random() * arielTiktod8.videos.length)];
let arielTiktod9 = await yts(text)
let ggAbis9 = arielTiktod9.videos[Math.floor(Math.random() * arielTiktod9.videos.length)];
let arielTiktod10 = await yts(text)
let ggAbis10 = arielTiktod10.videos[Math.floor(Math.random() * arielTiktod10.videos.length)];
let arielTiktod11 = await yts(text)
let ggAbis11 = arielTiktod11.videos[Math.floor(Math.random() * arielTiktod11.videos.length)];
let arielTiktod12 = await yts(text)
let ggAbis12 = arielTiktod12.videos[Math.floor(Math.random() * arielTiktod12.videos.length)];
let arielTiktod13 = await yts(text)
let ggAbis13 = arielTiktod13.videos[Math.floor(Math.random() * arielTiktod13.videos.length)];
let arielTiktod14 = await yts(text)
let ggAbis14 = arielTiktod14.videos[Math.floor(Math.random() * arielTiktod14.videos.length)];
let arielTiktod15 = await yts(text)
let ggAbis15 = arielTiktod15.videos[Math.floor(Math.random() * arielTiktod15.videos.length)];
let arielTiktod16 = await yts(text)
let ggAbis16 = arielTiktod16.videos[Math.floor(Math.random() * arielTiktod16.videos.length)];
let arielTiktod17 = await yts(text)
let ggAbis17 = arielTiktod17.videos[Math.floor(Math.random() * arielTiktod17.videos.length)];
const arielkecesp = `Hii Kak *${m.pushName}* ${ucapanWaktu}

Silahkan Klick Button Dibawah Untuk Melihat Yang Anda Cari Di Fitur YouTube Search`
let sections = [
{
title: `1. ${ggAbiss1.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbiss1.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbiss1.title}\n👤 Pemilik Channel : ${ggAbiss1.author.name}\n⌚ Durasi Video : ${ggAbiss1.timestamp}\n🔗 Link Pemilik : ${ggAbiss1.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbiss1.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbiss1.title}\n👤 Pemilik Channel : ${ggAbiss1.author.name}\n⌚ Durasi Video : ${ggAbiss1.timestamp}\n🔗 Link Pemilik : ${ggAbiss1.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `2. ${ggAbis2.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis2.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis2.title}\n👤 Pemilik Channel : ${ggAbis2.author.name}\n⌚ Durasi Video : ${ggAbis2.timestamp}\n🔗 Link Pemilik : ${ggAbis2.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis2.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis2.title}\n👤 Pemilik Channel : ${ggAbis2.author.name}\n⌚ Durasi Video : ${ggAbis2.timestamp}\n🔗 Link Pemilik : ${ggAbis2.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `3. ${ggAbis3.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis3.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis3.title}\n👤 Pemilik Channel : ${ggAbis3.author.name}\n⌚ Durasi Video : ${ggAbis3.timestamp}\n🔗 Link Pemilik : ${ggAbis3.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis3.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis3.title}\n👤 Pemilik Channel : ${ggAbis3.author.name}\n⌚ Durasi Video : ${ggAbis3.timestamp}\n🔗 Link Pemilik : ${ggAbis3.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `4. ${ggAbis4.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis4.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis4.title}\n👤 Pemilik Channel : ${ggAbis4.author.name}\n⌚ Durasi Video : ${ggAbis4.timestamp}\n🔗 Link Pemilik : ${ggAbis4.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis4.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis4.title}\n👤 Pemilik Channel : ${ggAbis4.author.name}\n⌚ Durasi Video : ${ggAbis4.timestamp}\n🔗 Link Pemilik : ${ggAbis4.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `5. ${ggAbis5.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis5.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis5.title}\n👤 Pemilik Channel : ${ggAbis5.author.name}\n⌚ Durasi Video : ${ggAbis5.timestamp}\n🔗 Link Pemilik : ${ggAbis5.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis5.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis5.title}\n👤 Pemilik Channel : ${ggAbis5.author.name}\n⌚ Durasi Video : ${ggAbis5.timestamp}\n🔗 Link Pemilik : ${ggAbis5.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `6. ${ggAbis6.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis6.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis6.title}\n👤 Pemilik Channel : ${ggAbis6.author.name}\n⌚ Durasi Video : ${ggAbis6.timestamp}\n🔗 Link Pemilik : ${ggAbis6.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis6.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis6.title}\n👤 Pemilik Channel : ${ggAbis6.author.name}\n⌚ Durasi Video : ${ggAbis6.timestamp}\n🔗 Link Pemilik : ${ggAbis6.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `7. ${ggAbis7.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis7.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis7.title}\n👤 Pemilik Channel : ${ggAbis7.author.name}\n⌚ Durasi Video : ${ggAbis7.timestamp}\n🔗 Link Pemilik : ${ggAbis7.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis7.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis7.title}\n👤 Pemilik Channel : ${ggAbis7.author.name}\n⌚ Durasi Video : ${ggAbis7.timestamp}\n🔗 Link Pemilik : ${ggAbis7.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `8. ${ggAbis8.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis8.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis8.title}\n👤 Pemilik Channel : ${ggAbis8.author.name}\n⌚ Durasi Video : ${ggAbis8.timestamp}\n🔗 Link Pemilik : ${ggAbis8.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis8.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis8.title}\n👤 Pemilik Channel : ${ggAbis8.author.name}\n⌚ Durasi Video : ${ggAbis8.timestamp}\n🔗 Link Pemilik : ${ggAbis8.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `9. ${ggAbis9.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis9.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis9.title}\n👤 Pemilik Channel : ${ggAbis9.author.name}\n⌚ Durasi Video : ${ggAbis9.timestamp}\n🔗 Link Pemilik : ${ggAbis9.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis9.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis9.title}\n👤 Pemilik Channel : ${ggAbis9.author.name}\n⌚ Durasi Video : ${ggAbis9.timestamp}\n🔗 Link Pemilik : ${ggAbis9.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `10. ${ggAbis10.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis10.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis10.title}\n👤 Pemilik Channel : ${ggAbis10.author.name}\n⌚ Durasi Video : ${ggAbis10.timestamp}\n🔗 Link Pemilik : ${ggAbis10.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis10.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis10.title}\n👤 Pemilik Channel : ${ggAbis10.author.name}\n⌚ Durasi Video : ${ggAbis10.timestamp}\n🔗 Link Pemilik : ${ggAbis10.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `11. ${ggAbis11.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis11.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis11.title}\n👤 Pemilik Channel : ${ggAbis11.author.name}\n⌚ Durasi Video : ${ggAbis11.timestamp}\n🔗 Link Pemilik : ${ggAbis11.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis11.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis11.title}\n👤 Pemilik Channel : ${ggAbis11.author.name}\n⌚ Durasi Video : ${ggAbis11.timestamp}\n🔗 Link Pemilik : ${ggAbis11.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `12. ${ggAbis12.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis12.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis12.title}\n👤 Pemilik Channel : ${ggAbis12.author.name}\n⌚ Durasi Video : ${ggAbis12.timestamp}\n🔗 Link Pemilik : ${ggAbis12.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis12.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis12.title}\n👤 Pemilik Channel : ${ggAbis12.author.name}\n⌚ Durasi Video : ${ggAbis12.timestamp}\n🔗 Link Pemilik : ${ggAbis12.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `13. ${ggAbis13.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis13.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis13.title}\n👤 Pemilik Channel : ${ggAbis13.author.name}\n⌚ Durasi Video : ${ggAbis13.timestamp}\n🔗 Link Pemilik : ${ggAbis13.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis13.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis13.title}\n👤 Pemilik Channel : ${ggAbis13.author.name}\n⌚ Durasi Video : ${ggAbis13.timestamp}\n🔗 Link Pemilik : ${ggAbis13.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `14. ${ggAbis14.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis14.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis14.title}\n👤 Pemilik Channel : ${ggAbis14.author.name}\n⌚ Durasi Video : ${ggAbis14.timestamp}\n🔗 Link Pemilik : ${ggAbis14.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis14.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis14.title}\n👤 Pemilik Channel : ${ggAbis14.author.name}\n⌚ Durasi Video : ${ggAbis14.timestamp}\n🔗 Link Pemilik : ${ggAbis14.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `15. ${ggAbis15.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis15.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis15.title}\n👤 Pemilik Channel : ${ggAbis15.author.name}\n⌚ Durasi Video : ${ggAbis15.timestamp}\n🔗 Link Pemilik : ${ggAbis15.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis15.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis15.title}\n👤 Pemilik Channel : ${ggAbis15.author.name}\n⌚ Durasi Video : ${ggAbis15.timestamp}\n🔗 Link Pemilik : ${ggAbis15.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `16. ${ggAbis16.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis16.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis16.title}\n👤 Pemilik Channel : ${ggAbis16.author.name}\n⌚ Durasi Video : ${ggAbis16.timestamp}\n🔗 Link Pemilik : ${ggAbis16.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis16.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis16.title}\n👤 Pemilik Channel : ${ggAbis16.author.name}\n⌚ Durasi Video : ${ggAbis16.timestamp}\n🔗 Link Pemilik : ${ggAbis16.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `17. ${ggAbis17.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis17.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis17.title}\n👤 Pemilik Channel : ${ggAbis17.author.name}\n⌚ Durasi Video : ${ggAbis17.timestamp}\n🔗 Link Pemilik : ${ggAbis17.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis17.url}`, description: `Jangan Lupa Subscribe YouTube Owner : https://youtube.com/c/ArielSPSus\n\n🎥 Judul Video : ${ggAbis17.title}\n👤 Pemilik Channel : ${ggAbis17.author.name}\n⌚ Durasi Video : ${ggAbis17.timestamp}\n🔗 Link Pemilik : ${ggAbis17.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
]
let iniByArielSP = {
footer: `${global.botname}`,
text: arielkecesp, 
buttonText: `Click Here`,
sections}
arielspkece.sendMessage(m.chat, iniByArielSP, {quoted :fgi })
}
break
case 'play': case 'ytplay':{
	let { youtube, searchResult } = require('./scrape/ytdl')
   if (!text) throw `Example : ${prefix + command} story wa anime`
   let yts = require("yt-search")
   let fresh =  await yts(text)
    let mp3nya = fresh.videos[Math.floor(Math.random() * fresh.videos.length)];

    const allhamdulillah = `「 *YOUTUBE PLAY* 」
                    
📷 Judul : *${mp3nya.title}*
⌚ Durasi : *${mp3nya.timestamp}*
👥 Penonton : *${mp3nya.views}*
📅 Upload : *${mp3nya.ago}*
👤 Pemilik : *${mp3nya.author.name}*
👋 Channel : *${mp3nya.author.url}*
📝 Deskripsi : *${mp3nya.description}*
🔗 Url : ${mp3nya.url}`
    console.log(mp3nya.url)

    await youtube(mp3nya.url)

     .then((res) => {

      const { mp3, title } = res

      arielspkece.sendMessage(m.chat, { image: { url : mp3nya.thumbnail }, caption: allhamdulillah }, { quoted: ftroli } )
      arielspkece.sendMessage(m.chat, { audio: { url: mp3 }, mimetype: 'audio/mp4' }, { quoted: ftroli })




      })

    }

  break
case 'menu2': {
const allmenuea = `✘ *I N F O - B O T*

⌕ #Nama Owner : *Ariel SP*
⌕ #Nama Bot : *${global.botname}*
⌕ #Nomor Owner : wa.me/${global.premium}

✘ *G R O U P - M E N U*

⌕ #add
⌕ #kick
⌕ #promote
⌕ #demote
⌕ #setname
⌕ #setdesc
⌕ #setppgrup
⌕ #tagall
⌕ #hidetag
⌕ #group
⌕ #editinfo
⌕ #antilink

✘ *O W N E R - M E N U*

⌕ #join
⌕ #creategc
⌕ #block
⌕ #unblock
⌕ #bcall
⌕ #bcgc
⌕ #broadcast
⌕ #setppbot

✘ *F U N - M E N U*

⌕ #jadian
⌕ #jodohku
⌕ #tictactoe
⌕ #delttt
⌕ #family100
⌕ #tebak
⌕ #math
⌕ #suitpvp
⌕ #apakah
⌕ #rate
⌕ #bisakah
⌕ #bagaimanakah
⌕ #cekganteng
⌕ #cekcantik
⌕ #ceksange
⌕ #cekgay
⌕ #ceklesbi
⌕ #kapankah
⌕ #cekmati
⌕ #orangpintar
⌕ #orangbego
⌕ #anakbuangan
⌕ #couple
⌕ #pinterest
⌕ #happymod
⌕ #quotes
⌕ #gombalan
⌕ #terjemahan
⌕ #doge
⌕ #gura
⌕ #bucin
⌕ #patrik
⌕ #attp

✘ *C O N V E R T - M E N U*

⌕ #tahta
⌕ #teksto
⌕ #sticker
⌕ #tomp3
⌕ #tomp4
⌕ #toimage
⌕ #stickerwm
⌕ #stickermeme
⌕ #emojimix
⌕ #emojimix2

✘ *N U L I S - M E N U*

⌕ #nulis
⌕ #nuliskiri
⌕ #nuliskanan
⌕ #foliokiri
⌕ #foliokanan

✘ *T E X T P R O - M E N U*

⌕ #arielpetir <text>
⌕ #arielpetir2 <text>
⌕ #pottery <text>
⌕ #bussines3d <text>
⌕ #stoneariel3d <text>
⌕ #neon3dariel <text>
⌕ #neon <text>
⌕ #impresiveariel <text>
⌕ #neondevil3dariel <text>
⌕ #underwater3d <text>
⌕ #bears3dariel <text>
⌕ #fireworkbucin <text>
⌕ #metaldarkariel <text>
⌕ #halloweenariel <text>
⌕ #captainamerikabyariel <text>
⌕ #spacetext <text>
⌕ #plastic3d <text>
⌕ #dropwater3d <text>
⌕ #avengerslogo3d <text>
⌕ #brokenglass <text>
⌕ #wonderfulgravity3d <text>
⌕ #futuristicneon3d <text>
⌕ #skytext3d <text>
⌕ #robotr2 <text>
⌕ #pornhub teks1|teks2
⌕ #breakwall <text>
⌕ #matrixstyle <text>
⌕ #waterpiperariel <text>
⌕ #blackpink <text>
⌕ #lightglow <text>
⌕ #glass <text>
⌕ #hoorror_blood <text>
⌕ #sand <text>
⌕ #sketch <text>
⌕ #magma <text>
⌕ #batman <text>
⌕ #demon <text>
⌕ #sci_fi <text>
⌕ #sea_metal <text>
⌕ #skeleton <text>
⌕ #transformer <text>
⌕ #warning <text>
⌕ #denim <text>

✘ *A N I M E - M E N U*

⌕ #megumin
⌕ #waifu
⌕ #neko
⌕ #shinobu
⌕ #awoo
⌕ #husbu
⌕ #neko2

✘ *KISAH - M E N U*

⌕ #kisahnabi adam
⌕ #kisahnabi ayyub
⌕ #kisahnabi daud
⌕ #kisahnabi dzulkifli
⌕ #kisahnabi harun
⌕ #kisahnabi hud
⌕ #kisahnabi ibrahim
⌕ #kisahnabi idris
⌕ #kisahnabi ilyas
⌕ #kisahnabi ilyasa
⌕ #kisahnabi isa
⌕ #kisahnabi ishaq
⌕ #kisahnabi ismail
⌕ #kisahnabi luth
⌕ #kisahnabi muhammad
⌕ #kisahnabi musa
⌕ #kisahnabi nuh
⌕ #kisahnabi sholeh
⌕ #kisahnabi sulaiman
⌕ #kisahnabi syuaib
⌕ #kisahnabi yahya
⌕ #kisahnabi yaqub
⌕ #kisahnabi yunus
⌕ #kisahnabi yusuf
⌕ #kisahnabi zakariya

✘ *D O W N L O A D - M E N U*

⌕ #play
⌕ #ytsearch
⌕ #ytmp3
⌕ #ytmp4
⌕ #tiktoknowm
⌕ #tiktokmp3
⌕ #mediafire

✘ *W A - I M U N*

⌕ #waslayer
⌕ #waiphonev1
⌕ #waiphonev2

✘ *S O U N D - M E N U*

⌕ #sound1
⌕ #sound2
⌕ #sound3
⌕ #sound4
⌕ #sound5
⌕ #sound6
⌕ #sound7
⌕ #sound8
⌕ #sound9
⌕ #sound10
⌕ #sound11
⌕ #sound12
⌕ #sound13
⌕ #sound14
⌕ #sound15
⌕ #sound16
⌕ #sound17
⌕ #sound18
⌕ #sound19
⌕ #sound20
⌕ #sound21
⌕ #sound22
⌕ #sound23
⌕ #sound24
⌕ #sound25
⌕ #sound26
⌕ #sound27
⌕ #sound28
⌕ #sound29`
arielspkece.sendMessage(m.chat, { image: { url : './connect/image/thumb.jpg' }, caption: allmenuea }, { quoted: ftroli } )
}
break
case 'help': case 'menu': {
const arielkece = `Hii Kak *${m.pushName}* ${ucapanWaktu}

Silahkan Klick Button Dibawah Untuk Melihat Beberapa Fitur Yang Tersedia`
let sections = [
{
title: `Hii Kak ${m.pushName} ${ucapanWaktu}`,
rows: [
{title: "🇮🇩 Semua Menu", rowId: `#menu3`, description: `Semua Menu`},
{title: "🇮🇩 Group Menu", rowId: `#groupa`, description: `Group Menu`},
{title: "🇮🇩 Owner Menu", rowId: `#ownera`, description: `Khusus Owner Kak`},
{title: "🇮🇩 Fun Menu", rowId: `#funa`, description: `Menu Fun No Baper Ya Kak`},
{title: "🇮🇩 Convert Menu", rowId: `#cona`, description: `Bisa Ubah Foto Jadi Stiker DLL`},
{title: "🇮🇩 Nulis Menu", rowId: `#nulisa`, description: `Nih Cocok Buat Yang Lagi Males Nulis`},
{title: "🇮🇩 Textpro Menu", rowId: `#texta`, description: `Menu Textpro Untuk Bikin Logo`},
{title: "🇮🇩 Anime Menu", rowId: `#animea`, description: `Anime Menu Khusus Para Wibu & Anime Lovers`},
{title: "🇮🇩 Kisah Nabi Menu", rowId: `#kisaha`, description: `Kisah Para Nabi`},
{title: "🇮🇩 Download Menu", rowId: `#downloada`, description: `Bisa Download Video Tiktok & YouTube`},
{title: "🇮🇩 Wa Imun Menu", rowId: `#waa`, description: `Ada WhatsApp iPhone`},
{title: "🇮🇩 Sound Menu", rowId: `#sounda`, description: `Menu Musik`},
]
},
]
let listMessage = {
footer: `${global.botname}`,
text: arielkece, 
buttonText: "Ariel SP 🤫",
sections}
arielspkece.sendMessage(m.chat, listMessage, {quoted :fgi })
}
break
case 'groupa':
const yaha = `✘ *G R O U P - M E N U*

⌕ #add
⌕ #kick
⌕ #promote
⌕ #demote
⌕ #setname
⌕ #setdesc
⌕ #setppgrup
⌕ #tagall
⌕ #hidetag
⌕ #group
⌕ #editinfo
⌕ #antilink`
arielspkece.sendText(m.chat, yaha, ftok)
break
case 'ownera':
const ownerAr = `✘ *O W N E R - M E N U*

⌕ #join
⌕ #creategc
⌕ #block
⌕ #unblock
⌕ #bcall
⌕ #bcgc
⌕ #broadcast
⌕ #setppbot`
arielspkece.sendText(m.chat, ownerAr, ftok)
break
case 'funa':
const funAr = `✘ *F U N - M E N U*

⌕ #jadian
⌕ #jodohku
⌕ #tictactoe
⌕ #delttt
⌕ #family100
⌕ #tebak
⌕ #math
⌕ #suitpvp
⌕ #apakah
⌕ #rate
⌕ #bisakah
⌕ #bagaimanakah
⌕ #cekganteng
⌕ #cekcantik
⌕ #ceksange
⌕ #cekgay
⌕ #ceklesbi
⌕ #kapankah
⌕ #cekmati
⌕ #orangpintar
⌕ #orangbego
⌕ #anakbuangan
⌕ #couple
⌕ #pinterest
⌕ #happymod
⌕ #quotes
⌕ #gombalan
⌕ #doge
⌕ #gura
⌕ #bucin
⌕ #patrik
⌕ #attp
⌕ #terjemahan`
arielspkece.sendText(m.chat, funAr, ftok)
break
case 'cona':
const conAr = `✘ *C O N V E R T - M E N U*

⌕ #tahta
⌕ #teksto
⌕ #sticker
⌕ #tomp3
⌕ #tomp4
⌕ #toimage
⌕ #stickerwm
⌕ #stickermeme
⌕ #emojimix
⌕ #emojimix2`
arielspkece.sendText(m.chat, conAr, ftok)
break
case 'nulisa':
const nulisAr = `✘ *N U L I S - M E N U*

⌕ #nulis
⌕ #nuliskiri
⌕ #nuliskanan
⌕ #foliokiri
⌕ #foliokanan`
arielspkece.sendText(m.chat, nulisAr, ftok)
break
case 'texta':
const textAr = `✘ *T E X T P R O - M E N U*

⌕ #arielpetir <text>
⌕ #arielpetir2 <text>
⌕ #pottery <text>
⌕ #bussines3d <text>
⌕ #stoneariel3d <text>
⌕ #neon3dariel <text>
⌕ #neon <text>
⌕ #impresiveariel <text>
⌕ #neondevil3dariel <text>
⌕ #underwater3d <text>
⌕ #bears3dariel <text>
⌕ #fireworkbucin <text>
⌕ #metaldarkariel <text>
⌕ #halloweenariel <text>
⌕ #captainamerikabyariel <text>
⌕ #spacetext <text>
⌕ #plastic3d <text>
⌕ #dropwater3d <text>
⌕ #avengerslogo3d <text>
⌕ #brokenglass <text>
⌕ #wonderfulgravity3d <text>
⌕ #futuristicneon3d <text>
⌕ #skytext3d <text>
⌕ #robotr2 <text>
⌕ #pornhub teks1|teks2
⌕ #breakwall <text>
⌕ #matrixstyle <text>
⌕ #waterpiperariel <text>
⌕ #blackpink <text>
⌕ #lightglow <text>
⌕ #glass <text>
⌕ #hoorror_blood <text>
⌕ #sand <text>
⌕ #sketch <text>
⌕ #magma <text>
⌕ #batman <text>
⌕ #demon <text>
⌕ #sci_fi <text>
⌕ #sea_metal <text>
⌕ #skeleton <text>
⌕ #transformer <text>
⌕ #warning <text>
⌕ #denim <text>`
arielspkece.sendText(m.chat, textAr, ftok)
break
case 'animea':
const animeAr = `✘ *A N I M E - M E N U*

⌕ #megumin
⌕ #waifu
⌕ #neko
⌕ #shinobu
⌕ #awoo
⌕ #husbu
⌕ #neko2`
arielspkece.sendText(m.chat, animeAr, ftok)
break
case 'kisaha':
const kisahAr = `✘ *KISAH - M E N U*

⌕ #kisahnabi adam
⌕ #kisahnabi ayyub
⌕ #kisahnabi daud
⌕ #kisahnabi dzulkifli
⌕ #kisahnabi harun
⌕ #kisahnabi hud
⌕ #kisahnabi ibrahim
⌕ #kisahnabi idris
⌕ #kisahnabi ilyas
⌕ #kisahnabi ilyasa
⌕ #kisahnabi isa
⌕ #kisahnabi ishaq
⌕ #kisahnabi ismail
⌕ #kisahnabi luth
⌕ #kisahnabi muhammad
⌕ #kisahnabi musa
⌕ #kisahnabi nuh
⌕ #kisahnabi sholeh
⌕ #kisahnabi sulaiman
⌕ #kisahnabi syuaib
⌕ #kisahnabi yahya
⌕ #kisahnabi yaqub
⌕ #kisahnabi yunus
⌕ #kisahnabi yusuf
⌕ #kisahnabi zakariya`
arielspkece.sendText(m.chat, kisahAr, ftok)
break
case 'downloada':
const downloadAr = `✘ *D O W N L O A D - M E N U*

⌕ #play
⌕ #ytsearch
⌕ #ytmp3
⌕ #ytmp4
⌕ #tiktoknowm
⌕ #tiktokmp3
⌕ #mediafire`
arielspkece.sendText(m.chat, downloadAr, ftok)
break
case 'waa':
const waAr = `✘ *W A - I M U N*

⌕ #waslayer
⌕ #waiphonev1
⌕ #waiphonev2`
arielspkece.sendText(m.chat, waAr, ftok)
break
case 'sounda':
const soundAr = `✘ *S O U N D - M E N U*

⌕ #sound1
⌕ #sound2
⌕ #sound3
⌕ #sound4
⌕ #sound5
⌕ #sound6
⌕ #sound7
⌕ #sound8
⌕ #sound9
⌕ #sound10
⌕ #sound11
⌕ #sound12
⌕ #sound13
⌕ #sound14
⌕ #sound15
⌕ #sound16
⌕ #sound17
⌕ #sound18
⌕ #sound19
⌕ #sound20
⌕ #sound21
⌕ #sound22
⌕ #sound23
⌕ #sound24
⌕ #sound25
⌕ #sound26
⌕ #sound27
⌕ #sound28
⌕ #sound29`
arielspkece.sendText(m.chat, soundAr, ftok)
break
case 'mediafire':
if (args.length < 1) return m.reply('Link nya? ')
let { mediafireDl } = require('./scrape/mediafireDl')
if (!args[0].includes('mediafire')) return m.reply(`Link is not valid`)
const teks1 = args.join(' ')
const baby1 = await mediafireDl(teks1)
const result4 = `*DATA DITEMUKAN*				
Judul : ${baby1[0].nama}
 Link : ${baby1[0].link}
 Size : ${baby1[0].size}				
_Mengirim file..._`
m.reply(result4)
arielspkece.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : ftok }) 
break

//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//

default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
			
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
lm.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
			
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
arielspkece.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
        

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
