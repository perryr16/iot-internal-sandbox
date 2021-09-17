let time = new Date("2021-09-01 00:00:00 -0")
const intervals = 1000
// const intervals = 24*60*6 
const data = [
    {"id":"co2", "data": []},
    {"id":"o2", "data": []},
    {"id":"h20", "data": []}
]
data.forEach((id, idx) => {
    for (let i = 0; i < intervals; i++) {
        let point = {"x": null, "y": null}
        let last1 = 0
        i == 0 ? last1 = (idx+1)*3 : last1 = id["data"][id["data"].length -1]['y']
        let raw = Math.round(Math.random()*100)/100
        let mult = Math.random() >= 0.5 ? 1 : -1
        let value1 = raw * mult + last1
        point.y = value1


        time.setHours(time.getHours() + 1);
        time.setSeconds(time.getSeconds() + 60);
        // point.x = time
        point.x = i
        id.data.push(point)

    }
})


const lineNivoData = data
export {
    lineNivoData
}

// console.log(lineData)
// console.log(lineData[0])
// console.log(lineData[1])
// console.log(lineData[2])
