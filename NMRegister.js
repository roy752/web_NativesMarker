	//전체 function wraping의 이유는 IIFE 구글링 통해 참조
	function thingsStart() {

		function scrollInit(){window.scroll(0,250);}
		setTimeout(scrollInit,1000);
		var startQuizElement=document.getElementsByClassName("quiz-start")[0];
		var slideArray=document.querySelectorAll(".intro-slide");
		function fadeIn(slideQuery,num) {
			if(num!=0)
			slideArray[num-1].classList.remove("fade-out");
			setTimeout(fadeInAssist,800,slideQuery);
		}
		function fadeInAssist(slideQuery){slideQuery.classList.add("fade-out");}
		function insertButton(){startQuizElement.classList.add("fade-out");}
		setTimeout(fadeIn, 500, slideArray[0], 0);
		setTimeout(fadeIn, 4500, slideArray[1], 1);
		setTimeout(fadeIn, 10500, slideArray[2], 2);
		setTimeout(insertButton,13000);
		function init(){
			slideArray[2].classList.remove("fade-out");
			startQuizElement.classList.remove("fade-out");
			setTimeout(startQuiz, 1000);
		}

		function startQuiz(){
			slideArray[2].classList.remove("fade-out");
			const quizContainer = document.getElementById('quiz');
			const resultsContainer = document.getElementsByClassName('results')[0];

			// 객체를 요소로 가지는 배열

			const myQuestions = [
				{
					question:"강릉 홈플러스 위에는__ 가 있다",
					answers:{
						a: "CGV",
						b: "메가박스",
					},
					correctAnswer: "a"
				},
				{
					question:"강릉에는 KTX가",
					answers:{
						a: "있다",
						b: "없다",
					},
					correctAnswer: "a"
				},
				{
					question:"강릉에 흐르는 강 이름은?",
					answers:{
						a: "유등천이다",
						b: "남대천이다",
					},
					correctAnswer: "b"
				},
				{
					question:"강릉의 주요 버스 색깔은?",
					answers:{
						a: "자주색이다",
						b: "초록색이다",
					},
					correctAnswer: "b"
				},
				{
					question:"강릉에는 백화점이 __",
					answers:{
						a: "있다",
						b: "없다",
					},
					correctAnswer: "b"
				},
				{
					question:"강릉에는 __ 축제가 있다",
					answers:{
						a: "커피",
						b: "감자",
					},
					correctAnswer: "a"
				},
				{
					question:"다음 중 안목과 더 가까운 대형마트는?",
					answers:{
						a: "이마트",
						b: "홈플러스",
					},
					correctAnswer: "a"
				},
				{
					question:"다음 중 강릉시청과 더 가까운 시설은?",
					answers:{
						a: "강릉KTX역",
						b: "강릉시외버스터미널",
					},
					correctAnswer: "b"
				},
				{
					question:"강릉시의 영문 캐치프레이즈는 ___ city 이다",
					answers:{
						a: "Pine",
						b: "Ocean",
					},
					correctAnswer: "a"
				},
				{
					question:"다음 중 강릉과 더 가까운 곳은?",
					answers:{
						a: "춘천",
						b: "원주",
					},
					correctAnswer: "b"
				},
				{
					question:"다음 중 강릉의 동 이름이 아닌 것은?",
					answers:{
						a: "금산동",
						b: "강남동",
						c: "송정동",
						d: "입암동",
					},
					correctAnswer: "a"
				},
				{
					question:"다음 중 강릉의 면 이름이 아닌 것은?",
					answers:{
						a: "성산면",
						b: "옥계면",
						c: "사천면",
						d: "인주면",
					},
					correctAnswer: "d"
				},
				{
					question:"다음 중 강릉의 종합병원이 아닌 것은?",
					answers:{
						a: "동인병원",
						b: "아산병원",
						c: "상지병원",
						d: "고려병원",
					},
					correctAnswer: "c"
				},
				{
					question:"다음 중 강릉의 거리 이름이 아닌 것은?",
					answers:{
						a: "수암사거리",
						b: "옥천오거리",
						c: "월화거리",
						d: "안목커피거리",
					},
					correctAnswer: "a"
				},
				{
					question:"다음 중 강릉의 초등학교 이름이 아닌 것은?",
					answers:{
						a: "성덕초등학교",
						b: "한솔초등학교",
						c: "삼월초등학교",
						d: "포남초등학교",
					},
					correctAnswer: "c"
				},
				{
					question:"다음 중 강릉의 중학교 이름이 아닌 것은?",
					answers:{
						a: "율곡중학교",
						b: "초당중학교",
						c: "하슬라중학교",
						d: "경포중학교",
					},
					correctAnswer: "b"
				},
				{
					question:"다음 중 강릉의 고등학교 이름이 아닌 것은?",
					answers:{
						a: "중앙고등학교",
						b: "율곡고등학교",
						c: "문성고등학교",
						d: "강일여자고등학교",
					},
					correctAnswer: "b"
				},
				{
					question:"다음 중 강릉의 대학교 이름이 아닌 것은?",
					answers:{
						a: "관동대학교",
						b: "강릉원주대학교",
						c: "강릉한중대학교",
						d: "강릉영동대학교",
					},
					correctAnswer: "c"
				},
				{
					question:"다음 중 강릉의 해수욕장 이름이 아닌 것은?",
					answers:{
						a: "연곡해수욕장",
						b: "영포해수욕장",
						c: "남애해수욕장",
						d: "정동진해수욕장",
					},
					correctAnswer: "b"
				},
				{
					question:"다음 중 강릉에 있는 호텔 이름이 아닌 것은?",
					answers:{
						a: "세인트존스호텔",
						b: "씨마크호텔",
						c: "스카이베이호텔",
						d: "디그니티호텔",
					},
					correctAnswer: "d"
				},
				{
					question:"다음 중 강릉 시내에 위치한 버거브랜드가 아닌 것은?",
					answers:{
						a: "롯데리아",
						b: "맥도날드",
						c: "버거킹",
						d: "맘스터치",
					},
					correctAnswer: "c"
				},
				{
					question:"다음 중 강릉에 위치한 해변 이름이 아닌 것은?",
					answers:{
						a: "강문해변",
						b: "장곡해변",
						c: "사천해변",
						d: "남항진해변",
					},
					correctAnswer: "b"
				},
				{
					question:"다음 중 강릉의 향토 음식이 아닌 것은?",
					answers:{
						a: "아바이순대",
						b: "장칼국수",
						c: "감자옹심이",
						d: "초당두부",
					},
					correctAnswer: "a"
				},
				{
					question:"해돋이로 유명한 정동진역은 '이'시계로 유명하다. 무슨 시계인가?",
					answers:{
						a: "모래시계",
						b: "물시계",
						c: "해시계",
						d: "전자시계",
					},
					correctAnswer: "a"
				},
				{
					question:"다음 중 강릉에 위치한 시장 이름이 아닌 것은?",
					answers:{
						a: "남부시장",
						b: "포남시장",
						c: "중앙시장",
						d: "동부시장",
					},
					correctAnswer: "a"
				},
				{
					question:"다음 중 강릉 단오장에서 볼 수 없는 것은?",
					answers:{
						a: "놀이기구",
						b: "서커스",
						c: "불꽃놀이",
						d: "행진",
					},
					correctAnswer: "d"
				},
				{
					question:"다음 중 강릉의 정치인이 아닌 사람은?",
					answers:{
						a: "김대수",
						b: "김한근",
						c: "최명희",
						d: "권성동",
					},
					correctAnswer: "a"
				},
				{
					question:"강릉 시내 중심에 있는 버스정류장 이름으로도 쓰인 이 극장의 이름은?",
					answers:{
						a: "중앙극장",
						b: "신영극장",
						c: "솔올극장",
						d: "봉우극장",
					},
					correctAnswer: "b"
				},
				{
					question:"강릉소방서는 몇 년 전 이전한 사실이 있다. 어디에서 어디로 이전했는가?",
					answers:{
						a: "옥천동>유천지구",
						b: "송정동>교2동",
						c: "노암동>입암동",
						d: "주문진읍>성산면",
					},
					correctAnswer: "a"
				},
				{
					question:"과거 강릉에 무장공비가 침투했던 사건이 있었다. 몇 년도에 발생했는가?",
					answers:{
						a: "1962년",
						b: "1975년",
						c: "1987년",
						d: "1996년",
					},
					correctAnswer: "d"
				},
				{
					question:"다음 중 강릉에 위치한 유명한 카페가 아닌 것은?",
					answers:{
						a: "테라로사",
						b: "마린데크",
						c: "보헤미안",
						d: "산토리니",
					},
					correctAnswer: "b"
				},
				{
					question:"다음 중 강릉에 위치한 문화재가 아닌 것은?",
					answers:{
						a: "오죽헌",
						b: "죽서루",
						c: "선교장",
						d: "경포대",
					},
					correctAnswer: "b"
				},
				{
					question:"다음 중 강릉에 위치한 문화재가 아닌 것은?",
					answers:{
						a: "환선굴",
						b: "객사문",
						c: "향교",
						d: "소금강",
					},
					correctAnswer: "a"
				},
				{
					question:"다음 중 강릉에 위치한 지역이 아닌 것은?",
					answers:{
						a: "경포호수",
						b: "옥계해변",
						c: "허균생가터",
						d: "낙산사",
					},
					correctAnswer: "d"
				},
				{
					question:"다음 중 강릉에 위치한 지역이 아닌 것은?",
					answers:{
						a: "설악산국립공원",
						b: "주문진시장",
						c: "송정솔밭길",
						d: "등명낙가사",
					},
					correctAnswer: "a"
				},
				{
					question:"다음 중 강릉에 위치한 지역이 아닌 것은?",
					answers:{
						a: "정동진역",
						b: "썬크루즈",
						c: "돌산공원",
						d: "주문진",
					},
					correctAnswer: "c"
				},
				{
					question:"다음 중 강릉에 <strong>위치한</strong> 박물관은?",
					answers:{
						a: "참소리박물관",
						b: "조명박물관",
						c: "얼굴박물관",
						d: "화폐박물관",
					},
					correctAnswer: "a"
				},
				{
					question:"다음 중 강릉 출신이 아닌 역사적 인물은?",
					answers:{
						a: "퇴계이황",
						b: "신사임당",
						c: "허난설헌",
						d: "율곡이이",
					},
					correctAnswer: "a"
				},
			];
			function randomDelete(questionQuerys,num) {
				var dIndex=parseInt((num+parseInt(Math.random()*questionQuerys.length))%(questionQuerys.length));
				questionQuerys.splice(dIndex,1);
				return dIndex;
			}
			var indexNumber=0;
			while(myQuestions.length>9)
				indexNumber=randomDelete(myQuestions, indexNumber);
			function buildQuiz(){
				//quiz 클래스를 가진 HTML div 태그에 넣을 코드 스트링을 저장하는 배열.
				const output=[];

				//myQuestions 배열에 저장된 모든 객체 인덱스에 대하여
				myQuestions.forEach(
					// (currentQuestion, questionNumber)=>{

					// 	const answers=[];

					// 	for(letter in currentQuestion.answers){
					// 		answers.push(
					// 			<label>
					// 				<input type="radio" name="question${questionNumber}" value="${letter}">
					// 				${letter}:
					// 				${currentQuestion.answers[letter]}
					// 				</input>
					// 			</label>
					// 		);

					// 	}

					// 	output.push(
					// 		<div class="question">${currentQuestion.question}</div>
					// 		<div class="answers">${answers.join('')} </div>
					// 	);

					// }

					//pre-built function? currentQuestion은 myQuestions 배열의 요소 하나로 계산되고, questionNumber는 자동으로 0부터 계산됨.
					function (currentQuestion, questionNumber){

						const answers=[];
					//letter가 a,b,c,d 자동으로 잡힘. letter는 attribute의 이름(answers 객체 안 속성 abcd) 그대로 쓰는 것으로 추정.
						for(letter in currentQuestion.answers){
							if(letter==='c')
								{answers.push(`<br>`);}

							answers.push(
								`
								<input type="radio" name="question${questionNumber}" id="${letter}${questionNumber}" value="${letter}">
								<label for="${letter}${questionNumber}"><span class="ans">${currentQuestion.answers[letter]}</span></label>
								`
							);
						}
						//여기까지 answers배열에는 응답 문항이 인덱스 당 하나씩 할당. forEach의 iter 당 0, 1, 2, 3씩 4 index 할당.

						//output에 현재 질문 즉 currentQuestion 객체의 질문 하나를 div class=question로 담고, 답문 4개를 틈없이 join해
						//<label> 4개를 묶어 만든 answer bunch HTML 코드를 div class=answers로 담음.
						//두 div 태그를 class slide로 묶음. 이 질문-답변 묶음 HTML코드는 output의 한 index가 됨.
						output.push(
							`<div class="slide">
								<div class="question">${questionNumber+1}.${currentQuestion.question}</div>
								<div class="answers">${answers.join('')} </div>
							</div>`
						);

					}
				);
				//forEach 종료. myQuestions 배열의 index 와 output의 index는 같고, output은 question과 answers 4개로 이루어진
				//하나의 질문set HTML 코드를 index 당 담고 있다. 이를 모두 틈없이 join 하여 div class=quiz 요소에 삽입한다.
				quizContainer.innerHTML = output.join('');
			}

			function showResults(){
				const finalSlide=document.getElementsByClassName('slide active-slide')[0];
				finalSlide.classList.remove('active-slide');
				const answerContainers=quizContainer.querySelectorAll('.answers');
				const resultComment=["하하, 당신은 강릉사람이 아니군요.", "하하, 당신은 강릉사람이 아니군요.",
									"하하, 당신은 강릉사람이 아니군요.","당신, 강릉을 놀러온 적이 있군요?",
									"당신, 강릉을 놀러온 적이 있군요?","강릉에 거주하신 적이 있군요?",
									"강릉에 거주하신 적이 있군요?","당신, 거의 확실히 강릉사람이군요!",
									"당신, 거의 확실히 강릉사람이군요!","축하드립니다! 당신은 완벽한 강릉사람이군요."];
				let numCorrect=0;
				let score=0;
				myQuestions.forEach((currentQuestion, questionNumber)=>{
					
					//answerContainer에는 answer 클래스에 담긴 4개의 label이 담긴다.
					const answerContainer=answerContainers[questionNumber];

					//이해할 수 없는 코드. input[name=question0]:checked 가 querySelector 메서드의 하나의 약속된 CSS 선택자 방식으로 추정.
					const selector=`input[name=question${questionNumber}]:checked`;

					//역시 이해할 수 없는 코드. .value와 ||{} , selector 변수의 이해 필요.
					//||{}는 checked status가 blank 일 경우 querySelector에 걸리지 않는 경우에 대해 empty object로 대체하는 표현. .value를 통해 HTML attribute 값을 읽어옴.
					const userAnswer=(answerContainer.querySelector(selector)||{}).value;

					if(userAnswer===currentQuestion.correctAnswer)
						numCorrect++;
				})
				submitButton.style.display='none';
				//parseInt는 실수형 자료를 정수로 파싱한다.
				score=numCorrect===0? 0: parseInt((numCorrect*10)/(myQuestions.length)-1);
				resultsContainer.classList.add('results-active');
				resultsContainer.innerHTML=
				`<span id="score-counter"></span>/${myQuestions.length}<br><br>
				${resultComment[score]}`;
				var resultScoreCountUp = new CountUp("score-counter",0,numCorrect, 0, 5);
				resultScoreCountUp.start();
				function showComment(){var q=document.getElementsByClassName("comments")[0];q.classList.add("active-comments");}
				setTimeout(showComment,2000);
			}

			buildQuiz();
			const slides = document.querySelectorAll('.slide');
			const nextButton = document.getElementsByClassName("next")[0];
			const submitButton = document.getElementsByClassName('submit')[0];
			let currentSlide = 0;

			function showSlide(n) {
				slides[currentSlide].classList.remove('active-slide');
				slides[n].classList.add('active-slide');
				currentSlide = n;
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

			showSlide(currentSlide);


			submitButton.addEventListener('click', showResults);
			nextButton.addEventListener("click", showNextSlide);
		}

		startQuizElement.addEventListener('click',init);
	}
	window.onload=thingsStart;