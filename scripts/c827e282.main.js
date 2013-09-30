GridStudentView=Backbone.View.extend({template:_.template($("#grid-template").text()),events:{"click .delete":"remove","click .edit":"edit","click .save":"save"},className:"student-grid-unit",initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.template({student:this.model}))},edit:function(){$(this.el).html('<input class="input_name" value="'+this.model.get("name")+'"/><input class="input_email" value="'+this.model.get("email")+'"/><input class="input_phone" value="'+this.model.get("phone")+'"/> <button class="save">Save</button>'),console.log("You clicked edit")},save:function(){console.log("You clicked save"),this.model.set("name",$(".input_name").val()),this.model.set("email",$(".input_email").val()),this.model.set("phone",$(".input_phone").val()),$(this.el).html('<div class="gridImageContainer"><image class= gridImage src='+this.model.get("image")+" </image></div>"+"<h2>"+this.model.get("name")+"</h2><h2>"+this.model.get("email")+"</h2><h2>"+this.model.get("phone")+"</h2>"+'<button class="delete">Delete</button><button class="edit">Edit</button>')}}),ThumbnailView=Backbone.View.extend({template:_.template($("#thumbnail-template").text()),initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.template({student:this.model}))}}),Student=Backbone.Model.extend({initialize:function(){}}),StudentCollection=Backbone.Collection.extend({model:Student,initialize:function(){this.on("add",function(a){new GridStudentView({model:a})})}}),ThumbnailCollection=Backbone.Collection.extend({model:Student,initialize:function(){this.on("add",function(a){new ThumbnailView({model:a})})}});var data=[{name:"Caleb Bradley",id:"caleb-bradley",email:"calebbradley30@yahoo.com",phone:"(864)901-2362",github:"calebbradley",giturl:"https://github.com/calebbradley",image:"images/caleb.jpeg"},{name:"Andy Flack",id:"andy-flack",email:"flack.ap@gmail.com",phone:"(666)420-5555",github:"FlackAP",image:"images/flack.jpeg"},{name:"Jake Hendley",id:"jake-hendley",email:"jhendley25@gmail.com",phone:"(864)640-9515",github:"jhendley25",image:"images/jake.png"},{name:"Alison Miller",id:"alison-miller",email:"alisonmllr20@gmail.com",phone:"(555)555-5555",github:"alisonelizabeth",image:"images/alison.jpeg"},{name:"Brandon Miller",id:"brandon-miller",email:"brandonevanmiller@gmail.com",phone:"(864)884-4528",github:"BrandonEMiller",image:"images/brandon.jpeg"},{name:"Tyler Phillips",id:"tyler-phillips",email:"tylerfphillips@gmail.com",phone:"(864)380-8131",github:"tylerphillips",image:"images/tyler.jpeg"},{name:"Ari Picker",id:"ari-picker",email:"ari@email.com",phone:"(555)555-5555",github:"Pickra",image:"images/ari.jpeg"},{name:"Ryan Ponce",id:"ryan-ponce",email:"ryan@ponce.io",phone:"(555)555-5555",github:"ryanponce",image:"images/ponce.png"},{name:"Ryan Poplin",id:"ryan-poplin",email:"fender14@charter.net",phone:"(864)360-1231",github:"ryanpoplin",image:"images/poplin.jpeg"},{name:"Joe Tamburro",id:"joe-tamburro",email:"joetamburro38@gmail.com",phone:"(864)630-4203",github:"joetamburro",image:"images/joet.jpeg"},{name:"Keeron Thandroyen",id:"keeron-thandroyen",email:"keeronmarc@gmail.com",phone:"(864)608-6515",github:"keeronmarc",image:"images/keeron.jpeg"},{name:"Joe VanLeeuwen",id:"joe-vanleeuwen",email:"jvnlwn@gmail.com",phone:"(864)567-6215",github:"joe-vanleeuwen",image:"images/joev.jpeg"}];StudentRouter=Backbone.Router.extend({initialize:function(){this.students=new StudentCollection,this.students.add(data)},routes:{students:"showStudents",thumbnails:"showThumbnails"},showStudents:function(){$(".container").html(""),this.students=new StudentCollection,this.students.add(data)},showThumbnails:function(){$(".container").html(""),this.thumbnails=new ThumbnailCollection,this.thumbnails.add(data)}});var router=new StudentRouter;Backbone.history.start();