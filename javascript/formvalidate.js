function enableCreateUser() {
  if (document.getElementById("videocheck").checked) {
    document.getElementById("video-link").classList.remove('disable_section')
  } else {
    document.getElementById("video-link").classList.add('disable_section')
  }
}