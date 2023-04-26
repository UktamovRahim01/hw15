function long(a, b, c) {

    let v = ``
    let names = []
    names.push(a, b, c)
    for (let k = 0; k < 3; k++) {
        if (v.length < names[k].length) {
            v = names[k]
        }
    }

console.log(v);
}

long(`amir`, `maxqq`, `daler`)




let start = [{ a: 15, b: 22 }, { a: 11, b: 12 }]

function findMin(arr) {
    let min = Infinity;
    for (let k = 0; k < arr.length; k++) {
        if (Array.isArray(arr[k])) {
            for (let k = 0; k < arr[k].length; k++) {
                if (arr[k][k] < min) {
                    min = arr[k][k];
                }
            }
        }
        else if (typeof arr[k] === 'object') {
            for (let key in arr[k]) {
                if (arr[k][key] < min) {
                    min = arr[k][key];
                }
            }
        } else if (arr[k] < min) {
            min = arr[k];
        }
    }
    console.log(min);
}

findMin(start)








let numb = [5, 6, 1, 7, 9, 2, 8, 3, 10, 4, 11]

function sort_numb(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i+1; k < (arr.length); k++) {
            if (numb[i] > numb[k]) {
                let bnm = numb[i]
                numb[i] = numb[k]
                numb[k] = bnm
            }
        }
    }
    console.log(numb);
}

sort_numb(numb)