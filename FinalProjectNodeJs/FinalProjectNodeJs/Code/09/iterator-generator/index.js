function* animalGenerator(){
    yield 'Cat';
    yield 'Dog';
    return 'Mouse';
}

const animals = animalGenerator();

console.log(animals.next());
console.log(animals.next());
console.log(animals.next());


console.log("Sử dụng vòng lặp for ... of loop để thấy return không được trả về");

for (const animal of animalGenerator()) {
    console.log(animal)
}
