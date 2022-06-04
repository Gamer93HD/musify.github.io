//Variables
psbs = false;

var str = document.location.href; 
var url = new URL(str);
var pid = url.searchParams.get("pid");
var pol = url.searchParams.get("pol");





var requestURL = 'https://raw.githubusercontent.com/Gamer93HD/MusicHtmlApp/Musics/musics.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();



rm()
async function rm() {
    document.getElementById('lm').style.cursor = 'wait'
    await sleep(500)
    
    var items = request.response.RANDOM
    var i1 = items[Math.floor(Math.random()*items.length)];
    var i2 = items[Math.floor(Math.random()*items.length)];
    var i3 = items[Math.floor(Math.random()*items.length)];
    var i4 = items[Math.floor(Math.random()*items.length)];
    otherm(i1)
    otherm(i2)
    otherm(i3)
    otherm(i4)
}






async function otherm(m1) {
    var url = location.href

    var urlp = url.split('?')

    await sleep(500)

    var a = document.createElement("a");
    a.textContent = request.response[m1]
    a.style.backgroundColor = "rgb(43, 43, 43)"
    a.style.borderRadius = "25px"
    a.style.color = "white"
    a.style.padding = "5px 10px"
    a.style.cursor = "pointer"
    a.id = 'music'
    a.onclick = function() {
        window.location.href = urlp[0] + "?pid=M_" + m1
      }
    document.getElementById('rdm_s').appendChild(a);

    var br = document.createElement("br")
    document.getElementById('rdm_s').appendChild(br)
    var br2 = document.createElement("br")
    document.getElementById('rdm_s').appendChild(br2)
    document.getElementById('lm').style.cursor = 'pointer'
}




var audio;

var pids = pid.split('_')

    if (pids[0] == "A") {
        //Artits
        console.log('Artist')


    }else if (pids[0] == "M") {

            try {
                    audio = new Audio('https://raw.githubusercontent.com/Gamer93HD/MusicHtmlApp/Musics/' + pids[1] + '.mp3');
            }catch(error){
                console.error(error)
                  
        };
        
    }else if (pids[0] == "P") {
        //PlayList
    };


    function sleep(time) {
        return new Promise(resolve => setTimeout(resolve, time));
     }
var cT
     async function currentT(){
        while (true) {
            cT = audio.currentTime
            await sleep(500)
        }
     }

async function psb() {//Button Play/Stop



    
    if (psbs == false) {
    psbs = true;
        audio.play();
        var dur = audio.duration
        document.getElementById('titl').textContent = "You listen: " + request.response[pids[1]];

        document.getElementById('titl').src
        document.getElementById('img').src = "https://github.com/Gamer93HD/MusicHtmlApp/raw/Fonts/outline_pause_circle_white_24dp.png";
        document.getElementById('b').max = dur
        document.getElementById('mt').textContent = "You listen: " + request.response[pids[1]];


        
      
       for (dur < cT;;) {
            
                document.getElementById('b').value = audio.currentTime
                audio.volume = document.getElementById('vol').value / 100
                await sleep(50)
             
        }


    }else{
    psbs = false
        audio.pause();
        document.getElementById('titl').textContent = "Songer | BETA"
        document.getElementById('img').src = "https://github.com/Gamer93HD/MusicHtmlApp/raw/Fonts/outline_play_circle_white_24dp.png";
        document.getElementById('mt').textContent = "Paused"
};
};

function fw(){
    audio.currentTime += 5;

};
function bw(){
    audio.currentTime -= 5;
};

search("0154101")
function search(music) {
    const list = request.response

    return console.log(request.response.indexOf('NCS'));
}