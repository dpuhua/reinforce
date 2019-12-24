import address from 'address'
import defaultGateway from 'default-gateway'

export default class {
  static get ip() {
    const result = defaultGateway.v4.sync()
    return address.ip(result && result.interface)
  }
}
