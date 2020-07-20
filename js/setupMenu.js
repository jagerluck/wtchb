const settings_state = {
  btnRotated: false,
}

let opt_to_rotate = document.querySelectorAll('.change-watch-opt div');

opt_to_rotate.forEach((el) => {
  if (el.className !== 'watch-opt-rotate' || el.className !== 'watch-opt-rotate rotated') return ;
  el.addEventListener('click', (e) => {
    if (settings_state.btnRotated && e.target.textContent !== 'Cancel') return;
    if (el.className === 'watch-opt-rotate') {
      el.className += ' rotated';
      settings_state.btnRotated = true;
    } else {
      el.className = 'watch-opt-rotate';
      settings_state.btnRotated = false;
    } 
  })
});


// add animation to options container.

let btnOptions = document.querySelectorAll(['.stopwatch__back button', '.timer__back button']);
btnOptions.forEach((el) => el.addEventListener('click', (e) => {
  if(e.target.textContent !== 'Cancel') return e.stopPropagation();
}))