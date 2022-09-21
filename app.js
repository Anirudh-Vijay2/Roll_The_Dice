let rolled = 0;
function roll(){
    rolled++;
    const one = ` <div class="dice" id="dice1"><img src="d1.jpg" alt=""></div>`;
    const two = ` <div class="dice" id="dice1"><img src="d2.jpg" alt=""></div>`;
    const three = ` <div class="dice" id="dice1"><img src="d3.jpg" alt=""></div>`;
    const four = ` <div class="dice" id="dice1"><img src="d4.jpg" alt=""></div>`;
    const five = ` <div class="dice" id="dice1"><img src="d5.jpg" alt=""></div>`;
    const six = ` <div class="dice" id="dice1"><img src="d6.jpg" alt=""></div>`;

    const selector = Math.ceil((10 - 5) * Math.random());
    const list = [one, two, three, four, five, six];
    const mnum = selector + 1;
    document.getElementById("main").innerHTML=list[selector];
    document.getElementById("message").innerHTML="Dice rolled. You got "+mnum;
    document.getElementById("rolled").innerHTML="You rolled the dice "+rolled+" times."
}