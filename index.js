setInterval(() => {
    d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var offset = timezone.value;    
    var nd = new Date(utc + (3600000 * offset));
    
    htime = nd.getHours();
    mtime = nd.getMinutes();
    stime = nd.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
