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

let probabilidadRespuesta = 50;
let probabilidadReaccion = 100;

const reacciones = [
    "🤡",
    "💀",
    "😂",
    "🤣"
];

const respuestas = [
    "puto",
    "gay",
    "ok",
    "nigger",
    "telosico",
    "no te preguntamos",
    "nt",
    "bajale de huevos",
    "deja de llorar",
    "calmate wey",
    "ya le contaron al presidente?",
    "con quien hablas?",
    "claro cielo pero no mates a nadie por favor",
    "no nos importa perdedor",
    "quien tu te cree cabron",
    "silencio puta",
    "gracias por absolutamente nada",
    "ya empezaste",
    "otra vez tú",
    "ya entendimos",
    "literalmente nadie:",
    "no era necesario decirlo",
    "qué vergüenza"
];

client.once('clientReady', () => {
    console.log('Bot conectado.');
});

client.on("messageCreate", async (message) => {
    if(message.author.bot) return;

    if(message.content.startsWith("!victima")) {
        const usuario = message.mentions.users.first();

        if(!usuario) {
            return await message.reply("Menciona a una persona");
        }
    

    jacob = usuario.id;
    tirarMierda = true;

    await message.reply(`${usuario} se selecciono`);
    return;
}

    if(message.content === "!mierda") {
        tirarMierda = !tirarMierda;
        
        return await message.reply(tirarMierda ? "activado" : "desactivado");
    }

    if(message.content.startsWith("!probabilidad")) {
        const numero = parseInt(message.content.split(" ")[1]);

        if(isNaN(numero) || numero < 0 || numero > 100) {
            return await message.reply("Usa una probabilidad entre 0 y 100");
        }

        probabilidadRespuesta = numero;

        return await message.reply(`probabilidad establecida ${probabilidadRespuesta}`);

    }

    if(!tirarMierda) return;

    if(!jacob) return;

    if(message.author.id !== jacob) return;

    const numeroRandom = Math.random() * 100;

    if(numeroRandom > probabilidadRespuesta) return;

    const accion = Math.random();

    try{
        if (accion < 0.65) {
            const reaccion = reacciones[
                Math.floor(Math.random() * reacciones.length)
            ];
            const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];

            await message.react(reaccion);
            await message.reply(respuesta);
        } else {
            const reaccion = reacciones[
                Math.floor(Math.random() * reacciones.length)
            ];

            await message.react(reaccion);
        } 
    } catch(error) {
        console.log("Error: ", error);
    }
    });

client.login(process.env.TOKEN);