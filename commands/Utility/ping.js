module.exports = {
    name: 'ping',
    description: 'Replies with pong!',
    type: 1,
    options: [],
    role_perms: null,
    developers_only: false,
    premium_only: true,
    category: 'Utility',
    run: async (client, interaction, config) => {
        return interaction.reply({
            content: '`🏓` Pong! Lantency: ' + client.ws.ping + 'ms'
        });
    }
};