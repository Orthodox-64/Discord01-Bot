const {Client,GatewayIntentBits} = require('discord.js');
const client =new Client({
    intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent],
})

require('dotenv').config();

client.on('messageCreate',(message)=>{
    // console.log(message.content);
    if(message.author.bot) return;
    else{
    message.reply({
        content:"hi from Dexter"
    })
}
})

client.on('interactionCreate',(interaction)=>{
       console.log(interaction);
       interaction.reply('Pong!');
})

client.login(
    process.env.DISCORD_BOT_TOKEN
);

