var foodieApp = angular.module('foodieApp',['ngRoute']);
// console.log(foodieApp);

//path given to diff page
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id',{
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	.when('/about',{
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})
})

//controller bnaya hai resuntrant page ke liye
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	console.log($routeParams.id);
	//array of object for resuntrants
	var restaurants =[{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place, New Delhi',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		id:'1',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		bestDish: {   //information about the recommended dish
			name: 'Keema Paratha',
			image: 'http://zaiqatv.com.pk/wp-content/uploads/2016/02/Bhuna_Keema__Paratha_Recipe_xkqod_Pak101dotcom.jpg'
		}


	},
	{
		name: 'Barbeque Nation',
		address: '2nd Floor, Munshilal Building, Block N, Outer Circle, Connaught Place, New Delhi',
		location: 'Connaught Place',
		category: 'Casual Dining',
		vote: '4.1',
		cuisines: 'North Indian, Chinese',
		cost: '1600',
		id:2,
		hours: '12 Noon to 3 PM, 7 PM to 11 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/1212/3a128bead1bf42c1d5254078c39d75a2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
			name: 'Malai Kulfi',
			image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/a8/91/4d/barbeque-nation.jpg'
		}
	},
	{
		name: 'Too Indian',
		address: 'A 39, Vishal Enclave, Rajouri Garden, New Delhi',
		location: 'Rajouri Garden',
		category: 'Casual Dining',
		vote: '4.3',
		cuisines: 'Modern Indian',
		cost: '1200',
		id:3,
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/1/18523131/8d32cb2ec40b6cd1ba8eabc19f69e1fc_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
			name: ' Nutella Shake',
			image: 'http://cdn.shopify.com/s/files/1/1100/2012/articles/brownieshake4_1024x1024.jpg?v=1487172206'
		}
	},
	{
		name: 'Ministry Of Beer',
		address: 'M 44, Outer Circle, Connaught Place, New Delhi',
		location: 'Connaught Place',
		category: 'Lounge',
		vote: '3.9',
		cuisines: 'Continental, Italian, Asian, Indian',
		cost: '1500',
		id:4,
		hours: '12 Noon to 12 Midnight (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/7/18418277/eae0f676813dbe85bdb9718b76841e4f_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
	bestDish: {
			name: 'Butter Chicken',
			image: 'http://3.bp.blogspot.com/-ZQa0nZrqqdM/VXMGQhRe-FI/AAAAAAAADU4/xHX8YF7WCwU/s1600/4.JPG'
		}
	},
	{
		name: 'Summer House Cafe',
		address: '1st Floor, DDA Shopping Complex, Aurobindo Place, Hauz Khas, New Delhi',
		location: 'Hauz Khas',
		category: 'BAR,CASUAL DINING',
		vote: '4.3',
		cuisines: 'Italian, Continental',
		cost: '1800',
		id:5,
		hours: '12 Noon to 12:30 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/0/307490/e00bae6487490c53d94f6bf18aa85a62_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
					name: 'Pasta',
					image: 'http://www.themarkolympia.com/restaurant/wp-content/uploads/2012/08/IMG_2717.jpg'
				}
	},
	{
		name: 'Bengali Sweet Centre',
		address: 'G19, Main Market, South Extension 1, New Delhi',
		location: 'South Extension 1',
		category: 'SWEET SHOP,QUICK BITES',
		vote: '3.5',
		cuisines: 'Mithai, North Indian, Fast Food, Street Food, South Indian',
		cost: '500',
		id:6,
		hours: '9 AM to 11 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/7/757/9e9105077e4ee33351e07682c4d092e9_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
					name: 'Gulab Jamun',
					image: 'https://blueoconnor.files.wordpress.com/2015/06/img_1369.jpg'
				}
	},
	{
		name: 'QD Restaurant',
		address: '2520, 1st Floor, Hudson Lane, Kingsway Camp, Delhi University-GTB Nagar, New Delhi',
		location: 'Delhi University-GTB Nagar',
		category: 'Casual Dining',
		vote: '3.9',
		cuisines: 'Chinese, North Indian, Fast Food, Italian',
		cost: '800',
		id:7,
		hours: '11:30 AM to 11 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/5/4825/0c86059a350dc92118c344975d328ac9_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
					name: 'Monster Shake',
					image: 'http://cdn.newsapi.com.au/image/v1/5e686af2f4ac2890ca04e8dead05894c?width=650'
				}
	}];

	$scope.restaurant = restaurants[$routeParams.id - 1];

// this code is used to get the ingredients

	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key c8dbe9ba357942eea87c88ae48f46666',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response) {
				console.log(response);
				var ingredients = response.data.outputs[0].data.concepts;
	  			for (var i =0;i<ingredients.length;i++) {
	  				$scope.ingredients.push(ingredients[i].name);
	  				$scope.probabilityvalue.push(ingredients[i].value);
	  			}


	        }, function (xhr) {
	        	console.log(xhr);
	        })
		}

		$scope.ingredients = [];
		$scope.probabilityvalue=[];

		$scope.checkVegorNonVeg = function() {
			var flag_quit =0;
			ing_list = angular.copy($scope.ingredients); //hard copy
			prob_value= $scope.probabilityvalue;
			var elements = prob_value.filter(function(a){return a > 0.85;});
			ing_list.splice(elements.length,20);

			var nonveg = ["egg","meat","bacon","chicken","sushi","pork","steak"];
			var additionnonveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/non-veg-300x259.jpg' class='vegnonveg' ></div>"
			var additionveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/veg-300x259.jpg' class='vegnonveg' ></div>"

			for(j=0;j<ing_list.length;j++){
				for(i=0;i<nonveg.length;i++){
					if(ing_list[j] == nonveg[i]){
						flag_quit=1;
						break;
					}
				}
			if(flag_quit==1){
				$(".rest-extra").append(additionnonveg);
				break;
			}

		}
		if(flag_quit==0){$(".rest-extra").append(additionveg);}
	}
})

foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		//console.log('Do Something')
		$location.url('home');
	}
})



//controller for main page
foodieApp.controller('mainController',function($scope) {
//$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];


//vegas slideshow
$('.vegas').vegas({
			slides:[
			{ src:"http://goop.com/wp-content/uploads/2001/01/foodie-featured.jpg"},
			{ src:"https://anandipaliwal.files.wordpress.com/2015/06/food-table-relisted.jpg"},
			{ src:"http://cdn-image.travelandleisure.com/sites/default/files/styles/tnl_redesign_article_landing_page/public/foodie0315-philadelphia.jpg?itok=sV1IN9FY"},
							 { src:"https://i1.wp.com/kelseykaplan.fashion/wp-content/uploads/2016/01/IMG_6708.jpg"},
							 { src:"https://enblochotels.com/wp-content/uploads/2015/01/outerlands1.jpg"},
			{ src:"https://newkidontheguac.files.wordpress.com/2016/01/img_93351.jpg?w=750"},
			{ src:"https://s3.amazonaws.com/eb-blog-rally/wp-content/uploads/rally/2017/01/18120414/aina.jpg"},
			{ src:"https://cdn.vox-cdn.com/thumbor/2U4lLOKCdldRPNWDZhf6vlVeDI0=/0x0:1000x750/1200x900/filters:focal(0x0:1000x750)/cdn.vox-cdn.com/uploads/chorus_image/image/54077527/hong_kong_lounge_ii.0.0.jpg"}

			],
			animation:'kenburns'
		});
//arrayof object used to display diff restaurant in list
$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place, New Delhi',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	id:1,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
	votes:'2251',
 	reviews:'1748 ',
 	order: '50min Rs.200',
},
{
	name: 'Barbeque Nation',
	address: '2nd Floor, Munshilal Building, Block N, Outer Circle, Connaught Place, New Delhi',
	location: 'Connaught Place',
	category: 'Casual Dining',
	vote: '4.1',
	cuisines: 'North Indian, Chinese',
	cost: '1600',
	id:2,
	hours: '12 Noon to 3 PM, 7 PM to 11 PM (Mon-Sun)',
	votes:'3291',
 	reviews:'1509',
 	order: '40min Rs.350',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/1212/3a128bead1bf42c1d5254078c39d75a2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
},
{
	name: 'Too Indian',
	address: 'A 39, Vishal Enclave, Rajouri Garden, New Delhi',
	location: 'Rajouri Garden',
	category: 'Casual Dining',
	vote: '4.3',
	cuisines: 'Modern Indian',
	cost: '1200',
	id:3,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	votes:'365',
 	reviews:'360',
 	order: '80min Rs.260',
	image: 'https://b.zmtcdn.com/data/pictures/1/18523131/8d32cb2ec40b6cd1ba8eabc19f69e1fc_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
},
{
	name: 'Ministry Of Beer',
	address: 'M 44, Outer Circle, Connaught Place, New Delhi',
	location: 'Connaught Place',
	category: 'Lounge',
	vote: '3.9',
	cuisines: 'Continental, Italian, Asian, Indian',
	cost: '1500',
	id:4,
	hours: '12 Noon to 12 Midnight (Mon-Sun)',
	votes:'302',
 	reviews:'248',
 	order: '60min Rs.300',
	image: 'https://b.zmtcdn.com/data/pictures/7/18418277/eae0f676813dbe85bdb9718b76841e4f_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
},
{
	name: 'Summer House Cafe',
	address: '1st Floor, DDA Shopping Complex, Aurobindo Place, Hauz Khas, New Delhi',
	location: 'Hauz Khas',
	category: 'BAR,CASUAL DINING',
	vote: '4.3',
	cuisines: 'Italian, Continental',
	cost: '1800',
	id:5,
	hours: '12 Noon to 12:30 AM (Mon-Sun)',
	votes:'2000',
 	reviews:'2000',
 	order: '90min Rs.390',
	image: 'https://b.zmtcdn.com/data/pictures/0/307490/e00bae6487490c53d94f6bf18aa85a62_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
},
{
	name: 'Bengali Sweet Centre',
	address: 'G19, Main Market, South Extension 1, New Delhi',
	location: 'South Extension 1',
	category: 'SWEET SHOP,QUICK BITES',
	vote: '3.5',
	cuisines: 'Mithai, North Indian, Fast Food, Street Food, South Indian',
	cost: '500',
	id:6,
	hours: '9 AM to 11 PM (Mon-Sun)',
	votes:'875',
 	reviews:'677',
 	order: '30min Rs.150',
	image: 'https://b.zmtcdn.com/data/pictures/7/757/9e9105077e4ee33351e07682c4d092e9_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
},
{
	name: 'QD Restaurant',
	address: '2520, 1st Floor, Hudson Lane, Kingsway Camp, Delhi University-GTB Nagar, New Delhi',
	location: 'Delhi University-GTB Nagar',
	category: 'Casual Dining',
	vote: '3.9',
	cuisines: 'Chinese, North Indian, Fast Food, Italian',
	cost: '800',
	id:7,
	hours: '11:30 AM to 11 PM (Mon-Sun)',
	votes:'592',
 	reviews:'256',
 	order: '70min Rs.270',
	image: 'https://b.zmtcdn.com/data/pictures/5/4825/0c86059a350dc92118c344975d328ac9_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
}];



})
