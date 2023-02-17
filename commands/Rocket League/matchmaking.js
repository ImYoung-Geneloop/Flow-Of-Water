const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "matchmaking-doubles",
  description: "Find or Post a Doubles Looking For Tm8",
  type: 1,
  options: [],
  role_perms: null,
  developers_only: false,
  owner_only: false,
  category: 'Rocket League',
  run: async (client, interaction, config) => {

    return interaction.reply({
        embeds: [
            new EmbedBuilder()
      .setTitle("Matchmaking Doubles")
      .setDescription(`<@!${interaction.user.id}> is Looking for a 2v2 Competitive match? Post your rank and platform here!`)
      .setColor("#0099ff")
      .setTimestamp()


        ]
    });
  },
};
