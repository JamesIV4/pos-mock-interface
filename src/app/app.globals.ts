// Store global runtime varibales here

export const globalVariables = {
	users: [
		{
			id: 0,
			name: 'Default'
		}
	],
	orders:	{
		currentOrder: 0,
		queue: [
			{
				id: 0,
				status: 'In Progress',
				items: [] as any,
			},
		],
	},
	menu: {
		entrees: [
			{
				id: 0,
				name: 'Chick-fil-A<sup>&reg;</sup> Chicken Sandwich',
				alt: 'Chick-fil-A Chicken Sandwich',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Entrees/Parent/Classic_Sandwich.png',
				price: 3.89
			},
			{
				id: 1,
				name: 'Chick-fil-A<sup>&reg;</sup> Deluxe Chicken Sandwich',
				alt: 'Chick-fil-A Deluxe Chicken Sandwich',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Entrees/Parent/cfaDeluxe_mobile.png',
				price: 4.59
			},
			{
				id: 2,
				name: 'Spicy Chicken Sandwich',
				alt: 'Spicy Chicken Sandwich',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Entrees/Parent/Spicy_Sandwich.png',
				price: 4.19
			},
			{
				id: 3,
				name: 'Spicy Deluxe Sandwich',
				alt: 'Spicy Deluxe Sandwich',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Entrees/Parent/Spicy_deluxe_sandwich.png',
				price: 4.89
			},
			{
				id: 4,
				name: 'Grilled Chicken Sandwich',
				alt: 'Grilled Chicken Sandwich',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Entrees/Parent/grilledChickenSandwich_test.png',
				price: 5.39
			},
			{
				id: 5,
				name: 'Chick-fil-A<sup>&reg;</sup> Grilled Chicken Club Sandwich',
				alt: 'Chick-fil-A Grilled Chicken Club Sandwich',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Entrees/Parent/grilledChickenClub_test.png',
				price: 6.89
			},
			{
				id: 6,
				name: 'Chick-fil-A<sup>&reg;</sup> Nuggets',
				alt: 'Chick-fil-A Nuggets',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Entrees/Parent/Nuggets_8ct.png',
				price: 3.99
			},
			{
				id: 7,
				name: 'Grilled Nuggets',
				alt: 'Grilled Nuggets',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Entrees/Parent/Grilled_nuggets.png',
				price: 4.79
			},
			{
				id: 8,
				name: 'Chick-fil-A Chick-n-Strips<sup>&reg;</sup>',
				alt: 'Chick-fil-A Chick-n-Strips',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Entrees/Parent/Strips.png',
				price: 4.49
			},
			{
				id: 9,
				name: 'Chick-fil-A<sup>&reg;</sup> Cool Wrap',
				alt: 'Chick-fil-A Cool Wrap',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Salads/Menu%20Item/wrap_mobile.png',
				price: 6.79
			},
			{
				id: 10,
				name: 'Gluten Free Bun',
				alt: 'Gluten Free Bun',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Modifiers/Sandwich_mod/gluten_free_bun.png',
				price: 1.70
			},
			{
				id: 11,
				name: 'Filets',
				alt: 'Filets',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Entrees/Parent/cfa_filet.png',
				price: 3.64
			},
		],
		sides: [
			{
				id: 0,
				name: 'Chick-fil-A Waffle Potato Fries<sup>&reg;</sup>',
				alt: 'Chick-fil-A Waffle Potato Fries',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Sides/Menu%20Item/Medium_Lowered_1217shoot_800x800%20copy.png',
				price: 1.99
			},
			{
				id: 1,
				name: 'Fruit Cup',
				alt: 'Fruit Cup',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Sides/Parent/Fruit_Cup.png',
				price: 3.29
			},
			{
				id: 2,
				name: 'Side Salad',
				alt: 'Side Salad',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Sides/Menu%20Item/Side_Salad.png',
				price: 3.35
			},
			{
				id: 3,
				name: 'Mac & Cheese',
				alt: 'Mac & Cheese',
				imgPath: 'https://www.cfacdn.com/img/order/Individual/Menu/Sides/MacnCheese_4oz.png',
				price: 3.29
			},
			{
				id: 4,
				name: 'Chicken Noodle Soup',
				alt: 'Chicken Noodle Soup',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Sides/Parent/Chicken_Soup.png',
				price: 3.15
			},
			{
				id: 5,
				name: 'Kale Crunch Side',
				alt: 'Kale Crunch Side',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Sides/Parent/01.2020_KaleCrunchSide_sm_mobile.png',
				price: 1.99
			},
			{
				id: 6,
				name: 'Greek Yogurt Parfait',
				alt: 'Greek Yogurt Parfait',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Sides/Parent/Jul19_OrganicAussieGreekYogurtParfaitCupGranola_mobile.png',
				price: 3.99
			},
			{
				id: 7,
				name: 'Waffle Potato Chips',
				alt: 'Waffle Potato Chips',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/chips.png',
				price: 1.89
			},
			{
				id: 8,
				name: 'Buddy Fruits<sup>&reg;</sup> Apple Sauce',
				alt: 'Buddy Fruits Apple Sauce',
				imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Sides/Parent/Feb2020_mobile_appleSauce.png',
				price: 1.99
			},
		],
		drinks: {
			softDrinks: [
				{
					id: 0,
					name: 'Coca-Cola<sup>&reg;</sup>',
					alt: 'Coca-Cola',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/Coke.png',
					price: 1.79
				},
				{
					id: 1,
					name: 'Diet Coke<sup>&reg;</sup>',
					alt: 'Diet Coke',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/dietCoke_400.png',
					price: 1.79
				},
				{
					id: 2,
					name: 'Coke<sup>&reg;</sup> Zero Sugar',
					alt: 'Coke Zero Sugar',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/cokeZeroSugar_400.png',
					price: 1.79
				},
				{
					id: 3,
					name: 'Coca-Cola<sup>&reg;</sup> Cherry',
					alt: 'Coca-Cola Cherry',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/cherryCoke_400.png',
					price: 1.79
				},
				{
					id: 4,
					name: 'Sprite<sup>&reg;</sup>',
					alt: 'Sprite',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/sprite_400.png',
					price: 1.79
				},
				{
					id: 5,
					name: 'Dr. Pepper<sup>&reg;</sup>',
					alt: 'Dr. Pepper',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/drPepper_mobile.png',
					price: 1.79
				},
				{
					id: 6,
					name: 'Diet Dr. Pepper<sup>&reg;</sup>',
					alt: 'Diet Dr. Pepper',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/dietDrPepper_400.png',
					price: 1.79
				},
				{
					id: 7,
					name: 'Barq\'s<sup>&reg;</sup> Root Beer',
					alt: 'Barq\'s Root Beer',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/RootBeer.png',
					price: 1.79
				},
				{
					id: 8,
					name: 'Hi-C<sup>&reg;</sup> Fruit Punch',
					alt: 'Hi-C Fruit Punch',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/HiC_Fruit_Punch.png',
					price: 1.79
				},
				{
					id: 9,
					name: 'Fanta<sup>&reg;</sup> Orange',
					alt: 'Fanta Orange',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/fantaOrange_400.png',
					price: 1.79
				},
				{
					id: 10,
					name: 'POWERADE<sup>&reg;</sup>',
					alt: 'POWERADE',
					imgPath: 'https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Parent/powerade_400.png',
					price: 1.79
				},
			],
		},
	},
	taxes: {
		default: .08
	}
};