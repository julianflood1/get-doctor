var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(symptom, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response) {
    console.log(response.data);


    // for(i = 0; i < response.data.length; i++) {
    displayDoctors(symptom, response.data[0].profile.first_name);
  })
// };



  .fail(function(error){
    $('.showDoctors').text(error.responseJSON.message);
  });
};

exports.doctorListModule = Doctor;
