let searchBtn = document.getElementById('search-for-flight');
let dropdownlist = document.querySelectorAll('.dropdown');


let inputField = document.querySelectorAll('.addr_input');

let backButton = document.querySelectorAll('.addr__box i.fas');


// Address field
let sourceAddress = document.getElementById('source-addr');
let destiAddress = document.getElementById('destination-addr');

let listSelect = document.querySelectorAll('.dropdown__list option');

// date of journey
let travelDate = document.getElementById('date_to_travel');
let returnDate = document.getElementById('date_to_return');



// defalut behaviour of browser while loaded
window.addEventListener('load',()=>{
    inputField.forEach(e=>{
        e.value = '';
    })
    
    sourceAddress.value = '';
    destiAddress.value = ''
})



inputField.forEach((e)=>{
    
    e.addEventListener("focus", (e)=>{
        if(e.target.nextElementSibling.classList.contains('src')){
            
            e.target.nextElementSibling.classList.add('show');
            
        }else if(e.target.nextElementSibling.classList.contains('desti')){
            
            e.target.nextElementSibling.classList.add('show');
            
        }
        
    })
}) 


backButton.forEach((e)=>{
    e.addEventListener('click',()=>{
        dropdownlist.forEach((e)=>{
            e.classList.remove('show');
        })
    })
})



sourceAddress.addEventListener("focusout",(e)=>{
    
    if(e.target.value === '') e.value = '';

    inputField.forEach((ele)=>{
        if(ele.nextElementSibling.classList.contains('src')){
            let temp = e.target.value;
            ele.value = temp;
        }
    })
})

destiAddress.addEventListener("focusout",(e)=>{
    
    if(e.target.value === '') e.value = '';

    inputField.forEach((ele)=>{
        if(ele.nextElementSibling.classList.contains('desti')){
            let temp = e.target.value;
            ele.value = temp;
        }
    })
})




listSelect.forEach((e)=>{

    e.addEventListener('click',(e)=>{
        if(e.target.parentElement.classList.contains('src')){
            inputField.forEach((ele)=>{
                if(ele.nextElementSibling.classList.contains('src')){
                    let temp = e.target.value;
                    sourceAddress.value = temp;
                    ele.value = temp;
                }
            })
        }else if(e.target.parentElement.classList.contains('desti')){
            inputField.forEach((ele)=>{
                if(ele.nextElementSibling.classList.contains('desti')){
                    let temp = e.target.value;
                    destiAddress.value = temp;
                    ele.value = temp;
                }
            })
        }
    })
})



travelDate.addEventListener('input',traveldate);
returnDate.addEventListener('input',returndate);


function traveldate(){

    if(this.value !== '') console.log(this.value);
    return;
}

function returndate(){

    if(this.value !== '') console.log(this.value);
    return;
}  