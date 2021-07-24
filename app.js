const { json } = require("express");
const express = require("express");
var app = express();


var info = [
    {
        "name":"06 FM",
        "url":"http://live.ulody.com:8000/06"
    },
    {
        "name":"90’LAR",
        "url":"http://37.247.98.8/stream/166/"
    },
    {
        "name":"90’LI ŞARKILAR",
        "url":"http://37.247.101.101:9988/"
    },
    {
        "name":"112 ACiL FM",
        "url":"http://95.173.185.128:9316/"
    },
    {
        "name":"A HABER RADYO",
        "url":"https://trkvz-radyolar.ercdn.net/ahaberradyo/playlist.m3u8"
    },
    {
        "name":"A NEWS RADYO",
        "url":"https://trkvz-radyolar.ercdn.net/anewsradyo/playlist.m3u8"
    },
    {
        "name":"A PARA RADYO",
        "url":"https://trkvz-radyolar.ercdn.net/apararadyo/playlist.m3u8"
    },
    {
        "name":"A SPOR RADYO",
        "url":"https://trkvz-radyolar.ercdn.net/asporradyo/playlist.m3u8"
    },
    {
        "name":"ABUZER FM",
        "url":"http://live.radyotvonline.com:9030"
    },
    {
        "name":"ACIPAYAM GURBETÇİ FM",
        "url":"http://live2.radyotvonline.com:8750"
    },
    {
        "name":"ACIPAYAM GURBETÇİ FM",
        "url":"https://wowza1.radyotvonline.com/shoutcast/gurbetcifm.stream/playlist.m3u8"
    },
    {
        "name":"AÇIK RADYO",
        "url":"https://stream.34bit.net/ar.opus"
    },
    {
        "name":"ADA FM Sakarya",
        "url":"http://adafm.net:6262/"
    },
    {
        "name":"ADANA FM Arabesk",
        "url":"https://host.onlineradyotv.net/8004/stream"
    },
    {
        "name":"ADANA LİDER FM",
        "url":"http://yayin1.yayindakiler.com:3046/"
    },
    {
        "name":"ADANA RADYO SEYHAN",
        "url":"https://radyo.yayindakiler.com/stream/adanaseyhan/stream"
    },
    {
       "name":"KRAL FM" ,
       "url":"http://kralwmp.radyotvonline.com:80/"
    },
    {
        "name":"KRAL POP",
        "url":"http://kralpopwmp.radyotvonline.com:80/"
    },
    {
        "name":"SHOW RADYO",
        "url":"http://46.20.3.229/"
    },
    {
        "name":"TAKSİM FM",
        "url":"http://cast1.taksim.fm:8000/"
    },
    {
        "name":"TAKSİM FM SLOW",
        "url":"http://cast1.taksim.fm:8002/"
    },
    {
        "name":"ARDAHAN FM",
        "url":"http://95.173.161.131:9788/"
    },
    {
        "name":"MERSİN FM",
        "url":"http://stream.taksimbilisim.com:8038/"
    }
]

app.get("/stationinfo", (req,res) => {
    res.json(info)
});


app.listen(4000)
console.log("Aktif")