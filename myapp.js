
/* 
Tugas Week 2 kali ini, saya membuat sebuah aplikasi quiz yang bertujuan 
untuk mengukur wawasan kita dengan menjawab jawaban dari pertanyaan yang di ajukan.
*/

/* 
										PSEUDOCODE =
			BACA "pertanyaan"
			BACA dan SIMPAN "jawaban"
			IF "jawaban" benar, nilai tambah 10, THEN
				IF "jawaban" salah, nilai tidak bertambah, THEN
					IF "jawaban" belum di pilih, ALERT "anda belum memilih jawaban"
					ENDIF
				ENDIF
			IF "jawaban" benar semua, nilai 50, THEN
				IF "jawaban" salah 1, nilai 40, THEN
					IF "jawaban" salah 2, nilai 30, THEN
						IF "jawaban" salah 3, nilai 20, THEN
							IF "jawaban" salah 4, nilai 10, THEN
								IF "jawaban" salah semua, nilai 0
			ELSE :
				"jawaban" salah semua, nilai 0
								ENDIF
							ENDIF
						ENDIF
					ENDIF
				ENDIF
			ENDIF
*/

var questions = [{
	"question": "Team Dota Evil Genius berasal dari negara ?",
	"option1": "Swedia",
	"option2": "China",
	"option3": "Amerika Serikat",
	"option4": "Kupang",
	"answer": "3"
}, {
	"question": "Siapakah sponsor resmi team Evil Genius",
	"option1": "Logitech",
	"option2": "SteelSeries",
	"option3": "Razer",
	"option4": "Corsair",
	"answer": "2"
}, {
	"question": "Siapa Presiden pertama Rusia ?",
	"option1": "Viktor Chernomyrdin",
	"option2": "Vladimir Putin",
	"option3": "Boris Yeltsin",
	"option4": "Dmitry Medvedev",
	"answer": "3"
}, {
	"question": "Pencipta sekaligus penyanyi lagu 'Like a Rolling Stone' ?",
	"option1": "Bob Dylan",
	"option2": "Frank Sinatra",
	"option3": "Elvis Presley",
	"option4": "Freddie Mercury",
	"answer": "1"
}, {
	"question": "Pandu Perdana itu ?",
	"option1": "Baik",
	"option2": "Tampan",
	"option3": "Pengertian",
	"option4": "Benar Semua",
	"answer": "4"
}];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
		questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
		opt1.textContent = q.option1;
		opt2.textContent = q.option2;
		opt3.textContent = q.option3;
		opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Anda Belum Menjawab !!!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Selesai';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Nilai Anda: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);