/* 일반 오브젝트 변수 함수 */
// const car = {
//   name: 마세라티,
//   engine: "전기",
//   model: 2027,
// };

// 중고차 판매사이트

// 가격[price], 연도[year], 주행거리[mileage], 사고유무[hasAccident], 침수여부[hasFlooding]

/* class - 변수, 함수*/
class Car {
  price;
  year;
  mileage;
  hasAccident;
  hasFlooding;

  // consturctor 함수
  constructor(a, b, c) {
    this.price = a;
    this.year = b;
    this.mileage = c;
    this.hasAccident = false;
    this.hasFlooding = false;
  }
}

const a = new Car(20000, 2010, 10000);
console.log({ ...a });
const b = new Car(30000, 2000, 50000);
console.log({ ...b });

/* 동물병원 동물 기록 클래스 */

/*
    name;
    species;
    age;
    medical_records;

*/

class MedicalRecord {
  #visitDate;
  #examine;
  #vetName;
  constructor(a, b, c) {
    this.#visitDate = a;
    this.#examine = b;
    this.#vetName = c;
  }

  // [yyyy-mm-dd]
  // [yyyy,mm,dd]
  // String, Date, Regex(문자형식체크 타입)
  setVisitDate(visitDate) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a)) {
      throw new Error("해당 날짜는 유효하지않습니다.");
    }

    const date = new Date(a);
    const today = new Date();
    if (today < date) {
      throw new Error("금일보다 미래 예약은 안됩니다.");
    }
    this.#visitDate = visitDate;
  }
}

class Vet {
  #name;
  #species;
  #age;
  #medical_records;

  // 생성자
  constructor(a, b, c) {
    this.#name = a;
    this.setAge(b);
    this.#species = c;

    this.#medical_records = [];
  }

  setAge(age) {
    if (age < 0) {
      // console.log("나이는 음수가 될수 없습니다.");
      // return;
      throw new Error("어떻게 나이가 음수냐 ㅋㅋ");
    }
    this.age = age;

    setMedical(a,b,c){
        const medicalRecord = new MedicalRecord(a,b,c);
        this.#medical_records.push(medicalRecord);
  }
}
}

const choco = new Vet("초코", 8, "샴");
choco.setAge(15);

choco.setMedical("2026-09-15", "감기", "최선호");
choco.setMedical("2026-09-17", "비만", "최성호");