let divideAndSort = (num) => {
            let numToArr = num.toString().split("0")
            let proses1 = numToArr.map(x => Array.from(x).sort((a,b) => a-b).join("").split() )
            let proses2 = proses1.map(x => Number(x))
            let proses3 = (proses2.join("") + "")
            let finalProses = Number(proses3)
            console.log(finalProses);
}
divideAndSort(5959807676504231) 