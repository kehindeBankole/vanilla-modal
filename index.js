document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("modal").style.display = "block"
    document.getElementById("btnclose").style.display = "block"
})
document.getElementById("btnclose").addEventListener('click', () => {
    document.getElementById("modal").style.display = "none"
    document.getElementById("btnclose").style.display = "none"
})
window.addEventListener("click", function (e) {
    if (e.target === document.getElementById("modal") || e.target === document.getElementById("btnclose")) {
        document.getElementById("modal").style.display = "none"
    }
})