const inp = document.querySelector('#name-input');
const outp = document.querySelector('#name-output');

inp.addEventListener("input", (event) => {

    if (event.currentTarget.value === "") {
        outp.textContent = "Anonymous";
        console.log(outp.textContent);
    } else {
        outp.textContent = event.currentTarget.value;
        console.log(outp.textContent);
    }

});
