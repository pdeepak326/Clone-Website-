
    highlight();
    function highlight() {
        var a = window.location.href.split('/')
        var id = a[a.length - 1].split('.')
        var name = '#' + id[0]
        console.log(name)
        $(name).addClass('active')
    }
    window.onload=function(){
        highlight();
    }