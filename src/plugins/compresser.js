import lz from "lz-string"
const dataFormat = {
    'Breakfast': [],
    'Breakfast Time': "",
    'Lunch': [],
    'Lunch Time': "",
    'Dinner': [],
    'Dinner Time': "",
    'Snacks': [],
    'Snacks Times': {},
    'Activities': [],
    'Activity Times': {},
    'Wake Up time': "",
    'School Start': "",
    'School End': "",
    'Lights Out': "",
    'Weight': 0,
    'Notes': ''
}
export default {
    compress(data) {
        if (Object.values(data)) {
            let listData = ""
            Object.keys(data).forEach(v => {
                let thisListData = []
                Object.keys(dataFormat).forEach((k) => {
                    thisListData.push(JSON.stringify(data[v][k]))
                })
                listData += thisListData.join('\\,')
                listData += "\\,\\,"
                listData += v
                listData += "\\,\\,"
            })
            
            console.log("List Data", listData)
            return lz.compress(listData)
        }
        
    },
    decompress(data) {
        let listData = lz.decompress(data).split(/\\,\\,/)
        listData.pop()
        console.log("decompress Data", listData)
        let objData = {}
        listData.forEach((n, i2) => {
            if (i2 % 2 === 0) {
                objData[listData[i2+1]] = {}
                n.split("\\,").forEach((k, i) => {
                    objData[listData[i2+1]][Object.keys(dataFormat)[i]] = JSON.parse(k)
                })
            }
        })
        
        return objData
    }
}