var apiKey = require('./../.env').apiKey;

function Doctor(first_name, last_name, bio, image_url) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.bio = bio;
  this.image_url = image_url;
}

Doctor.prototype.getDoctor = function(symptom, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response) {
    console.log(response.data[0].profile.first_name);

    var allDoctors = [];
    var doctorOutput = response.data;
    for(i = 0; i < doctorOutput.length; i++) {
      var newDoctor = new Doctor(response.data[i].profile.first_name, response.data[i].profile.last_name, response.data[i].profile.bio, response.data[i].profile.image_url);
      allDoctors.push(newDoctor);
    }
    console.log(allDoctors);

    displayDoctors(allDoctors);
  })



  .fail(function(error){
    $('.showDoctors').text(error.responseJSON.message);
  });
};

exports.doctorListModule = Doctor;
