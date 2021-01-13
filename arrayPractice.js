const itmes = [
	{
		id:'1',
		name:'One',
	},
	{
		id:'2',
		name:'Two',
	},
]

const results = items.map((item)=>{
	return[
		{
			id:'3',
			name: item.name,
		},
		{
			id='4',
			name:item.name
		},
	]
})

console.log(items)
console.log(results)