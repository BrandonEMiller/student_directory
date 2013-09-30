StudentRouter = Backbone.Router.extend({

	initialize: function(){
		this.students = new StudentCollection()
		var that = this
		$.get('http://0.0.0.0:3000/collections/students', function(data){
			that.students.add(data)
		})
		
	},

	routes: {
		"students"		: "showStudents",
		"thumbnails"	: "showThumbnails"
	},


	showStudents: function() {
		 $('.container').html('')
		 this.students = new StudentCollection()
		 var that = this
		 $.get('http://0.0.0.0:3000/collections/students', function(data){
			that.students.add(data)
		})
	},

	showThumbnails: function() {
		$('.container').html('')
		var that = this
		this.thumbnails = new ThumbnailCollection()
		 $.get('http://0.0.0.0:3000/collections/students', function(data){
			that.thumbnails.add(data)
		})
	}
})

var router = new StudentRouter() 
Backbone.history.start()