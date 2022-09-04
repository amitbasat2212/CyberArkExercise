
const source = $('#users-template').html();
const template = Handlebars.compile(source)





for(let i=0;i<6;i++){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          console.log(data.results)  
          const newHTML = template({results:data.results})
          $('#users').append(newHTML);
            
        }
      });
}
