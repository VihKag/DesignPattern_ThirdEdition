import Person from "./Person.js";

export default function PersonBuilder(name, gender) {
    this.name = name;
    this.gender = gender;

    this.setWeight = function (weight) {
        this.weight = weight;
        return this;
    };

    this.setHeight = function (height) {
        this.height = height;
        return this;
    };

    this.build = function () {
        return new Person(this.name, this.gender, this.weight, this.height);
    };
}
