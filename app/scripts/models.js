Student = Backbone.Model.extend({
	initialize: function(){
		console.log("New Item Created!")
	}
})

StudentCollection = Backbone.Collection.extend({
	model: Student, 

	initialize: function() {
		console.log("New collection created!")

		this.on('add', function (student){
			//$('.gridImage').css('background-image',"url(" +student.get('image')+ ")");
			new GridStudentView( {model: student} )
			
		})
	}
})

ThumbnailCollection = Backbone.Collection.extend({
	model: Student, 

	initialize: function() {
		console.log("New collection created!")

		this.on('add', function (student){
			//$('.gridImage').css('background-image',"url(" +student.get('image')+ ")");
			new ThumbnailView( {model: student} )
			
		})
	}
})

var data = [
	{
		name: 'Brandon Miller',
		id: 'brandon-miller',
		email: 'brandonevanmiller@gmail.com',
		github: 'BrandonEMiller',
		image: 'images/brandon.jpeg'
	},
	{
		name: 'Andy Flack',
		id: 'andy-flack',
		email: 'flack.ap@gmail.com',
		github: 'FlackAP',
		image: 'images/flack.jpeg'
	},
	{
		name: 'Ryan Poplin',
		id: 'ryan-poplin',
		email: 'fender14@charter.net',
		github: 'ryanpoplin',
		image: 'images/poplin.jpeg'  
	},
	{
		name: 'Ari Picker',
		id: 'ari-picker',
		email: 'ari@email.com',
		github: 'Pickra',
		image: 'images/ari.jpeg'	
	},
	{
		name: 'Keeron Thandroyen',
		id: 'keeron-thandroyen',
		email: 'keeron@email.com',
		github: 'keeronmarc',
		image: 'images/keeron.jpeg'
	},
	{
		name: 'Ryan Ponce',
		id: 'ryan-ponce',
		email: 'ryan@ponce.io',
		github: 'ryanponce',
		image: 'images/ponce.png'
	},
	{
		name: 'Joe Tamburro',
		id: 'joe-tamburro',
		email: 'joetamburro38@gmail.com',
		github: 'joetamburro',
		image: 'images/joet.jpeg'	
	},
	{
		name: 'Joe VanLeeuwen',
		id: 'joe-vanleeuwen',
		email: 'jvnlwn@gmail.com',
		github: 'joe-vanleeuwen',
		image: 'images/joev.jpeg'
	},
	{
		name: 'Tyler Phillips',
		id: 'tyler-phillips',
		email: 'tylerfphillips@gmail.com',
		github: 'tylerphillips',
		image: 'images/tyler.jpeg'
	},
	{
		name: 'Jake Hendley',
		id: 'jake-hendley',
		email: 'jhendley25@gmail.com',
		github: 'jhendley25',
		image: 'images/jake.png'
	},
	{
		name: 'Alison Miller',
		id: 'alison-miller',
		email: 'alisonmllr20@gmail.com',
		github: 'alisonelizabeth',
		image: 'images/alison.jpeg'	
	},
	{
		name: 'Caleb Bradley',
		id: 'caleb-bradley',
		email: 'calebbradley30@yahoo.com',
		github: 'calebbradley',
		image: 'images/caleb.jpeg'
	}	
]
