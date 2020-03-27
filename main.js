var score = 0, finalscore = 0;
var radio, i;

function calculateGroupScore1() {
    document.getElementById("calculate").style.display="none";
    document.getElementById("final-score").style.display="block";
    document.getElementById("score-bg").src="../images/1group-score.png";
    finalscore = (Number(document.getElementById("your-score").value)+Number(document.getElementById("teammate-score").value))/2;
    document.getElementById("final-score").children[0].children[0].innerText=finalscore;
}

function calculateGroupScore2() {
    document.getElementById("calculate").style.display="none";
    document.getElementById("final-score").style.display="block";
    document.getElementById("score-bg").src="../images/2group-score.png";
    finalscore = (Number(document.getElementById("your-score").value)+Number(document.getElementById("teammate-score").value))/2;
    document.getElementById("final-score").children[0].children[0].innerText=finalscore;
}

function getAnswer() {
    radio = document.getElementsByName("question");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            switch (i){
                case 0:
                    document.getElementById("question").style.display="none";
                    document.getElementById("A").style.display="block";
                    break;
                case 1:
                    document.getElementById("question").style.display="none";
                    document.getElementById("B").style.display="block";
                    break;
                case 2:
                    document.getElementById("question").style.display="none";
                    document.getElementById("C").style.display="block";
                    break;
                default:
                    alert("Please select an answer.");
                    break;
            }
        }
    }
}

function getFeedback() {
    var timer  = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            scrollTo(0,oTop-50);
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    });
    radio = document.getElementsByName("question1");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            switch (i){
                case 0:
                    document.getElementById("q1").style.display="block";
                    document.getElementById("q1").children[0].src="../images/q1A.png";
                    break;
                case 1:
                    document.getElementById("q1").style.display="block";
                    document.getElementById("q1").children[0].src="../images/q1B.png";
                    score += 20;
                    break;
                case 2:
                    document.getElementById("q1").style.display="block";
                    document.getElementById("q1").children[0].src="../images/q1C.png";
                    break;
                default:
                    alert("Please select an answer for question 1.");
                    break;
            }
        }
    }
    radio = document.getElementsByName("question2");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            switch (i){
                case 0:
                    document.getElementById("q2").style.display="block";
                    document.getElementById("q2").children[0].src="../images/q2A.png";
                    score += 20;
                    break;
                case 1:
                    document.getElementById("q2").style.display="block";
                    document.getElementById("q2").children[0].src="../images/q2B.png";
                    break;
                case 2:
                    document.getElementById("q2").style.display="block";
                    document.getElementById("q2").children[0].src="../images/q2C.png";
                    break;
                default:
                    alert("Please select an answer for question 2.");
                    break;
            }
        }
    }
    radio = document.getElementsByName("question3");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            switch (i){
                case 0:
                    document.getElementById("q3").style.display="block";
                    document.getElementById("q3").children[0].src="../images/q3A.png";
                    score += 20;
                    break;
                case 1:
                    document.getElementById("q3").style.display="block";
                    document.getElementById("q3").children[0].src="../images/q3B.png";
                    break;
                case 2:
                    document.getElementById("q3").style.display="block";
                    document.getElementById("q3").children[0].src="../images/q3C.png";
                    break;
                default:
                    alert("Please select an answer for question 3.");
                    break;
            }
        }
    }
    radio = document.getElementsByName("question4");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            switch (i){
                case 0:
                    document.getElementById("q4").style.display="block";
                    document.getElementById("q4").children[0].src="../images/q4A.png";
                    break;
                case 1:
                    document.getElementById("q4").style.display="block";
                    document.getElementById("q4").children[0].src="../images/q4B.png";
                    score += 20;
                    break;
                case 2:
                    document.getElementById("q4").style.display="block";
                    document.getElementById("q4").children[0].src="../images/q4C.png";
                    break;
                default:
                    alert("Please select an answer for question 4.");
                    break;
            }
        }
    }
    radio = document.getElementsByName("question5");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            switch (i){
                case 0:
                    document.getElementById("q5").style.display="block";
                    document.getElementById("q5").children[0].src="../images/q5A.png";
                    break;
                case 1:
                    document.getElementById("q5").style.display="block";
                    document.getElementById("q5").children[0].src="../images/q5B.png";
                    break;
                case 2:
                    document.getElementById("q5").style.display="block";
                    document.getElementById("q5").children[0].src="../images/q5C.png";
                    break;
                case 3:
                    document.getElementById("q5").style.display="block";
                    document.getElementById("q5").children[0].src="../images/q5D.png";
                    score += 20;
                    break;
                default:
                    alert("Please select an answer for question 5.");
                    break;
            }
        }
    }
    document.getElementById("score").children[0].innerText=score;
    document.getElementById("score").style.display="block";
    document.getElementById("submit").style.display="none";
    document.getElementById("continue").style.display="block";
    return score;
}