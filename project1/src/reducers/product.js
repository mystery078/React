var initialState = [
	{
		id: 1,
		name: 'Iphone 6',
		image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/1/4/636506509528306435_iphone6-32GB-2.jpg',
		description: 'San pham demo',
		price: 100,
		stock: 10,
		rating: 4
	},
	{
		id: 2,
		name: 'Iphone 7',
		image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-hh-600x600.jpg',
		description: 'San pham demo 2 ',
		price: 120,
		stock: 5,
		rating: 3
	},
	{
		id: 3,
		name: 'Iphone 8',
		image: 'https://cdn3.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-hh-600x600.jpg',
		description: 'San pham demo 3',
		price: 150,
		stock: 3,
		rating: 5
	},
]

const myReducer = (state = initialState, action) =>{
	switch(action.type){
		default: return [...state];
	}
}

export default myReducer;