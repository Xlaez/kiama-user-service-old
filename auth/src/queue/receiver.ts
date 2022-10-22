import amqp, { Connection } from 'amqplib/callback_api'
import { AMP_URL } from '@config';
import { logger, stream } from '@utils/logger';

class mqReceveir {
    public connection: Connection
    public channel: amqp.Channel
    public queueName: string

    constructor() {
        this.queueName = "kiama-auth"

        amqp.connect(AMP_URL, (err, conn) => {
            if (err) {
                logger.error(err)
                throw err
            }
            this.connection = conn
            conn.createChannel((err, ch) => {
                if (err) {
                    logger.error(err)
                    throw err
                }
                this.channel = ch
                ch.assertQueue(this.queueName, { durable: true })
                ch.consume(this.queueName, (msg) => {
                    const parsed = JSON.parse(msg.content.toString())
                    switch (parsed.action) {
                        case "SIGNUP":
                            logger.info(`Received message from queue: ${parsed.action}`)
                            break;
                        case "LOGIN":
                            logger.info(`Received message from queue: ${parsed.action}`)
                            break;
                        default:
                            break;
                    }
                }, { noAck: true })
            })
        })
    }

    public consume = () => {
        this.channel.consume(this.queueName, (msg) => {
            logger.info(`Message received from queue: ${msg}`)
        }, { noAck: true })
    }

    public close = () => {
        this.connection.close()
    }

    public deleteQueue = () => {
        this.channel.deleteQueue(this.queueName)
    }

    public purgeQueue = () => {
        this.channel.purgeQueue(this.queueName)
    }

}