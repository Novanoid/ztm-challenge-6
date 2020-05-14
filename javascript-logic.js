//Returns sorted array of numbers where repeats lie in nested arrays
let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const sortedArray = (arr => {
    let finalArray = [];
    count = 0;
    arr = arr.sort((a, b) => a-b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] === arr[i]) {
            count++;
        }
        else if (arr[i+1] !== arr[i] && arr[i-1] !== arr[i]) {
            finalArray.push(arr[i]);
        }
        else {
            finalArray.push(arr.slice(i-count ,i+1));
            count = 0;
        }
        console.log(count)
    }
    return finalArray;
})
console.log(sortedArray(array));

//Returns two numbers in the array which add up to the target number
let array1 = [1, 2, 3];

const targetNumber = ((arr, target) => {
    for (let i = 0; i < arr.length; i+2) {
        for (num of arr.slice(i+1,)) {
            if (target-arr[i] === num) {
                return [arr[i], num];
            }
          }
    }
    return `No number pair adds up to the target in this array`;
})
console.log(targetNumber(array1, 4));

//Returns the RGB equivalent of the HEX number or vice versa 
const HEXOrRGB = (input => {
    hexDict = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `A`, `B`, `C`, `D`, `E`, `F`]

    const HEX2RGB = (hex => {
        hex = hex.replace(`#`, ``).split(``);
        RGB = []
        for (let i = 0; i < hex.length; i+=2 ) {
            RGB.push(Number(hexDict.indexOf(hex[i]))*16 + Number(hexDict.indexOf(hex[i+1]))).toString()
        }
        return RGB;
    })

    const RGB2HEX = (rgb => {
        console.log(`pass`)
    })

    if (input.startsWith(`#`)) {
        return HEX2RGB(input)
    }

    else {
        return RGB2HEX(input)
    }
    
})

console.log(HEXOrRGB(`#FFFFFF`))

