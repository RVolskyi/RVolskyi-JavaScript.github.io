var objPage = {

	// Create Wrapper

	createWrapper : function (parentElem) {

		var wrapper = document.createElement('div');
			wrapper.className = 'wrapper';
			parentElem.appendChild (wrapper);

	},
	// Text Conteiner

	createContainer : function() {

		var container = document.createElement('div');
			container.classList.add('container');
		var wrapper = document.querySelector('.wrapper');
			wrapper.appendChild (container);
	
	},

// Text Head

	createHeader : function() {

		var h2 = document.createElement('h2');
			h2.classList.add('header_h2');
			h2.innerHTML = "Тест по программированию";
		var container = document.querySelector('.container');
			container.appendChild(h2);

	},

	//Box with questions and answer

	createQuestBlock : function() {
		var questionsBlock = document.createElement('div');
			questionsBlock.classList.add('questionsBlock');
		var container = document.querySelector('.container');
			container.appendChild(questionsBlock);

	},

// An array of questions and answers

	questions : [
		{
			questionText: '1. Вопрос №1',
			answers : [
				{answerText: 'Вариант ответа №1',
				},

				{answerText: 'Вариант ответа №2',
				},

				{answerText: 'Вариант ответа №3',
				}
			]
		},

		{
			questionText: '2. Вопрос №2',
			answers : [
				{answerText: 'Вариатн ответа №1',
				},

				{answerText: 'Вариант ответа №2',
				},

				{answerText: 'Вариант ответа №3',
				}
			]
		},

		{
			questionText: '3. Вопрос №3',
			answers : [
				{answerText: 'Вариант ответа №1',
				},

				{answerText: 'Вариант ответа №2', 
				},

				{answerText: 'Вариант ответа №3',
				}
			]
		}
	],

//Create questions (inside the function of creating the ans for each question)

	createQuestion : function () {

		for (var i = 0; i < this.questions.length; i++) {

			var question = document.createElement('h4');
				question.classList.add ('.questionTitle');
				question.innerHTML = this.questions[i].questionText;
			var questionsBlock = document.querySelector('.questionsBlock');
				questionsBlock.appendChild(question);

// Create Answer

		for (var j = 0; j < this.questions[i].answers.length; j++) {

			var checkbox = document.createElement('div');
				checkbox.classList.add('checkbox');
				question.appendChild(checkbox);

			var input = document.createElement ('input');
				input.type = "checkbox";
				checkbox.appendChild(input);

			var answer = document.createElement('h6');
				answer.classList.add('answer');
				answer.innerHTML = this.questions[i].answers[j].answerText;
				checkbox.appendChild(answer);
		}
		}
 	},

 	createButton : function() {

 		var button = document.createElement ('button');
 			button.type = "submit";
 			button.classList.add('btn-info');
 			button.innerHTML = 'Проверить мои результаты';
 		var container = document.querySelector('.container');
 			container.appendChild(button);
 	}

}
 
var element = document.body;
objPage.createWrapper(element);
objPage.createContainer();
objPage.createHeader();
objPage.createQuestBlock();
objPage.createQuestion();
objPage.createButton();