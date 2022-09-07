# 스마트오더개발팀 frontend 개발자 채용 과제

* **사용언어**
    * html, VanillaJS, ES6+

* **유의사항**
    * index.html 에 아래 기능을 완성 후 zip 파일로 제출해주세요. 미완성인 경우에도 제출 해주세요.
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

![2022-08-25 16_17_08.709.png](/wikis/2607232640735065411/files/3347959246155336230)

* mobileSelect.js : [https://github.com/onlyhom/mobile-select](https://github.com/onlyhom/mobile-select)
* 아래 '날짜 데이터 조회' api 문서를 활용해 데이터를 조회후 날짜, 시간 위 그림과 같이 생성합니다.
* 날짜 확인 버튼 선택시 날짜, 시간 모두 선택 되어야 합니다. 하나라도 미선택 에러처리 합니다
* 날짜 확인 버튼 선택시 사용자가 선택한 날짜, 시간을 아래 '선택 날짜 데이터 확인' 에 표시합니다.
* 선택한 날짜가 변경되면 시간선택 데이터도 선택한 날짜에 맞게 변경 되어야 합니다.

## **work-**2\. 총 결제 금액과 포인트 사용 금액을 계산하는 기능을 작성합니다\.

![image.png](/wikis/2607232640735065411/files/3355890281057837054)

* '포인트 데이터 조회' api 문서를 활용해 case 1\~7 호출 후 응답에 맞는 포인트 사용 금액 계산, 총 결제 금액이 계산 되어야 합니다.
* 사용자가 입력하는 포인트를 응답값 스펙에 맞게 계산하고 사용 포인트에 표시 합니다.
* 사용자가 스펙에 맞지 않는 포인트 사용금액을 입력하면 에러 처리가 되어야 합니다.
* 사용 버튼을 선택하면 주문 금액에서 포인트 금액을 뺀 총 결제 금액을 계산합니다.
* 구현 기능은 '포인트 데이터 조회' type A\~G 까지 모든 타입에 결과가 만족해야 됩니다.

## 서버 호출 응답 정리

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 호출 도메인 <td colspan=5>[https://test-menu.payco.kr/](https://alpha-menu.orderpick.kr/) |
| <td colspan=6>공통|
| Header  <td colspan=2>Content-Type <td colspan=3>application/json |
| status | Integer |  | Y <td colspan=2>0 이 아닌 결과는 실패 |
| message | String |  | Y <td colspan=2>조회 결과 메시지 |
| result | Object |  | Y <td colspan=2>호출 결과 |
| <td colspan=6> |
| API 명 <td colspan=5>**날짜 데이터 조회** |
| Method <td colspan=5>GET |
| URI <td colspan=5>/test/api/work/time |
| <td colspan=6>RequestBody |
| Parameter | Type | length | Required <td colspan=2>Description |
|  |  |  |  <td colspan=2> |
| <td colspan=6>ResponseBody |
| id | String |  | <td colspan=2>날짜<br>YYYYMMDD |
| value | String |  |  <td colspan=2>날짜 표시 데이터 |
| date | String |  |  <td colspan=2>YYYYMMDD |
| ㄴ childsAm | Array |  |  <td colspan=2>날짜의 시간 데이터 |
| <td colspan=6>childsAm Array |
| id |  |  |  <td colspan=2>시간 hh |
| value |  |  |  <td colspan=2>시간 표시 데이터 |
| date |  |  |  <td colspan=2>YYYYMMDDhh |
| ㄴ childs | Array |  |  <td colspan=2>시간의 분 데이터 |
| <td colspan=6>childs Array |
| id |  |  |  <td colspan=2>분 mm |
| value |  |  |  <td colspan=2>분 표시 데이터 |
| date |  |  |  <td colspan=2>YYYYMMDDhhmm |
| API 명 <td colspan=5>**포인트 데이터 조회** |
| Method <td colspan=5>POST |
| URI <td colspan=5>/test/api/work/point |
| <td colspan=6>RequestBody |
| Parameter | Type | length | Required <td colspan=2>Description |
| type | String | 1 |  <td colspan=2>응답 타입<br>A,B,C,D,E,F,G |
| <td colspan=6>ResponseBody |
| orderAmt |  |  |  <td colspan=2>주문 금액 |
| myPoint |  |  |  <td colspan=2>잔여포인트(포인트 잔액) |
| useMinPoint |  |  |  <td colspan=2>사용가능최소적립포인트<br>잔여포인트가 useMinPoint 보다 적은 경우에는 포인트 사용이 불가합니다. |
| useMaxPoint |  |  |  <td colspan=2>사용가능최대적립포인트<br>잔여포인트가 useMinPoint 보다 많아 경우에 useMinPoint 보다는 많이 사용할수 없습니다. |
| useUnitPoint |  |  |  <td colspan=2>적립포인트사용단위<br>사용가능한 포인트 단위입니다. 예를들어 useUnitPoint=10 인테 포인트를 105 로 사용은 불가합니다. |