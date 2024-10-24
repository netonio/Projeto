let count = 1; /*Criando a variavel count*/

document.getElementById('radio1').checked = true; /*Torna o primeiro botão ativo*/

setInterval( function(){
    nextImage();
}, 5000); /*O intervalo é dado em milissegundos, por isso 5000*/

function nextImage(){
    count++
    if(count>4){ /*Se o count for maior que 4, a contagem voltará para 1*/
        count = 1;
    }

    document.getElementById('radio'+ count).checked = true; /*Muda o botão ativo automaticamente, de acordo com o count*/
}

const root = document.documentElement;

function mudarTema(){
    
    const corPrincipal = getComputedStyle(root).getPropertyValue('--cor-principal').trim();
    const corSecundaria = getComputedStyle(root).getPropertyValue('--cor-secundaria').trim();
    const corFonte = getComputedStyle(root).getPropertyValue('--cor-fonte').trim();

    if(corPrincipal === 'rgb(56, 133, 124)' && corSecundaria === 'rgb(255,255,255)' && corFonte === 'rgb(0,0,0)'){
        root.style.setProperty('--cor-principal', 'rgb(77, 54, 35)');
        root.style.setProperty('--cor-secundaria', 'rgb(205, 205, 163)');
        root.style.setProperty('--cor-fonte', 'rgb(77, 54, 35)');
    }else{
        root.style.setProperty('--cor-principal', 'rgb(56, 133, 124)');
        root.style.setProperty('--cor-secundaria', 'rgb(255,255,255)');
        root.style.setProperty('--cor-fonte', 'rgb(0,0,0)');
    }
}