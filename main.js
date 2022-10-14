import './style.css'

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
 
}

    
  </div>
`