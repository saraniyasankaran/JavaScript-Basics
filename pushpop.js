/*Implementation enqueue and dequeue using only two stacks*/

let flower=["daisy","jasmini","lily"];
let vehicles=["bike","scooty","van","truck","bicycle"];
function enqueue(element)
{
    flower.push(element);
}
enqueue("sunfower");
console.log(flower);
function dequeue(element)
{
    vehicles.pop();
}
dequeue();
console.log(vehicles);