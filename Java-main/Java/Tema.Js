const themeToggleBn=document.getElementById("theme-toggle");
const body=document.body;

themeToggleBn.addEventListener("click",function() {
body.classList.contains("dark-theme");

if (body.classList.contains("Dark-theme")) {
    themeToggleBn.textContains("dark-theme");

if (body.classList.contains("Dark-Theme")) {
    themeToggleBn.textContent='mudar para Tema Claro';
} else{
    themeToggleBn.textContent='Mudar para Tema escuro';
} } } )