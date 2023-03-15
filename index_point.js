//     <h4>Душевая кабина</h4>
// <h5>Собрано <span id="isMoneyShowerRoom"></span> р. из <span id="nessesaryShowerRoomMoney"></span>р.</h5>
// <div class="progress">
//     <div class="progress-bar" role="progressbar"  style="width: 25%;" aria-valuenow="25"
//         aria-valuemin="0" aria-valuemax="100"></div>
// </div>

let nessesaryShowerRoomMoney = 35000;

if (allMoney > nessesaryShowerRoomMoney) {
    allMoney = allMoney - nessesaryShowerRoomMoney;
    document.getElementById("progressShowerRoom").setAttribute('style', 'width: 100%');
    document.getElementById("isMoneyShowerRoom").innerHTML = nessesaryShowerRoomMoney;
    document.getElementById("nessesaryShowerRoomMoney").innerHTML = nessesaryShowerRoomMoney;

} else if (nessesaryShowerRoomMoney > allMoney > 0) {
    let progress = (allMoney * 100) / nessesaryShowerRoomMoney;
    console.log({ progress })
    document.getElementById("progressShowerRoom").setAttribute('style', `width: ${progress}%`);
    document.getElementById("isMoneyShowerRoom").innerHTML = allMoney;
    document.getElementById("nessesaryShowerRoomMoney").innerHTML = nessesaryShowerRoomMoney;
    allMoney = 0
}
