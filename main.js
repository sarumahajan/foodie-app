var foodieApp = angular.module('foodieApp',[]);

foodieApp.controller('mainController',function($scope) {
//$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];

$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place, New Delhi',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Barbeque Nation',
	address: '2nd Floor, Munshilal Building, Block N, Outer Circle, Connaught Place, New Delhi',
	location: 'Connaught Place',
	category: 'Casual Dining',
	vote: '4.1',
	cuisines: 'North Indian, Chinese',
	cost: '1600',
	hours: '12 Noon to 3 PM, 7 PM to 11 PM (Mon-Sun)',
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
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/1/18523131/8d32cb2ec40b6cd1ba8eabc19f69e1fc_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
},]



})