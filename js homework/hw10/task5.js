function mapBuilder (keysArray, valuesArray) {
    let newMap = new Map();
    for (i=0; i<keysArray.length; i++) {
        for (j=0; j<valuesArray.length; j++) {
            newMap.set(keysArray[j], valuesArray[j]);
        }
    }
    return newMap;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"