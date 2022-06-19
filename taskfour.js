

function maxPrice(arr) {
	var max = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].price > max.price) {
			max.price = arr[i].price;
            max.name = arr[i].name
		}
	}
	return max.name;
}

console.log(maxPrice([
    {name:"Ali", price:200 },
    {name:"Umid", price:800 },
    {name:"Sardor" , price:400}
]));
