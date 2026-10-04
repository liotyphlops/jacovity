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
    "😂",
    "🤣"
];

const respuestas = [
    "callate",
    "gay",
    "ok"
];

client.once('clientReady', () => {
    console.log('Bot conectado.');
});

client.on("messageCreate", async () => {
    if(message.author.bot) return;

    if(message.content.startsWith("!victima")) {
        const usuario = message.mentions.users.first();

        if(!usuario) {
            return message.reply("Menciona a una persona");
        }
    }

    jacob = usuario.id;
    tirarMierda = true;

    message.reply(`${usuario} se selecciono`);

    if(message.content === "!mierda") {
        tirarMierda = !tirarMierda;
        
        return message.reply(tirarMierda ? "activado" : "desactivado");
    }
})

client.login(process.env.TOKEN);