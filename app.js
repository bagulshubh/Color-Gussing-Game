console.log("Working");

let newgame = document.querySelector('.newgame');
let display = document.querySelector('.display');
let change = document.querySelectorAll('.change');
let main = document.querySelector('.container');
let result = document.querySelector('.result');


let ans=[];
let gussed=[];

function generateran(min,max){

    return Math.floor(Math.random() * (max-min))+min;

}

let ansindex;

function main2(){
    ans= [];
    ans.push(generateran(0,255));
    ans.push(generateran(0,255));
    ans.push(generateran(0,255));
    
    display.textContent = 'RGB( '+ans+' )';

    ansindex = generateran(0,change.length-1);

    for(let i = 0;i<change.length;i++){

        if(i===ansindex){
            let a = ans[0];
            let b = ans[1];
            let c = ans[2];

            change[i].style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
            console.log(ansindex);
        }
        else{
            let a = generateran(0,255);
            let b = generateran(0,255);
            let c = generateran(0,255);

            change[i].style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';

        }
    }

}

main2();
newgame.addEventListener('click',main2);

function ansiscorrect(res){
    main.style.opacity="0.5";

    result.style.display= "flex";

    if(res){
        result.textContent = "YOU WIN";
    }
    else{
        result.textContent = "TRY AGAIN";
    }

    if(res){
        setTimeout(function(val){
            main.style.opacity="1";
            result.style.display= "none";
        },2000)
    }
    else{
        setTimeout(function(val){
            main.style.opacity="1";
            result.style.display= "none";
        },1000)
    }

    
}

function correct(val){
    if(val==ansindex){
        console.log("Correct");
        ansiscorrect(true);
        main2();
    }
    else{
        console.log("Wrong");
        ansiscorrect(false);
    }
}