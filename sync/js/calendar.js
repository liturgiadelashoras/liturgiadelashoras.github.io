var today = new Date();

window.onload = function() {
  createCalendarMonth(today.getMonth());
};

function createCalendarMonth(month) {
  var title = document.getElementById("title");
  title.innerHTML = "Liturgia de las Horas - " + monthAsString(month) + " de " + today.getFullYear();

  clearCalendar();
  var currentCalendar = document.getElementById("calendar");

  var date_i = new Date();
  date_i.setDate(1);
  date_i.setMonth(month);
  date_i.setYear(date_i.getFullYear());

  createDaysEmpty(date_i.getDay());
  do {
    createCalendarDay(date_i.getDate(), date_i.getMonth());
    date_i.setDate(date_i.getDate() + 1);
  } while (date_i.getDate() != 1)
}

function clearCalendar() {
  var currentCalendar = document.getElementById("calendar");

  currentCalendar.innerHTML = "";

  for (i = 0; i < 7; i++) {
    var newDay = document.createElement("div");
    var dayElement = document.createElement("p");

    dayElement.innerHTML = dayOfWeekAsString(i);
    newDay.className = "calendar_day_header";
    newDay.appendChild(dayElement);

    currentCalendar.appendChild(newDay);
  }
}

function createDaysEmpty(days) {
  var currentCalendar = document.getElementById("calendar");

  for (i = 0; i < days; i++) {
    var newDay = document.createElement("div");
    var date = document.createElement("a");
    var dayElement = document.createElement("p");

    newDay.className = "calendar_day_empty";
    newDay.appendChild(date);
    newDay.appendChild(dayElement);
    currentCalendar.appendChild(newDay);
  }
}

function createCalendarDay(day, month) {
  var calendar = document.getElementById("calendar");
  var div = document.createElement("div");
  var p = document.createElement("p");
  var a = document.createElement("a");

  a.innerHTML = day;
  a.href = today.getFullYear() + "/" + monthAsLink(month) + "/" + dayAsLink(day);

  var currentDate = new Date();
  currentDate.setDate(day);
  currentDate.setMonth(month);
  if (currentDate.getDay() == 0) {
    a.className = "sunday";
  }

  if (day == today.getDate() && month == today.getMonth()) {
    div.className = "calendar_day calendar_day_special";
    a.className = "special";
  } else {
    div.className = "calendar_day";
  }
  p.appendChild(a);
  div.appendChild(p);
  calendar.appendChild(div);
}

function monthAsString(monthIndex) {
  return ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][monthIndex];
}

function monthAsLink(monthIndex) {
  return ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"][monthIndex];
}

function dayOfWeekAsString(dayIndex) {
  return ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"][dayIndex];
}

function dayAsLink(day) {
  if (day < 10)
    return "0" + day;
  else
    return "" + day;
}
