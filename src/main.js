function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
function detailssubmit() {
  var input = document.getElementById("phone").value;
  if (input == null || input == ""){
      alert("Please enter the number. Can’t be blank or empty !!!");
      return false;
  }
  else{
  var std=document.getElementById("std").value;
  var url="https://wa.me/"+std+input;
  window.open(url, '_blank');
  }
}