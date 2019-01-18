var environmentData;

function sendTheInfo(){
            
  //set the content in the iframe
  var dataToCopy = 'Browser: ' + environmentData.browser +
                 '\nFound in URL: ' + environmentData.webURL +
                 '\nOS: ' + environmentData.os +
                 '\n\n Visited Urls: \n' + environmentData.urls ;

  var steps = 'Steps to Reproduce:\n' +
              '1) ... \n\n' +
              'Actual Behavior\n\n' + 
              'Expected Behavior\n\n' ;

  console.log('set the title');
  $('#summary').val('Bom Tool | ');
  
  console.log('set the summary');
  $('#description').val(steps);

  console.log('set the environment');
  $('#environment').val(dataToCopy);
    
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
           
      environmentData = request;
      
      setTimeout(sendTheInfo(),2500);
      sendResponse({farewell: "goodbye"});
  });