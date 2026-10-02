const loading = document.querySelector(".fingerprint-spinner");
const image = document.querySelector(".usagi");
const image2 = document.querySelector(".usagiTear");

// 2초 뒤에 로딩이 사라지고 이미지가 나오게끔 하기
// hidden 을 생성시키고 이미지의 히든을 제거

const usagi = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      loading.hidden = true;
      image.hidden = false;
      success(true);
    }, 2000);
  });
};

const usagiOff = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      loading.hidden = false;
      image.hidden = true;
      success(true);
    }, 2000);
  });
};
const usagiTear = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      loading.hidden = true;
      image2.hidden = false;
      success(true);
    }, 2000);
  });
};
const usagiTearOff = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      loading.hidden = false;
      image2.hidden = true;
      success(true);
    }, 2000);
  });
};

const runUsagiChain = () => {
  usagi()
    .then(() => usagiOff())
    .then(() => usagiTear())
    .then(() => usagiTearOff())
    .then(() => {
      // 4단계가 전부 끝나면 다시 함수를 호출해 처음부터 반복!
      runUsagiChain();
    });
};
// 실행
runUsagiChain();
