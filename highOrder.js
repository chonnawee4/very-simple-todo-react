const numbers = ['1', '2', '3']

let texts = []

texts = numbers.map(number => {
    return <ListItem/>
})

console.log(`${texts[0]} ${texts[1]} ${texts[2]}`)

// let filterTexts = []

// filterTexts = numbers.filter(number => {
//     return number !== '1'
// })

// console.log('filterTexts:' + filterTexts)