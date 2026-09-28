const email_text = document.querySelector("#email");
const p_text_allot = document.querySelector("#textAllot");
const pw_text = document.querySelector("#password");
const p_pw_allot = document.querySelector("#pwAllot");
const check = document.querySelector("#check");
const p_check_allot = document.querySelector("#checkAllot");

const loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  const isEmailValid = email_text.value.includes("@");
  p_text_allot.innerHTML = isEmailValid ? "" : "골뱅이가 없어요";
  email_text.classList.toggle("allot", !isEmailValid); // 유효하지 않을 때(true)만 allot 추가

  const isPwValid = pw_text.value.length >= 8;
  p_pw_allot.innerHTML = isPwValid ? "" : "8자 이상 적어주세요";
  pw_text.classList.toggle("allot", !isPwValid);

  const isCheckValid = check.checked;
  p_check_allot.innerHTML = isCheckValid ? "" : "약관에 동의해 주세요";
});
