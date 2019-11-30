<script>
global var cars = [
["Judul 1", "Post 1", "Cat 1"],
["Judul 2", "Post 2", "Cat 2"]];

var text = "";

var i;
for (i = 0; i < cars.length; i++) {
  text += "<b>"+ cars[i][0] + "</b><br>"+ cars[i][1] + "<br><i>" +cars[i][2] + "</i><br><br>";
}
document.getElementById("demo").innerHTML = text;
</script>