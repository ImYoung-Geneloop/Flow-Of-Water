const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'socials',
    description: 'Replies with bot socials!',
    type: 1,
    options: [],
    role_perms: null,
    developers_only: false,
    category: 'Information',
    run: async (client, interaction, config) => {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({
                        name: client.user.username,
                        iconURL: client.user.displayAvatarURL({ dynamic: true })
                    })
                    .setTitle(client.user.username + '\'s socials:')
                    .addFields(
                        { name: "Name", value: client.user.tag, inline: true },
                        { name: "My ID", value: `\`${client.user.id}\``, inline: true },
                        { name: "Youtube", value: `https://www.youtube.com/channel/UCe_r9stfOYw0DPQCHUb_3iw`, inline: true },
                        { name: "Fun Fact: I am in Guilds", value: `${client.guilds.cache.size} servers`, inline: true },
                        { name: "Website", value: `**COMING SOON*`, inline: true },
                        { name: "Github", value: `https://github.com/ImYoung-Geneloop/LeagueOSModBot`, inline: true },
                    )
                    .setColor("Aqua")
            ]
        });
    }
};