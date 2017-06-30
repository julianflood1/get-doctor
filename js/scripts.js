var apiKey = require('./../.env').apiKey;

function Doctor(first_name, last_name, bio, image_url, name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.bio = bio;
  this.image_url = image_url;
  this.name = name;
}

Doctor.prototype.getDoctor = function(symptom, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response) {
    var allDoctors = [];
    var doctorOutput = response.data;
    for(i = 0; i < doctorOutput.length; i++) {
      var newDoctor = new Doctor(response.data[i].profile.first_name, response.data[i].profile.last_name, response.data[i].profile.bio, response.data[i].profile.image_url, response.data[i].specialties[0].name);
      allDoctors.push(newDoctor);
    }
    displayDoctors(allDoctors);
  })

  .fail(function(error){
    $('.showDoctors').text(error.responseJSON.message);
  });
};

exports.doctorListModule = Doctor;
