const input = document.getElementById("inputTarea");
const agregarBtn = document.getElementById("agregarBtn")
const lista = document.getElementById("listaTareas")

agregarBtn.addEventListener("click", () => {
    const textoTarea = input.value.trim()

    if (textoTarea !== "") {

        //crear elementos
        const li = document.createElement("li")
        const span = document.createElement("span")
        const btnEliminar = document.createElement("button")

        //configurar contenido
        span.textContent = textoTarea;
        btnEliminar.textContent = "Eliminar"
        btnEliminar.classList.add("eliminar")

        // Agregar aventos 
        span.addEventListener("click", () => {
            span.classList.toggle("hecha")
        })

        // Eliminar 
        btnEliminar.addEventListener("click", () => {
            li.remove()
        })

        // Armar la tarea y agregarla a la lista
        li.appendChild(span)
        li.appendChild(btnEliminar)
        lista.appendChild(li)

        // Limpiar input 
        input.value = ""
    }
})