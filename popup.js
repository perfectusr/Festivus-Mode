$('#myonoffswitch').on('click', function (e) {
    if (e.target.checked) {
        console.log('enable');
    } else {
        console.log('disable');
        
    }
    
    chrome.runtime.sendMessage({greeting: "Hey, You should enable Festivus Mode now!"}, function (response) {
        console.log(response.farewell);
    });
});
    
    
