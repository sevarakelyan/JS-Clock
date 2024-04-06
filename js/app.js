let data = new Date();
let hour = data.getHours();
let minute = data.getMinutes();
let second = data.getSeconds();

clock(second, minute, hour)
function clock(s, m, h) {
    for (let i = 0; i < 12; i++) {
        let p = document.createElement("p");
        p.append(s);
        document.getElementById("s").append(p)
    }
    for (let i = 0; i < 6; i++) {
        let p = document.createElement("p");
        p.append(m);
        document.getElementById("m").append(p)
    }
    for (let i = 0; i < 3; i++) {
        let p = document.createElement("p");
        p.append(h);
        document.getElementById("h").append(p)
    }
    let hourAngle = (360 / 12 * h + (360 / 12 / 60) * m) - 180;
    let minuteAngle = (360 / 60 * m + ((360 / 60) / 60) * s) - 180;
    let secondAngle = (360 / 60 * s) - 180;

    document.getElementById('h').style.transform = 'rotate(' + hourAngle + 'deg)';
    document.getElementById('m').style.transform = 'rotate(' + minuteAngle + 'deg)';
    document.getElementById('s').style.transform = 'rotate(' + secondAngle + 'deg) ';

    if (secondAngle > 0 && secondAngle < 180) {
        document.getElementById('s').style.transform = 'rotate(' + secondAngle + 'deg) rotate3d(1, 0, 0, 180deg) translateY(-250px)';
    } else {
        document.getElementById('s').style.transform = 'rotate(' + secondAngle + 'deg) rotate3d(0, 1, 0, 180deg) translateY(0px)';
    }
    if (minuteAngle > 0 && minuteAngle < 180) {
        document.getElementById('m').style.transform = 'rotate(' + minuteAngle + 'deg)  rotate3d(1, 0, 0, 180deg) translateY(-140px)';

    } else {
        document.getElementById('m').style.transform = 'rotate(' + minuteAngle + 'deg)  rotate3d(0, 1, 0, 180deg) translateY(0px)';
    }
    if (hourAngle > 0 && hourAngle < 180) {
        document.getElementById('h').style.transform = 'rotate(' + hourAngle + 'deg)  rotate3d(1, 0, 0, 180deg) translateY(-80px)';

    } else {
        document.getElementById('h').style.transform = 'rotate(' + hourAngle + 'deg)  rotate3d(0, 1, 0, 180deg) translateY(0px)';

    }
    setInterval(() => {
        document.getElementById("s").innerHTML = ""
        if (s < 60) {
            s++
        } else {
            s = 0;
            m++
        }
        if (m > 60) {
            h++
            m = m
        }
        if (h > 24) {
            h = 0;
        }
        for (let i = 0; i < 12; i++) {
            let p = document.createElement("p");
            p.append(s);
            document.getElementById("s").append(p)
        }
        let hourAngle = (360 / 12 * h + (360 / 12 / 60) * m) - 180;
        let minuteAngle = (360 / 60 * m + (360 / 60 / 60) * s) - 180;
        let secondAngle = (360 / 60 * s) - 180;
        if (secondAngle > 0 && secondAngle < 180) {
            document.getElementById('s').style.transform = 'rotate(' + secondAngle + 'deg) rotate3d(1, 0, 0, 180deg) translateY(-250px)';
        } else {
            document.getElementById('s').style.transform = 'rotate(' + secondAngle + 'deg) rotate3d(0, 1, 0, 180deg) translateY(0px)';
        }
        if (minuteAngle > 0 && minuteAngle < 180) {
            document.getElementById('m').style.transform = 'rotate(' + minuteAngle + 'deg)  rotate3d(1, 0, 0, 180deg) translateY(-140px)';
    
        } else {
            document.getElementById('m').style.transform = 'rotate(' + minuteAngle + 'deg)  rotate3d(0, 1, 0, 180deg) translateY(0px)';
        }
        if (hourAngle > 0 && hourAngle < 180) {
            document.getElementById('h').style.transform = 'rotate(' + hourAngle + 'deg)  rotate3d(1, 0, 0, 180deg) translateY(-80px)';
    
        } else {
            document.getElementById('h').style.transform = 'rotate(' + hourAngle + 'deg)  rotate3d(0, 1, 0, 180deg) translateY(0px)';
    
        }
    }, 1000)
}