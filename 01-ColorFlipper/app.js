const colors = ["green", "red", "rgba(133,122,200)", "#f15025","yellow",
"#12b","beige","pink","cyan","magenta","#234","#f156","#a0d2eb"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //get random number between 0-3

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
