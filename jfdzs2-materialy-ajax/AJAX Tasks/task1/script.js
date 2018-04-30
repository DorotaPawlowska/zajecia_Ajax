
$.ajax({
    url: 'https://randomuser.me/api/?gender=female',
    dataType: 'json',
    success: function(data) {
        var result = data.results[0];
    var userDataTemplate = ''
    +'<p>Name: '+ result.name.first +'</p>'
    +'<p>Cell phone: '+ result.cell +'</p>'
    +'<p>e-mail: '+ result.email +'</p>';

    document.querySelector('.user-data__info-container').innerHTML = userDataTemplate;
    document.querySelector('.user-data__image').src = result.picture.large;

    }
});
