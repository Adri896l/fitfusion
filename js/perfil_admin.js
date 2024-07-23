const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}


    //barra de busqueda
    document.addEventListener('DOMContentLoaded', function() {
        const search = document.querySelector('.input-group input');
        const table_rows = document.querySelectorAll('tbody tr');
       
        search.addEventListener('input', searchTable);
       
        function searchTable() {
            const search_data = search.value.toLowerCase();
       
            table_rows.forEach((row) => {
                let rowText = Array.from(row.querySelectorAll('td')).map(td => td.textContent.toLowerCase()).join(' ');
                if (rowText.includes(search_data)) {
                    row.style.display = ''; // Muestra la fila
                } else {
                    row.style.display = 'none'; // Oculta la fila
                }
            });
        }
       });

       //texto dinamico
       document.addEventListener('DOMContentLoaded', () => {
        const header = document.getElementById('dynamicHeader');
    
        // Cambiar el color y tamaño del encabezado cada 2 segundos
        setInterval(() => {
            header.classList.toggle('dynamic');
        }, 6000);
    
        // Rotación de mensajes
        const messages = [
            'Bienvenido a tú sección de trabajo',
            'Tu actitud, no tu aptitud, determinará tu altitud',
            'Ayudar a nuestros clietes es nuestra meta principal',
            'La clave del éxito es empezar antes de estar listo'
        ];
    
        let messageIndex = 0;
        
        setInterval(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            header.textContent = messages[messageIndex];
        }, 3000);
    });

    let ejercicioIndex = 1;

    // Añadir nuevos ejercicios
    document.getElementById('agregarEjercicio').addEventListener('click', function() {
        ejercicioIndex++;
        const ejerciciosContainer = document.getElementById('ejerciciosContainer');
        const newEjercicio = document.createElement('div');
        newEjercicio.classList.add('ejercicio', 'mb-3');
        newEjercicio.innerHTML = `
            <hr>
            <h6>Ejercicio ${ejercicioIndex}</h6>
            <div class="mb-3">
                <label for="nombreEjercicio${ejercicioIndex}" class="form-label">Nombre del Ejercicio</label>
                <input type="text" class="form-control" id="nombreEjercicio${ejercicioIndex}" required>
            </div>
            <div class="mb-3">
                <label for="diaEjercicio${ejercicioIndex}" class="form-label">Día de la Semana</label>
                <select class="form-select" id="diaEjercicio${ejercicioIndex}" required>
                    <option value="">Seleccionar</option>
                    <option value="lunes">Lunes</option>
                    <option value="martes">Martes</option>
                    <option value="miércoles">Miércoles</option>
                    <option value="jueves">Jueves</option>
                    <option value="viernes">Viernes</option>
                    <option value="sábado">Sábado</option>
                    <option value="domingo">Domingo</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="seriesEjercicio${ejercicioIndex}" class="form-label">Series</label>
                <input type="number" class="form-control" id="seriesEjercicio${ejercicioIndex}" required>
            </div>
            <div class="mb-3">
                <label for="repeticionesEjercicio${ejercicioIndex}" class="form-label">Repeticiones por Serie</label>
                <input type="number" class="form-control" id="repeticionesEjercicio${ejercicioIndex}" required>
            </div>
            <div class="mb-3">
                <label for="descansoEjercicio${ejercicioIndex}" class="form-label">Descanso entre Series (segundos)</label>
                <input type="number" class="form-control" id="descansoEjercicio${ejercicioIndex}" required>
            </div>
        `;
        ejerciciosContainer.appendChild(newEjercicio);
    });
