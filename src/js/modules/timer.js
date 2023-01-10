const timer = (id, deadline) => {

    function getTimeRemaining(endtime) {
        let days, seconds, minutes, hours;

        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            seconds = 0; 
            minutes = 0;
            hours = 0;
        } else {
            days = Math.floor((t/(1000*60*60*24))),
            seconds = Math.floor( (t/1000) % 60),
            minutes = Math.floor( (t/1000/60) % 60),
            hours = Math.floor(t/(1000*60*60) % 24);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
            };
    }


    function setClock(selector, endtime) {

        const timer = document.getElementById(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function getZero(num) {
            if (num > 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);


};

export default timer;