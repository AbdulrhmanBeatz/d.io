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

//ping
            client.on("message", message => {
              if (message.content === prefix + "ping") {
                  const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
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
              const embed = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setAuthor(message.author.username ,message.author.avatarURL)
              .setTitle("__اوامر البوت__")
              .addField('**-<bc**' , '**لنشر رساله الى جميع الاعضاء المتواجدين**')
              .addField('**-<ping**' , '**لرؤيه سرعة اتصال البوت في الخادم**')
              .addField('**-<kick**' , '**لطرد اي شخص من السيرفر**')
              .addField('**-<server**','**لرؤيه حالة السيرفر**')
              .addField('**-<clear**','**لحذف الشات**')
              .addField('**-<add.r**','**لأضافة رتبة للسيرفر**')
              .addField('**-<avatar**','**لأرساله صوره شخص محدد -<avatar @Tornado#0607**')
              .addField('**-<id**','**لعرض بيانات العضو**')
              .addField('**-<roles**','**لرؤية جميع الرتب المتواجده في السيرفر**')
              .addField('**-<about**','**لرؤية بعض الامور عن البوت**')
              .addField('**-<mute**','**لاعطاء الشخص ميوت كتابي**')
              .addField('**-<unmute**','**لرفع الميوت الكتابي عن شخص**')
              .addField('**-<add.v**','**لأنشاء روم صوتي**')
              .addField('**-<add.t**','**لأنشاء روم كتابي**')
              .addField('**-<roleadd**','**لأعطاء لشخص رتبة**')
              .addField('**-<roledel**','**لحذف الرتبة من شخص **')
              .addField('**-<botsg**','**يتيح للمستخدم ارسال رسائل خاصه مباشره لصاحب البوت**')
              .addField('**-<discrim**','**لرؤيه عدد الاعضاء الذين يمتلكون نفس التاق الخاص بك**')
              .addField('**-<embed**','**لكتابة ما تقوله بصيغة الامبيد**')
              .addField('**-<draw**','**يكتب ما تقوله في صوره**')
              .addField('**-<games**','**قائمة الالعاب**')
              .addField('**-<autorole**','**لتغير الرتبة التلقائيه في السيرفر**')
                   message.author.sendEmbed(embed)
                   message.reply('Check In DM :mailbox_with_mail:').then(message => {message.delete(10000)});
            }
          });

//help-en
          client.on('message', message => {
            if(message.content == prefix + 'help-en') {
              const embed = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setAuthor(message.author.username ,message.author.avatarURL)
              .setTitle("__Bot Commands__")
              .addField('**-<bc**' , '**To send message in DM to everyone in the server**')
              .addField('**-<ping**' , '**To how bot connection speed**')
              .addField('**-<kick**' , '**Kick someone from sever**')
              .addField('**-<member**','**TO see members status**')
              .addField('**-<server**','**Server info**')
              .addField('**-<clear**','**Clear chat (Max:50)**')
              .addField('**-<add.r**','**Create a role**')
              .addField('**-<avatar**','**To see member avatar by mention him -<avatar @Tornado#0607**')
              .addField('**-<id**','**member status**')
              .addField('**-<roles**','**To see every role in the server**')
              .addField('**-<mute**','**To mute someone from chat**')
              .addField('**-<unmute**','**To unmute someone from chat**')
              .addField('**-<voice set**','**Members in voice counter**')
                .addField('**-<add.t**','**Create a text channel**')
                .addField('**-<add.v**','**Create a Voice Channel**')
                .addField('**-<roleadd**','**Give someone a role**')
                .addField('**-<roledel**','**Remove a role from someone**')
                .addField('**-<botsg**','**let you send a messages directly to bot owner (Creator)**')
                .addField('**-<discrim**','**to see how much members have same tag**')
                .addField('**-<embed**','**To write to do you say in embed**')
                .addField('**-<draw**','**Rewrite what do you say in a image**')
                .addField('**-<games**','**-<games menu**')
                .addField('**-<autorole**','**To change server’s autorole**')
                   message.author.sendEmbed(embed)
                   message.reply('Check In DM :mailbox_with_mail:').then(message => {message.delete(10000)});
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
                                                //wl
                       ctx.font = '35   Aeland Bold';
                        ctx.fontSiz.slice(1).join(' ')
                        ctx.fillSty

                        //ur name
                        ctx.font = '40px Impact';
                        ctx.fontSize = '48px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
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
 
let credits = JSON.parse(fs.readFileSync("./credits.json", "utf8"));

client.on('ready', () => {
    console.log("Credits Bot Version 1.0.0")
    console.log("By ! Abdulrhman | Official Coding")
});

client.on('message', async message => { // نظام الكريدت
  if(message.author.bot) return; // اذا كان المرسل بوت م يرد عليه
    

    if(!credits[message.author.id]) { // اذا م كان معاه كريدت
      credits[message.author.id] = {
        credits: 200 // عدد الكريدت الاساسي
      };
    }

let cred = credits[message.author.id].credits  // تعريف للكريدتس الخاصة بالعضو

let creditsAmt = Math.floor(Math.random() * 20) + 1; // رقم عشوائي
    let baseAmt = Math.floor(Math.random() * 20) + 1;  // رقم عشوائي

    console.log(`${creditsAmt};${baseAmt}`); 

    if(creditsAmt == baseAmt) {  // اذا كان الرقمين يتطابقان مع بعضهما
      credits[message.author.id] = {
        credits: cred + creditsAmt  
      };
    }

    fs.writeFile('./credits.json', JSON.stringify(credits), (err) => {  // الكتابة في ملف
      if(err) console.log(err)
    });

let men = message.mentions.users.first();

    if(message.content.startsWith("-<credits")) {
if(!men) { // اذا لم يكن هناك منشن
      message.reply(`You have ${cred} credits`)
    }

    if(men) { // اذا وجد منشن

    if(!credits[men.id]) {
       credits[men.id] = {credits: 200}
    }

    fs.writeFile('./credits.json', JSON.stringify(credits), (err) => {if(err) console.log(err)})

    let c = credits[men.id].credits

    message.channel.send(`${men} Have ${c} credits`)

    }
    }



});

client.login(process.env.BOT_TOKEN); 
