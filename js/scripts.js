//This was for Favorite Things practice

function makeArray() {
  var email = $("#inputEmail").val();
  var name = $("#inputName").val();
  var color = $("#inputColor").val();
  var animal = $("#inputAnimal").val();
  var array1 = [email, name, color, animal];
  var access1 = array1[0];
  var access2 = array1[1];
  var access3 = array1[2];

  array1.push(access1, access2, access3);

  var arLength = array1.length;

  var newArray = array1.slice(0, arLength);
  //console.log(array1);
  console.log(newArray);

  for (x=0; x<newArray.length; x++) {
    $("#return").prepend("<li>"+ newArray[x] + "</li>");
  };

}




$(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    makeArray();
  });

  // Ice Cream Method

  var flavors = ["chocolate", "vanilla", "strawberry"]

    flavors.forEach(function(flavor) {
      $("#iceCreamReturn").append("<li>" + flavor + "</li>");
    });

  // Grocery practice
  $("#finish").click(function(e) {
  var groceries = ["item1", "item2", "item3"];

    var endGroceries = [];

    groceries.forEach(function(grocery) {
      endGroceries.push($("#" + grocery).val().toUpperCase());
      return endGroceries.sort();

    });

    endGroceries.forEach(function(list){
      $("#groceryReturn").append("<li>" + list + "</li>");
    });



    alert(endGroceries);
    console.log(endGroceries);

    e.preventDefault();
  });
});
