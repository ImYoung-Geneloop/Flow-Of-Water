const client = require('../index');
const config = require('../config/main');
const { ChannelType } = require('discord.js');
const { AFKSchema } = require('../schemas/main');
const { EmbedBuilder } = require('discord.js');
const superdjs = require('super-djs');


// AFK System
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.channel.type === ChannelType.DM) return;

    if (!message.mentions.members.first()) {
        AFKSchema.findOne({
            user: message.author.id,
            guild: message.guild.id
        }, async (err, data) => {
            if (err) throw err;
            if (data) {
                await message.member.setNickname(message.member.user.username).catch(() => { });

                if (data.loggerType === true) {
                    return message.reply(
                        {
                            content: '**Welcome back!** I have removed your AFK.'
                        }
                    ).then(async (sent) => {
                        setTimeout(async () => {
                            await AFKSchema.deleteOne({
                                user: message.author.id,
                                guild: message.guild.id
                            });

                            return sent.delete().catch(() => { });
                        }, 8000);
                    });
                } else {
                    return message.reply(
                        {
                            content: '**Welcome back!** I have removed your AFK.'
                        }
                    ).then(async (sent) => {
                        setTimeout(async () => {
                            await AFKSchema.deleteOne({
                                user: message.author.id,
                                guild: message.guild.id
                            });

                            return sent.delete().catch(() => { });
                        }, 8000);
                    });
                };
            } else return;
        });
    } else {
        AFKSchema.findOne({
            user: message.mentions.members.first().id,
            guild: message.guild.id
        }, async (err, data) => {
            if (err) throw err;
            if (data) {
                return message.reply(`That user is currently **AFK**. ${data.reason !== null ? `Reason: ${data.reason}` : ''}`);
            } else return;
        });
    }
});

//mention system
client.on('messageCreate', async (message) => {
    if (message.content.startsWith('<@' + client.user.id + '>' || '<@!' + client.user.id + '>')) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({
                        name: client.user.username,
                        iconURL: client.user.displayAvatarURL()
                    })
                    .setDescription(`Hey ${message.author}, did you need any help? Try to run the command **</help:1030922301769781370>** to check the help menu!`)
                    .setColor('AQUA')
            ]
        }).then(async (sent) => {
            await superdjs.Wait(15000);

            message.delete().catch(() => { });
            sent.delete().catch(() => { });
        });
    };
});