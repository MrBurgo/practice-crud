$(document).ready(() => {
  $('#btn-go').click((event) => {
    $.ajax({
      url: '/minidiscs',
      type: 'GET',
      success: (data) => {
        console.log(data)
        // UPDATE DOM!
        $('.appender').append(data[0].id)
      },
      error: (jqXhr, textStatus, errorThrown) => {
        console.log('OOPS:', errorThrown)
      }
    })
  })
})
