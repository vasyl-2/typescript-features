export  function greet(person: string): string;
export  function greet(person: number, age: number): string;

export function greet(person: string | number, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${person}! You are ${age} years old.`;
    } else {
        return `Hello, ${person}!`;
    }
}
