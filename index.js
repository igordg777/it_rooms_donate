let arrElementsMoney = document.querySelectorAll('.money');

let allMoney = 5000;

for (let i = 0; i < arrElementsMoney.length; i++) {
    allMoney += +arrElementsMoney[i].innerText;
}

localStorage.setItem('allMoney', allMoney);

document.getElementById("allMoney").innerHTML = allMoney;

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('#mediaMenu').classList.toggle('viewSearch');
});

let containerAims = document.getElementById('donatsAndAims');
let arrAims = [
    {
        nessesaryMoney: 6000,
        typeAim: 'Медиаплееры Sberbox c ассистентами Сбер, Афина, Джой',
    },
    {
        nessesaryMoney: 3000,
        typeAim: 'Глубокая сковорода, ножи',
    },
    {
        nessesaryMoney: 35000,
        typeAim: 'Душевая кабина',
    },
    {
        nessesaryMoney: 4000,
        typeAim: 'Комоды и тумбы',
    },
    {
        nessesaryMoney: 25000,
        typeAim: 'Большой монитор 34" в кабинет',
    },
    {
        nessesaryMoney: 12000,
        typeAim: 'Сушилка для белья с дезинфекцией Xaomi',
    },
]

arrAims.forEach(element => {
    let title = document.createElement('H4');
    title.innerHTML = element.typeAim;
    title.style.marginTop = '50px';
    containerAims.appendChild(title);
    let nessesaryMoney = element.nessesaryMoney;


    if (allMoney > nessesaryMoney) {
        allMoney = allMoney - nessesaryMoney;
        let fullProgress = document.createElement('H5');
        fullProgress.innerHTML = `Собрано <span>${nessesaryMoney}</span> р. из <span>${nessesaryMoney}</span>р.`;
        containerAims.appendChild(fullProgress);
        let progressBarContainer = document.createElement('DIV');
        progressBarContainer.classList.add('progress');
        let progressBar = document.createElement('DIV');
        progressBar.classList.add('progress-bar');
        progressBar.setAttribute('role', 'progressbar');
        progressBar.setAttribute('style', 'width: 100%;');
        progressBar.setAttribute('aria-valuenow', '25');
        progressBar.setAttribute('aria-valuemin', '0');
        progressBar.setAttribute('aria-valuemax', '100');
        progressBarContainer.appendChild(progressBar);
        containerAims.appendChild(progressBarContainer);
    } else if (nessesaryMoney > allMoney >= 0) {
        let progress = (allMoney * 100) / nessesaryMoney;
        console.log({ progress })
        let fullProgress = document.createElement('H5');
        fullProgress.innerHTML = `Собрано <span>${allMoney}</span> р. из <span>${nessesaryMoney}</span>р.`;
        containerAims.appendChild(fullProgress);
        let progressBarContainer = document.createElement('DIV');
        progressBarContainer.classList.add('progress');
        let progressBar = document.createElement('DIV');
        progressBar.classList.add('progress-bar');
        progressBar.setAttribute('role', 'progressbar');
        progressBar.setAttribute('style', `width: ${progress}%;`);
        progressBar.setAttribute('aria-valuenow', '25');
        progressBar.setAttribute('aria-valuemin', '0');
        progressBar.setAttribute('aria-valuemax', '100');
        progressBarContainer.appendChild(progressBar);
        containerAims.appendChild(progressBarContainer);
        allMoney = 0;
    }
});
