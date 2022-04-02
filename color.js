select.onchange = function (e) {
    let colorChange = e ? e.target : window.event;
    document.body.style.backgroundColor = colorChange.value;
}