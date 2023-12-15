// https://stackoverflow.com/questions/65584688/trying-to-declare-a-function-getting-error-ts2384-overload-signatures-must-all

export  function greet(person: string): string;
export  function greet(person: number, age: number): string;

// Implement the function elsewhere (e.g., in another file)
export function greet(person: string | number, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${person}! You are ${age} years old.`;
    } else {
        return `Hello, ${person}!`;
    }
}


