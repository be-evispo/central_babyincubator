setInterval(function get_data() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://192.168.137.73/rest-api/data.json", true);

    xhr.send();
    ma = 5;
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            //chart();

            $.grep(this.responseText, function (n, i) {

            })

            //document.getElementById("data").innerHTML = this.responseText;
            var str = this.responseText;
            console.log("str: " + str);

            const obj = JSON.parse(str);

            const Sskin = [];
            const Schamber = [];
            const humadity = [];
            const noise = [];

            

            Sskin[1] = obj['1']['Sskin'];
            Schamber[1] = obj['1']['Schamber'];
            humadity[1] = obj['1']['humadity'];
            noise[1] = obj['1']['noise'];

            Sskin[2] = obj['2']['Sskin'];
            Schamber[2] = obj['2']['Schamber'];
            humadity[2] = obj['2']['humadity'];
            noise[2] = obj['2']['noise'];

            Sskin[3] = obj['3']['Sskin'];
            Schamber[3] = obj['3']['Schamber'];
            humadity[3] = obj['3']['humadity'];
            noise[3] = obj['3']['noise'];

            if (Sskin[1] !== null) {

                document.getElementById("cSskin").innerHTML = Sskin[1];
                document.getElementById("cSchamber").innerHTML = Schamber[1];
                document.getElementById("chumadity").innerHTML = humadity[1];
                document.getElementById("cnoise").innerHTML = noise[1];

            }

            if (Sskin[2] !== null) {

                document.getElementById("cSskin2").innerHTML = Sskin[2];
                document.getElementById("cSchamber2").innerHTML = Schamber[2];
                document.getElementById("chumadity2").innerHTML = humadity[2];
                document.getElementById("cnoise2").innerHTML = noise[2];

            }


            if (Sskin[3] !== null) {  
                document.getElementById("cSskin3").innerHTML = Sskin[3];
                document.getElementById("cSchamber3").innerHTML = Schamber[3];
                document.getElementById("chumadity3").innerHTML = humadity[3];
                document.getElementById("cnoise3").innerHTML = noise[3];

            }

        }
    }

}, 0.1);