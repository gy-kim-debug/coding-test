// work2.js
let orderAmt= 0;
let myPoint = 0;
let useMinPoint = 0;
let useMaxPoint = 0;
let useUnitPoint = 0;
let typeValue ='A' // 포인트 타입 선택 value default 'A'
let usePoint = 0;  // 입력된 사용 포인트 
let totalOrderAmt = 0;

let orderCostSpan = document.getElementById('order-cost-span');
let myPointSpan = document.getElementById('myPoint-span');
let myPointUseBtn = document.getElementById('myPoint-use-btn');
let myPointUseInput = document.getElementById('myPoint-use-input');
let usePointSpan = document.getElementById('use-point-span');
let totalOrderAmtSpan = document.getElementById('total-order-amt-span');
let typeCheckBtn = document.getElementById('type-check-btn');
let typeSelect = document.getElementById('type-select')

// 포인트 데이터 조회 api 
typeCheckBtn.addEventListener("click", () => {
    // 입력한 사용 포인트 , 총 결제 금액 초기화
    myPointUseInput.value = '';
    usePointSpan.innerHTML = '0';
    totalOrderAmtSpan.innerHTML ='0';
    // 비동기 통신
    let xhr2 = new XMLHttpRequest();
    
    // 파라미터
    let param = 'type='+typeValue;

    xhr2.open('POST','https://test-menu.payco.kr/test/api/work/point', true);
    xhr2.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr2.send(param);

    xhr2.onload = function() {
        if(xhr2.status === 200) {
            var resData = JSON.parse(xhr2.response)
            orderCostSpan.innerHTML = commaNumber(resData.result.orderAmt);
            myPointSpan.innerHTML = commaNumber(resData.result.myPoint);
            totalOrderAmtSpan.innerHTML = commaNumber(resData.result.orderAmt);
            orderAmt = resData.result.orderAmt;
            myPoint = resData.result.myPoint;
            useMinPoint = resData.result.useMinPoint;
            useMaxPoint = resData.result.useMaxPoint;
            useUnitPoint = resData.result.useUnitPoint;
        } else {
        
        }
    }
})

// 입력한 포인트 사용  
myPointUseBtn.addEventListener("click",() => {
    let usePoint = document.getElementById('myPoint-use-input').value

    if(orderAmt===0) {
        alert('타입을 조회해주세요.')
    }
    else if(checkPoint(usePoint)) {
        totalOrderAmt = orderAmt - usePoint;
        usePointSpan.innerHTML = commaNumber(usePoint);
        totalOrderAmtSpan.innerHTML = commaNumber(totalOrderAmt);
    } 
})

// 포인트 type select data 
typeSelect.addEventListener("change", (e) => {
    typeValue = e.target.value;
    
    // 명시된 포인트 금액 초기화
    orderAmt= 0;
    myPoint= 0;
    usePoint= 0;
    totalOrderAmt = 0;
    myPointUseInput.value='';
    myPointSpan.innerHTML='0';
    orderCostSpan.innerHTML='0';
    usePointSpan.innerHTML='0';
    totalOrderAmtSpan.innerHTML='0';
})

// 입력한 point 사용가능한지 판별 
const checkPoint = (usePoint) => {
    if(usePoint === '0') { //사용하는 포인트가 0원 일때
        return true;
    }
    if(usePoint=== ''){
        alert('사용할 포인트를 입력해주세요.')
        return false;
    }
    if(myPoint < usePoint) {
        alert('포인트 잔액보다 낮은 금액을 입력해주세요.')
        return false;
    }
    if(useMinPoint > usePoint){
        alert('최소 사용가능한 포인트는 '+ useMinPoint + 'p 입니다.')
        return false;
    }
    if(useMaxPoint < usePoint){
        alert('최대 사용가능한 포인트는' + useMaxPoint + 'p 입니다.')
        return false;
    } 
    if(usePoint % useUnitPoint !== 0) {
        alert(useUnitPoint+' 단위로 입력해주세요.')
        return false;
    } 
    return true;
}

// 숫자 3자리 콤마
const commaNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


