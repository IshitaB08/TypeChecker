var strtbtn = document.getElementById("start");
$(strtbtn).click(function(){
  countdown();
})
// strtbtn.onclick(countdown(););
        var mins = 1;
        var secs = mins * 60;
        function countdown() {
            setTimeout('Decrement()', 60);
        }
        //Decrement function decrement the value.
        function Decrement() {
            if (document.getElementById) {
                minutes = document.getElementById("minutes");
                seconds = document.getElementById("seconds");
                //if less than a minute remaining
                //Display only seconds value.
                if (seconds < 59) {
                    seconds.value = secs;
                }
                //Display both minutes and seconds
                else {
                    minutes.value = getminutes();
                    seconds.value = getseconds();
                }
                //when less than a minute remaining
                //colour of the minutes and seconds
                //changes to red
                if (mins < 1) {
                    minutes.style.color = "red";
                    seconds.style.color = "red";
                }
                //if seconds becomes zero,
                //then page alert time up
                if (mins < 0) {
                    alert('Time Up! Your score is' + score);
                    minutes.value = 0;
                    seconds.value = 0;
                }
                //if seconds > 0 then seconds is decremented
                else {
                    secs--;
                    setTimeout('Decrement()', 1000);
                }
            }
        }

        function getminutes() {
            //minutes is seconds divided by 60, rounded down
            mins = Math.floor(secs / 60);
            return mins;
        }

        function getseconds() {
            //take minutes remaining (as seconds) away
            //from total seconds remaining
            return secs - Math.round(mins * 60);
        }

var para = "Lorem ipsum ";
var mistakes = 0;
var pressed;
var i=0;

var total = para.length;
//
$(document).keydown(function(e){
  pressed = e.which;
  while(para.charAt(i)){
  if(pressed != para.charCodeAt(i)){
    mistakes++;
    i++;
  }
}


/* 
while(para.charAt(i) != '\0'){
  console.log("good");
} */
var index = 4;
console.log('The character code ' + para.charCodeAt(index) + ' is equal to ' + para.charAt(index));

score = total - mistakes;
var submit = document.getElementById("submit");
$(submit).click(function(){
  alert("your score is "+score);
  console.log('hi');

});
});



// var sentence = 'The quick brown fox jumps over the lazy dog.';

