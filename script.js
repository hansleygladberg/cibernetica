

// ANIMACAO DE ENTRADAS DOS TEXTOS

window.sr = ScrollReveal({ reset: true });

sr.reveal('.visible1', { duration: 1000, distance: '110px' });
sr.reveal('.visible2', { duration: 2000, distance: '120px' });
sr.reveal('.visible3', { duration: 2500, distance: '150px' });
sr.reveal('.visible4', { duration: 400 });

// FIM DA ANIMACAO DE ENTRADAS DOS TEXTOS


// BOTAO MENU RESPONSIVO

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const menu = document.getElementById('menu')
    menu.classList.toggle('active');
    btnMobile.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// FIM - BOTAO MENU RESPONSIVO


// SERVICOS

const botaoServico = document.querySelectorAll(".titulo-serv");
const areaServico = document.querySelector(".descricao-serv");
const btnDesktop = document.querySelector(".bg-serv-desktop");
const btnNotebook = document.querySelector(".bg-serv-notebook");
const btnImpressora = document.querySelector(".bg-serv-impressora");


let index = 0;
let intervalo = setInterval(() => {
    areaServico.innerHTML = pages[index % pages.length];
    btn(index);
    index++;
    if (index === pages.length) {
        index = 0;
    }
}, 5000);


const pages = [
        "Nossa equipe é responsável por realizar tarefas como<strong> troca de peças, montagem e conserto de computadores de trabalho e gamer, instalação de sistemas operacionais e aplicativos, limpeza preventiva e corretiva.</strong> <br/>Tudo isso para garantir o máximo de desempenho e eficiência do seu desktop. <br/>Se você precisa de ajuda para manter o seu computador gamer ou de trabalho em pleno funcionamento, entre em contato conosco e deixe que cuidemos de tudo.",
        "Temos tudo o que você precisa em relação a notebooks! <br/>Com uma equipe altamente capacitada, oferecemos soluções para problemas como <strong>reparo de placa mãe, reparo e troca de carcaça, troca de tela, teclado, bateria, SSD, além de limpeza e venda de notebooks seminovos.</strong> <br/>Garantimos a máxima eficiência e desempenho do seu notebook, seja para uso pessoal ou profissional.<br/> Entre em contato conosco e permita que cuidemos de tudo para você.",
        "Quando se trata de impressoras, somos especializada em reparos, manutenção e vendas. <strong>Oferecemos soluções em reparo de placa lógica, além de limpeza e manutenção preventiva.</strong><br/> Também oferecemos <strong>venda e recarga de cartuchos,</strong> garantindo a máxima eficiência e desempenho da sua impressora.<br/> Se você precisa de ajuda para manter sua impressora funcionando corretamente, entre em contato conosco e deixe que cuidemos de tudo para você."
 ];

areaServico.innerHTML = pages[0];

function btn(pageBtn) {
    resetaBtn();
    switch(pageBtn) {
        case 0:
            btnDesktop.classList.add("btnativo");
            break;
        case 1:
            btnNotebook.classList.add("btnativo");
            break;
        case 2:
            btnImpressora.classList.add("btnativo");
            break;
        default:
            break;
    }
}

function resetaBtn() {
    btnNotebook.classList.remove("btnativo"); 
    btnDesktop.classList.remove("btnativo"); 
    btnImpressora.classList.remove("btnativo"); 
}

botaoServico.forEach(botao => {

    botao.addEventListener("click", () => {
        resetaBtn();
        botao.classList.add("btnativo"); 
        const botaoServicoClique = botao.textContent.toUpperCase();
        const pageIndex = pages.findIndex(page => page.toUpperCase().includes(botaoServicoClique));
        if (pageIndex !== -1) {
            areaServico.innerHTML = pages[pageIndex];
            index = pageIndex;
        }
        clearInterval(intervalo);
    });

    botao.addEventListener("mouseover", () => {
        clearInterval(intervalo);
    });

    botao.addEventListener("mouseleave", () => {
        intervalo = setInterval(() => {
            areaServico.innerHTML = pages[index % pages.length];
            btn(index);
            index++;
            if (index === pages.length) {
                index = 0;
            }
        }, 6000);
    });
});




// FIM SERVICOS 
