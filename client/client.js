Template.showScreen.created = function() {
    Session.set("currentScreen", "splashScreen");
};

Template.showScreen.helpers({
  nextScreen: function() {
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

Session.setDefault('donatedAmount', 0);

Template.actions.events({

  //Quick Donation
  'click #quick-give': function() {
    // increment the counter when button is clicked
    Session.set('donatedAmount', Session.get('donatedAmount') + 100);
  },

  //Donate amount
  'click .sendAmount': function() {
    var insertedAmount = parseInt($('.form-control').val(), 10);
    Session.set('donatedAmount', Session.get('donatedAmount') + insertedAmount);
    $('.form-control').val('');
  },

  //Show & hide donation input field
  'click .insertAmountButton': function() {
    $('.insertAmountField').toggleClass('is-visible');
  }
});

Template.donationInfo.helpers({
  amount: function() {
    return Session.get("donatedAmount");
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
