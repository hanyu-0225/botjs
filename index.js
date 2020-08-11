require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

const request = require('request')
const geocoder = require('geocoder')
const data = require('./data.json')
const url = 'http://api.openweathermap.org/data/2.5/weather'
const location = 'yamaguchi-ken,jp'
const units = 'metric'


client.on('ready', () => {
    console.log('ログインしました。');
});

//Bot自身の発言を無視する呪い
client.on('message', message => {
    if (message.author.bot) {
        return;
    }
    //↓ここに後述のコードをコピペする↓

    client.on('message', message => {
        if (/^.+の天気$/.test(message.content)) {
            const place = message.content.match(/^!(.+)の天気$/)[1]
            geocoder.geocode(place, (err, geo) => {
                if (err) return message.reply('エラー', err.toString())
                request(url, {
                    method: 'get',
                    json: true,
                    qs: {
                        q: location,
                        units: units,
                        appid: process.env.APIKEY,
                        lat: geo.results[0].geometry.location.lat,
                        lng: geo.results[0].geometry.location.lng,
                    },
                }, (err, res, json) => {
                    if (err) return message.reply('エラー', err.toString())
                    if (res.statusCode !== 200) return message.reply('エラー', json)
                    message.channel.send({
                        embed: {
                            color: 3447003,
                            author: {
                                name: 'OpenWeatherMap',
                                icon_url: 'https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/openweathermap.png',
                            },
                            title: place + 'のお天気情報',
                            url: 'https://openweathermap.org',
                            description: 'OpenWeatherMapのAPI叩いたデータです。',
                            fields: [
                                { name: '天気', value: data.weather[json.weather[0].id] },
                                { name: '気温', value: json.main.temp + '°C' },
                                { name: '風力', value: json.wind.speed + 'm' },
                                { name: '風向', value: data.direction[Math.round(json.wind.deg / 22.5)] },
                                { name: '雲量', value: json.clouds.all + '%' },
                            ],
                            timestamp: new Date(),
                            footer: {
                                icon_url: 'http://openweathermap.org/img/w/' + json.weather[0].icon.replace('n', 'd') + '.png',
                                text: 'This bot is corded by 3mdev. All rights reserved.',
                            },
                        }
                    })
                })
            })
        }
    })



    if (message.content.match(/おはよ/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `おはようなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    }

    if (message.content.match(/sin60/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `√3 / 2なのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    }

    if (message.content.match(/初代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `伊藤博文さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    }

    if (message.content.match(/第2代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `黑田淸隆さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    }    

    if (message.content.match(/第3代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `山縣有朋さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    }    

    if (message.content.match(/第4代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `松方正義さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第5代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `伊藤博文さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第6代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `松方正義さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第7代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `伊藤博文さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第8代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `大隈重信さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第9代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `山縣有朋さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第10代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `伊藤博文さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第11代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `桂太郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第12代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `西園寺公望さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第13代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `桂太郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第14代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `西園寺公望さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第15代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `桂太郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第16代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `山本権兵衛さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第17代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `大隈重信さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第18代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `寺内正毅さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第19代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `原敬さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第20代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `高橋是清さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第21代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `加藤友三郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第22代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `山本権兵衛さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第23代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `清浦奎吾さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第24代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `加藤高明さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第25代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `若槻礼次郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第26代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `田中義一さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第27代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `浜口雄幸さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第28代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `若槻礼次郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第29代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `犬養毅さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第30代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `斎藤実さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第31代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `岡田啓介さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第32代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `広田弘毅さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第33代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `林銑十郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第34代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `近衛文麿さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第35代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `平沼騏一郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第36代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `阿部信行さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第37代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `米内光正さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第38代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `近衛文麿さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第39代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `近衛文麿さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第40代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `東條英機さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第41代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `小磯国昭さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第42代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `鈴木貫太郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第43代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `東久邇宮稔彦王さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第44代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `幣原喜重郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第45代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `吉田茂さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第46代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `片山哲さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第47代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `芦田均さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第48代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `吉田茂さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第49代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `吉田茂さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第50代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `吉田茂さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第51代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `吉田茂さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第52代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `鳩山一郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第53代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `鳩山一郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第54代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `鳩山一郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第55代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `石橋湛山さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第56代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `岸信介さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第57代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `岸信介さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第58代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `池田勇人さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第59代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `池田勇人さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第60代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `池田勇人さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第61代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `佐藤栄作さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第62代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `佐藤栄作さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第63代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `佐藤栄作さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第64代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `田中角栄さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第65代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `田中角栄さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第66代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `三木武夫さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第67代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `福田赳夫さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第68代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `大平正芳さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第69代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `大平正芳さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第70代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `鈴木　善幸さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第71代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `中曽根康弘さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第72代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `中曽根康弘さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第73代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `中曽根康弘さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第74代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `竹下登さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第75代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `宇野宗佑さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第76代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `海部俊樹さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第77代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `海部俊樹さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第78代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `宮澤喜一さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第79代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `細川護熙さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第80代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `羽田孜さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第81代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `村山富市さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第82代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `橋本龍太郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    }    

    if (message.content.match(/第83代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `橋本龍太郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第84代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `小渕恵三さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第85代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `森善朗さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第86代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `森善朗さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第87代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `小泉純一郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第88代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `小泉純一郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第89代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `小泉純一郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第90代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `安倍晋三さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第91代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `福田康夫さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第92代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `麻生太郎さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第93代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `鳩山由紀夫さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第94代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `菅直人さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第95代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `野田佳彦さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第96代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `安倍晋三さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/第97代総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `安倍晋三さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/今の総理大臣/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `安倍晋三さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    if (message.content.match(/test/)) {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `安倍晋三さんなのです！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    } 

    const args = message.content.slice(/*ここにプレフィックス*/).trim().split(/ +/g);
    weather.find({ search: args[0], degreeType: 'C' }, function (err, result) {
        if (err) message.channel.send(err);
        if (result.length === 0) {
            message.channel.send('**場所を取得できませんでした**')
            return;
        }
        var current = result[0].current;
        switch (current.skytext) {
            case "Mostly Sunny":
                var skytext = "ほぼ晴れ";
                break;
            case "Cloudy":
                var skytext = "曇り";
                break;
            case "Partly Cloudy":
                var skytext = "晴れのち曇り";
                break;
            case "Sunny":
                var skytext = "晴れ";
                break;
            case "Clear":
                var skytext = "雲1つない快晴";
                break;
            case "Mostly Clear":
                var skytext = "ほぼ快晴";
                break;
            case "Mostly Cloudy":
                var skytext = "ほぼ曇り";
                break;
            case "Partly Sunny":
                var skytext = "所により晴れ";
                break;
            case "Light Rain":
                var skytext = "小雨";
                break;
            default:
                var skytext = current.skytext;
                break
        }
        const embed = new Discord.MessageEmbed()
            .setDescription('**' + skytext + '**')
            .setAuthor(`${current.date}の${current.observationpoint}の天気`)
            .setThumbnail(current.imageUrl)
            .setColor(Color)
            .addField('温度', `${current.temperature}℃`, true)
            .addField('体感温度', `${current.feelslike}℃`, true)
            .addField('風', current.winddisplay, true)
            .addField('湿度', `${current.humidity}%`, true);
        message.channel.send(embed);
    });

    //↑ここに後述のコードをコピペする↑
    
});
client.login('NzQwODE3MTQ3MDgwNzM2Nzc5.Xyuhuw.RFONN0Df7satLIRi1k7usqq3biM');