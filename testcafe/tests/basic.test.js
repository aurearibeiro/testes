import { Selector } from "testcafe";

// formulario
/* .click("#ctl00_Corpo_UCModeloAvaliacaoPU1_GridDados_ctl02_rdbOpcao_0")
    .click("#ctl00_Corpo_UCModeloAvaliacaoPU1_GridDados_ctl03_rdbOpcao_1")
    .click("#ctl00_Corpo_UCModeloAvaliacaoPU1_GridDados_ctl04_rdbOpcao_4")
    .click("#ctl00_Corpo_UCModeloAvaliacaoPU1_GridDados_ctl05_rdbOpcao_1")
    .click("#ctl00_Corpo_UCModeloAvaliacaoPU1_GridDados_ctl06_rdbOpcao_1")
    .click("#ctl00_Corpo_UCModeloAvaliacaoPU1_GridDados_ctl07_rdbOpcao_2")
    .click("#ctl00_Corpo_UCModeloAvaliacaoPU1_btnConfirmar1")
    .click("#ctl00_Corpo_UCModeloAvaliacaoPU1_Button3") */

// exemplo
/* test("Mt first test", async (t) => {
  await t
    .typeText("#developer-name", "Jonh Smith")
    .click("#submit-button")
    .expect(Selector("#article-header").innerText)
    .eql("Thank you, Jonh Smith!");
}); */

fixture`Login`
  .page`https://siteseguro.inatel.br/PortalAcademico/WebLogin.aspx?ReturnUrl=%2fPortalacademico`;
const citySelect = Selector(
  "#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_dropTipoAutenticacao"
);
const cityOption = citySelect.find("option");

const citySelectEng = Selector(
  "#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_dropSubCurso"
);
const cityOptionEng = citySelectEng.find("option");

test(`Select an option from the drop-down menu`, async (t) => {
  await t
    .click(citySelect)
    .click(cityOption.withText("Por Curso e Matricula"))
    .expect(citySelect.value)
    .eql("2")

    .click(citySelectEng)
    .click(cityOptionEng.withText("Engenharia de Controle e Automação"))
    .expect(citySelectEng.value)
    .eql("24")

    .typeText("#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_tbMatricula", "99999")
    .typeText("#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_Password", "119922")
    .click("#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_LoginButton")

    .click("#ctl00_Corpo_HyperLink3")

    .expect(Selector("#ctl00_Corpo_UCNotas1_lblErro").innerText)
    .eql(
      "Você não está matriculado em turmas que possuem atividades complementares !!!"
    );
});
