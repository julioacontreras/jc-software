import { setLogger, type LoggerAdapter } from '../../adapters/logger'

class Logger implements LoggerAdapter {

    public log(message: string): void {
        console.log(message)
    }
}

const logger = new Logger() 
setLogger(logger)
logger.log('Log infrastructure loaded!')
