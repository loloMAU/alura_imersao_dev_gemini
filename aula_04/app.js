// Utilizando o Gemini foi criado os comentários do código abaixo
// Colamos o código na aba de pesquisa e fizemos a pergunta
// Tenho essa base de código em JavaScript  e gostaria de incluir comentários, sem modificar o código ou nome de variáveis.

function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item (dado) da lista de dados
    for (let dado of dados) {
      // Constrói o HTML para cada resultado da pesquisa, incluindo:
      // - Um div com a classe "item-resultado"
      // - Um título (h2) com um link para o título do dado
      // - Uma descrição (p) com a classe "descricao-meta"
      // - Um link para mais informações
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
  
    // Atribui o HTML construído ao conteúdo da seção de resultados
    section.innerHTML = resultados;
}