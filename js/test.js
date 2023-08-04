$.ajax({

    url : 'https://inventory-service-l7id2vv4oq-ue.a.run.app/data',
    type : 'GET',
    // data : {
    //     'numberOfWords' : 10
    // },
    dataType:'json',
    success : function(data) {              
        alert('Data: '+data);
    },
    error : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
});