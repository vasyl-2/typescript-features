import "reflect-metadata";

// Define a factory decorator to add a role to a user
export function Role(role: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            // check for permission here
            // if (!checkRole(role)) {
            //     throw new Error("Access Denied");
            // }

            Reflect.defineMetadata("role", role, target, propertyKey);
            return originalMethod.apply(this, args);
        };
    };
}

export class User {
    private _username: string;
    private _password: string;

    constructor(username: string, password: string) {
        this._username = username;
        this._password = password;
    }

    @Role("admin")
    getUsername() {
        return this._username;
    }

    @Role("admin")
    setPassword(password: string) {
        this._password = password;
    }

    @Role("user")
    changePassword(oldPassword: string, newPassword: string) {
        if (this._password === oldPassword) {
            this._password = newPassword;
        } else {
            throw new Error("Invalid password");
        }
    }
}

const user = new User("JohnDoe", "password123");

const role = Reflect.getMetadata("role", user, "getUsername");
console.log('ROLE____________1',role); // "admin" // logs undefined due to typescript version 5 ?....

const role2 = Reflect.getMetadata("role", user, "changePassword");
console.log('ROLE_____________2', role2); // "user" // logs undefined due to typescript version 5 ?....
