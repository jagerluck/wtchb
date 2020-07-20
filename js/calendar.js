let clockFrame = document.querySelector('.clock-frame')
let calendarFrame = document.querySelector('.calendar-frame')

let openCalendar = () => {
  clockFrame.classList += ' hide'
  calendarFrame.classList += ' show'
}

let openTimeNow = () => {
  clockFrame.classList = 'clock-frame'
  calendarFrame.classList = 'calendar-frame'
}

function setUpCalendar() {
  let date = new Date();
  let month = date.getMonth();
  let year = date.getFullYear();
  let getMaxDays = (year, month) => new Date(year, month, 0).getDate();
  let maxDays = getMaxDays(year, month);

  let calendarDaysField = document.querySelector('.calendar__date-field .days');
  for (let i = 1; i <= maxDays; i++) {
    let txt = document.createTextNode(i)
    let li = document.createElement('li', { innerHTML: i })
    li.appendChild(txt);
    calendarDaysField.appendChild(li);
  }
}
setUpCalendar();