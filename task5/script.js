but.addEventListener('click', (event) => {  
    event.preventDefault(); 
    let val = document.querySelector('#inp').value;     
    document.querySelector('#duplicateField').innerHTML= val;
    console.log(val);
    inp.value = '';  
})