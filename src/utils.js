export const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

export const wathcResize = () => {
  window.addEventListener('resize', documentHeight);
};

export const timestampToDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.getDate();
};

export const timestampToDayAndMonth = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth();
  const arr = [];
  arr.push(day, month);
  return arr;
};

export const dateToDayAndMonth = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const arr = [];
  arr.push(day, month);
  return arr;
};

export const timestampToHoursAndMinutes = (input) => {
  const date = new Date(input);
  return `${date.getHours()} : ${date.getMinutes()}`;
};

export const dateToTimestampZeroHours = (input) => {
  const dateZeroHours = input.setHours(0, 0, 0, 0);
  return dateZeroHours;
};

export const minutesToTimestamp = (minutes, date) => {
  const currentDate = date.setHours(0, 0, 0, 0);
  const timestamp = currentDate + minutes * 60000;
  return timestamp;
};

export const getAllDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const dates = [];

  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
};

export const checkIfProgramari = (programari, date) => {
  const dateDayAndMonth = dateToDayAndMonth(date);
  for (let i = 0; i < programari.length; i++) {
    const calendarDayAndMonth = timestampToDayAndMonth(
      programari[i].timeSlotStart,
    );
    if (
      (dateDayAndMonth[0] === calendarDayAndMonth[0]) &
      (dateDayAndMonth[1] === calendarDayAndMonth[1])
    ) {
      return true;
    }
  }
};

export const checkIfCalendar = (calendar, date) => {
  const dateDayAndMonth = dateToDayAndMonth(date);
  for (let i = 0; i < calendar.length; i++) {
    const calendarDayAndMonth = timestampToDayAndMonth(
      calendar[i].timeSlotStart,
    );
    if (
      (dateDayAndMonth[0] === calendarDayAndMonth[0]) &
      (dateDayAndMonth[1] === calendarDayAndMonth[1])
    ) {
      return true;
    }
  }
};

export const checkIfPastDate = (sedinta) => {
  const currentDate = new Date().getTime();
  if (currentDate > sedinta.timeSlotStart) {
    return false;
  } else {
    return true;
  }
};

export const processData = (data, navlink) => {
  const dataP = [];
  if (data) {
    if (navlink === 'terapeuti') {
      data.forEach((el) => {
        const objTerapeuti = {
          id: el.id,
          nume: el.nume,
          prenume: el.prenume,
          telefon: el.telefon,
          specializare: el.specializare,
        };
        dataP.push(objTerapeuti);
      });
    } else if (navlink === 'comenzi') {
      data.forEach((el) => {
        const objComenzi = {
          id: el.id,
          data: el.data,
          numar: el.numar,
          nume: el.nume,
          prenume: el.prenume,
          telefon: el.telefon,
          serviciu: el.serviciu,
        };
        dataP.push(objComenzi);
      });
    } else {
      data.forEach((el) => {
        dataP.push(el);
      });
    }
  }
  return dataP;
};

export const scrollSlider = (input) => {
  const slider = document.querySelector(input);
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
};

export const scrollToTarget = (target) => {
  const element = document.querySelector(target);
  element.scrollIntoView({
    top: 100,
    behavior: 'smooth',
  });
};
