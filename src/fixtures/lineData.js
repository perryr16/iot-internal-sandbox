let time = new Date("2021-09-01 00:00:00 -0")
const intervals = 200
// const intervals = 24*60*6 
const data = []
// let value = 10
for (let i = 0; i < intervals; i++) {
    let point = {}
    // point.time = new Date(time.getTime())
    point.time = i

    let last = 0
    i == 0 ? last = 5 : last = data[i-1]['value']

    let raw = Math.round(Math.random()*100)/100
    let mult = Math.random() >= 0.5 ? 1 : -1
    let value = raw * mult + last
    point.value = value

    data.push(point)
    time.setHours(time.getHours() + 1);
    time.setSeconds(time.getSeconds() + 60);
}

// const dataX = data.map(point => point.time)
// const dataY = data.map(point => point.value)
// console.log(dataX)
// console.log(dataY)
const lineData = data
export {
    lineData
}
