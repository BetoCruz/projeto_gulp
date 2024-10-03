$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000',
        { placeholder: '(DDD) 90000-0000'}
    )
    

    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required: true
            },
            mensagem:{
                required: true
            }
        },
        submitHandler: function (form) {
        alert('Sua mensagem foi enviada');
        form.reset();
        },
        invalidHandler: function (form, validator) {
            const camposVazios = validator.numberOfInvalids();
            if(camposVazios){
                alert(`Existem ${camposVazios} compos não preencidos`);
                alert(`Por favor , preencha os campos de maneira correta`);
            }
        }    
    })
})