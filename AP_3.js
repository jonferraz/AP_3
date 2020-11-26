(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Por quantos segundos você esfrega as mãos ao lavá-las com água e sabão?",
      answers: {
        a: "Passo só uma água rapida, sem sabão",
        b: "Lavo as mãos por pelo menos 20 segundos",
        c: "Lavo as mãos por pelo menos 10 segundos"
      },
      correctAnswer: "b"
    },
    {
      question: "Qual é a concentração ideal para a higienização com álcool em gel?",
      answers: {
        a: "90%. Afinal, quanto mais concentrado, melhor!",
        b: "70%. Ele é ideal para combater o virus",
        c: "46%.? O mais fácil de encontrar para venda"
      },
      correctAnswer: "b"
    },
    {
      question: "Como você higieniza a sua máscara de proteção caseira?",
      answers: {
        a: "Penduro a máscara no Varal assim que retiro para ela tomar ar",
        b: "Lavo em uma mistura de álcool e àgua assim que volto para casa",
        c: "Deixo de molho em água e sabão por pelo menos 20 minnutos"
      },
      correctAnswer: "c"
    },
    {
      question: "Você sabe qual é o período de incubação do coronavírus após o contágio?",
      answers: {
        a: "Entre 1 e 14 dias; A maior parte das pessoas tem sintomas no 5° dia",
        b: "Entre 7 e 14 dias; A maior parte das pessoas tem sintomas no 10° dia",
        c: "Entre 2 e 15 dias; A maior parte das pessoas tem sintomas no 2° dia"
      },
      correctAnswer: "a"
    },
    {
      question: "Quais são os primeiros sintomas da Covid-19?",
      answers: {
        a: "Espirros, febre e tose",
        b: "Cansaço, Dores de Cabeça e Febre Baixa",
        c: "Falta de ar e dores nas costas"
      },
      correctAnswer: "b"
    },
    {
      question: "Como é o seu ritual contra a Covid-19 ao chegar em casa?",
      answers: {
        a: "Tiro os sapatos, Higienizo as mãos e coloco a roupa usada na rua para lavar",
        b: "Assim que entro em casa lavo as mãos com água e sabão rapidinho",
        c: "Passo àlcool em gel nas mãos. Não é preciso lavar a roupa que uso na rua"
      },
      correctAnswer: "a"
    },
    {
      question: "Quando o teste rápido de Covid-19 deve ser feito?",
      answers: {
        a: "Assim que os primeiros sintomas aparecem",
        b: "Três dias depois dos sintomas do coronavírus",
        c: "Com dez dias ou mais do começo dos sintomas"
      },
      correctAnswer: "c"
    },
    {
      question: "Com a retomada do comércio, como sei se o local é seguro?",
      answers: {
        a: "Se o ar condicionado estiver gelado",
        b: "Se olocal for fechado, sem janelas para o virus entrar",
        c: "Se o ambiente estiver bem ventilado, com janelas abertas"
      },
      correctAnswer: "c"
    },
    {
      question: "Quais as Condições Individuais de saúde que são consideradas situações de alto risco para a transmissão do coronavírus?",
      answers: {
        a: "Anemia, disfagia, doença celíaca, intolerância a lactose",
        b: "Obesidade, gastroenterite, alcoolismo, apneia do sono.",
        c: "Doenças psiquiátricas, doença de Parkinson, síndrome de Down.",
        d: "Diabetes, hipertensão, problemas respiratórios, doenças cardiovasculares, pacientes imunossuprimidos."
      },
      correctAnswer: "d"
    },
    {
      question: "Os trabalhadores e/ou familiares com suspeita de infecção devem adotar qual procedimento?",
      answers: {
        a: "Procurar Pronto Socorro ou laboratórios para realização de exames.",
        b: "Fazer uso da máscara e entrar em contato com os serviços de saúde referenciados pelos órgãos oficiais.",
        c: "Tomar medicação por conta própria.",
        d: "Não comunicar para ninguém."
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();