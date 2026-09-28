const timetableSection = document.createElement("section");
timetableSection.classList.add("timetable");

const timetableData = [
  { day: "월", startTime: "10:00", endTime: "22:00", dayIdx: 1 },
  { day: "화", startTime: "10:00", endTime: "22:00", dayIdx: 2 },
  { day: "수", startTime: "10:00", endTime: "22:00", dayIdx: 3 },
  { day: "목", startTime: "10:00", endTime: "22:00", dayIdx: 4 },
  { day: "금", startTime: "10:00", endTime: "23:00", dayIdx: 5 },
  { day: "토", startTime: "10:00", endTime: "23:00", dayIdx: 6 },
  { day: "일", startTime: "", endTime: "", dayIdx: 0 },
];

timetableData.forEach((x) => {
  const scheduleDiv = document.createElement("div");
  scheduleDiv.classList.add("schedule");

  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day");
  dayDiv.innerHTML = `${x.day}요일`;

  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time");
  timeDiv.innerHTML = !!x.startTime
    ? `${x.startTime} - ${x.endTime}`
    : "쉬는날";

  if (new Date().getDay() == x.dayIdx) {
    dayDiv.classList.add("today");
    timeDiv.classList.add("today");
  }
  scheduleDiv.append(dayDiv);
  scheduleDiv.append(timeDiv);
  timetableSection.append(scheduleDiv);
});

document.body.append(timetableSection);
