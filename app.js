
const akanName = (e) => {
    e.preventDefault();
    const mNames = ["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"]
    const fNames =["akoua","Adwoa","abenaa","akua","yaa","afua","ama"]
    const frm = document.querySelector("#frmGhana");
    const fd = new FormData(frm);
    const gender = fd.get("gender");
    const  dateGhana =document.getElementById("date").value;
    const  monthGhana =document.getElementById("month").value;
    const  yearGhana =document.getElementById("year").value;
    const d =new Date(yearGhana, (monthGhana-1),dateGhana).getDay();

if(dateGhana<=0 || dateGhana>31 || monthGhana<0 || monthGhana>12){
    alert("please input the valid dates");
    
}
    

    console.log(fd.get("date of birth"));
}
   

document.querySelector("#frmGhana").addEventListener('submit', akanName);










