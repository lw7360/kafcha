document.addEventListener("DOMContentLoaded", function(event) { 
  var targets = document.getElementsByClassName('kafcha');
  if (targets.length === 0) {
    console.log("No 'kafcha' tags found");
  } else {
    for (var i = 0; i < targets.length; i++) {
      var curTarget = targets[i];
      curTarget.style.width = '300px';
      curTarget.style.height = '75px';
      curTarget.style.fontFamily = '"Comic Sans","Comic Sans MS","Chalkboard","ChalkboardSE-Regular","Marker Felt","Purisa","URW Chancery L",cursive,sans-serif';
      curTarget.innerHTML = 'kafcha';
    } 
  }
});
