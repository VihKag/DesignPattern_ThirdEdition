import PersonBuilder from "./PersonBuilder.js";

const persons = [];

persons.push(
    new PersonBuilder("Nguyễn Khánh Hòa", "female")
        .setHeight(168)
        .setWeight(50)
        .build()
);
persons.push(
    new PersonBuilder("Nguyễn Minh Đức", "male")
        .setHeight(170)
        .setWeight(70)
        .build()
);
persons.forEach((person) => {
    console.log(person);
});
