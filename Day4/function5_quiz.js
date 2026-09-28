/* e-mail 검사 */
/* 1. @가 포함해야함 -> @를 포함해야합니다. */
/* 2. .net .com .co.kr로 끝나야함 -> .net / .com / .co.kr */
/* 3. 이메일이 모두 소문자여야함 ->이메일은 소문자여야합니다. */
/* 4. 숫자 0~9 사이 하나 포함해야함 ->숫자를 반드시 포함해야합니다. */

const e_mail = window.prompt("이메일을 입력해주세요");

const isEmail = e_mail.includes("@");
const isEmail_dotCheck =
  e_mail.endsWith(".net") ||
  e_mail.endsWith(".com") ||
  e_mail.endsWith(".co.kr");

const isEmail_lowerCheck = e_mail != e_mail.toLowerCase();
if (!isEmail) {
  console.log("@를 포함해야합니다.");
}
if (!isEmail_dotCheck) {
  console.log(".net / .com / .co.kr 을 포함해야합니다.");
}
if (isEmail_lowerCheck) {
  console.log("이메일은 소문자여야합니다.");
}
if (
  !(
    e_mail.includes(0) ||
    e_mail.includes(1) ||
    e_mail.includes(2) ||
    e_mail.includes(3) ||
    e_mail.includes(4) ||
    e_mail.includes(5) ||
    e_mail.includes(6) ||
    e_mail.includes(7) ||
    e_mail.includes(8) ||
    e_mail.includes(9)
  )
) {
  console.log("숫자를 반드시 포함해야합니다.");
}
