let bouton = document.getElementById("bouton")
let principal = document.getElementById("partie")

bouton.addEventListener("click", function() {
    this.classList.toggle("bouton_clair")
    principal.classList.toggle("clair")
})

