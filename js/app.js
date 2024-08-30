function toggleExample(id) {
    const exampleElement = document.getElementById(id);
    exampleElement.style.display = exampleElement.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    
    //icono del botón
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '🌜'; 
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌞'; 
        localStorage.setItem('theme', 'light');
    }
});

//aunque refresque la página, se mantiene el estilo seleccionado
window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '🌜'; 
    } else {
        themeIcon.textContent = '🌞'; 
    }
});

