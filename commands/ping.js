const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription(`Pong!`),
	async execute(client, interaction) {
        const pingEmbed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setDescription('Pong!')
        interaction.reply({ embeds: [pingEmbed] });
	},
};