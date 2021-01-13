console.log('Form validation project');
let isValid=true;

document.getElementById('name').addEventListener('blur',function () {
    console.log('blured');
    let regex=/^[A-Z][A-Za-z\ ]{1,}$/;
    let str=document.getElementById('name').value;
    let res=regex.test(str);
    console.log(regex.source,str);
    console.log(res);
    if(res===true){
        document.getElementById('name').classList.remove('is-invalid');
    }
    else{
        document.getElementById('name').classList.add('is-invalid');
        isValid=false;
    }
});
document.getElementById('email').addEventListener('blur',function(){
    console.log('blured');
    let regex=/^[a-zA-Z0-9_\.\+]{1,}@[a-z]{1,}\.[a-z\.]{1,}$/;
    let str=document.getElementById('email').value;
    let res=regex.test(str);
    console.log(regex.source,str);
    console.log(res);
    if(res===true){
        document.getElementById('email').classList.remove('is-invalid');
    }
    else{
        document.getElementById('email').classList.add('is-invalid');
        isValid=false;
    }
});
document.getElementById('phone').addEventListener('blur',function () {
    console.log('blured');
    let regex=/^\+[0-9]{2}\-[0-9]{10}$/;
    let str=document.getElementById('phone').value;
    let res=regex.test(str);
    console.log(regex.source,str);
    console.log(res);
    if(res===true){
        document.getElementById('phone').classList.remove('is-invalid');
    }
    else{
        document.getElementById('phone').classList.add('is-invalid');
        isValid=false;
    }
});

let submit=document.getElementById('submit');
submit.addEventListener('click',()=>{
    console.log('submit button clicked');
    console.log('The form validity is ' +isValid );
    if(isValid){
        alert('Success');
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('phone').value="";
        document.getElementById('address').value="";
    }
    else{
        alert('Invalid form. Please enter your details again');
    }    
});
