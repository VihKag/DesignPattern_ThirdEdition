import { Matrix } from './matrix.js';

const matrix = new Matrix([
  ['Nguyễn Vinh Khang', '21 tuổi','nam'],
  ['Nguyễn Hoàng Khôi', '20 tuổi','nam'],
  ['Lê Minh Nguyệt', '19 tuổi', 'nữ']
]);

const iterator = matrix[Symbol.iterator]();
let iterationResult = iterator.next();
while (!iterationResult.done) {
  console.log(iterationResult.value);
  iterationResult = iterator.next();
}