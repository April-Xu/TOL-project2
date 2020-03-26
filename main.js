function getAnswer() {
    var radio = document.getElementsByName("question");
    var feedback;
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