$(function(){
  $("#submit").click(function(event){
      var email = $("#inputEmail").val();
      var name = $("#inputName").val();
      var color = $("#inputColor").val();
      var animal = $("#inputAnimal").val();
      var array1 = [email, name, color, animal];
      alert(array1);

      event.preventDefault();
  });

});
