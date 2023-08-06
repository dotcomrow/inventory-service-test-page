var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
console.log(window.user);
if (window.user) {
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
            "Authorization": "Bearer " + params['access_token']
        },
        withCredentials: true,
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
}