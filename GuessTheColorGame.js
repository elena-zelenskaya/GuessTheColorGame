

var target;
var target_index;
var guess_input;
var finished = false;
var guess_number=0;
var colors = ["azure", "blanchedalmond", "crimson", "dodgerblue", "gainsboro", "honeydew", "indianred", "lemonchiffon", "limegreen", "mistyrose", "oldlace", "palegreen", "papayawhip", "peachpuff", "sienna", "springgreen", "tomato", "thistle", "turquoise", "violet"];

target_index=Math.floor(Math.random ()*20);
console.log (target_index);

target = colors[target_index];
console.log(target);

// function do_game()  {
//
// target_index=Math.floor(Math.random ()*20);
// //console.log (target_index);
//
// target = colors[target_index];
// //console.log (target);
//
// while(!finished) {
//
// // guess_input = prompt("I am thinking of one of these colors:\n\n" + colors.join("\n") + "\n\nWhat color I am thinking of?");
// //console.log (colors.indexOf(guess_input));
//  guess_number += 1;
//         finished = check_guess();
// }
//
// }

let triangles = document.getElementsByClassName("triangle");
for (let i = 0; i < triangles.length; i++) {
  triangles[i].style.color = document.getElementsByTagName("input")[i].id;
}
function check_guess()  {

  // Get the checkbox
    let checkBoxes = document.getElementsByTagName("input");
    for (checkBox of checkBoxes) {
      if (checkBox.checked == true){
        let color = checkBox.id;

        if(colors.indexOf(color) == -1)

        {alert ("I don\'t recognize that color!");
        return false;}

        if (color < target)

        {alert ("Your color is alphabetically lower than mine!");
        checkBox.checked = false;
        guess_number += 1;
        return false;}

        if (color > target)

        {alert ("Your color is alphabetically higher than mine!");
        checkBox.checked = false;
        guess_number += 1;
        return false;}

        document.getElementsByTagName("body")[0].style.background=target;
        document.getElementsByTagName("h2")[0].innerHTML="CORRECT!";
        alert ((guess_number == 0) ? "Congratulations! You took 1 guess!" : "Congratulations!\n\n" + "You took " + (guess_number + 1) + " guesses!");
        return true;


      }
    }

}