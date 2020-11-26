var quiztitle = "Bem-Vindo ao Quiz sobre Covid-19!";
   
    var quiz = [
        {
            "question"      :   "Por quantos segundos você esfrega as mãos ao lavá-las com água e sabão?",
            "image"         :   "https://img.huffingtonpost.com/asset/5e68feee230000d11a0c1387.jpeg?cache=nR0opvdN1j&ops=scalefit_720_noupscale",            
            "choices"       :   [
                                    "Passo só uma água rapida, sem sabão",
                                    "Lavo as mãos por pelo menos 20 segundos",
									                  "Lavo as mãos por pelo menos 10 segundos"
                                ],
            "correct"       :   "Lavo as mãos por pelo menos 20 segundos",
        },
        {
            "question"      :   "Qual é a concentração ideal para a higienização com álcool em gel?",
            "image"         :   "https://cdn.entrypoint.directory/assets/46746/produtos/7268/gel.jpg",
            "choices"       :   [
                                    "90%. Afinal, quanto mais concentrado, melhor!",
                                    "70%. Ele é ideal para combater o virus",
									                  "46%.? O mais fácil de encontrar para venda"
                                ],
            "correct"       :   "70%. Ele é ideal para combater o virus",
        },
        {
            "question"      :   "Como você higieniza a sua máscara de proteção caseira?",
            "image"         :   "https://conteudo.imguol.com.br/c/entretenimento/24/2020/06/21/mascaras-penduradas-no-varal-na-casa-dos-atores-camila-queiroz-e-klebber-toledo-1592756495327_v2_450x600.png",
            "choices"       :   [
                                    "Penduro a máscara no Varal assim que retiro para ela tomar ar",
                                    "Lavo em uma mistura de álcool e àgua assim que volto para casa",
									                  "Deixo de molho em água e sabão por pelo menos 20 minnutos"
                                ],
            "correct"       :   "Deixo de molho em água e sabão por pelo menos 20 minnutos",
        },
        {
            "question"      :   "Você sabe qual é o período de incubação do coronavírus após o contágio?",
            "image"         :   "https://s2.glbimg.com/6zSVX-mo7pSjbOquGLrRMhpqLL4=/e.glbimg.com/og/ed/f/original/2020/07/11/viktor-forgacs-fcdqdjum6b4-unsplash.jpg",
            "choices"       :   [
                                    "Entre 1 e 14 dias; A maior parte das pessoas tem sintomas no 5° dia",
                                    "Entre 7 e 14 dias; A maior parte das pessoas tem sintomas no 10° dia",
									                  "Entre 2 e 15 dias; A maior parte das pessoas tem sintomas no 2° dia"
                                ],
            "correct"       :   "Entre 1 e 14 dias; A maior parte das pessoas tem sintomas no 5° dia",
        },
        {
            "question"      :   "Quais são os primeiros sintomas da Covid-19?",
            "image"         :   "https://super.abril.com.br/wp-content/uploads/2020/07/28-07_sintomasCOVID_SITE.jpg",
            "choices"       :   [
                                    "Espirros, febre e tose",
									                  "Cansaço, Dores de Cabeça e Febre Baixa",
                                    "Falta de ar e dores nas costas"
                                ],
            "correct"       :   "Cansaço, Dores de Cabeça e Febre Baixa",
        },
        {
            "question"      :   "Como é o seu ritual contra a Covid-19 ao chegar em casa?",
            "image"         :   "https://data.portal.sistemas.ro.gov.br/2020/03/Limpeza-Coronav%C3%ADrus-Fotos-Frank-N%C3%A9ry-24.03-12.jpg",
            "choices"       :   [
                                    "Tiro os sapatos, Higienizo as mãos e coloco a roupa usada na rua para lavar",
                                    "Assim que entro em casa lavo as mãos com água e sabão rapidinho",
									                  "Passo àlcool em gel nas mãos. Não é preciso lavar a roupa que uso na rua"
                                 ],
            "correct"       :   "Tiro os sapatos, Higienizo as mãos e coloco a roupa usada na rua para lavar",
        },
        {
            "question"      :   "Quando o teste rápido de Covid-19 deve ser feito?",
            "image"         :   "https://odiario.net/packages/uploads/2020/05/iv-testes-rt.jpg",
            "choices"       :   [
                                    "Assim que os primeiros sintomas aparecem",
                                    "Três dias depois dos sintomas do coronavírus",
                                    "Com dez dias ou mais do começo dos sintomas"
                                ],
            "correct"       :   "Com dez dias ou mais do começo dos sintomas",
        },
        {
            "question"      :   "Com a retomada do comércio, como sei se o local é seguro?",
            "image"         :   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSipqUOLxRvR-jnvSqYlqj9WZoUpwbLJEz6A&usqp=CAU",
            "choices"       :   [
                                    "Se o ar condicionado estiver gelado",
                                    "Se olocal for fechado, sem janelas para o virus entrar",
                                    "Se o ambiente estiver bem ventilado, com janelas abertas"
                                    
                                ],
            "correct"       :   "Se o ambiente estiver bem ventilado, com janelas abertas",
        },
        {
            "question"      :   "Quais as Condições Individuais de saúde que são consideradas situações de alto risco para a transmissão do coronavírus?",
            "image"         :   "https://static.wixstatic.com/media/0e461b_368695c2f3be4f018dbcd7ca0aef64a8~mv2.jpg/v1/fill/w_953,h_576,al_c,q_90/0e461b_368695c2f3be4f018dbcd7ca0aef64a8~mv2.jpg",
            "choices"       :   [
                                    "Anemia, disfagia, doença celíaca, intolerância a lactose",
                                    "Obesidade, gastroenterite, alcoolismo, apneia do sono.",
                                    "Doenças psiquiátricas, doença de Parkinson, síndrome de Down.",
                                    "Diabetes, hipertensão, problemas respiratórios, doenças cardiovasculares, pacientes imunossuprimidos."
                                ],
            "correct"       :   "Diabetes, hipertensão, problemas respiratórios, doenças cardiovasculares, pacientes imunossuprimidos.",
        },
        {
            "question"      :   "Os trabalhadores e/ou familiares com suspeita de infecção devem adotar qual procedimento?",
            "image"         :   "https://static.ndonline.com.br/2020/07/foto-1-Freepik.jpeg",
            "choices"       :   [
                                    "Procurar Pronto Socorro ou laboratórios para realização de exames.",
                                    "Fazer uso da máscara e entrar em contato com os serviços de saúde referenciados pelos órgãos oficiais.",
                                    "Tomar medicação por conta própria.",
                                    "Não comunicar para ninguém."
                                ],
            "correct"       :   "Fazer uso da máscara e entrar em contato com os serviços de saúde referenciados pelos órgãos oficiais.",
        },
    ];

    /******* No need to edit below this line *********/
  var currentquestion=0,score=0,
  submt=true,
  picked;jQuery(document).ready(function(e){
    function h(i){return e(document.createElement("div")).text(i).html()
  }
  function b(k){
    if(typeof k!=="undefined"&&e.type(k)=="array"){
      e("#choice-block").empty();for(var j=0;j<k.length;j++){e(document.createElement("li")).addClass("choice choice-box").attr("data-index",j).text(k[j]).appendTo("#choice-block")
    }}}
    function d(){
      submt=true;
      e("#explanation").empty();
      e("#question").text(quiz[currentquestion]["Questão"]);
      e("#pager").text("Questão "+Number(currentquestion+1)+" de "+quiz.length);
      if(quiz[currentquestion].hasOwnProperty("image")&&quiz[currentquestion]["image"]!=""){
        if(e("#question-image").length==0){
          e(document.createElement("img")).addClass("question-image").attr("id","question-image").attr("src",
          quiz[currentquestion]["image"]).attr("alt",h(quiz[currentquestion]["Questão"])).insertAfter("#question")
        }
          else{
            e("#question-image").attr("src",quiz[currentquestion]["image"]).attr("alt",h(quiz[currentquestion]["Questão"]))}
          }
            else{e("#question-image").remove()}b(quiz[currentquestion]["choices"]);c()}function f(i){
              if(quiz[currentquestion]["choices"][i]==quiz[currentquestion]["correct"]){e(".choice").eq(i).css({"background-color":"#50D943"});e("#explanation").html("<strong>Correto!</strong> "+h(quiz[currentquestion]["explanation"]));score++
            }else{
              e(".choice").eq(i).css({"background-color":"#D92623"});
              e("#explanation").html("<strong>Incorreto.</strong>"+h(quiz[currentquestion]["explanation"]))
            }currentquestion++;e("#submitbutton").html("PRÓXIMA QUESTÃO &raquo;").on("click",function()
              {
                if(currentquestion==quiz.length){a()
                }else{e(this).text("Verifique a resposta").css({color:"#222"}).off("click");d()}})
              }
              function c(){
                e(".choice").on("mouseover",function(){e(this).css({"background-color":"#e1e1e1"})});e(".choice").on("mouseout",function()
                {
                  e(this).css({"background-color":"#fff"})
              });e(".choice").on("click",
              function(){
                picked=e(this).attr("data-index");e(".choice").removeAttr("style").off("mouseout mouseover");
                e(this).css({"border-color":"#222","font-weight":700,"background-color":"#c1c1c1"});
                if(submt){submt=false;e("#submitbutton").css({color:"#000"}).on("click",
                function(){
                  e(".choice").off("click");e(this).off("click");f(picked)})}})
                }
                function a(){
                  e("#explanation").empty();e("#question").empty();e("#choice-block").empty();e("#submitbutton").remove();e("#question").text("você acertou "+score+" de "+quiz.length+" Questões.");e(document.createElement("h2")).css({"text-align":"center","font-size":"4em"}).text(Math.round(score/quiz.length*100)+"%").insertAfter("#question")
                }
                function g()
                {
                if(typeof quiztitle!=="undefined"&&e.type(quiztitle)==="string")
              {e(document.createElement("h1")).text(quiztitle).appendTo("#frame")
            }
              else{e(document.createElement("h1")).text("Quiz").appendTo("#frame")
            }
            if(typeof quiz!=="undefined"&&e.type(quiz)==="array")
            {
              e(document.createElement("p")).addClass("pager").attr("id","pager").text("Questão 1 de "+quiz.length).appendTo("#frame");
              e(document.createElement("h2")).addClass("Questão").attr("id","Questão").text(quiz[0]["Questão"]).appendTo("#frame");
              if(quiz[0].hasOwnProperty("image")&&quiz[0]["image"]!=""){e(document.createElement("img")).addClass("question-image").attr("id","question-image").attr("src",quiz[0]["image"]).attr("alt",h(quiz[0]["Questão"])).appendTo("#frame")
            }
            e(document.createElement("p")).addClass("explanation").attr("id","explanation").html("&nbsp;").appendTo("#frame");e(document.createElement("ul")).attr("id","choice-block").appendTo("#frame");
            b(quiz[0]["choices"]);
            e(document.createElement("div")).addClass("choice-box").attr("id","submitbutton").text("Verifique a resposta").css({"font-weight":700,color:"#222",padding:"30px 0"}).appendTo("#frame");c()}}g
            ()});