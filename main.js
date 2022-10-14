// TODO: only in modules
// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <div>

//   </div>
// `

// HTML elements
const mainWrapper = document.getElementById("main-wrapper"),
  main = document.getElementById("main");

// Hide sidebar on scroll down
mainWrapper.onscroll = e => {
  if (main.dataset.nav !== "inactive") {
    main.dataset.nav = "inactive";
  }
}

// Attach fn globally
window.toggleNav = () => {
  const active = mainWrapper.scrollTop === 0 ? "active" : "fixed";

  main.dataset.nav = main.dataset.nav === active ? "inactive" : active;
}

