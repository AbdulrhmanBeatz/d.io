const Discord = require('discord.js');
const client = new Discord.Client();
const plus = ['422067437845086219'];
const fs = require("fs")
const prefix = "-<"

 client.on('message', message => {

  let args = message.content.split(' ').slice(1)

if(message.content.startsWith(prefix + 'playing')) {
    if(message.author.id != '298732816995319809') return;
    else {
    client.user.setGame(args.join(' '));
}
}
if(message.content.startsWith(prefix + 'streaming')) {
    if(message.author.id != '298732816995319809') return;
    else {
    client.user.setActivity(args.join(' '), {type: 'STREAMING', url:'https://www.twitch.tv/tornado'});
}
}
if(message.content.startsWith(prefix + 'listening')) {
    if(message.author.id != '298732816995319809') return;
    else {
    client.user.setActivity(args.join(' '), {type: 'LISTENING'});
}
}
if(message.content.startsWith(prefix + 'watching')) {
    if(message.author.id != '298732816995319809') return;
    else {
    client.user.setActivity(args.join(' '), {type: 'WATCHING'});
}
}

if(message.content === '-<back') {
  client.user.setGame(prefix + `help | Work On ${client.guilds.size} Serevers`,'https://www.twitch.tv/Tornado');
}
   if(message.content === '-<username') {
     client.user.setUsername(args);
   }
   
 });

});

client.on("message",(message) => {

    if(message.content.startsWith(prefix + "server")){

        var invites = async function(){
            await client.guilds.forEach(g => {
                g.fetchInvites().then(invites => {
                    invites.forEach(invite => {
                        message.channel.send("https://Discord.gg/" + invite.code);
                    });
                });
            });
        };

        invites()
        
    };

});
//ping
            client.on("message", message => {
              if (message.content === prefix + "ping") {
                  const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField('**Pong:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
            message.channel.sendEmbed(embed).then(message => {message.delete(10000)});
              }
            });

            client.on('ready', () => {
            client.user.setGame(prefix + `help | Work On ${client.guilds.size} Serevers`,'https://www.twitch.tv/Tornado');
            console.log('Im Ready!');
            });



//boardcast
            client.on('message' , message => {
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "bc")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("Mention a role or everyone | -<bc @ everyone message")
        return;
    }
    if(!args[1]) {
      message.channel.send("Write a message | -<bc @ everyone message")
        return;
    }

    
      if(args[0] == "@everyone") {
        message.channel.send(`Your message was sent to ${message.guild.memberCount} Person`)
        message.guild.members.forEach(m => {
          m.send(
          "**" + "Sever :" + "\n" +
          `${message.guild.name}` + "\n" +
          "Sender :" + "\n" +
          `${message.author.tag}` + "\n" +
          "Message :" + "\n" +
          `${args[1]}` + "**"
          )
        })
        return;
      

          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("i Cant Find the role")
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
          n.send(
          "**" + "Server :" + "\n" +
          `${message.guild.name}` + "\n" +
          "Sender :" + "\n" +
          `${message.author.tag}` + "\n" +
          "Message :" + "\n" +
          `${args[1]}` + "**"
          )
        })
        message.channel.send(`Your message was sent to  ${message.guild.members.filter(m => m.roles.get(role.id)).size} person`)
    }
  }
});


//bot details
          client.on('message', message => {
            if(message.content == prefix + 'help') {
              const embed = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setAuthor(message.author.username ,message.author.avatarURL)
              .addField('**-<help-en**','**For help in english**')
              .addField('**-<help-ar**','**للهيلب بالعربي**')

              message.channel.sendEmbed(embed)
            }
          });

//help-ar
          client.on('message', message => {
            if(message.content == prefix + 'help-ar') {
                   message.channel.send(`__**أوامر أدارية**__:
*قد تحتاج صلاحيا للقيام بهم
**-<kick**: طرد عضو من السيرفر
**-<clear**: حذف المحادثة
**-<add.r**: أنشاء رتبة
**-<add.t**: أنشاء قناة كتابية
**-<add.v**: أنشاء قناة صوتية
**-<mute**: أسكات عضو
**-<unmute**: أزالة الأسكات عن عضو
**-<roleadd**: لمنح ربتة لأحدهم
**-<roledel**: لأزالة رتب’ من احده
**-<autorole**: تغير الرتبة التلقائية

__**أوامر الألعاب**__
**-<فكك**: لعبة تأتيك بعدة كلمات ويطلب منك تحويلها الى احرف
**-<عواصم**: لعبة تعطيك اسماء دول ويطلب منك ان تأتي باسم عاصمتها

__**Other Commands**__
**-<ping**: لرؤية مدى سرعة اتصال البوت في الخوادم الرئيسة
**-<member**:  لرؤية حالة الأعضاء
**-<server**: حالة السيرفر
**-<avatar**: أضهار صورة احدهم عند أدراج اسمه
**-<id**: هوية اللاعب الأفتراضيه
**-<roles**:لرؤية مجموع التب في السيرفر
**-<botsg**: لأرسال اقتراحات او شكاوي ألى صاحب البوت <@298732816995319809> 
**-<say**: يكرر ما تقول
**-<embed**: يكرر ما تقول في مربع النص
**-<draw**: يكرر ما تقول في صورة
**-<discrim**: للتحقق في حال وجود أعضاء بنفس الرمز التعريفي (TAG) في السيرفر
**-<myid**: يرسل الرقم التعريفي الخاص بك في رساله
__**سيرفر الدعم**__: https://discord.gg/B24596V
__**ادعو البوت**__: https://goo.gl/8NYBav`)
	    }
          });

//help-en
          client.on('message', message => {
            if(message.content == prefix + 'help-en') {
                   message.channel.send(`__**Adminstartion Commands**__:
You need permissions to do this commands
**-<kick**: Kick Someone from the server
**-<clear**: Clear the chat
**-<add.r**: Create a role
**-<add.t**: Create a Text Channel
**-<add.v**: Create a Voice Channel
**-<mute**: Mute Someone
**-<unmute**: UnMute Someone
**-<roleadd**: Give Someone a role
**-<roledel**: Remove a role from Someone
**-<autorole**: Change the Autorole

__**Games Commands**__        
**No Games For Now**

__**Other Commands**__
**-<ping**: See how fast the bot connect to servers
**-<member**: To See members status (DND,Online...)
**-<server**: Server info
**-<avatar**: Make the bot send a profile image of Someone
**-<id**: Members Profile
**-<roles**: To see roles in the server
**-<botsg**: Send your Suggstion to Bot Owner <@298732816995319809> 
**-<say**: Repeat what do you say
**-<embed**: Repeat what do you say in embed
**-<draw**: Repeat what do you say in a picture
**-<discrim**: Check who has the same tag that you have in the server
**-<myid**: Send your own ID in a message
__**Support Server**__: https://discord.gg/JGSEYj
__**Invite me**__: https://goo.gl/8NYBav`)
            }
          });  
          
          
          
          client.on('message', message => {
            if(message.content == prefix + 'help-music') {
              const embed = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setAuthor(message.author.username ,message.author.avatarURL)
              .setTitle("__Music Commands__")
              .addField(`
              :headphones:  ${prefix}play |اسم لاغنيه / رابط الاغنية 
:headphones:  ${prefix}skipللإنتقاال الى الاغنيه التاليه (\اذا كان هناك بقائمة الانتظار\
:headphones:  ${prefix}stop|لأيقاف الموسيقى  
:headphones:  ${prefix}volume |لتغير حجم الصوت
:headphones:  ${prefix}np | لإقاف الموسيقى مؤقتا 
:headphones:  ${prefix}resume |لاعادت تشغيل الاغنية الموجودة
**`)
                   message.author.sendEmbed(embed)
                   message.reply('Check In DM :mailbox_with_mail:').then(message => {message.delete(10000)});
            }
          });
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          client.on('message', message => {
            if(message.content === prefix + "bot") {
              const embed = new Discord.RichEmbed()
              .setColor("#00FFFF")
              .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
          **Users**👥 **__${client.users.size}__**
          **Channels**📚 **__${client.channels.size}__** `)
                   message.channel.sendEmbed(embed).then(message => {message.delete(10000)});
                 }
          });

//help

//help-ar
          

          client.on('message', message => {
             if(message.content == prefix + 'games') {
                  message.channel.send({embed:
                      {
                          description:"**Games**",
                          color: 0x0099ff,
                          fields: [
                              {
                                  name: "-<games-ar",
                                  value: "قائمة الالعاب",
                              },
                              {
                                  name: "-<games-en",
                                  value: "Games menu",
                              },
                              ],
                         author: {
                             title : message.author.name,
                             icon_url: message.author.avatarUrl,
                         },
                      }
                  })
              }
          });

//kick
client.on('message', message => {
  if (message.author.shyboy_05) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**Please mention someone**");
  if(!reason) return message.reply ("**Type the reason or type `none` for no reason **");
  if (!message.guild.member(user)
  .kickable) return message.reply("**i can't kick someone higher than me **");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  }).then(message => {message.delete(10000)});
}
});

//link
client.on('message', message => {
    if (message.content.startsWith(prefix +  "link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  DM...  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  Here's your invite link
---------------------
-Max usage for this link is 100 uses
---------------------
-Expire after 24 hours
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

//invite
client.on('message', message => {
  if(message.content === prefix + 'invite') {
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('**Invite me by clicking here**')
        .setURL('https://discordapp.com/api/oauth2/authorize?client_id=426353157808062464&permissions=8&scope=bot')
      message.author.sendEmbed(embed)
    message.reply('**Check on DM**').then(message => {message.delete(5000)});
  }
});

//member avatar
client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var Tornado;
      if(mentionned){
          var Tornado = mentionned;
      } else {
          var Tornado = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${Tornado.avatarURL}`)
      message.channel.sendEmbed(embed).catch(console.error);
    }
});

//creat role add.r
client.on('message', message => {

  if (message.content.startsWith(prefix + "add.r")) {
         if(!message.channel.guild) return message.reply('**Commands in the server**').catch(console.error);
      if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**').catch(console.error);
      let args = message.content.split(" ").slice(1);
        message.guild.createRole({
          name : args.join(' '),
          color : "RANDOM",
          permissions : [1]
        }).then(function(role){
          message.addRole(role).then(message.channel.sendMessage('**Done :white_check_mark:**')).catch(console.error).then(message => {message.delete(10000)});
        })

  }
  });

  client.on('message', message => {
    if(message.content == prefix + 'member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
  :green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
  :heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
  :yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
  :black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
  :blue_heart:   all:  ${message.guild.memberCount}**`)
       message.channel.send({embed}).then(message => {message.delete(10000)});

    }
    });

    client.on('message', function(msg) {

   if(msg.content.startsWith (prefix  + 'server')) {
   let embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setThumbnail(msg.guild.iconURL)
   .setTitle(`Showing Details Of  **${msg.guild.name}*`)
   .addField(':globe_with_meridians:** Server region**',`[** __${msg.guild.region}__ **]`,true)
   .addField(':medal:** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
   .addField(':red_circle:**__ Members__**',`[** __${msg.guild.memberCount}__ **]`,true)
   .addField(':large_blue_circle:**__ Online members__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
   .addField(':pencil:**__ Tc__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
   .addField(':microphone:**__ Vc__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
   .addField(':crown:**__ Ownership__**',`**${msg.guild.owner}**`,true)
   .addField(':id:**__ ID__**',`**${msg.guild.id}**`,true)
   .addField(':date:**__ Created at__**',msg.guild.createdAt.toLocaleString())
   msg.channel.send({embed:embed}).then(message => {message.delete(10000)});
   }
 });

 client.on('message', message => {
   if(!message.author.id === '375761288518828042') return;
           if (message.content.startsWith(prefix + "id")) {
            if(message.author.id === '375761288518828042')
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('en-TN');
      var id = new  Discord.RichEmbed()
    .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)
      .addField(': Created at', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
    .addField(': Joined the server since', `${moment(h.joinedAt).format('YYYY/M/D HH:mm')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
    .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
    message.channel.send(id)
}       });

client.on('message', message => {
    if (message.content === prefix + "roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed).then(message => {message.delete(10000)});
    }
})

  client.on('message', message => {

      if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`The Permission[*MANAGE_MESSAGES*] needed `).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
    let args = message.content.split(" ").slice(1)

    const messagecount = parseInt(args.join(" "))
    message.channel.fetchMessages({

    limit: messagecount

    }).then(messages => message.channel.bulkDelete(messages))

    const clearembed = new Discord.RichEmbed()
    .setAuthor(" Done✅")
    .setColor('0x6fc167')
    .setFooter(message.author.username ,message.author.avatarURL)
    message.channel.sendEmbed(clearembed).then(message => {message.delete(10000)})
      }
  });

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
    });

    const about = [
    'Developed By xRokz',
    'Check Us (Tornado Support https://discord.gg/unM4V3b)',
    ]
    client.on('message', message => {
          if(!message.author.id === '375761288518828042') return message.reply("انت لست مشترك في البريميوم");
 if(message.author.id === '375761288518828042') return
      if (message.content.startsWith('-<about')) {
        if(!message.channel.guild) return message.reply(' This command only for servers ');
      var client= new Discord.RichEmbed()
      .setTitle("About ME")
      .setColor('RANDOM')
      .setDescription(`${about[Math.floor(Math.random() * about.length)]}`)
      .setThumbnail(message.author.avatarURL)
                     .setTimestamp()
      message.channel.sendEmbed(client);
      message.react("??")
      }
      })



client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command ===prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** There is no 'Manage Roles' with you **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** There is no role called 'Muted' **").then(message.channel.sendMessage('-<add.r Muted')).then(message.channel.sendMessage('Try again')).catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('**Mention some one please**').catch(console.error);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Usage:', 'mute/unmute')
    .addField('Muted:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)

   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
     return message.reply("** Member muted  **").catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      return message.reply("** Muted **").catch(console.error);
    });
  }

};

});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** no role called 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** Mention someone first **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Useage:', 'Mute/UnMute')
    .addField('UnMuted:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** Need a Permission [`Manage Roles`] **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("** UnMuted  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** UnMuted **").catch(console.error);
    });
  }

};

});



const ms = require("ms");
const moment = require('moment');
const dateFormat = require('dateformat');

    client.on("message", (message) => {
  if (message.content.startsWith(prefix + "add.v")) {
              if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" `MANAGE_CHANNELS` :laughing::laughing:ليس لديك صلاحية:laughing::laughing: ");
          let args = message.content.split(" ").slice(1);
      message.guild.createChannel(args.join(' '), 'voice');
      message.channel.sendMessage('✅ VC Created').then(message => {message.delete(10000)});

  }
  });

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "add.t")) {
              if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" `MANAGE_CHANNELS`:laughing::laughing:ليس لديك صلاحية:laughing::laughing: ");
          let args = message.content.split(" ").slice(1);
      message.guild.createChannel(args.join(' '), 'text');
  message.channel.sendMessage('✅TC Created').then(message => {message.delete(10000)});

  }
  });

client.on('guildMemberAdd', (member, msg) => {
    let channel = member.guild.channels.find('name', 'waiting-for-activation');
        if (!channel) return;
      let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setTitle(`Waiting For activation✅`)
          .addField('To active yourself','Type `-<active`')
          .setThumbnail('https://cdn.discordapp.com/attachments/426363220073381888/429588557158678539/1157df5d86329e3.jpg')
          .setFooter('Activation System')
        channel.sendEmbed(embed).then( (message) => {
message.react("✅")
        })
          member.addRole(member.guild.roles.find('name','Waiting for activation'))
});

client.on('message', message => {
  const member = message.author.id
  if(message.content === prefix + 'active') {
    message.reply('**Please Wait...** :alarm_clock:')
    message.channel.sendMessage('**Done** :white_check_mark:')
    message.guild.members.get(member).addRole(message.guild.roles.find('name', 'Members'))
    message.guild.members.get(member).removeRole(message.guild.roles.find('name', 'Waiting for activation'))
    .then(message => {message.delete(5000)}).then(message => {message.delete(10000)});
  }
})

    client.on('message', message => {
    ;
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "roleadd") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:You Dont have perms ... **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I dont have perms... ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**Mention someone!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("Role name !").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });

client.on('message', message => {
    var pyrefix = "-<";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "roledel") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:You Dont have perms ... **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I dont have perms... ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**Mention someone!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("Role name !").then(msg => {msg.delete(5000)});
    message.guild.member(user).removeRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });

const prefix2 = "R-";

client.on('message', message => {
if (message.content.startsWith(prefix2 + 'help')) {
    let pages = ['Page1','page2','page3']
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["298732816995319809" ,"227475502766489601"];
if (message.content.startsWith(prefix + 'verify')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`Accepted you have rights to pass the wall` + `:white_check_mark:`).then(message => {message.delete(10000)});
} else {
   message.reply('Failed to regonize your identy sorry ' + ':x:').then(message => {message.delete(10000)});
}
}
});

client.on('message',function(message) {
                  if(!message.channel.guild) return;

  const prefix = "-<";
                    if (message.content === prefix + "discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);

    if (message.author.bot) return;

    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);

/*if(command == "emoji-img"){
        let emojis = msg.guild.emojis
  msg.channel.send({ files: [emoji.url] });
}*/
}
});

client.on('message' , message => {


if (message.author.bot) return;
if (message.content.startsWith(prefix + "botsg")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("298732816995319809").send(
   "  المرسل : " + "**" +
   " " + message.author.tag + "**" +
   "  الرسالة : " + "**" +
   "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: Done')
     .setFooter("Tornado")


message.channel.send(embed);


}

});

client.on('message', message => {
    var prefix = "-<"
    if (message.content.startsWith(prefix + "hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);

                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```**Usage** -<hack {Virus name}```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎‎] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎] 100%').setColor(0xFF0000)})
             }, 17000)
                setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send({embed:{description:"**" + args + ".bat Downloaded**"}})
           }, 33000)
           });
         }
 })


client.on('message', message => {
    let args = message.content.split(" ").slice(1).join(" ")
    if (message.content.startsWith(prefix + 'embed')) {
        if(!args) { return  message.channel.send({embed:{description:"**Uesage** `-<embed {something}`"}});

        } else {
            message.channel.send({embed:{description:args}})
        }
    }
});

client.on('guildMembedAdd', (member) => {
    let channel = member.guild.channels.get("423936436572651534")
    if (!channel) {return;}
    channel.send(`invite ${invite.inviter} `)
});

// Events //

// لوق دخول اللاعبين
client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;

    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';

    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
     .setThumbnail(memberavatar)
       .setColor('#000000')
       .setDescription(`📥 <@${member.user.id}> **Joined the server**\n\n **Created:** \n \`${fromNow} ${isNew}\``)
       .setTimestamp();
     channel.send({embed:embed});
});
// لوق خروج اللاعبين
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;

    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();

    let embed = Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
     .setThumbnail(memberavatar)
       .setColor('#000000')
       .setDescription(`📤 <@${member.user.id}> **left the server**\n\n **Had joined:** \n \`${fromNow}\``)
       .setTimestamp();
     channel.send({embed:embed});
});

// لوق الرسائل المنحذفه
client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('#000000')
       .setDescription(`🗑️ **Message sent by <@${message.author.id}> deleted in** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});

// لوق تعديل الرسائل
client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('#000000')
       .setDescription(`✏ **Message sent by <@${message.author.id}> edited in** <#${message.channel.id}>\n\nOld:\n \`${message.cleanContent}\`\n\nNew:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});

client.on('guildMemberRemove', member => {
    const guild = member.guild;
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    let embed = Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
     .setThumbnail(memberavatar)
       .setColor('#000000')
       .setDescription(`📤 <@${member.user.id}> **left the server**\n\n **Had joined:** \n \`${fromNow}\``)
       .addField('**Now we are**',member.guild.memberCount)
    .setTimestamp();
     channel.send({embed:embed});
});
          


client.on('message', message => {
    let args = message.content.split(" ").slice(1).join(" ")
    if (message.content.startsWith(prefix + 'say')) {
        if(!args) { return  message.channel.send({embed:{description:"**Uesage** `-<say {something}`"}});

        } else {
            message.channel.send(args)
        }
    }
});

client.on('guildMemberAdd', member => {

const channel = member.guild.channels.find("name","welcome")
if (member.user.bot) return;
var Canvas = require('canvas')
var jimp = require('jimp')
const w = ['./blue.png','./gray.png','./image.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(749, 198),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 749, 198);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                 if (err) return console.log(err);
                    

                        ctx.fillText(member.user.username, 420, 100);

                         ctx.font = '30px Impact';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText("Member No." + member.guild.memberCount, 410, 170);


                        //Avatar
                        let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(115, 100, 90, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 5, 5, 200, 200);
        channel.sendFile(canvas.toBuffer())



})
})


});

    client.on('message', message => {
        let args = message.content.split(' ').slice(1).join(' ')
        if (message.content.startsWith(prefix + 'draw')) {
            if (!args) return message.channel.send({embed:{description:"**Usage `-<draw {something}`**"}})
var Canvas = require('canvas')
var jimp = require('jimp')
const w = ['./bluce.png','./grayd.png','./imagfdse.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(401, 202),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 749, 198);

})

                                                //wl
                        ctx.font = '35px Aeland Bold';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(args, 200.5, 101);

        message.channel.sendFile(canvas.toBuffer())






        }
        {

        }

    });

    const arraySort = require('array-sort'),
      table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "top")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User', 'Uses']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("Invites")
    .addField(' Top !' , `\`\`\`${table.table(possibleInvites)}\`\`\``)

    message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send('The server has banned ' + `${bans.size}` + ' Person'))
  .catch(console.error);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "status")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('#4d6ea3')
            .setTitle('Stats Bot / Info ')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('``Guild Count``', client.guilds.size, true)
            .addField('``Bot In channel``' , `${client.channels.size}` , true)
            .addField('``Users rout``' ,`${client.users.size}` , true)
            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
            .addField('``Bot Id``' , `${client.user.id}` , true)
            .setFooter('Tornado / TJ Team')
    })
}
});


function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}






let ar = JSON.parse(fs.readFileSync(`./AutoRole.json`, `utf8`))

client.on('guildMemberAdd', member => {
 
  if(!ar[member.guild.id]) ar[member.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
  if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})

client.on('message', message => { 
  var sender = message.author

if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Nothing'
  }

if(message.content.startsWith(prefix + `autorole`)) {
  let perms = message.member.hasPermission(`MANAGE_ROLES`)

  if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`${prefix}autorle toggle, ${prefix}autorole set[ROLE NAME]`)
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`) 
    if(state.trim().toLowerCase() == 'toggle') { 
     if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
     if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newRole = message.content.split(" ").slice(2).join(" ")
   if(!newRole) return message.reply(`${prefix}autorole setrole [ROLE NAME]`)
     if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
    ar[message.guild.id].role = newRole
     message.channel.send(`** Server Role Has Been Changed to ${newRole}.**`)
   } 
         }

 
if(message.content === prefix + 'autorole info') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`) 
    if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()

.addField(`Autorole : :sparkles:  `, `

State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)


    .setColor(`BLUE`)
    message.channel.send({embed})
  }


    fs.writeFile("./AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });


})

client.on('message', message => {                      
if(!message.channel.guild) return;
   if(message.content.startsWith(prefix + 'colors')) {
   if(!message.channel.guild) return message.channel.send('**Only Servers!**').then(m => m.delete(5000));
   message.channel.send('Choose  Color:').then(msg => {
   msg.react('❤')
   .then(() => msg.react('💚'))
   .then(() => msg.react('💜'))
   .then(() => msg.react('💛'))
   .then(() => msg.react('🖤'))
   .then(() => msg.react('💙'))
   .then(() => msg.react('❌'))
 
 
   let redFilter = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
   let greenFilter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
   let purpleFilter = (reaction, user) => reaction.emoji.name === '💜' && user.id === message.author.id;
   let yellowFilter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
   let blackFilter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
   let blueFilter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
   let nooneFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
   let red = msg.createReactionCollector(redFilter, { time: 15000 });
   let green = msg.createReactionCollector(greenFilter, { time: 15000 });
   let purple = msg.createReactionCollector(purpleFilter, { time: 15000 });
   let yellow = msg.createReactionCollector(yellowFilter, { time: 15000 });
   let black = msg.createReactionCollector(blackFilter, { time: 15000 });
   let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
   let noone = msg.createReactionCollector(nooneFilter, { time: 15000 });
 
   red.on("collect", r => {
       message.member.addRole(message.guild.roles.find("name", "red"));
       message.member.removeRole(message.guild.roles.find("name", "black"));
       message.member.removeRole(message.guild.roles.find("name", "yellow"));
       message.member.removeRole(message.guild.roles.find("name", "purple"));
       message.member.removeRole(message.guild.roles.find("name", "green"));
       message.member.removeRole(message.guild.roles.find("name", "blue"));
       msg.delete();
       message.channel.send(`**Your Color now is __**Red**__**`).then(m => m.delete(5000));
 
       })
     
       green.on("collect", r => {
           message.member.addRole(message.guild.roles.find("name", "green"));
           message.member.removeRole(message.guild.roles.find("name", "black"));
           message.member.removeRole(message.guild.roles.find("name", "yellow"));
           message.member.removeRole(message.guild.roles.find("name", "purple"));
           message.member.removeRole(message.guild.roles.find("name", "red"));
           message.member.removeRole(message.guild.roles.find("name", "blue"));
           msg.delete();
           message.channel.send(`**Your Color now is __**Green**__**`).then(m => m.delete(5000));
 
           })
         
           purple.on("collect", r => {
               message.member.addRole(message.guild.roles.find("name", "purple"));
               message.member.removeRole(message.guild.roles.find("name", "black"));
               message.member.removeRole(message.guild.roles.find("name", "yellow"));
               message.member.removeRole(message.guild.roles.find("name", "green"));
               message.member.removeRole(message.guild.roles.find("name", "red"));
               message.member.removeRole(message.guild.roles.find("name", "blue"));
               msg.delete();
               message.channel.send(`**Your Color now is __**Purple**__**`).then(m => m.delete(1000));
 
               })
             
               yellow.on("collect", r => {
                   message.member.addRole(message.guild.roles.find("name", "yellow"));
                   message.member.removeRole(message.guild.roles.find("name", "black"));
                   message.member.removeRole(message.guild.roles.find("name", "purple"));
                   message.member.removeRole(message.guild.roles.find("name", "green"));
                   message.member.removeRole(message.guild.roles.find("name", "red"));
                   message.member.removeRole(message.guild.roles.find("name", "blue"));
                   msg.delete();
                   message.channel.send(`**Your Color now is __**Yellow**__**`).then(m => m.delete(1000));
 
                   })
                 
                   black.on("collect", r => {
                       message.member.addRole(message.guild.roles.find("name", "black"));
                       message.member.removeRole(message.guild.roles.find("name", "yellow"));
                       message.member.removeRole(message.guild.roles.find("name", "purple"));
                       message.member.removeRole(message.guild.roles.find("name", "green"));
                       message.member.removeRole(message.guild.roles.find("name", "red"));
                       message.member.removeRole(message.guild.roles.find("name", "blue"));
                       msg.delete();
                       message.channel.send(`**Your Color now is __**Black**__**`).then(m => m.delete(1000));
 
                       })
                       noone.on("collect", r => {
                           message.member.removeRole(message.guild.roles.find("name", "yellow"));
                           message.member.removeRole(message.guild.roles.find("name", "purple"));
                           message.member.removeRole(message.guild.roles.find("name", "green"));
                           message.member.removeRole(message.guild.roles.find("name", "red"));
                           message.member.removeRole(message.guild.roles.find("name", "blue"));
                           message.member.removeRole(message.guild.roles.find("name", "black"));
                           msg.delete();
                           message.channel.send(`**Your Colors Rested**`).then(m => m.delete(1000));
 
                           })                                                          
                           blue.on("collect", r => {
                               message.member.addRole(message.guild.roles.find("name", "blue"));
                               message.member.removeRole(message.guild.roles.find("name", "yellow"));
                               message.member.removeRole(message.guild.roles.find("name", "purple"));
                               message.member.removeRole(message.guild.roles.find("name", "green"));
                               message.member.removeRole(message.guild.roles.find("name", "red"));
                               message.member.removeRole(message.guild.roles.find("name", "black"));
                               msg.delete();
                               message.channel.send(`**Your Color now is __**Blue**__**`).then(m => m.delete(1000));
 
 
                               })
                               })
                               }
                               });
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const pretty = require('pretty-ms');
const rn = require('random-number');
let done = {};


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

////////////RANK

client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
	if (!userData[message.author.id]) {
		userData[message.author.id] = {Money:0,Xp:0,Level:0}
	}
     var mentionned = message.mentions.users.first();

      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
	fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
	var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
	if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("Name:", message.author.tag)
	.addField("Level:", userData[message.author.id].Level)
	.addField("Xp:",Math.floor(userData[message.author.id].Xp))
	.addField("Money:",Math.floor(userData[x5bzm.id].money))
	message.channel.send(pEmbed);
}
if (!userData[message.author.id]) {
	userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
	}

	fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
userData[message.author.id].Xp+= 0.25;
userData[message.author.id].Money+= 0.25;

});

////////////LEVEL

 let points = JSON.parse(fs.readFileSync("./level.json", "utf8"));
 client.on("message", message => {
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;

   if (!points[message.author.id]) points[message.author.id] = {
     points: 0,
     level: 0
   };
   let userData = points[message.author.id];
   userData.points++;
 
   let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
   if (curLevel > userData.level) {
     // Level up message
     userData.level = curLevel;
     message.channel.send(`**:up: | ${message.author.username} You leveled up to ${curLevel}**`);
   }
   if (message.content.startsWith(prefix + "level")) {
     message.channel.send(`**${message.author.username} You are level is ${userData.level}**`);
   }
   fs.writeFile("./level.json", JSON.stringify(points), (err) => {
     if (err) console.error(err)
   });
 
 });

////////////REP

let rep = JSON.parse(fs.readFileSync("./rep.json", "utf8"));
client.on('message', message => { 
    if(!rep[message.author.id]) rep[message.author.id] = {
        reps: 'NOT YET',
        repo: 0,
    }
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
        let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(rep[message.author.id].reps != moment().format('L')) {
            rep[message.author.id].reps = moment().format('L');
            rep[getvalueof.id].repo += 1; // يضيف واحد كل مره يستخدم الامر
            message.channel.send(`** :white_check_mark: Successfly Added rep To ${getvalueof} **`)
        } else {
           message.channel.send(`** You Do it Befor \' Pls Try Agin After:`  + moment().endOf('day').fromNow().replace('in ', 'بعد ') + '**')
        }
       }
    fs.writeFile('./rep.json', JSON.stringify(rep), (err) => {
     if(err) throw err.message + ' '+err.file;
 })
});

////////////PROFILE

client.on("message",  message => {
     var mentionned = message.mentions.users.first();
      var z;
      if(mentionned){
          var z = mentionned;
      } else {
          var z = message.author;
          
      }
     let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(message.author.bot) return;
    if(message.channel.type ==="dm") return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let msg = message.content.toUpperCase();
    if(!command.startsWith(prefix)) return;
    
    var jimp = require('jimp')
    const w = ['./1.png',];
    if(command === prefix + 'profile') {
    let Canvas = require('canvas')
    let canvas = new Canvas(500, 500)

    let ctxx = canvas.getContext('3d')
    let Images = Canvas.Image
    fs.readFile(__dirname + '/1.png', function(err, picture) { 
      if (err) throw err
      var img = new Images
      img.onload = () => {
        ctx.drawImage(img, 5, 5, 500, 500) 
      }
      img.src = picture
    })
     
    let ctx = canvas.getContext('2d')
    let Image = Canvas.Image
    fs.readFile(__dirname + '/background.png', function(err, picture) { 
    if (err) throw err
    var img = new Image
    img.onload = () => {
    ctx.drawImage(img, 0, 0, 500, 500) 
      }
      img.src = picture
    })
   
                      let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
	                //XP
			ctx.font = '22px Cairo';
			ctx.fillStyle = '#020202';
			ctx.fillText(`Total XP : ${Math.floor(userData[z.id].Xp)}`,  110,467);
	                //MONEY
			ctx.font = '24px Cairo';
			ctx.fillStyle = '#020202';
			ctx.fillText(`Credits : ${Math.floor(userData[z.id].money)}`,  220,360);
                        //USERNAME
                   	ctx.font = '25px Cairo';
			ctx.fillStyle = '#020202';
                        ctx.fillText(`${z.username}`, 215, 170)
                        //LEVEL
			ctx.font = '30px Cairo';
			ctx.textAlign = 'left';
			ctx.fillStyle = '#020202';
			ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
			ctx.fillText(`${userData[z.id].level}`, 90, 310);
		        //info Box :)
                        ctx.font = '25px Cairo';
                        ctx.textAlign = 'left';
			ctx.fillStyle = '#020202';
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.fillText(`${userData[z.id].text}`,265 , 270)
                        //LIKE
                        ctx.font = '25px Cairo';
                        ctx.textAlign = 'Center';
                        ctx.fillStyle = '#020202';
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.fillText(`❤${rep[message.author.id].repo}`, 80,395);
			//AVATAR
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(98, 144, 84, 0, Math.PI*2, true); 
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 13, 60, 175, 175);

    setTimeout(function() {
      fs.readFile(__dirname + '/background.png', function(err, picture) {
        if (err) throw err
        var img = new Image
        img.onload = () => {
          ctx.drawImage(img, -1, -1, 0, 0)
        }
        img.src = picture
        let inventoryPicture = canvas.toDataURL()
        let data = inventoryPicture.replace(/^data:image\/\w+;base64,/, "")
        let buf = new Buffer(data, 'base64')
        fs.writeFile(`images.png`, buf)
        message.channel.send(`**:pencil: | Showing your Profile ${message.author.username}**`, {
          file: `images.png` // Or replace with FileOptions object
        })
      })
    }, 1000)

    function roundedImage(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function wrapText(context, text, x, y, maxWidth, lineHeight) {

      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;

      for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
          // Determine how much of the word will fit
          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] != test) {
          words.splice(i + 1, 0, words[i].substr(test.length))
          words[i] = test;
        }

        test = line + words[i] + ' ';
        metrics = context.measureText(test);

        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
        } else {
          line = test;
        }
      }
      ctx.fillText(line, x, y);
    }
      })
      })
      }
      });




client.on('message', message => {
if (message.author.bot) return null;
let sender = message.author;
let msg = message.content.toUpperCase();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 200;
if (!userData[sender.id].lastDaily) userData[sender.id].lastDaily = 'Not Collected';
if (!userData[sender.id].messages) userData[sender.id].messages = 1;
if (!userData[sender.id].level) userData[sender.id].level = 1;
if (!userData[sender.id].like) userData[sender.id].like = 1;
if (!userData[sender.id].text) userData[sender.id].text = `${prefix}setinfo to set.`

if(message.content.startsWith(prefix + 'credit')) {
 var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 0;
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
        
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }

      var mando = message.mentions.users.id;
      if  (!userData[x5bzm.id]) userData[x5bzm.id] = {}
      if (!userData[x5bzm.id].money) userData[x5bzm.id].money = 0;
      message.channel.send("**:credit_card:  | **" + '`' + x5bzm.username + '`' + "** , your credit is :yen: **" + '`' + userData[x5bzm.id].money + '`' + "** credits!**")
}


let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage**: -<trans <amount> <someone>`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage**: -<trans <amount> <someone>`)
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage**: -<trans <amount> <someone>`);
            var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 200;
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!userData[defineduser.id]) userData[defineduser.id] = {}
      if (!userData[defineduser.id].money) userData[defineduser.id].money = 200;
      userData[defineduser.id].money += (+args[0]);
      userData[sender.id].money += (-args[0]);
      let mariam = message.author.username
message.channel.send('`' + mariam + '`' + '** Sent to **'+ '`' + mentionned.username + '`' + '**a ** '+ (args[0]) + '** :dollar: pound**')
}

if(message.content.startsWith(prefix + 'daily')) {
if (userData[sender.id].lastDaily != moment().format('6800000')) {
    userData[sender.id].lastDaily = moment().format('6800000')
    userData[sender.id].money += 200; 
    message.channel.send(`${message.author.username} you collect your **200** :dollar: daily pounds`)
} else {
    message.channel.send('**your next Daily :moneybag: : ' + moment().endOf('6800000').fromNow()  + '.**')
}
}
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})

if(message.content.startsWith(prefix + 'setinfo')) {
if (!userData[message.author.id].text) userData[message.author.id].text = 'Info Box:';
var mard = userData[message.author.id].text
let args = message.content.split(' ').slice(1).join(' ');
if (!args) return message.channel.send('**Usage**: -<setinfo <something>')
userData[message.author.id].text = args ;
message.channel.send(':ballot_box_with_check:**Your info was changed to ' + args + '**')
}
}
)


client.login(process.env.BOT_TOKEN); 
