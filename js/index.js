// Get a reference to the database service
var database = firebase.database();

function writeUserData(name, age, gender, marital, employment, health, data) {
    firebase.database().ref(name).set({
      age: age,
      gender: gender,
      marital_status: marital,
      employment_statues: employment,
      health_conditions: health,
      survey_data: data
    });
  }

function submit_dat(){
  writeUserData(
    $("#user_name").val(), 
    $("#age").val(),
    $("#gender").val(),
    $("#married").val(),
    $("#job").val(),
    $("#health").val(),
    $("#survey_data").val()
  );
  alert("Your data has been submitted. Thank You!");
}