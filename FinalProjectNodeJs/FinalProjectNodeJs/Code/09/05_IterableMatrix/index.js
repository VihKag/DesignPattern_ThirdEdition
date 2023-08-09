import { Matrix } from './matrix.js'

const matrix2x2 = new Matrix([
  ['Nguyễn Viết Quang', '25/03/2001', '04 CLC', 'Đesign Pattern'],
  ['Nguyễn Vinh Khang', '14/02/2002', '04 CLC', 'Đesign Pattern'],
  ['Nguyễn Van An', '16/07/2001', '04 CLC', 'Đesign Pattern'],
  ['Nguyễn Viết Đức', '06/10/2002', '04 CLC', 'Đesign Pattern']
])

const iterator = matrix2x2[Symbol.iterator]()
let iterationResult = iterator.next()
while (!iterationResult.done) {
  console.log(iterationResult.value)
  iterationResult = iterator.next()
}
