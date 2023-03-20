[child_process]('https://nodejs.org/api/child_process.html)

 + 위 문서를 읽으면 서브 프로세스 사용법을 익힐 수 있음
 + 대략적으로 spawn함수를 이용하게 되는데 아래와 같은 인자를 가짐
  + command : 수행할 커맨드
  + arg :문자열로 된 인자들의 리스트
  + returns : <object>
    + pid : 자식 프로세스 아이디
    + output : stdiog output의 결과 배열
    + stdout : output[1]의 값
    + stderr : output[2]의 값

Python 파일 실행 예시
 +  spawn(‘python’, [‘helloWorld.py’, ‘a’, ‘b’])
   + python helloWorld a b를 터미널에 친 것과 같은 결과를 받아옴

In helloWrold.py
  + argparse모듈은 커맨드 라인 인자를 받아올 수 있게 해줌
  + 해당 파일에서 add_argument 메서드가 1개이므로 1개의 인자를 추가로 받도록 하였음
