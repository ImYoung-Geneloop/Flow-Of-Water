const { GatewayIntentBits, Partials } = require('discord.js');
const presenceData = require('../JSON/presence.json');

module.exports = {
    // Client configuration:
    client: {
        // Constructor:
        constructor: {
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildBans,
                GatewayIntentBits.GuildEmojisAndStickers,
                GatewayIntentBits.GuildIntegrations,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.GuildInvites,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.DirectMessageReactions,
                GatewayIntentBits.DirectMessageTyping,
                GatewayIntentBits.MessageContent
            ],
            partials: [
                Partials.Channel,
                Partials.Message,
                Partials.User,
                Partials.GuildMember,
                Partials.Reaction
            ],
            presence: {
                activities: [
                    {
                        name: presenceData.activity,
                        type: presenceData.activity_type
                    }
                ],
                status: presenceData.status
            }
        },
        // Identification:
        token: "OTM3NzgzMTQ1MTYyNDk4MTE4.GQ5tzd.v_GB-yZDiMfQhfECu4Gl3t6Ibiw7CsSgeCQ46k",
        id: "937783145162498118",
        OWNER: ["774354935906959380"],
        PREFIX: ">",
    },

    // Database:
    database: {
        mongodb_uri: 'mongodb+srv://sunrise:sunrise@sunrise.seesaix.mongodb.net/?retryWrites=true&w=majority'
    },

    // APIs:
    apis: {
        
    },

    // Users:
    users: {
        developers: ["774354935906959380"],
        owner: "774354935906959380"
    },

    //button handler
    handlers: {
        Guild_ID: "1059918951653584896", // 
      },

      //emoji for Button
      "Emojis": {
        "Wrong": "❌",
       "Done": "✅"
  }
};
