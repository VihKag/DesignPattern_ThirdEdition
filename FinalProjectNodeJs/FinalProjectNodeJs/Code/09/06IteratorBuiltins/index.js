import { Matrix } from './matrix.js'

const matrix = new Matrix([
  ['Nguyễn Viết Quang', '25/03/2001', '04 CLC', 'Đesign Pattern'],
  ['Nguyễn Vinh Khang', '14/02/2002', '04 CLC', 'Đesign Pattern'],
  ['Nguyễn Van An', '16/07/2001', '04 CLC', 'Đesign Pattern'],
  ['Nguyễn Viết Đức', '06/10/2002', '04 CLC', 'Đesign Pattern']
])

console.log('for...of:')
for (const element of matrix) {
  console.log(element)
}

console.log('spread operator:')
const flattenedMatrix = [...matrix]
console.log(flattenedMatrix)

console.log('destructuring assignment:')
const [N1, N2, N3, N4, N5, N6] = matrix
console.log(N1, N2, N3, N4, N5, N6)
