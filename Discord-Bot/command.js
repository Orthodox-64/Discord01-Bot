const {REST,Routes}=require("discord.js");
const commands=[{
    name:'ping',
    description:'Replies with Pong!',
},];

require('dotenv').config();

const token = process.env.DISCORD_BOT_TOKEN;

const rest=new REST({version:'10'}).setToken(token);

(async()=>{
    try{
        console.log("Started Refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands("//client-id//"),{body:commands})

        console.log("Successfully reloaded application (/) commands.")
    }
    catch(e){
        console.error(e);
    }
})();
