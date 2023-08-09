import Intern from "./Intern.js";
import Fresher from "./Fresher.js";
import Junior from "./Junior.js";
import Senior from "./Senior.js";

export default function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Intern(name);
            case 2:
                return new Fresher(name);
            case 3:
                return new Junior(name);
            case 4:
                return new Senior(name);
            default:
                return new Intern(name);
        }
    };
}
