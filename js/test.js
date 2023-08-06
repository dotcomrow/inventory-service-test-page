var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
console.log(window.user);
$.ajax({

    url : 'https://inventory-service-l7id2vv4oq-ue.a.run.app/data',
    type : 'POST',
    data : {
        'account_id' : JSON.parse(window.user)['id'],
        'item_id' : '1',
        'item_description' : 'test'
    },
    "headers": {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*",
        "authorization": "Bearer " + params['access_token'],
    },
    crossDomain: true,
    dataType:'json',
    success : function(data) {              
        alert('Data: '+data);
    },
    error : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
});