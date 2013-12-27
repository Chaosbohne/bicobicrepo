Meteor.startup(function() {
  //flag that indicates if google analytics has loaded
  isGanalyticsLoaded = false;
  
  //a scriptloaderfunction
  //if the script jsE1 loaded the callback is executed
  myScriptLoader = function funcMyScriptLoader(jsEl, callback) {
    if (window.attachEvent) {
      // for IE (sometimes it doesn't send loaded event but only complete)
      jsEl.onreadystatechange = function funcOnReadyStateChange() {
        if (jsEl.readyState === 'complete') {
          jsEl.onreadystatechange = "";
        } else if (jsEl.readyState === 'loaded') {
          jsEl.onreadystatechange = "";
        }

        if (typeof callback === 'function') {
          callback();
        }
      };
    } else {
      // most browsers
      jsEl.onload = function funcOnLoad () {
        if (typeof callback === 'function') {
          callback();
        }
      };
    }
  };  
  
});