// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-dev").on("click", function(event) {
      var id = $(this).data("id");
      var newDev = $(this).data("newdev");
  
      var newDevState = {
        devoured: newDev
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevState
      }).then(
        function() {
          console.log("changed Devoured to", newDev);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bur").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });