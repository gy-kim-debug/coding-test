// work1.js
let date= [];
let dateArr= []; // 날짜 선택 Array
let timeArr= []; // 시간 선택 Array
let checkDateBtn = document.getElementById('check-date-btn');
let selectDateSpan = document.getElementById('select-date-span');

// 날짜 선택 select
const mobileSelect1 = new MobileSelect({
    trigger: '#date-select-btn',
    wheels: [
        {
            data: [
            { id: "2", value: "나" },
            { id: "3", value: "다" },
            { id: "4", value: "라" },
            { id: "5", value: "마" },
            { id: "6", value: "바" },
            ],
        },
    ],
    ensureBtnText:'선택',
    cancelBtnText:'취소',
    callback: function(idx, data){
        setTimeArr(data)
    }
});

// 시간 선택 select
const mobileSelect2 = new MobileSelect({
    trigger: "#time-select-btn",
    wheels: [
        { 
            data: [
                { id: "2", value: "나", childs:[{id:'dd', value:'dd'}] },
                { id: "3", value: "다" },
                { id: "4", value: "라" },
                { id: "5", value: "마" },
                { id: "6", value: "바" },
            ],
        },
    ],
    ensureBtnText:'선택',
    cancelBtnText:'취소',
    callback: function(idx, data) {
        // console.log(data);
    }
});   

// 날짜 데이터 조회 api 
const getTime =  () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://test-menu.payco.kr/test/api/work/time', true);
    xhr.send();
    xhr.onload = function() {
            if(xhr.status === 200) {
                var resData = JSON.parse(xhr.response)
                date = resData.result;
                setDateArr(resData.result) 
            } else {
            }
        }
}

// 날짜 선택 arr Set
const setDateArr = (date) => {
    date.map(v=> {
        dateArr.push({
            id: v.id,
            value: v.value,
        }) //id, value
    })
    mobileSelect1.updateWheel(0, dateArr); // 날짜선택 select에 데이터 추가
}

// 시간 선택 arr Set 
const setTimeArr = (data) => {
    timeArr= [];
    // 
    document.getElementById('time-select-btn').innerHTML='시간 선택'
    selectDateSpan.innerHTML='';

    // 시간 선택 value 초기화
    mobileSelect2.curValue = null;

    // 날짜 id와 일치하는 시간 배열 
    let tmp = date.filter(v=> v.id === data[0].id) 

    // 오전 
    let childsAm = {
        id:'am',
        value:'오전',
        childs: tmp[0].childsAm,
    }
    // 오후
    let childsPm = {
        id:'pm',
        value:'오후',
        childs: tmp[0].childsPm,
    };

    timeArr.push(childsAm)
    timeArr.push(childsPm);

    mobileSelect2.updateWheels(timeArr); // 시간선택 select에 데이터 추가

}

// 날짜확인 버튼 클릭 이벤트
checkDateBtn.addEventListener("click", () => {
    let selectDate = '';
    let date = mobileSelect1.getValue();
    let time = mobileSelect2.getValue();

    if(date === null || time === null) { //오류 처리
        alert('날짜와 시간을 선택해주세요.')
    } else{
        selectDate+= date[0].id + ' ' + time[1].id + ' ' + time[2].id
        selectDateSpan.innerHTML = selectDate
    }
})

getTime(); 


