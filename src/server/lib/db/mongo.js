import mongoose from 'mongoose'
import config from '../../../../config'

const isProduciton = process.env.NODE_ENV === 'production'

const uri = process.env.MONGODB_URI ||
  isProduciton ? config.prod.mongo.uri : config.dev.mongo.uri

const port = process.env.MONGODB_PORT ||
  isProduciton ? config.prod.mongo.port : config.dev.mongo.port

const db = isProduciton ? config.prod.mongo.db : config.dev.mongo.db

mongoose.connect(`mongodb://${uri}:${port}/${db}`)

export default mongoose
