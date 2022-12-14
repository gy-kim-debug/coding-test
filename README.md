# 스마트오더개발팀 frontend 개발자 채용 과제

* **사용언어**
    * html, VanillaJS, ES6+

* **유의사항**
    * repository 를 fork 후에 index.html 에 아래 기능을 완성 후 pull request 요청해주세요. 
    * pull request 요청 상태에서 채점을 하게 됩니다.
    * 과제 테스트에 문의 사항은 과제 전달 받은 인사팀 메일로 문의 주시면 됩니다.
    * 미완성인 경우에도 제출 해주세요.
    * css 채점기준에 영향을 미치지 않습니다.
    * 과제 내용은 외부로 유출을 금지합니다.
    * 과제 문제는 실제 개발되어 사용중인 기능입니다.
    * 서버 호출시 응답이 없거나 호출 불가능한 경우 첨부파일의 json 을 참고해주세요.

* **기대사항**
    * 테스트 코드, 테스트 케이스를 작성하는 경우 가산점이 있습니다.
    * 기본 요구사항에 있지 않은 기능이 필요할 경우 자유롭게 추가 가능합니다.
    * 명확한 에러 처리를 해 주세요.
    * 가능한 명확한 주석을 작성하며, 요구한 기능이 정상적으로 동작해야 합니다.
    * 다른 사람이 읽기 쉽고, 디버깅 하기 쉬운 코딩 스타일을 유지해 주세요.

## **work-1. mobileSelect.js 활용해 사용자가 원하는 날짜, 시간을 선택하는 기능을 작성합니다.**

![2022-08-25 16_17_08.709.png](https://api-storage.cloud.toast.com/v1/AUTH_78cecc1b106c4d74803ffcd6d6096af0/paycoorder_contents/t_review/homework-1.png)

* mobileSelect.js : [https://github.com/onlyhom/mobile-select](https://github.com/onlyhom/mobile-select)
* 아래 '날짜 데이터 조회' api 문서를 활용해 데이터를 조회후 날짜, 시간 위 그림과 같이 생성합니다.
* 날짜 확인 버튼 선택시 날짜, 시간 모두 선택 되어야 합니다. 하나라도 미선택 에러처리 합니다
* 날짜 확인 버튼 선택시 사용자가 선택한 날짜, 시간을 아래 '선택 날짜 데이터 확인' 에 표시합니다.
* 선택한 날짜가 변경되면 시간선택 데이터도 선택한 날짜에 맞게 변경 되어야 합니다.

## **work-**2\. 총 결제 금액과 포인트 사용 금액을 계산하는 기능을 작성합니다\.

![image.png](https://api-storage.cloud.toast.com/v1/AUTH_78cecc1b106c4d74803ffcd6d6096af0/paycoorder_contents/t_review/homework-2.png)

* '포인트 데이터 조회' api 문서를 활용해 case 1\~7 호출 후 응답에 맞는 포인트 사용 금액 계산, 총 결제 금액이 계산 되어야 합니다.
* 사용자가 입력하는 포인트를 응답값 스펙에 맞게 계산하고 사용 포인트에 표시 합니다.
* 사용자가 스펙에 맞지 않는 포인트 사용금액을 입력하면 에러 처리가 되어야 합니다.
* 사용 버튼을 선택하면 주문 금액에서 포인트 금액을 뺀 총 결제 금액을 계산합니다.
* 구현 기능은 '포인트 데이터 조회' type A\~G 까지 모든 타입에 결과가 만족해야 됩니다.

## 서버 호출 응답 정리

![image.png](https://api-storage.cloud.toast.com/v1/AUTH_78cecc1b106c4d74803ffcd6d6096af0/paycoorder_contents/t_review/homework-3.png)