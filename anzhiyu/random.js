var posts=["教程/电脑端入服教程/","文章/《初一三十一恒星系拓荒史》/","文章/《中学转》/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};