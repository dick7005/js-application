const from =documet.querySelector("form")
const mNames = ["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"]
const fNames =["akoua","Adwoa","abenaa","akua","yaa","afua","ama"]







const akanName = () => {
    e.preventDefault();
    const frm = document.querySelector("frmGhana");
    const fd = new FormData(frm);

    console.log(fd.get("gender"));
};
document.querySelector("frmGhana").addEventListener(submit, akanName);