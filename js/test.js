$.ajax({

    url : 'https://inventory-service-l7id2vv4oq-ue.a.run.app/data',
    type : 'POST',
    data : {
        'account_id' : window.user,
        'item_id' : '1',
        'item_description' : 'test'
    },
    "headers": {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
    },
    "crossDomain": true,
    dataType:'json',
    success : function(data) {              
        alert('Data: '+data);
    },
    error : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
});