/*global describe, it */
'use strict';
(function () {
    describe('Backbone View Practice', function () {
        describe('', function () {
        	var Test = new Student({name: "Test Man"})
    	  	 var TestView = new GridStudentView({model: Test})
             var TestThumbnail = new ThumbnailView({model: Test})
             var TestFull = new FullStudentView({model: Test})
             var TestAdd = new AddView()

            it('should confirm jQuery is avaliable', function () {
        		expect(jQuery() !== undefined || null).to.equal(true);
    	    });

    	  	 it('should confirm Underscore is avaliable', function () {
        		expect(_.VERSION !== undefined || null).to.equal(true);
    	    });

    	  	 it('should confirm Backbone is avaliable', function () {
        		expect(Backbone.VERSION !== undefined || null).to.equal(true);
    	    });

    	  	 it('should create a contructor of a test object when read in', function () {
    	  	 	expect(Test !== undefined || null).to.equal(true);
    	  	 })

    	  	 it('should create a contructor of a test object with property name', function () {
    	  	 	expect(Test.get('name')).to.equal("Test Man");
    	  	 })

    	  	 it('should create a backbone view with the model of the test constructor', function () {
                expect(TestView !== undefined || null).to.equal(true);
             })
             it('should create a backbone view for thumbnails with the model of the test constructor', function () {
                expect(TestThumbnail !== undefined || null).to.equal(true);
             }) 
             it('should create a backbone view for full view of individual entries with the model of the test constructor', function () {
                expect(TestFull !== undefined || null).to.equal(true);
             })
              it('should create a backbone view for adding new enties to the directory', function () {
    	  	 	expect(TestAdd !== undefined || null).to.equal(true);
    	  	 })

    	  	 it('should create a backbone view that can retrieve the name property from the constructor model', function () {
                expect(TestView.model.get('name')).to.equal("Test Man");
             })
             it('should create a backbone view of thumbnails that can retrieve the name property from the constructor model', function () {
                expect(TestThumbnail.model.get('name')).to.equal("Test Man");
             }) 
             it('should create a backbone view of individual entries that can retrieve the name property from the constructor model', function () {
                expect(TestFull.model.get('name')).to.equal("Test Man");
             })
    	  	 it('should create a backbone view with a remove function', function () {
    	  	 	expect(TestView.remove !== undefined || null).to.equal(true);
    	  	 })
             it('should create a backbone view for each entry with an edit function', function () {
                expect(TestFull.edit !== undefined || null).to.equal(true);
             })
             it('should create a backbone view for each entry with a save function', function () {
                expect(TestFull.save !== undefined || null).to.equal(true);
             })
             it('should create a backbone view to add new entries with an add function', function () {
                expect(TestAdd.add !== undefined || null).to.equal(true);
             })
             it('should create a backbone view to add new entries with a render function', function () {
                expect(TestAdd.render !== undefined || null).to.equal(true);
             })
              it('should create a backbone view for each entry with a render function', function () {
                expect(TestFull.render !== undefined || null).to.equal(true);
             })
            it('should create a backbone view with a render function', function () {
                expect(TestView.render !== undefined || null).to.equal(true);
             })
             it('should create a backbone view of thumbnails with a render function', function () {
                expect(TestThumbnail.render !== undefined || null).to.equal(true);
             })

			TestView.remove()
    	  	 

    	  	 // it('should destroy the view when the remove function is called', function () {
    	  	 	
    	  	 // 	expect(Test.get('name')).to.be(undefined);
    	  	 // })
        });
    });
})();

