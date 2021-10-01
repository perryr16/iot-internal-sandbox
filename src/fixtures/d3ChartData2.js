
const seedData = (mult) => {
    const data = [
        {
            "date": 0,
            'value': 0
        }
    ]    
    for (let i = 0; i < 100; i++ ) {
        const l = data.length-1
        const newDate = data[l].date+1
        const newValue = parseInt(Math.random()*mult)
        data.push({
            'date': newDate,
            'value': newValue
        })
    }
    return data
}


const data1 = seedData(10)
const data2 = seedData(4)
const linedataNum = [data1, data2]

const addDataNum = (data, mult) => {
    const shift = mult > 9 ? 5 : 0
    const l = data.length-1
    const newDate = data[l].date+1
    
    const newValue = parseInt((Math.random()*mult)+shift)
    data.push({
        'date': newDate,
        'value': newValue
    })
    // data.shift() 
    return data
}
// console.log('data1',data1)
// console.log('add data1',addData(data1))
export {
    linedataNum,
    addDataNum
}
