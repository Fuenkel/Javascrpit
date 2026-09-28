const haidozo = {
  name: "하이도조",
  location: "강남역",
  capacity: 30,
  isHoliday: false,
  menu: {
    main: "돈까스",
    sub: "우동",
    side: "김치",
  },
};

console.log(haidozo.location);
console.log(haidozo["location"]);
// 우동 출력
console.log(haidozo.menu.sub);
console.log(haidozo["menu"]["sub"]);
haidozo.vip = "최선호";
console.log(haidozo.vip);

delete haidozo["menu"]["sub"];
console.log(haidozo.menu.sub);
