var ExampleModule = require('./../js/scripts.js').exampleModule;

var apiKey = "54105fb8349a0ff6c239a7e122d74e7f";

$(document).ready(function() {
  $('#symptom-search').click(function(){
    var symptom = $('#symptom').val();
    $('#symptom').val('');
    $('.showIllness').text("You might have " + symptom + ".");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey, function(response) {
      console.log(response.data[0].specialties);
    });

  });
});
