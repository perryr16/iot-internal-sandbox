let time = new Date("2021-09-01 00:00:00 -0")
const intervals = 200
// const intervals = 24*60*6 
const data = []
for (let i = 0; i < intervals; i++) {
    let point = {}
    // point.time = new Date(time.getTime())
    point.time = i

    let last1 = 0
    let last2 = 0
    let last3 = 0
    i == 0 ? last1 = 1 : last1 = data[i-1]['value1']
    i == 0 ? last2 = 10 : last2 = data[i-1]['value2']
    i == 0 ? last3 = 20 : last3 = data[i-1]['value3']

    let raw = Math.round(Math.random()*100)/100
    let mult = Math.random() >= 0.5 ? 1 : -1
    let value1 = raw * mult + last1
    point.value1 = value1

    raw = Math.round(Math.random()*100)/100
    mult = Math.random() >= 0.5 ? 1 : -1
    let value2 = raw * mult + last2
    point.value2 = value2

    raw = Math.round(Math.random()*100)/100
    mult = Math.random() >= 0.5 ? 1 : -1
    let value3 = raw * mult + last3
    point.value3 = value3

    data.push(point)
    time.setHours(time.getHours() + 1);
    time.setSeconds(time.getSeconds() + 60);
}


const lineData = data
export {
    lineData
}
