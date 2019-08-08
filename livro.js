window.onload = () => {
  let elementoBotao =
  document.querySelector('#cadastrar')

  // elementoBotao.addEventListener('click' , (event) => {
  //   event.preventDefault()
  //   console.log('Clicou no botão');
  //   let ladda = Ladda.create(elementoBotao)
  //   ladda.start()
  //   let progressoAtual = 0
  //   let interval =
  //   setInterval(() => {
  //     ladda.setProgress(progressoAtual += 0.1)
  //     if(progressoAtual >=1) {
  //       clearInterval(interval)
  //       ladda.stop()
  //     }
  //   }, 1000)
  // })
  // let formularioLivro = $('#formLivro')
  // $ formularioLivro.validate()
  // formLivro.validate()
  let formularioLivro = $('#formLivro')
  formularioLivro.validate({
    Rules: {
      titulo: {
        required: true,
        minlength: 3
    },
      subtitulo: {
          required:false,
          minlength: 5
    },
      messages: {
        titulo:  {
          required: 'O titulo é obrigatorio',
          minlength:'O titulo é muito curto'
      },
    },
      subtitulo:{
          required:'O subtítulo é obrigatorio',
          minlength:'O subtítuloé muito curto'
    },

       errorPlacement: function(error, element){
         element.parent().parent().find('.error').append(error).addClas('animated shake')
    },
      errorclass: 'cor-do-erro'

        }
    })
}
