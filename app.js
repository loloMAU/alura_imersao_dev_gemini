// Utilizando o Gemini foi criado os comentários do código abaixo
// Colamos o código na aba de pesquisa e fizemos a pergunta
// Tenho essa base de código em JavaScript  e gostaria de incluir comentários, sem modificar o código ou nome de variáveis.

function pesquisar() {
  // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  //console.log(campoPesquisa);

  // Se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()
  
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada item (dado) da lista de dados
  for (let dado of dados) {
    // Constrói o HTML para cada resultado da pesquisa, incluindo:
    // - Um div com a classe "item-resultado"
    // - Um título (h2) com um link para o título do dado
    // - Uma descrição (p) com a classe "descricao-meta"
    // - Um link para mais informações
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
      }    
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }
  // Atribui o HTML construído ao conteúdo da seção de resultados
  section.innerHTML = resultados;
}