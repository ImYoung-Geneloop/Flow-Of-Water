const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "matchmaking-standard",
  description: "Find or Post a Standard Match 3v3 Looking For Tm8's",
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
      .setTitle("Matchmaking Standard 3v3")
      .setDescription(`<@!${interaction.user.id}> is Looking for a 3v3 Competitive match? Post your rank and platform here!`)
      .setColor("#0099ff")
      .setTimestamp()


        ]
    });
  },
};