
Bike = function(title, serial, date_stolen){
  this.title = title;
  this.serial = serial;
  this.date_stolen = date_stolen;
}

Bike.prototype.getBike = function(location, proximity, displayBike) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=50&location=' + location + '&distance=' + proximity + '&stolenness=proximity').then(function(response) {
    var allBikes = [];
    for(var i = 0; i < response.bikes.length; i++){
      var newBike = new Bike(response.bikes[i].title, response.bikes[i].serial, response.bikes[i].date_stolen);
      allBikes.push(newBike);
    }
    console.log(allBikes[0].title);
    displayBike(allBikes);
  });
  .fail(function(error) {
    $('.showBikes').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
