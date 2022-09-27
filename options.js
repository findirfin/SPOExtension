// Saves options to chrome.storage
function save_options() {
    var name1 = document.getElementById('name1').value;
    var imgurl1 = document.getElementById('imgurl1').value;
    var url1 = document.getElementById('url1').value;
    var name2 = document.getElementById('name2').value;
    var imgurl2 = document.getElementById('imgurl2').value;
    var url2 = document.getElementById('url2').value;
    var name3 = document.getElementById('name3').value;
    var imgurl3 = document.getElementById('imgurl3').value;
    var url3 = document.getElementById('url3').value;
    var name4 = document.getElementById('name4').value;
    var imgurl4 = document.getElementById('imgurl4').value;
    var url4 = document.getElementById('url4').value;
    var name5 = document.getElementById('name5').value;
    var imgurl5 = document.getElementById('imgurl5').value;
    var url5 = document.getElementById('url5').value;
    var name6 = document.getElementById('name6').value;
    var imgurl6 = document.getElementById('imgurl6').value;
    var url6 = document.getElementById('url6').value;
    chrome.storage.sync.set({
      name1: name1,
      imgurl1: imgurl1,
      url1: url1,
      name2: name2,
      imgurl2: imgurl2,
      url2: url2,
      name3: name3,
      imgurl3: imgurl3,
      url3: url3,
      name4: name4,
      imgurl4: imgurl4,
      url4: url4,
      name5: name5,
      imgurl5: imgurl5,
      url5: url5,
      name6: name6,
      imgurl6: imgurl6,
      url6: url6
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      name1: 'Shortcut',
      imgurl1: 'https://lh3.googleusercontent.com/pw/AL9nZEVsUEYzwx1HATFp-oSe3D6943MIDFVg_T_x6aGR2n2E6I-b7vvB8GkqXQeIrmwMr2M-AZCqhMgt680Wc-wzIvaEkbZ9yX_3NfEsgbMWE1FGBC9OU1wkS5k592m0NwT86THE1AMH1Uw7QkuQDPBYBDYV=s604-no?authuser=0',
      url1: 'https://strangepotatoowls.com/',
      name2: 'Shortcut',
      imgurl2: 'https://lh3.googleusercontent.com/pw/AL9nZEVsUEYzwx1HATFp-oSe3D6943MIDFVg_T_x6aGR2n2E6I-b7vvB8GkqXQeIrmwMr2M-AZCqhMgt680Wc-wzIvaEkbZ9yX_3NfEsgbMWE1FGBC9OU1wkS5k592m0NwT86THE1AMH1Uw7QkuQDPBYBDYV=s604-no?authuser=0',
      url2: 'https://strangepotatoowls.com/',
      name3: 'Shortcut',
      imgurl3: 'https://lh3.googleusercontent.com/pw/AL9nZEVsUEYzwx1HATFp-oSe3D6943MIDFVg_T_x6aGR2n2E6I-b7vvB8GkqXQeIrmwMr2M-AZCqhMgt680Wc-wzIvaEkbZ9yX_3NfEsgbMWE1FGBC9OU1wkS5k592m0NwT86THE1AMH1Uw7QkuQDPBYBDYV=s604-no?authuser=0',
      url3: 'https://strangepotatoowls.com/',
      name4: 'Shortcut',
      imgurl4: 'https://lh3.googleusercontent.com/pw/AL9nZEVsUEYzwx1HATFp-oSe3D6943MIDFVg_T_x6aGR2n2E6I-b7vvB8GkqXQeIrmwMr2M-AZCqhMgt680Wc-wzIvaEkbZ9yX_3NfEsgbMWE1FGBC9OU1wkS5k592m0NwT86THE1AMH1Uw7QkuQDPBYBDYV=s604-no?authuser=0',
      url4: 'https://strangepotatoowls.com/',
      name5: 'Shortcut',
      imgurl5: 'https://lh3.googleusercontent.com/pw/AL9nZEVsUEYzwx1HATFp-oSe3D6943MIDFVg_T_x6aGR2n2E6I-b7vvB8GkqXQeIrmwMr2M-AZCqhMgt680Wc-wzIvaEkbZ9yX_3NfEsgbMWE1FGBC9OU1wkS5k592m0NwT86THE1AMH1Uw7QkuQDPBYBDYV=s604-no?authuser=0',
      url5: 'https://strangepotatoowls.com/',
      name6: 'Shortcut',
      imgurl6: 'https://lh3.googleusercontent.com/pw/AL9nZEVsUEYzwx1HATFp-oSe3D6943MIDFVg_T_x6aGR2n2E6I-b7vvB8GkqXQeIrmwMr2M-AZCqhMgt680Wc-wzIvaEkbZ9yX_3NfEsgbMWE1FGBC9OU1wkS5k592m0NwT86THE1AMH1Uw7QkuQDPBYBDYV=s604-no?authuser=0',
      url6: 'https://strangepotatoowls.com/'
    }, function(items) {
      document.getElementById('name1').value = items.name1;
      document.getElementById('imgurl1').value = items.imgurl1;
      document.getElementById('url1').value = items.url1;
      document.getElementById('name2').value = items.name2;
      document.getElementById('imgurl2').value = items.imgurl2;
      document.getElementById('url2').value = items.url2;
      document.getElementById('name3').value = items.name3;
      document.getElementById('imgurl3').value = items.imgurl3;
      document.getElementById('url3').value = items.url3;
      document.getElementById('name4').value = items.name4;
      document.getElementById('imgurl4').value = items.imgurl4;
      document.getElementById('url4').value = items.url4;
      document.getElementById('name5').value = items.name5;
      document.getElementById('imgurl5').value = items.imgurl5;
      document.getElementById('url5').value = items.url5;
      document.getElementById('name6').value = items.name6;
      document.getElementById('imgurl6').value = items.imgurl6;
      document.getElementById('url6').value = items.url6;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);