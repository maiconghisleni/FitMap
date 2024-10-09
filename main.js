var onda1 = document.getElementById('onda1')
var onda2 = document.getElementById('onda2')
var onda3 = document.getElementById('onda3')
var onda4 = document.getElementById('onda4')
var txtname = document.getElementById('txtnm')
var txtarea = document.getElementById('txta')
var txtem = document.getElementById('txtem')

window.addEventListener('scroll', function(){
    var rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagemPos * 2 + 'px'
    onda2.style.backgroundPositionX = 300 + rolagemPos * -2 + 'px'
    onda3.style.backgroundPositionX = 200 + rolagemPos * 1 + 'px'
    onda4.style.backgroundPositionX = 100 + rolagemPos * -1 + 'px'
})

$(document).ready(
    function() {
        $('.masthead').visibility({
            once: false,
                onBottonPassed: function() {
                 $('.fixed.menu').transition('fade in');
            },
            onBottonPassedReverse: function() {
                 $('.fixed.menu').transition('fade out');
            }
         });

        $('.ui.sidebar').sidebar('attach events','.toc.item');
    }
);

$('document').ready(
    function() {
        $('.ui.form').form({
            fields: {
                firstname: {
                    identifier: 'firstname',
                    rules: [
                        {
                            type: 'empty',
                        }
                    ]
                },
                secondname: {
                    identifier: 'secondname',
                    rules: [
                        {
                            type: 'empty',
                        }
                    ]
                },
                telefone: {
                    identifier: 'telefone',
                    rules: [
                        {
                            type: 'empty',
                        },
                        {
                            type: 'length[8]',
                        }
                    ]
                },
                email: {
                    indentifier: 'email',
                    rules: [
                        {
                            type: 'empty',
                        },
                        {
                            type: 'email',
                        }
                    ]
                },
                mensagem: {
                    identifier: 'mensagem',
                    rules: [
                        {
                            type: 'empty',
                        }
                    ]
                }
            }
        })
    }
)