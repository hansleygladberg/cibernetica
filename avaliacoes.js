// AVALIACAOES

const objs = [
  {
    nome: 'Valéria Ramos',
    nota: 5,
    data: 'Nov/2022',
    foto: '/imagens/clientes/valeria.png',
    texto: 'Já fiz dois serviços nesta assistência técnica e ambos foram satisfatórios, o Sr Elisiario, com certeza construiu uma empresa com princípios bem sólidos, então você vai encontrar um atendimento de qualidade, serviço IMPECÁVEL, transparência e honestidade na hora de passar o diagnostico, comprometimento com o cliente e super atencioso. Certamente ganhou uma cliente e com toda certeza irei indicar seus serviços para outras pessoas, PARABÉNS pelo milagre que fizeram no meu notebook kkkkkkk',
  },

  {
    nome: 'Pathy Aguiar',
    nota: 5,
    data: 'Dez/2022',
    foto: '/imagens/clientes/patty.png',
    texto: 'Levei meu notebook p manutenção e fui muito bem atendida pelo sr. Elisiario, fizemos orçamento e ocorreu td dentro do combinado. Atendimento, trabalho e entrega dentro do prazo. Obrigada. Já estou indicando procure a Cibernética pq é a  melhor. Meu notebook está 10.',
  },

  {
    nome: 'Jose Nilton',
    nota: 5,
    data: 'Ago/2022',
    foto: '/imagens/clientes/nilton.png',
    texto: 'Experiência incrível,muito boa mesmo recomendo,Sr Elisiário um cara muito atencioso educado e muito profissional, ambiente muito agradável, serviço de qualidade e muito profissionalismo,estou muito Feliz satisfeito,e super indico. Obg por tudo Sr Elisiário,em breve estarei aí novamente, Deus abençoe o senhor todos seus funcionários e sua Família.',
  },

  {
    nome: 'Sandra Fonseca',
    nota: 5,
    data: 'Fev/2023',
    foto: '/imagens/clientes/sandra.png',
    texto: 'Sou cliente há mais de 10 anos da cibernética e como sempre atendimento maravilhoso. Sempre atende minhas necessidades 👏👏👏 …',
  },

  {
    nome: 'Joatan Torres',
    nota: 5,
    data: 'Jan/2022',
    foto: '/imagens/clientes/joatan.png',
    texto: 'Não creio que um atendimento limita-se a uma experiência boa o ruim. Acho muito mais importante a continuidade do mesmo. Pois muitas vezes criamos espectativas que fogem muito do que é possivel. Sou um cliente antigo..kkk  não velho, e só tenho a agradecer pelo respeito e transparência em que meus contatos com os coloboradores e gestores dessa Digna e honrosa empresa. Indico com toda respeito aos que talvez não compartlhem com minha opinião. Daria mais estrelas se assim tivease para avaliar... sei da história de luta e abgnaçâo que custou chegar a ser hoje uma empresa que se renova a cada dia.feliz pela modernização que hora foi feita e hoje é uma realidade........ Parabéns e muitosssssssssssss anos de sucesso. Obrigado por todos esses anos de convívio. Que Deus e seu filho Jesus Cristo abençoe essa familia CIBERNETICA....🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼🤜🤛👐👐👐🤗🤗🤗😘',
  },

  {
    nome: 'Mário Gondim',
    nota: 5,
    data: 'Mai/2022',
    foto: '/imagens/clientes/mario.png',
    texto: 'Excelente, atendimento profissional, cordial, sincero, serviço de primeira, esse a gente paga com gosto sem nem pedir desconto, já ganhou um novo cliente fiel, abraços.',
  },

  {
    nome: 'Worst Cego',
    nota: 5,
    data: 'Jun/2022',
    foto: '/imagens/clientes/worst.png',
    texto: 'Sem sombra de dúvidas, a melhor em assistência técnica, quando se fala em qualidade e transparência é com a Cibernética ;) , (Além da rapidez do serviço) que da um SARRAFO na concorrência kkkk. Grande Elisiario Barnabe, Eduçação e profissionalismo tem de sobra ;.',
  },

  {
    nome: 'Saulo barbosa',
    nota: 5,
    data: 'Mar/2022',
    foto: '/imagens/clientes/saulo.png',
    texto: 'Cibernética , empresa top!!! Fiquei extremamente feliz com todo o serviço realizado, bem como o valor cobrado. Empresa super transparente, todas as postagens de serviços realizados estão a disposição do cliente. Parabéns Cibernética, vou indicar prá todas as pessoas que eu venha a ter contato.',
  },

  {
    nome: 'Vitor Menezes',
    nota: 5,
    data: 'Fev/2022',
    foto: '/imagens/clientes/vitor.png',
    texto: 'Excelente!!  pontualidade serviço muito satisfatório deixo expresso tbm o atendimento direto com o responsável  nos deixando seguros com o que será  executado  ao aparelho .sem falar da facilidade  do pagamento 👍😉🤝🤝',
  },

]


const jsonData = JSON.stringify(objs)
const objData = JSON.parse(jsonData);

if (objData.length === 0) {
  document.getElementById("mensagem").innerHTML = "Nenhum dado encontrado";
} else {
  let exibe = "";

  for (let i = 0; i < objData.length; i++) {

    const review = objData[i];
    objData.map((cliente) => {
    })

    let textoCurto = review.texto;
    if (textoCurto.length > 530) {
      textoCurto = textoCurto.slice(0, 530) + "...";
    }
    exibe =
      exibe
      + "<div class='box-review'>"
      + "<span class='top-review'>"
      + "<img src='"
      + review.foto
      + "'class='foto-review' alt=''/>"
      + "<span class='nome-review'>"
      + review.nome
      + "<p>⭐️⭐️⭐️⭐️⭐️</p><p>"
      + review.data
      + "</p></span></span>"
      + "<span class='txt-review'><p>"
      + textoCurto
      + "</p></span></div></div>";
  }
  document.getElementById("section-reviews").innerHTML = exibe;
} 

// EXECUTA O SLIDE DE REVIEW 

$('.review').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
});


