// ------------------------------ Frame Factory to extend
class FrameFactory {
  parent_frame = document.querySelector('.app-frames')
  
  setup() {
    throw new Error("Method 'setup()' must be implemented.");
  }  

  // if it'd be required to add more frames at once - change the logic so parent_frame could contain more frames instead of one
  addFrame(frame) {
    if (this.parent_frame.hasChildNodes()) {
      this.parent_frame.removeChild(this.parent_frame.lastChild)
    }
    this.parent_frame.append(frame)
  }

}
// X ------------------------------ Frame Factory to extend


// ------------------------------ Time Frame
class Time_Frame extends FrameFactory {
  constructor(delimeter_prop) {
    super(parent)
    this.setup(delimeter_prop)
  }

  currentTime() {
    let date = new Date();
    // watch ticks with help of css transform degrees
    let hour = date.getHours() * 30;
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;
    let adjmin = sec / 60;
    let adjhour = min / 12;

    let clockAnim = `
    @keyframes movesechands {
      from {
        transform: rotate(${sec}deg);
      }
      to {
        transform: rotate(${sec + 360}deg);
      }
    }
    @keyframes moveminhands {
      from {
        transform: rotate(${min + adjmin}deg);
      }
      to {
        transform: rotate(${min + 360 + adjmin}deg);
      }
    }
    @keyframes movehourhands {
      from {
        transform: rotate(${hour + adjhour}deg);
      }
      to {
        transform: rotate(${hour + 360 + adjhour}deg);
      }
    }
  `
    document.getElementById("clock-animations").innerHTML = clockAnim;
  }

  create(angle, amount_of_delimeters, startX, startY, hypotenuse) {
    let clockFrame = document.createElement('div')
    clockFrame.className = 'clock-frame'
    clockFrame.innerHTML = `
    <div class="scale-container" id="timenow">
      <div class="scale-delimeters"></div>
      <div class="layout">
        <span class="clock-number-12">12</span>
        <span class="clock-number-3">3</span>
        <span class="clock-number-6">6</span>
        <span class="clock-number-9">9</span>
      </div>
      <div class="clock-movement">
        <div class="central-spring"></div>
        <div class="hour">
          <div class="hr" id="hr"></div>
        </div>
        <div class="minute">
          <div class="mn" id="mn"></div>
        </div>
        <div class="second">
          <div class="sc" id="sc"></div>
        </div>
      </div>
    </div>`

    this.addFrame(clockFrame)


    let clockScale = document.createElement('div')
    clockScale.className = 'scale-delimeters'
    
    let trVal = {
      hypse: hypotenuse,
      el_angle: 0,
      startY: startY,
      startX: startX,
      cathAngl() { return (180 - this.el_angle) / 2 },
      // needed for built-in Math.sin(cos) function
      toRad(angleA = this.el_angle / 2) { return angleA * Math.PI / 180 },
      // straight line between measure units in watch scale. Needed to provide, since it'd be a hypotenuse of sought-for lines(translateX and translateY values).
      tang() { return Math.sin(this.toRad()) * this.hypse * 2 },
      // final 'translate' values. Now we know hypotenuse of the triangle, so we could find cathets (needed values for translate func) X(0) -> X(1), as well as Y(0) -> Y(1).
      trX() { return this.startX + this.tang() * (Math.sin(this.toRad(this.cathAngl()))) },
      trY() { return this.startY + this.tang() * (Math.cos(this.toRad(this.cathAngl()))) },
    }
    
    for (let i = 0; i < amount_of_delimeters; i++) {
      let kid = document.createElement('span');
      const big_delim = amount_of_delimeters / 12;
      if (i % big_delim === 0) kid.className = 'big-scale'
      kid.style.transform = `translateY(${trVal.trY()}px)`
      kid.style.transform += `translateX(${trVal.trX()}px)`
      kid.style.transform += `rotate(${trVal.el_angle}deg)`
      clockScale.append(kid);
      trVal.el_angle += angle
    }

    clockFrame.append(clockScale)
  }

  setup(delimeter_prop) {
    if (settings_state.btnRotated) return alert('fuck off')
    this.create(delimeter_prop | 2, 180, 0, -165, 165)
    this.currentTime()
  }
}

// X ------------------------------ Time Frame

// ------------------------------ Calendar Frame

class Calendar_Frame extends FrameFactory {
  constructor() {
    super(parent)
    this.setup()
  }
  
  setUpCalendar() {
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
  
  create() {
    let calendarFrame = document.createElement('div')
    calendarFrame.className = 'calendar-frame'
    calendarFrame.innerHTML = `
      <div class="calendar__title-field">
        <h3>September</h3>
      </div>
      <div class="calendar__date-field">
        <ul class="weekdays">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>
        <ul class="days">

        </ul>
      </div>
      <div class="calendar__appointment-field"></div>`

      this.addFrame(calendarFrame)
      this.setUpCalendar()
    }

  setup() {
    this.create()
  }
}

// X ------------------------------ Calendar Frame


// ------------------------------ Stopwatch Frame

class Stopwatch_Frame extends FrameFactory {
  constructor() {
    super(parent)
    this.setup()
  }
  
  setup() {
    let stopwatchFrame = document.createElement('div')
    stopwatchFrame.className = 'clock-frame'
    stopwatchFrame.innerHTML = `
      <div class="scale-container" id="timenow">
      <div class="scale-delimeters"></div>
      <div class="layout">
        <span class="clock-number-12">12</span>
        <span class="clock-number-3">3</span>
        <span class="clock-number-6">6</span>
        <span class="clock-number-9">9</span>
      </div>
      <div class="clock-movement">
        <div class="central-spring"></div>
        <div class="hour">
          <div class="hr" id="hr"></div>
        </div>
        <div class="minute">
          <div class="mn" id="mn"></div>
        </div>
        <div class="second">
          <div class="sc" id="sc"></div>
        </div>
      </div>
    </div>`
  }
}

// X ------------------------------ Calendar Frame