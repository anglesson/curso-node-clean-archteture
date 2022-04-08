export default {
  mongoUrl: process.env.MONGODB_CONNSTRING ?? 'mongodb://localhost:27017/clean-node-api',
  port: process.env.port ?? 5050
}
