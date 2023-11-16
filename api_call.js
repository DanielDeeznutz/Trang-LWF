function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://script.google.com/macros/s/AKfycbwvG6ldXAIBLLLQl74cdeqAr4q0sUeECjU-Ih6oti5x6S00tv0DSYoQmDravDKQAOYi8w/exec?action=getUsers', true);
    xhr.onload = function() {
        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);
            var output = '<ul>';
            for(var i in posts) {
                output += '<li>' + posts[i].temp + '</li>';
            }
            output += '</ul>';
            document.getElementById('update').innerHTML = xhr;
        }
    }
    xhr.send();
}

fetchData();