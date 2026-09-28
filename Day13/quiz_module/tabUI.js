export const activateTab = (selectedIndex, buttons, panels) => {
  buttons.forEach((btn, index) =>
    btn.classList.toggle("buttonClick", index === selectedIndex),
  );

  panels.forEach((panel, index) =>
    panel.classList.toggle("panal", index !== selectedIndex),
  );
};
