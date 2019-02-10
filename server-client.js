// Create a single client

const DiscordRSS = require('./index.js')
const drss = new DiscordRSS.Client() // Override default config values here

drss.login(require('./config.js').bot.token, true)

drss.on('finishInit', () => {
  // Do whatever once the bot has finished initialization
  try {
    require('./web/index.js')()
  } catch (err) {}
})