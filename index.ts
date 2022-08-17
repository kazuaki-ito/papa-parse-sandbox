import Papa from 'papaparse'

// CRLF
let csv1 = "value1-1,value1-2\r\n" 
csv1 += "value2-1,value2-2\r\n" 
csv1 += "value3-1,value3-2\r\n" 

const result1 = Papa.parse(csv1,{
	skipEmptyLines: true
})
console.info('■ CRLFの場合')
console.info(result1)
/*
■ CRLFの場合 => OK
{
	data: [
		[ 'value1-1', 'value1-2' ],
		[ 'value2-1', 'value2-2' ],
		[ 'value3-1', 'value3-2' ]
	],
	errors: [],
	meta: {
		delimiter: ',',
		linebreak: '\r\n',
		aborted: false,
		truncated: false,
		cursor: 57
	}
}
*/

// LF
let csv2 = "value1-1,value1-2\n" 
csv2 += "value2-1,value2-2\n" 
csv2 += "value3-1,value3-2\n" 

const result2 = Papa.parse(csv2,{
	skipEmptyLines: true
})
console.info('■ LFの場合')
console.info(result2)
/*
■ LFの場合 => OK
{
	data: [
		[ 'value1-1', 'value1-2' ],
		[ 'value2-1', 'value2-2' ],
		[ 'value3-1', 'value3-2' ]
	],
	errors: [],
	meta: {
		delimiter: ',',
		linebreak: '\n',
		aborted: false,
		truncated: false,
		cursor: 54
	}
}

*/


// CRLF & LF
let csv3 = "value1-1,value1-2\n" 
csv3 += "value2-1,value2-2\r\n" 
csv3 += "value3-1,value3-2\n" 

const result3 = Papa.parse(csv3,{
	skipEmptyLines: true
})
console.info('■ CRLFとLFが混在する場合')
console.info(result3)

/*
■ CRLFとLFが混在する場合
=> このパターンは改行コードとして多い方に寄せられるので、パース結果の2レコード目の最後尾の項目の値のようにに\rが含まれてしまう可能性がある。値をtrimすれば解決できる
{
	data: 
		[ 'value1-1', 'value1-2' ],
		[ 'value2-1', 'value2-2\r' ],
		[ 'value3-1', 'value3-2' ]
	],
	errors: [],
	meta: {
		delimiter: ',',
		linebreak: '\n',
		aborted: false,
		truncated: false,
		cursor: 55
	}
}
*/

