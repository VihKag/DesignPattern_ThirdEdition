import { promises as fsPromises } from 'fs'
import objectPath from 'object-path'

export class ConfigTemplate {
  async load (file) {
    console.log(`\nĐang load file từ: ${file}`)
    this.data = this._deserialize(
      await fsPromises.readFile(file, 'utf-8'))
    console.log(`Load file Thành công`)
  }

  async save (file) {
    console.log(`Đang lưu file vào ${file}`)
    await fsPromises.writeFile(file, this._serialize(this.data))
    console.log(`Lưu File Thành Công\n`)
  }

  get (path) {
    return objectPath.get(this.data, path)
  }

  set (path, value) {
    return objectPath.set(this.data, path, value)
  }

  _serialize () {
    throw new Error('_serialize() phải được triển khai')
  }

  _deserialize () {
    throw new Error('_deserialize() phải được triển khai')
  }
}
