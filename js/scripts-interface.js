var Bike = require('./../js/scripts.js').bikeModule;
var bikeObject = new Bike();

var displayBike = function(allBikes) {
  for(var i = 0; i < allBikes.length; i++) {
  $('.showBikes').append('<h3>Bike type: ' +  allBikes[i].title + '</h3><li>Bike serial: ' + allBikes[i].serial + '</li><li>Date stolen: ' + allBikes[i].date_stolen + '</li>');
}
};

$(document).ready(function() {
  $('#stolen-bikes').click(function(){
    var location = $('#location').val();
    // $('#location').val('');
    var proximity = $('#proximity').val();
    // $('#proximity').val('');
    bikeObject.getBike(location, proximity, displayBike);

  });
});
