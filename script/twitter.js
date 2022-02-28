function darkMode(){
    document.documentElement.classList.toggle("dark-mode");
    document.querySelectorAll('.inverted').forEach((result) => {
        result.classList.toggle('invert');
    })
}
function tweet(){
    document.getElementById("card").style.display= "block";
}
function buttonClick(){
    document.getElementById("myButton").value="Reminder set";
    document.getElementById("myButton").style.background = "linear-gradient(to right, rgb(24, 24, 24), rgb(152, 18, 241))";
}
function buttonTap(){
    document.getElementById("tweetButtonTap").value="Tweeted!";
    document.getElementById("whatsHappening").value="";
}