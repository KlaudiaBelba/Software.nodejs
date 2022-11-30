import fsp from "fs/promises";

function parseCSV(csv) {
    let lines = csv.split('/r/n');
    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split(' ')
    }
    return lines;
}

function checkIfFileContainStrings (string) {
    const uniqueStrings = [];
    for (const iterator of string) {
       if (typeof iterator == 'number' && uniqueStrings.length === 0){
        sum += iterator;
       } else if (typeof iterator == 'string' && sum === 0){
        uniqueStrings.push(iterator)
       } else {
        console.log("The file must contain only strings or only numbers");
        return false;
       }
    }
    if (sum !== 0){
        console.log(sum);
    } else {
        console.log(uniqueStrings);
    }
}

export default  checkIfFileContainStrings;