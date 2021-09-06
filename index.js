
const akanName = (e) => {
    e.preventDefault();
    const frm = document.querySelector("#frmGhana");
    const fd = new FormData(frm);

    console.log(fd.get("gender"));
}


document.querySelector("frmGhana").addEventlistener('submit', akanName);