// Strange Potato Owls 
// Daniel Eden wrote the original, I modified and added to it

//search stuff
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://strangepotatoowls.com/search?q=';




function submitted(event) {
  event.preventDefault();
  const url = google + q.value + "&category_general=1&language=en-US&time_range=&safesearch=2&theme=simple";
  const win = window.open(url, '_self');
  win.focus();
}


f.addEventListener('submit', submitted);



// Define global funcs
function updateStore(storeKey, data) {
  let obj = {}
  obj[storeKey] = JSON.stringify(data)
  chrome.storage.sync.set(obj)
}

function readStore(storeKey, cb) {
  chrome.storage.sync.get(storeKey, result => {
    let d = null

    if (result[storeKey]) d = JSON.parse(result[storeKey])

    // Make sure we got an object back, run callback
    if (typeof d === "object") cb(d)
  })
}

// Set up constants
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const key = "rhugtkeldibnridrlerlgcrrdvneevit"

// Set up the store for our data
// We want to track the notepad's contents and whether or not the human's current
// location is in darkness.
let defaultData = {
  notepadContent: "",
}

// >= v0.0.3 uses an object to store notepad content
// >= v1.1.2 uses chrome sync to store notepad content
// provide a fallback for older versions
readStore(key, d => {
  let data

  // Check if we got data from the chrome sync storage, if so, no fallback is needed
  if (d) {
    data = d
  } else {
    // Get the local storage
    local = localStorage.getItem(key)

    // Check if we got local storage data
    if (local) {
      // Try parsing the local storage data as JSON.
      // If it succeeds, we had an object in local storage
      try {
        data = JSON.parse(local)
        updateStore(key, local)
      } catch (e) {
        // If it fails to parse, we had the notepad content in local storage
        data = defaultData
        data.notepadContent = localStorage.getItem(key)
        updateStore(key, data)
      }

      // Delete the local storage
      localStorage.removeItem(key)
    }

    // If we couldn't get data from anywhere, set to default data
    if (!data) {
      data = defaultData
    }
  }

  start(data)
})

function listenerUpdate() {
  readStore(key, d => {
    document.querySelector(".notepad").innerHTML = d.notepadContent
  })
}

function start(data) {
  // Greet the human
  let now = new Date()
  let timeString = `${weekdays[now.getDay()]}, ${
    months[now.getMonth()]
  } ${now.getDate()}`
  let broadTime =
    now.getHours() < 12
      ? "morning"
      : now.getHours() > 17
      ? "evening"
      : "afternoon"

  let g = document.querySelector(".greeting")
  g.innerHTML = `Good ${broadTime}. It is ${timeString}.`

  // Set up the notepad
  let notepad = document.querySelector(".notepad")
  notepad.innerHTML = data["notepadContent"]

  notepad.addEventListener("input", e => {
    if (notepad !== document.activeElement || !windowIsActive) return

    let obj = Object.assign(data, {
      notepadContent: notepad.value,
    })

    updateStore(key, obj)
  })

  // Allow updating content between tabs
  let windowIsActive

  let storeListener = setInterval(listenerUpdate, 1000)

  window.onfocus = function() {
    windowIsActive = true
  }

  window.onblur = function() {
    windowIsActive = false
    if (storeListener) {
      clearInterval(storeListener)
    }
    storeListener = setInterval(listenerUpdate, 1000)
  }

  notepad.addEventListener("blur", e => {
    if (storeListener) {
      clearInterval(storeListener)
    }
    storeListener = setInterval(listenerUpdate, 1000)
  })

  notepad.addEventListener("focus", e => {
    if (storeListener) {
      clearInterval(storeListener)
    }
  })

  window.addEventListener("mousewheel", scrollCapture)

  function scrollCapture(e) {
    if (e.target !== notepad) notepad.scrollTop += e.deltaY
  }
}




// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});





chrome.storage.sync.get({
  favoriteColor: 'red',
  likesColor: true,
  name1: 'Shortcut',
  imgurl1: 'https://lh3.googleusercontent.com/pw/AL9nZEXaWPsOsb9ra6bEwyswFwoP198lwA9NGAw7PwplGSU2VMOyLiPhbSFxRRvjrXrwsQBfoDz0L7PZ8rmvRJP3liZdL1kCmdyE9f2BP5PaX1A1TjcIxqG7zoyqt6a5Qb8S4rFMtTrUDcqN5DVTMTLccpMf=s757-no?authuser=0',
  url1: 'https://strangepotatoowls.com/',
  name2: 'Shortcut',
  imgurl2: 'https://lh3.googleusercontent.com/pw/AL9nZEXaWPsOsb9ra6bEwyswFwoP198lwA9NGAw7PwplGSU2VMOyLiPhbSFxRRvjrXrwsQBfoDz0L7PZ8rmvRJP3liZdL1kCmdyE9f2BP5PaX1A1TjcIxqG7zoyqt6a5Qb8S4rFMtTrUDcqN5DVTMTLccpMf=s757-no?authuser=0',
  url2: 'https://strangepotatoowls.com/',
  name3: 'Shortcut',
  imgurl3: 'https://lh3.googleusercontent.com/pw/AL9nZEXaWPsOsb9ra6bEwyswFwoP198lwA9NGAw7PwplGSU2VMOyLiPhbSFxRRvjrXrwsQBfoDz0L7PZ8rmvRJP3liZdL1kCmdyE9f2BP5PaX1A1TjcIxqG7zoyqt6a5Qb8S4rFMtTrUDcqN5DVTMTLccpMf=s757-no?authuser=0',
  url3: 'https://strangepotatoowls.com/',
  name4: 'Shortcut',
  imgurl4: 'https://lh3.googleusercontent.com/pw/AL9nZEXaWPsOsb9ra6bEwyswFwoP198lwA9NGAw7PwplGSU2VMOyLiPhbSFxRRvjrXrwsQBfoDz0L7PZ8rmvRJP3liZdL1kCmdyE9f2BP5PaX1A1TjcIxqG7zoyqt6a5Qb8S4rFMtTrUDcqN5DVTMTLccpMf=s757-no?authuser=0',
  url4: 'https://strangepotatoowls.com/',
  name5: 'Shortcut',
  imgurl5: 'https://lh3.googleusercontent.com/pw/AL9nZEXaWPsOsb9ra6bEwyswFwoP198lwA9NGAw7PwplGSU2VMOyLiPhbSFxRRvjrXrwsQBfoDz0L7PZ8rmvRJP3liZdL1kCmdyE9f2BP5PaX1A1TjcIxqG7zoyqt6a5Qb8S4rFMtTrUDcqN5DVTMTLccpMf=s757-no?authuser=0',
  url5: 'https://strangepotatoowls.com/',
  name6: 'Shortcut',
  imgurl6: 'https://lh3.googleusercontent.com/pw/AL9nZEXaWPsOsb9ra6bEwyswFwoP198lwA9NGAw7PwplGSU2VMOyLiPhbSFxRRvjrXrwsQBfoDz0L7PZ8rmvRJP3liZdL1kCmdyE9f2BP5PaX1A1TjcIxqG7zoyqt6a5Qb8S4rFMtTrUDcqN5DVTMTLccpMf=s757-no?authuser=0',
  url6: 'https://strangepotatoowls.com/'
}, function(items) {
  document.getElementById('name1').textContent = items.name1;
  document.getElementById('imgurl1').src = items.imgurl1;
  document.getElementById('url1').href = items.url1;
  document.getElementById('name2').textContent = items.name2;
  document.getElementById('imgurl2').src = items.imgurl2;
  document.getElementById('url2').href = items.url2;
  document.getElementById('name3').textContent = items.name3;
  document.getElementById('imgurl3').src = items.imgurl3;
  document.getElementById('url3').href = items.url3;
  document.getElementById('name4').textContent = items.name4;
  document.getElementById('imgurl4').src = items.imgurl4;
  document.getElementById('url4').href = items.url4;
  document.getElementById('name5').textContent = items.name5;
  document.getElementById('imgurl5').src = items.imgurl5;
  document.getElementById('url5').href = items.url5;
  document.getElementById('name6').textContent = items.name6;
  document.getElementById('imgurl6').src = items.imgurl6;
  document.getElementById('url6').href = items.url6;
});
