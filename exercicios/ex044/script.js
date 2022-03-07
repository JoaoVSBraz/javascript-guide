$('#link').click(function () {
  $.ajax({
    url: 'https://reqres.in/api/users?page=2',
    type: 'get',
    beforeSend: function () {
      $('#resultado').html('Carregando..')
    }
  })
    .done(function (msg) {
      var table = '<table border="1">'
      table += '<tr><th>Id</th><th>Email</th><th>Nome</th><th>Sobrenome</th><th>Avatar</th></tr>'
      $.map(msg.data, function (val, i) { table += '<tr>' + '<td>' + val.id + '</td>' + '<td>' + val.email + '</td>' + '<td>' + val.first_name + '</td>' + '<td>' + val.last_name + '</td>' + '<td>' + val.avatar + '</td>' + '</tr>'; })
      table += "</table>"
      $("#resultado").html("")
      $("#resultado").append(table)
    })
    .fail(function (jqXHR, textStatus, msg) {
      //Em caso de fracasso, mostra no console a mensagem de erro retornada
      console.log('A requisição falhou e retornou com a seguinte mensagem: ' + msg);
    });
})