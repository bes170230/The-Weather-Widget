const getData = async () => {
    let city = document.querySelector('.search-bar').value;
    const apiKey = '45562a9452cd89f75d6cbae0e490cb21'
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
    return response.data
}

const showData = async () => {
    let location = await getData();
    let high = location.main.temp_max;
    document.querySelector('.high').innerText = "High: " + high + "°F"
    let low = location.main.temp_min;
    document.querySelector('.low').innerText = "Low: " + low + "°F"
    let feels_like = location.main.feels_like
    document.querySelector('.feels_like').innerText = "Feels Like: " + feels_like + "°F"
    let description = location.weather[0].description;
    document.querySelector('.description').innerText = description
    let icon = location.weather[0].icon;
    document.querySelector('.icon').src ="https://openweathermap.org/img/wn/" + icon + ".png"
    let humidity = location.main.humidity;
    document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%"
}

