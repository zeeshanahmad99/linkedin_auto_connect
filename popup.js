document.getElementById('connectAll').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['content.js']
    }, function() {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: () => window.autoConnect()
      });
    });
  });
});