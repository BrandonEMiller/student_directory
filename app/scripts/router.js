StudentRouter = Backbone.Router.extend({

	initialize: function(){
		this.items = new StudentCollection()
		this.items.add( data )
	},

	routes: {
		"students"		: "showStudents",
		"students/:id"	: "showStudent"
	},


	showStudents: function() {
		console.log("gonna show all the items")
		$('.container').html('')
		this.items = new ItemsCollection()
		this.items.add( data )
	},

	showStudent: function(id) {
		console.log("we should show an item with the id ", id)
		$('.container').html('')
		var itemToShow = this.items.get(id)
		new FullItemView({model: itemToShow})
	}
})

var router = new StudentRouter() 
Backbone.history.start()