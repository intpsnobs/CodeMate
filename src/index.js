require('dotenv').config();

const discord = require('discord.js');
const bot = new discord.Client();
const TOKEN = process.env.TOKEN;


bot.login(TOKEN);

bot.on('ready',() => {
    console.log(`Logged in as ${bot.user.tag}`);
})

bot.on('message', msg => {
    console.log(msg);
})

bot.on('message', msg => {
    if (msg.author.username === 'Ricardo Stoklosa' || msg.author.username === 'peter brendel'){
        msg.reply('fodase babaca');
    }if (msg.author.username === 'HammsV'){
        msg.reply('gostoso');
    }

})