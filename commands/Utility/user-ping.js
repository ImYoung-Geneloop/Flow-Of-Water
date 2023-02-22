module.exports = {
    name: 'pong',
    description: 'Replies with ping!',
    type: 1,
    options: [],
    role_perms: null,
    developers_only: false,
    category: 'Utility',
    run: async (client, interaction, config) => {
        return interaction.reply({
            content: '`🏓` Ping! Lantency: ' + client.ws.ping + 'ms'
        });
    }
};