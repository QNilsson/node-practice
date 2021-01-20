const itmes = [
	{
		id:'1',
		name:item.name,
	},
	{
		id:'2',
		name:item.name,
	},
]

const flatResults = items.flatMap((item)=>{
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