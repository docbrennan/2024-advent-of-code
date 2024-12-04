const lists = require('./lists.json');
let list_a = lists["list_a"].sort()
let list_b = lists["list_b"].sort()

let counter = list_a.length
let index = 0, distance = 0, total_distance = 0

while (counter > 0) {

    const a = list_a[index]
    const b = list_b[index]

    if (a > b) {

        distance = a - b

    } else {

        distance = b - a

    }

    total_distance += distance

    index++; counter--

}

console.log(total_distance)

counter = list_a.length
index = 0, similarity = 0, similarity_score = 0

while (counter > 0) {

    const a = list_a[index]
    let finds = 0

    for (let i = 0; list_b[i]; i++) {
        if (a === list_b[i]) finds++
    }

    similarity_score += a * finds

    index++; counter--

}
console.log(similarity_score)