import Papa from 'papaparse'

let csv1 = "value1-1,value1-2\r\n" 
csv1 += "value2-1,value2-2\r\n" 
csv1 += "value3-1,value3-2\r\n" 

const result1 = Papa.parse(csv1,{
	skipEmptyLines: true
})
console.info(result1)

let csv2 = "value1-1,value1-2\n" 
csv2 += "value2-1,value2-2\n" 
csv2 += "value3-1,value3-2\n" 

const result2 = Papa.parse(csv2,{
	skipEmptyLines: true
})
console.info(result2)