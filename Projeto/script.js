//O código abaixo só acontecerá na página em que seu caminho termina com index.html
if (window.location.pathname.endsWith('index.html')) { 

    let count = 1; //Criando a variavel count
    let interval;

    //Garante que o botão radio1 estará marcado e pronto para ser utilizado
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById('radio1').checked = true;
    });

    //Criando função para iniciar o carrossel automático
    function startInterval() {
        interval = setInterval(function () {
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
    function nextImage() {
        count++
        if (count > 4) { //Se o count for maior que 4, a contagem voltará para 1
            count = 1;
        }

        document.getElementById('radio' + count).checked = true; //*Muda o botão ativo automaticamente, de acordo com o count
    }

    // Adiciona eventos de clique nos botões de rádio
    for (let i = 1; i <= 4; i++) {
        document.getElementById('radio' + i).addEventListener('click', function () {
            count = i; // Atualiza o count para o botão clicado
            clearInterval(interval);
            resetInterval();
        });
    }
};

//GARANTE QUE OS ELEMENTOS ESTEJAM DISPONÍVEIS PARA USO
document.addEventListener("DOMContentLoaded", function () {
    const root = document.documentElement;
    const tema = localStorage.getItem('tema') // Pega o item "tema" do local storage do usuário

    if (tema === 'escuro') { // Faz a comparação de temas
        root.style.setProperty('--cor-principal', 'rgb(77, 54, 35)');
        root.style.setProperty('--cor-secundaria', 'rgb(195, 195, 140)');
        root.style.setProperty('--cor-fonte', 'rgb(77, 54, 35)');
    } else {
        root.style.setProperty('--cor-principal', 'rgb(56, 133, 124)');
        root.style.setProperty('--cor-secundaria', 'rgb(255,255,255)');
        root.style.setProperty('--cor-fonte', 'rgb(0,0,0)');
    }
});

function mudarTema() {

    const root = document.documentElement;

    //Chamando as varíaveis do CSS
    const corPrincipal = getComputedStyle(root).getPropertyValue('--cor-principal').trim();

    //Alterando o valor das varíaveis do CSS
    if (corPrincipal === 'rgb(56, 133, 124)') {
        root.style.setProperty('--cor-principal', 'rgb(77, 54, 35)');
        root.style.setProperty('--cor-secundaria', 'rgb(195, 195, 140)');
        root.style.setProperty('--cor-fonte', 'rgb(77, 54, 35)');
        localStorage.setItem('tema', 'escuro') // Armazena a preferência
    } else {
        root.style.setProperty('--cor-principal', 'rgb(56, 133, 124)');
        root.style.setProperty('--cor-secundaria', 'rgb(255,255,255)');
        root.style.setProperty('--cor-fonte', 'rgb(0,0,0)');
        localStorage.setItem('tema', 'claro') // Armazena a preferência
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const btdropdown = document.querySelectorAll('.botao-dropdown'); // Seleciona todos os botões de dropdown
    const dropdownMenus = document.querySelectorAll('.dropdown-menu'); // Seleciona todos os menus dropdown
    const botaoMobileMenu = document.querySelector('.botao-menu-mobile');
    const mobileMenu = document.querySelector('.menu-mobile');
    const iconeOriginal = botaoMobileMenu.innerHTML; // Armazena o ícone original do botão

    // Toggle do menu dropdown
    btdropdown.forEach((btn, index) => {
        btn.addEventListener('click', function (event) {
            event.stopPropagation(); // Impede o fechamento do dropdown ao clicar no botão
            dropdownMenus[index].classList.toggle('show'); // Toggle específico para o menu correspondente
        });
    });

    // Fechar o dropdown se o usuário clicar fora dele
    window.addEventListener('click', function (event) {
        dropdownMenus.forEach(menu => {
            if (!event.target.closest('.dropdown-menu') && !event.target.matches('.botao-dropdown')) {
                menu.classList.remove('show');
            }
        });
    });

     // Toggle do menu mobile
     botaoMobileMenu.addEventListener('click', function (event) {
        event.stopPropagation(); // Impede o fechamento do menu mobile ao clicar no botão
        mobileMenu.classList.toggle('abrir-menu');
        
        // Altera o ícone para 'X' ou volta ao original
        if (mobileMenu.classList.contains('abrir-menu')) {
            botaoMobileMenu.innerHTML = '&#10006;'; // Ícone 'X'
        } else {
            botaoMobileMenu.innerHTML = iconeOriginal; // Ícone original
        }
    });

    // Fechar o menu mobile se o usuário clicar fora dele
    window.addEventListener('click', function (event) {
        if (!event.target.closest('.menu-mobile') && !event.target.matches('.botao-menu-mobile')) {
            mobileMenu.classList.remove('abrir-menu');
            botaoMobileMenu.innerHTML = iconeOriginal;
        }
    });
});

if (window.location.pathname.endsWith('contato.html')) {
    const form = document.getElementById('formulario');
    const campos = document.querySelectorAll('.required');
    const spans = document.querySelectorAll('.span-required');
    const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;

    // Função para alterar a cor da caixa e chamar o span
    function definirErro(index) {
        campos[index].style.border = '1px solid red';
        spans[index].style.display = 'block';
    }

    // Função para desfazer as alterações
    function removerErro(index) {
        campos[index].style.border = ''
        spans[index].style.display = 'none'
    }

    // Função para validar o email, chamando a função de erro enquanto a condição não é atendida
    function validarEmail() {
        if (!emailRegex.test(campos[0].value)) {
            definirErro(0);
        } else {
            removerErro(0)
        }
    }

    // Função para validar o nome, chamando a função de erro enqunato a condição não é atendida
    function validarNome() {
        if (campos[1].value.length < 3) {
            definirErro(1);
        } else {
            removerErro(1)
        }
    }

    // Adiciona um listener do botão submit
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário
        validarNome(); // Chama a função para validar o nome
        validarEmail(); // Chama a função para validar o email

        // Verifica se há erros
        const hasErrors = spans[0].style.display === 'block' || spans[1].style.display === 'block';
        if (hasErrors) {
            alert("Um ou mais campos contém erros, por favor, verifique e tente novamente!") // Mostra o modal se houver erros
        } else {
            // Se não houver erros, você pode enviar o formulário aqui
            // form.submit(); // Descomente se quiser enviar o formulário
            console.log('Formulário enviado com sucesso!'); // Para fins de teste
        }
    });
};

if (window.location.pathname.endsWith('cardapio.html')) {
    document.addEventListener('DOMContentLoaded', function () {
        // Obtendo o elemento de entrada da barra de pesquisa
        const searchinput = document.getElementById('search');

        // Verificando se o elemento de input foi encontrado
        if (searchinput) {
            // Adicionando o evento 'input' ao campo de pesquisa
            searchinput.addEventListener('input', (event) => {
                const value = formatString(event.target.value);

                // Selecionando todas as seções que contêm a classe .container e .image-container
                const sections = document.querySelectorAll('section'); // Seleciona todas as seções da página

                sections.forEach(section => {
                    const container = section.querySelector('.container');  // O título da seção
                    const imageContainer = section.querySelector('.image-container');  // A área das imagens

                    // Selecionando todas as figuras dentro de .image-container
                    const figures = imageContainer ? imageContainer.querySelectorAll('figure') : [];

                    let hasVisibleItem = false;  // Flag para verificar se ao menos um item é visível

                    // Iterando sobre todas as figuras da seção
                    figures.forEach(figure => {
                        const caption = figure.querySelector('figcaption'); // Pega o <figcaption> (legenda do item)
                        const captionText = caption ? caption.textContent || caption.innerText : ''; // Obtém o texto da legenda

                        // Exibindo ou ocultando a figura com base no texto da pesquisa
                        if (formatString(captionText).includes(value)) {
                            figure.style.display = 'flex';  // Exibe a figura com o layout flex
                            hasVisibleItem = true;  // Ao menos um item é visível
                        } else {
                            figure.style.display = 'none';  // Oculta a figura e remove do layout
                        }
                    });

                    // Ocultando ou exibindo o título da seção (container) dependendo da visibilidade dos itens
                    if (hasVisibleItem) {
                        container.style.display = 'block';  // Exibe a caixa do título
                        section.style.display = 'block';  // Exibe a seção inteira
                    } else {
                        container.style.display = 'none';  // Oculta a caixa do título
                        section.style.display = 'none';  // Oculta a seção inteira
                    }
                });
            });
        } else {
            console.error("Elemento de input com id 'search' não encontrado.");
        }
    });

    // Função para formatar a string e facilitar a pesquisa
    function formatString(value) {
        return value
            .toLowerCase() // Converte para letras minúsculas
            .trim(); // Remove espaços desnecessários
    }
}

if (window.location.pathname.endsWith('cardapio.html') || window.location.pathname.endsWith('index.html')) {
    // Aguarda o carregamento completo do DOM antes de executar o código
    document.addEventListener('DOMContentLoaded', function () {
        const modal = document.querySelector("#modalid");
        const fade = document.querySelector("#fade");
        const closeBtn = document.getElementById("close-btn"); // Obtém o botão de fechar

        // Função para abrir e fechar o modal
        const toggleModal = () => {
            modal.classList.toggle("hide");
            fade.classList.toggle("hide");
        };

        // Função para abrir o modal com as informações do produto
        window.openModal = function(title, description, imageSrc, price1, price2) {
            // Atualizar o conteúdo do modal com as informações do produto
            document.getElementById("modal-title").textContent = title; // Atualiza o título no modal
            document.getElementById("modal-description").textContent = description; // Atualiza a descrição no modal
            document.getElementById("modal-image").src = imageSrc;  // Atualiza a imagem no modal
            document.getElementById("modal-price1").textContent = price1; // Atualiza o preço1 no modal
            document.getElementById("modal-price2").textContent = price2; // Atualiza o preço2 no modal

            // Verifica se a descrição está vazia
            if (!description || description.trim() === "") {
                // Se a descrição estiver vazia, altera o top do preço1 para 40%
                document.getElementById("modal-price1").style.top = "40%";
            } else {
                // Caso contrário, mantém o top do preço1 em seu valor padrão
                document.getElementById("modal-price1").style.top = "";
            }
            
            // Usando a função toggleModal para mostrar o modal
            toggleModal();
        };

        // Vincular o evento de clique ao botão de fechar no JavaScript
        closeBtn.addEventListener('click', function() {
            toggleModal();
        });

        // Quando o usuário clicar fora do modal (no fade), também fechará o modal
        window.addEventListener('click', function(event) {
            if (event.target === fade) {
                toggleModal();
            }
        });
    });
}
