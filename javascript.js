
    highlight();
    function highlight() {
        var a = window.location.href.split('/')
        var id = a[a.length - 1].split('.')
        var name = '#' + id[0];
        var extension = id[1];
        if (extension == 'html') {
            $(name).addClass('active');
        } else {
            $('#index').addClass('active');
        }
    }
    window.onload=function(){
        highlight();
    }