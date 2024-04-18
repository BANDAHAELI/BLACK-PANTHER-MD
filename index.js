const bot = require(__dirname + '/lib/ibrahimaitech')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`BLACK-PANTHER ${VERSION}`)
  try {
    await bot.init()
    bot.logger.info('⏳ Database Running!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
