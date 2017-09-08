import redis from 'redis'
import config from '../../../../config'

const isProduction = process.env.NODE_ENV === 'production'

const port = process.env.REDIS_PORT ||
  (isProduction ? config.prod.redis.port : config.dev.redis.port)

const client = redis.createClient(port)

export default client
