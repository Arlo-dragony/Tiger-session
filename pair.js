const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: TAIRA_TECH,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function TAIRA_TECH_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let TAIRA_TECH_SESSION= TAIRA_TECH({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ['Ubuntu', 'Chrome', '20.0.04']
             });
             if(!TAIRA_TECH_SESSION.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await TAIRA_TECH_SESSION.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            TAIRA_TECH_SESSION.ev.on('creds.update', saveCreds)
            TAIRA_TECH_SESSION.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
             await delay(50000);
             let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
             await delay(8000);
        const b64data = Buffer.from(data).toString('base64');            
    await TAIRA_TECH_SESSION.sendMessage(TAIRA_TECH_SESSION.user.id,{text:messg },{quoted:session})
    await TAIRA_TECH_SESSION.sendMessage(TAIRA_TECH_SESSION.user.id, { text: `ᴄᴏɴɴᴇᴄᴛᴇᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ✅\n
┌─✦
│࿙ʜᴇʏ࿚
└┬✦  
┌᪥┤ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ʀᴀᴅɪᴏᴀᴄᴛɪᴠᴇ ᴛᴇᴄʜ᪥
│└────────────┈ ⳹        
│©2024-2025 ᴀʀʟᴏᴅʀᴀɢᴏɴ 
└─────────────────┈ ⳹\n\n ` }, {quoted: classic });

                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await TAIRA_TECH_CODE()
});
module.exports = router
