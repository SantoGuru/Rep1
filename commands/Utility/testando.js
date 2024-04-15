// Template de Option Command 

const Discord = require("discord.js"); // require da biblioteca do discord.js

module.exports = {
  name: 'criar',  // Especificar nome do comando
  description: "testando", // Especificar a descrição do comando
  options: [ // Especificar que tem opções de tipo de comando
    {
      name: "comando",
      description:"cption",
      type: Discord.ApplicationCommandOptionType.Subcommand, // Especificar o tipo de comando
    },
    {
      name: "comandot",
      description:"option",
      type: Discord.ApplicationCommandOptionType.Subcommand,
    }
  ],
  run: async (client, interaction) => {  
    // "run" é o metodo que inicia o comando propriamente dito
    // "client" se refere ao bot
    // "interaction" se refere a interação que gerou o run
    switch (interaction.options.getSubcommand()) {
    // Switch pra verificar qual foi escolhido

    }
  },
};