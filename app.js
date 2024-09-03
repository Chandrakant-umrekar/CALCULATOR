let str = "";

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnText = btn.innerText;
        if (btnText === "C") {
            display.value = "";
            str = "";
        } else if (btnText === "=") {
            try {
                str = eval(str);
                display.value = str;
            } catch (error) {
                display.value = "error";
                str = "";
            }
        } else {
            str += btnText;
            display.value = str;
        }
    });
});














