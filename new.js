function reduce(numerator, denominator) {
    var gcd = function gcd(a, b) {
      return b ? gcd(b, a % b) : a;
    };
    gcd = gcd(numerator, denominator);
    return [numerator / gcd, denominator / gcd];
  }
  
  function getMedian(args) {
    if (!args.length) {
      return 0;
    }
    var numbers = args.slice(0).sort((a, b) => a - b);
    var middle = Math.floor(numbers.length / 2);
    var isEven = numbers.length % 2 === 0;
    return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
  }
  
  var quiz = {
    duration: 120,
    question: 40,
    randomize: true,
    data: []
  };
  
  $(document).ready(function () {
    var questionField = $("#question");
    var totalQuestion = quiz.question;
    var currentIndex = 0;
    var progressField = $("#progress");
    var timerField = $("#timer");
    var intervalHandle = null;
    var hint = $("#hint");
    var answer = $(".answer")
    var dataSet;
    var score_value = 0
    var input_answer = $("#input_answer")
    var score_text = $('#your_score')
  
    var remainingSec = 0;
    var intervalHandle;
    var newData;
    
  
    function loadQuestions(callback) {
      $.getScript("Questions_with_ans.js", function () {
        $(document).ready(function () {
          newData = data;
          callback();
        });
      });
    }
  
    function handleNewData() {
      quiz.data = newData;
      loadQuestion(currentIndex);
    }
  
    loadQuestions(handleNewData);

    $('.submit_answer').click(function() {

        var inputAnswer = input_answer.val();
        var realAnswer = dataSet.ans.toString()
        var answerText = dataSet.Answer
        

        if (inputAnswer === realAnswer) {

            loadanswer("correct",answerText)
            score_value +=1;

            setTimeout(function() {
                loadQuestion(++currentIndex);
              }, 2500);
        } else {

            loadanswer("incorrect",answerText)
            score_value-=2;
        }
        score_text.text(score_value);
    });

    $('.skip_to_next').click(function() {

        answer.fadeOut()
        loadQuestion(++currentIndex);    

    })
  
    $('.ask_hint').click(function() {
        loadhint();
    })

    $('.check_answer').click(function() {
        loadanswer("answer",dataSet.Answer);
    })

    if (quiz.randomize) {
        for (var i = quiz.data.length - 1; i > 0; --i) {
            var rand = Math.floor(Math.random()*i);
            var temp = quiz.data[i];
            quiz.data[i] = quiz.data[rand];
            quiz.data[rand] = temp;
        }
    }

    
    function loadQuestion() {
        progressField.text("Question " + (currentIndex + 1) + " of " + totalQuestion);
        remainingSec = 120;
                
        var min = Math.floor(remainingSec / 60);
        var sec = remainingSec % 60;
        if (min < 10)
            min = "0" + min;
        if (sec < 10)
            sec = "0" + sec;
        timerField.text(min + ":" + sec);
                
        dataSet = newData[currentIndex].question();
        
       
        questionField.html(dataSet.ques);
        hint.html(dataSet.Hint);
        answer.html(dataSet.Answer);
        
 
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, questionField[0]]); 
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, hint[0]]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, answer[0]]);

        setTimeout(function() {
            if (currentIndex === 0) {
                questionField.css("opacity", 1);
            }
            animateQuestion();

        }, 500);
    }
  
    function animateQuestion() {
        remainingSec = 120;

        questionField.removeClass("zoomOutLeft");
        questionField.addClass("zoomIn");

        if (intervalHandle) {
            clearInterval(intervalHandle);
          }

        intervalHandle = setInterval(function() {
            remainingSec -= 1;
        
            if (remainingSec >= 0) {
              var min = Math.floor(remainingSec / 60);
              var sec = remainingSec % 60;
              
              if (min < 10)
                min = "0" + min;
              if (sec < 10)
                sec = "0" + sec;
              
              timerField.text(min + ":" + sec); 
              
            } else {
              clearInterval(intervalHandle); 
              timerField.text("00:00"); 
             
            }
          }, 1000);

    }
  
    function loadhint() {
        hint.fadeIn(); 
  
        setTimeout(function() {
            hint.fadeOut(); 
        }, 2500); 
    }
  
    function loadanswer(flag, ans) {
        answer.fadeIn()

        setTimeout(function() {
            answer.fadeOut(); 
        }, 2300); 

        if (flag === "correct") {
            answer.html("Good Job!      " + getAnswerFromEquation(ans));
        } else if(flag === "incorrect") {
            answer.html("Incorrect!     " + getAnswerFromEquation(ans));
        }else if(flag === "answer"){        
            answer.html(ans);
        }

        MathJax.Hub.Queue(["Typeset", MathJax.Hub, ans]);
    }
  
    function getAnswerFromEquation(equation) {
        var numericValue = equation.replace('Answer: ', '');
        return numericValue.trim();
    } 

    loadQuestion(currentIndex);
  });
  