const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const reset = document.querySelector('#reset')

const PL1 = document.querySelector('#P1display')
const PL2 = document.querySelector('#P2display')

let sel=document.querySelector('#rounds');

//let Round=sel.selectedIndex;
let gameOver=false;
let val1 = 0;
let val2 = 0;
let a = 0;
sel.addEventListener('change', function(){
    a = sel.selectedIndex;
    //console.log(a)
    RESET() //When you press reset button score agains beome to 0

})

//console.log(a);
player1.addEventListener('click', function () {
    if(!gameOver) //still continue whole value is true. Jab ye value false ho jaegi toh value nhi increase nhi hoegi and other player ka bhi nhi hoega cuz same variable is checked for entry to the loop
    {
        val1++;
        if(val1===a  )
        {
            gameOver=true;
            //PL1.classList.add('win')
            PL1.style.color = 'blue'
            PL2.style.color = 'yellow' //to change color of span
            
        }
        PL1.innerText = `${val1}`
    }    
})


player2.addEventListener('click', function () {
    if(!gameOver)
    {
        val2++;
        if(val2===a )
        {
            gameOver=true;
            PL2.style.color='blue'
            PL1.style.color='yellow'
            //PL2.setAttribute('class',win);
           // PL2.style.color='red';
        }
        PL2.innerText = `${val2}`
    }
})

reset.addEventListener('click', RESET)

function RESET(){
    val1 = 0;
    val2 = 0;
    PL1.innerText = `${val1}`;
    PL2.innerText = `${val2}`;
    PL1.style.color='black';
    PL2.style.color='black';
    //PL1.classList.remove('win');
    gameOver=false;
}