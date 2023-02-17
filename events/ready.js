const client = require('../index');

client.once('ready', async () => {
    console.log('> Logged into as ' + client.user.username + '.');
});