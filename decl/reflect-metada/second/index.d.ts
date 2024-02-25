import "reflect-metadata";
export declare function Role(role: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare class User {
    private _username;
    private _password;
    constructor(username: string, password: string);
    getUsername(): string;
    setPassword(password: string): void;
    changePassword(oldPassword: string, newPassword: string): void;
}
//# sourceMappingURL=index.d.ts.map