var button = document.getElementById('counter');
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                documet.write(counter.toString());
            }
        }
    };
    request.open('GET', 'http://bhargabchoudhury30.imad.hasura-app.io/counter', true);
    request.send(null);
};


var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = documnet.getElementById('submit_btn');
submit.onclick = function(){
    
};