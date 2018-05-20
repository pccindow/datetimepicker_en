//app/assets/javascripts/datetimepicker.js
$( document ).on('turbolinks:load', function() {
  $('#datetimepicker').datetimepicker({
    format: "DD-MM-YYYY h:mm A"
  });
});
