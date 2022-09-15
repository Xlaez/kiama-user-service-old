import amqp, { Connection } from 'amqplib/callback_api'
import { AMP_URL } from '@config';
import { logger, stream } from '@utils/logger';


class mqPublisher {
    public connection: Connection
    public channel: amqp.Channel
    public queueName : string

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
            ch.assertQueue(this.queueName, { durable: false })
        })
        })
    }

    public publish = (msg: string) => {
        this.channel.sendToQueue(this.queueName, Buffer.from(msg), { persistent: true })
        logger.info(`Message sent to queue: ${msg}`)
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

export default mqPublisher
