let url = 'https://api.openweathermap.org/data/2.5/forecast?q=Ekaterinburg&lang=ru&appid=c96ab5824a40505233a616efde62d8ed';
let weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector('.today__row1__city').innerHTML = `${data.city.name}, ${data.city.country}`;
        document.querySelector('.today__row2__containerWather').innerHTML = `<img src='http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png'><p>${data.list[0].weather[0].description}</p>`;
        document.querySelector('.today__row2__temperature').innerHTML = `${parseInt(data.list[0].main.temp, 10) - 273} C`;
        document.querySelector(".today__row1__time").innerHTML = `${data.list[0].dt_txt}`;
        document.querySelector(".today__row2__data").innerHTML = `<p>Ветер: ${data.list[0].wind.speed} км/ч</p><p>Количество осадков: 0.0 мм</p><p>Давление: ${data.list[0].main.pressure} мб</p>`;

        let d = 1;
        for (let i = 0; i < data.list.length; i += 8) {
            document.getElementById(`${d}`).innerHTML = `<h3 class="week__card__day">${weekDays[new Date().getDay() + (d - 1)]}</h3><p class="week__card__date">${data.list[i].dt_txt.slice(0, 10)}</p><img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"><h3 class="week__card__temperature">${parseInt(data.list[i].main.temp, 10) - 273} C</h3>`;
            d++;
        }
    })
