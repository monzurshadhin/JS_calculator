const screenText = document.getElementById("input-field");
const buttons = document.querySelectorAll('#btn');
for(const button of buttons){
    button.addEventListener('click',function(event){
        const item = event.target.innerText;
        if(item == '='){
            screenText.value= eval(screenText.value);
        }
        else if(item == 'C')
        {
            screenText.value='';
        }
        else{
            screenText.value = screenText.value + item;
        }

    });
}






// function calculation(btnId){
//     const buttonText = document.getElementById(btnId);
//     console.log(buttonText);
//     const inputText = document.getElementById('input-field');
//     inputText.value = inputText.value + buttonText.innerText;
// }



// document.getElementById('btn-1').addEventListener('click',function(){

//     calculation('btn-1');

// });
// document.getElementById('btn-2').addEventListener('click',function(){

//     calculation('btn-2');

// });
// document.getElementById('btn-3').addEventListener('click',function(){

//     calculation('btn-3');

// });
// document.getElementById('btn-4').addEventListener('click',function(){

//     calculation('btn-4');

// });
// document.getElementById('btn-5').addEventListener('click',function(){

//     calculation('btn-5');

// });
// document.getElementById('btn-6').addEventListener('click',function(){

//     calculation('btn-6');

// });
// document.getElementById('btn-7').addEventListener('click',function(){

//     calculation('btn-7');

// });
// document.getElementById('btn-8').addEventListener('click',function(){

//     calculation('btn-8');

// });
// document.getElementById('btn-9').addEventListener('click',function(){

//     calculation('btn-9');

// });document.getElementById('btn-0').addEventListener('click',function(){

//     calculation('btn-0');

// });
// document.getElementById('btn-plus').addEventListener('click',function(){

//     calculation('btn-plus');

// });
// document.getElementById('btn-sub').addEventListener('click',function(){

//     calculation('btn-sub');

// });
// document.getElementById('btn-mul').addEventListener('click',function(){

//     calculation('btn-mul');

// });
// document.getElementById('btn-div').addEventListener('click',function(){

//     calculation('btn-div');

// });
// document.getElementById('btn-equal').addEventListener('click',function(){

//     calculation('btn-equal');

// });
