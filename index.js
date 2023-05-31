let hours = document.getElementById("hours");
        let min = document.getElementById("min");
        let sec = document.getElementById("sec");
        let h1 = document.getElementById("h1");
        let m1 = document.getElementById("m1");
        let s1 = document.getElementById("s1");


        function abc() {
            let date = new Date();


            let hh = date.getHours();
            let mm = date.getMinutes();
            let ss = date.getSeconds();





            let hRotation = 30 * hh + mm / 2;
            let mRotation = 6 * mm;
            let sRotation = 6 * ss;

            hours.style.transform = `rotate(${hRotation}deg)`;
            min.style.transform = `rotate(${mRotation}deg)`;
            sec.style.transform = `rotate(${sRotation}deg)`;


            let hh1 = date.getHours();
            let mm1 = date.getMinutes();
            let ss1 = date.getSeconds();


            if (hh1 > 12) {
                hh1 = hh1 - 12;
            }

            hh1 = (hh1 < 10) ? "0" + hh1 : hh1;
            mm1 = (mm1 < 10) ? "0" + mm1 : mm1;
            ss1 = (ss1 < 10) ? "0" + ss1 : ss1;

            h1.innerHTML = hh1;
            m1.innerHTML = mm1;
            s1.innerHTML = ss1;
        }

        setInterval(abc, 1000)
