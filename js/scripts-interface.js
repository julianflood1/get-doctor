var Doctor = require('./../js/scripts.js').doctorListModule;

var displayDoctors = function(allDoctors) {
  for(i = 0; i < allDoctors.length; i++ ) {
  $('.showDoctors').append('<h3>' + allDoctors[i].first_name + allDoctors[i].last_name + '</h3><p>' + allDoctors[i].bio + '</p><img src =' + allDoctors[i].image_url + '>' );
  }
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#symptom-search').click(function(){
    var symptom = $('#symptom').val();
    $('#symptom').val('');

    doctorObject.getDoctor(symptom, displayDoctors);
  });
});
