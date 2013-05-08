$(document).ready(function(){
    $('<script src="components/roughdraft.js/jquery.roughdraft.0.1.3.js"></script>').appendTo('head');

    setTimeout(function(){
        $(window).roughDraft({
            'author' : 'baconipsum',
            'illustrator' : 'plachold',
            'classNameSequencer': true
        });
        $('.nav-light li').eq(3).addClass('active');
    },900);

    $('body').on('click', 'a:not(.allow-link)', function(event){
        event.preventDefault(); 
        alert("Vue statique, lien désactivé."); 
    });

    $('<div style="padding:5px 10px;background:#cc5200;color:#FFF;">Ceci est une  version statique de mon espace de travail utilisant <strong>Yeoman</strong>  pour illustrer le résultat du "styleguide" qui en découle. Pour voir la version mise en ligne de <a class="allow-link label label-info" title="Ce lien est activé, vous pouvez y visiter mon site web" href="https://renoirboulanger.com/">mon site web</a>.</div>').prependTo('body');
});