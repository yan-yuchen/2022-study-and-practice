let input = document.querySelector("textarea");
let run = document.querySelector("button");
let output = document.querySelector("pre");

function main() {
    run.addEventListener("click", function () {  //点击button
        let s = input.value;
        output.innerHTML = s;  //将input里的内容放入output中
    });
}

export {
    main
}