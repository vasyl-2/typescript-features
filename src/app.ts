import { greet } from './function-overloading/first/file';

const stingParamResponse = greet('5');
const numberParamResponse = greet(5, 5);

console.log('RES_____1', stingParamResponse);
console.log('RES_____2', numberParamResponse);
