if(window.location.pathname.endsWith('index.html')) { //O código abaixo só acontecerá na página em que seu caminho termina com index.html

    let count = 1; //Criando a variavel count
    let interval;

    //Garante que o botão radio1 estará marcado e pronto para ser utilizado
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('radio1').checked = true;
    });

    //Criando função para iniciar o carrossel automático
    function startInterval(){ 
        interval = setInterval( function(){
            nextImage();
        }, 5000); //O intervalo é dado em milissegundos, por isso 5000
    }

    //Criando função para resetar e reiniciar a contagem
    function resetInterval() {
            clearInterval(interval); // Limpa o intervalo atual
            startInterval(); // Inicia um novo intervalo
        }

    startInterval();

    // função para passar as imagens
    function nextImage(){ 
        count++
        if(count>4){ //Se o count for maior que 4, a contagem voltará para 1
            count = 1;
        }

        document.getElementById('radio'+ count).checked = true; //*Muda o botão ativo automaticamente, de acordo com o count
    }

    // Adiciona eventos de clique nos botões de rádio
    for (let i = 1; i <= 4; i++) {
        document.getElementById('radio' + i).addEventListener('click', function() {
            count = i; // Atualiza o count para o botão clicado
            clearInterval(interval);
            resetInterval();
        });
    }    
};

//GARANTE QUE OS ELEMENTOS ESTEJAM DISPONÍVEIS PARA USO
document.addEventListener("DOMContentLoaded", function() {
    const root = document.documentElement;
});

function mudarTema(){

    const root = document.documentElement;
    
    //Chamando as varíaveis do CSS
    const corPrincipal = getComputedStyle(root).getPropertyValue('--cor-principal').trim();

    //Alterando o valor das varíaveis do CSS
    if(corPrincipal === 'rgb(56, 133, 124)'){
        root.style.setProperty('--cor-principal', 'rgb(77, 54, 35)');
        root.style.setProperty('--cor-secundaria', 'rgb(195, 195, 140)');
        root.style.setProperty('--cor-fonte', 'rgb(77, 54, 35)');
    }else{
        root.style.setProperty('--cor-principal', 'rgb(56, 133, 124)');
        root.style.setProperty('--cor-secundaria', 'rgb(255,255,255)');
        root.style.setProperty('--cor-fonte', 'rgb(0,0,0)');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const btdropdown = document.querySelector('.botao-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    btdropdown.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    // Fechar o dropdown se o usuário clicar fora dele
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.botao-dropdown')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    });
});
