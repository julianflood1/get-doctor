var Doctor = require('./../js/scripts.js').doctorListModule;

var displayDoctors = function(symptom, doctorList) {
  $('.showDoctors').text("If you are experiencing " + symptom + " , " + doctorList + " can help you.");
};
$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#symptom-search').click(function(){
    var symptom = $('#symptom').val();
    $('#symptom').val('');

    doctorObject.getDoctor(symptom, displayDoctors);
  });
});
