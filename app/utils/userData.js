function saveUserData(passPhrase) {
  localStorage.setItem('passPhrase', passPhrase);
}

function loadUserData() {
  localStorage.getItem('passPhrase');
}

export {
  saveUserData,
  loadUserData,
};
