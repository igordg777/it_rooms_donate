//     <h4>Душевая кабина</h4>
// <h5>Собрано <span id="isMoneyShowerRoom"></span> р. из <span id="nessesaryShowerRoomMoney"></span>р.</h5>
// <div class="progress">
//     <div class="progress-bar" role="progressbar"  style="width: 25%;" aria-valuenow="25"
//         aria-valuemin="0" aria-valuemax="100"></div>
// </div>
let allMoney = 38000
let nessesaryShowerRoomMoney = 35000;

if (allMoney > nessesaryShowerRoomMoney) {
    allMoney = allMoney - nessesaryShowerRoomMoney;
    document.getElementById("progressShowerRoom").setAttribute('style', 'width: 100%');
    document.getElementById("isMoneyShowerRoom").innerHTML = nessesaryShowerRoomMoney;
    document.getElementById("nessesaryShowerRoomMoney").innerHTML = nessesaryShowerRoomMoney;
    allMoney = allMoney - nessesaryShowerRoomMoney
} else if (nessesaryShowerRoomMoney > allMoney >= 0) {
    let progress = (allMoney * 100) / nessesaryShowerRoomMoney;
    console.log({ progress })
    document.getElementById("progressShowerRoom").setAttribute('style', `width: ${progress}%`);
    document.getElementById("isMoneyShowerRoom").innerHTML = allMoney;
    document.getElementById("nessesaryShowerRoomMoney").innerHTML = nessesaryShowerRoomMoney;
    allMoney = 0
}

let nessesaryDandy = 5000;

if (allMoney > nessesaryDandy) {
    allMoney = allMoney - nessesaryDandy;
    document.getElementById("progressShowerRoom").setAttribute('style', 'width: 100%');
    document.getElementById("isMoneyShowerRoom").innerHTML = nessesaryDandy;
    document.getElementById("nessesaryShowerRoomMoney").innerHTML = nessesaryDandy;
    allMoney = allMoney - nessesaryDandy
} else if (nessesaryDandy > allMoney >= 0) {
    let progress = (allMoney * 100) / nessesaryDandy;
    console.log({ progress })
    document.getElementById("progressShowerRoom").setAttribute('style', `width: ${progress}%`);
    document.getElementById("isMoneyShowerRoom").innerHTML = allMoney;
    document.getElementById("nessesaryDandy").innerHTML = nessesaryDandy;
    allMoney = 0
}
