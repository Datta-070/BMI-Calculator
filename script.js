function split(){
    let height=document.getElementById('rs').value;
    let weight=document.getElementById('no').value;
    let meter=height/100;
    let res= ((weight/(meter*meter)).toFixed(1));
    if(res<18){
        document.getElementById("head").innerText="Your BMI is "+ res;
        alert("Your weight is low, BULK UP !")
    }
    if(res>=18 && res<=24){
        document.getElementById("head").innerText="Your BMI is "+ res;
        alert("Top notch weight, maintain the same !")
    }
    if(res>24 && res<=28){
        document.getElementById("head").innerText="Your BMI is "+ res;
        alert("Loosing few inches will make you a star !")
    }
    if(res>28){
        document.getElementById("head").innerText="Your BMI is "+ res;
        alert("Time to lose the weight mate ! Hit the gym right now !")
    }
}