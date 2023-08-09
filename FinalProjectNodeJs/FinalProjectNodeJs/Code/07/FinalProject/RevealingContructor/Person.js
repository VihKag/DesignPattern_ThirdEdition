export default function Person(name, age) {
    var _name = name;
    var _age = age;

    function getName() {
        return _name;
    }

    function getAge() {
        return _age;
    }

    return {
        getName: getName,
        getAge: getAge,
    };
}
