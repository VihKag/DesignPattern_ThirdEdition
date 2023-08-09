import jsonOverTcp from 'json-over-tcp-2'

export class OfflineState {
  constructor (failsafeSocket) {
    this.failsafeSocket = failsafeSocket
  }

  send (data) {
    this.failsafeSocket.queue.push(data)
  }

  activate () {
    const retry = () => {
      setTimeout(() => this.activate(), 1000)
    }

    console.log('Đang truy cập...')
    this.failsafeSocket.socket = jsonOverTcp.connect(
      this.failsafeSocket.options,
      () => {
        console.log('Truy cập thành công')
        this.failsafeSocket.socket.removeListener('error', retry)
        this.failsafeSocket.changeState('online')
      }
    )
    this.failsafeSocket.socket.once('error', retry)
  }
}
