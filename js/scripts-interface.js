var Doctor = require('./../js/scripts.js').doctorListModule;

var displayDoctors = function(allDoctors) {
  for(i = 0; i < allDoctors.length; i++ ) {
  $('.showDoctors').append('<div class ="panel"><h2>' + allDoctors[i].first_name + " " + allDoctors[i].last_name + '</h2><img id="doctor-img" src =' + allDoctors[i].image_url + '><textarea>' + allDoctors[i].bio + '</textarea></div>' );
  }
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#symptom-search').click(function(){
    $('.showDoctors').empty();
    var symptom = $('#symptom').val();
    $('#symptom').val('');

    doctorObject.getDoctor(symptom, displayDoctors);
  });
});
