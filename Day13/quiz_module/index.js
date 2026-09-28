import { btn1, btn2, btn3, desc1, desc2, desc3 } from "./query.js";
import { activateTab } from "./tabUI.js";

const buttons = [btn1, btn2, btn3];
const panels = [desc1, desc2, desc3];

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    activateTab(index, buttons, panels);
  });
});
