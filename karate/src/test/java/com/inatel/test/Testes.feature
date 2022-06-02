Feature: browser automation 1

Background:
  * configure driver = { type: 'chrome', showDriverLog: true }
  * def envValueAutenticacao = "2"
  * def envValueCurso = "24"

Scenario: Pesquisar e entrar no site do Cifra Club

  Given driver 'https://siteseguro.inatel.br/PortalAcademico/WebLogin.aspx?ReturnUrl=%2fPortalacademico'
  * script("document.getElementById('ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_dropTipoAutenticacao').value="+ envValueAutenticacao)
  * script("document.getElementById('ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_dropTipoAutenticacao').dispatchEvent(new MouseEvent('change', {bubbles: true}))")
  * script("document.getElementById('ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_dropSubCurso').value="+ envValueCurso)
  * script("document.getElementById('ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_dropSubCurso').dispatchEvent(new MouseEvent('change', {bubbles: true}))")
  
  
  And input("#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_tbMatricula", '99999' + Key.ENTER)
  And input("#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_Password", '119922' + Key.ENTER)
  When click("#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_LoginButton")

  * delay(5000)
  Then click('{a}Nota de Estágio')
  * delay(5000)
  And waitFor('{th}Sigla')

  
  

  When click("a[href='/PortalAcademico/Default.aspx']")

  When click("a[href='Academico/Sra/WebHistorico.aspx']")
  Then match text('#ctl00_Corpo_UCHistorico1_historicoGridView') != null

  When click("a[href='WebNotas.aspx?Pag=1&Ac=1']")
  Then match text('#ctl00_Corpo_UCNotas1_lblErro') == 'Você não está matriculado em turmas que possuem atividades complementares !!!'

  When click("a[href='WebPedidosNotas.aspx']")
  And match text('#ctl00_Corpo_lblErro') == 'Não existem pedidos de notas a serem solicitados !!!'

  When click("a[href='WebConsultaPedidosNotas.aspx']")
  And match text('#ctl00_Corpo_UCConsultaPedidosNotas1_lblErroConsultaPedidos') == 'Não existem Pedidos referentes à Notas a serem consultados.'

  When click("a[href='/PortalAcademico/Default.aspx']")
  When click("a[href='Academico/Documentos/WebRequerimentos.aspx']")
  When click("#ctl00_Corpo_dropProcesso")

  When click("a[href='/PortalAcademico/Default.aspx']")
  When click("a[href='Academico/Sra/WebNotaEstagio.aspx']")

