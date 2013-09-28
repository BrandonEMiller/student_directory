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
			new GridStudentView( {model: student} )
		})
	}
})

var data = [
	{
		name: 'Brandon Miller',
		id: 'brandon-miller',
		email: 'brandonevanmiller@gmail.com',
		github: 'BrandonEMiller'
	},
	{
		name: 'Andy Flack',
		id: 'andy-flack',
		email: 'brandonevanmiller@gmail.com',
		github: 'BrandonEMiller'
	},
	{
		name: 'Brandon Miller',
		id: 'brandon-miller',
		email: 'brandonevanmiller@gmail.com',
		github: 'BrandonEMiller'
	},
	{
		name: 'Brandon Miller',
		id: 'brandon-miller',
		email: 'brandonevanmiller@gmail.com',
		github: 'BrandonEMiller'
	},
	{
		name: 'Brandon Miller',
		id: 'brandon-miller',
		email: 'brandonevanmiller@gmail.com',
		github: 'BrandonEMiller'
	},
	{
		name: 'Brandon Miller',
		id: 'brandon-miller',
		email: 'brandonevanmiller@gmail.com',
		github: 'BrandonEMiller'
	}
]
