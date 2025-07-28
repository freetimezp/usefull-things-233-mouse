function create(e) {
    let span = document.createElement("span");

    span.style.left = e.pageX + "px";
    span.style.top = e.pageY + "px";
    span.style.scale = `${Math.random() * 2 + 1}`;
    span.style.setProperty("--x", getRandomTransition());
    span.style.setProperty("--y", getRandomTransition());

    document.body.appendChild(span);

    setTimeout(() => {
        document.body.removeChild(span);
    }, 2000);
}

function getRandomTransition() {
    return `${Math.random() * 400 - 200}px`;
}

document.addEventListener("mousemove", create);
