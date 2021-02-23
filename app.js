
// Jquery
$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.datepicker').datepicker();
  $('.scrollspy').scrollSpy();
});

// Weather api

require('dotenv').config();

const weather = document.querySelector('#weather');
const api_key = process.env.API_KEY;

const res = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=New York City&units=imperial&appid=${api_key}`)
  .then(res => createElements(res))
  .catch(err => console.log(err))

  const createElements = (res) => {
    const weatherIcon = res.data.weather[0].icon;
    const div = document.createElement('DIV');
    div.classList = 'row';
    const h2 = document.createElement('H2');
    h2.append(`${res.data.name}`);
    h2.classList = 'indigo-text heading h3';
    const img = document.createElement('IMG');
    img.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    const p = document.createElement('P');
    p.append(`${res.data.weather[0].description}`);
    div.append(h2, img, p);
    weather.append(div);
    const mainData = [`Temperature ${res.data.main.temp}&deg;F`, `Humidity ${res.data.main.humidity}`];
    mainData.forEach(function(el) {
      const div = document.createElement('DIV');
      let span = document.createElement('SPAN');
      span.innerHTML = el;
      div.appendChild(span);
      div.classList = 'col s12 m6';
      weather.appendChild(div);
    })
  }

  