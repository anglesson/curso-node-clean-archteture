import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (uri?: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri ?? '')
  },

  async disconnect (): Promise<void> {
    if (!this.client) {
      await this.client.close()
    }
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client || !this.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  async isConnected (): Promise<boolean> {
    const status = await this.client.db().command({ serverStatus: 1 })
    return status.ok
  },

  map (collection: any): any {
    const { _id, ...collectiontWithoutId } = collection
    return Object.assign({}, collectiontWithoutId, { id: _id })
  }
}
