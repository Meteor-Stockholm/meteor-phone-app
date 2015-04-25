Template.showScreen.created = function() {
    Session.set("currentScreen", "splashScreen");
}

Template.showScreen.helpers({
  nextScreen: function()
  {
    return Session.get("currentScreen");
  }
});
                            
Template.showScreen.events({
    'click *': function (event, tmpl) {
        event.preventDefault();
        event.stopImmediatePropagation();
        //var next = ( Session.get("currentScreen") );
        Session.set("currentScreen", "actionScreen");
    }
});



///// Old example code /////

  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.temp.helpers({
    counter: function() {
      return Session.get('counter');
    }
  });

  Template.temp.events({
    'click button': function() {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

///// Old example code /////
