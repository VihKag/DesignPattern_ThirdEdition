import jsonOverTcp from 'json-over-tcp-2'

const shop = jsonOverTcp.createServer({ port: 5000 })
shop.on('connection', socket => {
  socket.on('data', data => {
    console.log('Thông tin về bộ nhớ', data)
  })
})

shop.listen(5000, () => console.log('Shop started'))
