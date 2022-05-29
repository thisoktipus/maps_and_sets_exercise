//using functions with map//
const add = (x,y) => x + y;
const multiply = (x,y) => x * y;

const funcCalls = new Map();
funcCalls.set(add, 0);
funcCalls.set(multiply,0);

//------//

const bandData = [
    [3, '3 doors down'],
['three', 'three dog night'],
['nine','nine inch nails'],
['four', 'the four seasons'],
[41, 'sum 41']
];

const bandMap = new Map(bandData);

bandMap.set(182, 'blink-182').set('twenty', 'matchbox twenty');

//------//

bandMap.has(41); // true//

//------//

bandMap.delete('twenty'); //deletes matchbox twenty//


//------//

bandMap.keys() //returns all keys//
bandMap.values() //returns all values//






