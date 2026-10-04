const { Client, GatewayIntentBits, Partials } = require('discord.js');
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Message, Partials.Channel]
});

let jacob = null;

let tirarMierda = false;

let probabilidad = 50;

const reacciones = [
    "🤡",
    "💀",
    "😂"
];

client.once('clientReady', () => {
    console.log('Bot conectado.');
});

client.login(process.env.TOKEN);