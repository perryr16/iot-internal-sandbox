let time = new Date("2021-09-01 00:00:00 -0")
const intervals10s = 25
// const intervals10s = 24*60*6 
const data = []
let value = 10
for (let i = 1; i < intervals10s; i++) {
    point = {}
    point.time = new Date(time.getTime())

    const diff = Math.round(Math.random()*100)/100

    point.value = value + diff 
    value = value + diff 
    let raw = Math.round(Math.random()*100)/100
    let mult = Math.random() > 0.5 ? 1 : -1
    let diff = raw * mult

    const newTime = new Date(time.getTime())  

    data.push(newTime)
    time.setHours(time.getHours() + 1);
    time.setSeconds(time.getSeconds() + 60);
}
console.log(data) 
let raw = Math.round(Math.random()*100)/100
let mult = Math.random() > 0.5 ? 1 : -1
let value = raw * mult
console.log(z)
