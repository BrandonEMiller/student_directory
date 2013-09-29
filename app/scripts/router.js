StudentRouter = Backbone.Router.extend({

	initialize: function(){
		this.students = new StudentCollection()
		this.students.add( data )
	},

	routes: {
		"students"		: "showStudents",
		"thumbnails"	: "showThumbnails"
	},


	showStudents: function() {
		$('.container').html('')
		this.students = new StudentCollection()
		this.students.add( data )
	},

	showThumbnails: function() {
		$('.container').html('')
		this.students = new ThumbnailCollection()
		this.students.add( data )
	}
})

var router = new StudentRouter() 
Backbone.history.start()