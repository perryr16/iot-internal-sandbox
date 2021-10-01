
const seedData = (mult) => {
    const data = [
        {
            "date": "2019-07-15",
            'value': 0
        }
    ]    
    for (let i = 0; i < 100; i++ ) {
        const l = data.length-1
        const tomorrow = new Date(data[l].date)
        tomorrow.setDate(tomorrow.getDate()+1)
        const dateStr = tomorrow.toISOString().split('T')[0]
        const newValue = parseInt(Math.random()*mult)
        data.push({
            'date': dateStr,
            'value': newValue
        })
    }
    return data
}


const data1 = seedData(10)
const data2 = seedData(4)
const linedata2 = [data1, data2]

const addData = (data) => {
    const l = data.length-1
    const tomorrow = new Date(data[l].date)
    tomorrow.setDate(tomorrow.getDate()+1)
    const dateStr = tomorrow.toISOString().split('T')[0]
    const newValue = parseInt(Math.random()*10)
    data.push({
        'date': dateStr,
        'value': newValue
    })
    // data.shift() 
    return data
}
// console.log('data1',data1)
// console.log('add data1',addData(data1))
export {
    linedata2,
    addData
}
