let mostrarVideo = (function () {

    function recibe(url, id) {
        let iframe = document.querySelector(`#${id}`);
        iframe.setAttribute('src',url);

    }

    return {
        entrega: (url,id) => {
            recibe(url,id);

        }
    }

})();


class Multimedia{
    constructor(url){
        this._url = url;
    }
    get url(){
        return this._url;
    }

    set url(nuevaUrl){
        this._url = nuevaUrl;
    }

    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video'
    }
}

class Reproductor extends Multimedia{
    constructor(url,id){
        super(url);
        this.id = id;
    }

  
    
    playMultimedia(){
        mostrarVideo.entrega(super.url,this.id);
    }

    setInicio(time){
        super.url = super.url + `?&amp;start=${time}`;    
        console.log(super.url);
    }
}

let repMus = new Reproductor('https://www.youtube.com/embed/Ti1Iae6AcaU?si=J7Z0-BLLEH5h6ma-','musica');
let repPel= new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY?si=5c-Ldl057Xy9vmUW','peliculas');
let repSer = new Reproductor('https://www.youtube.com/embed/lPX5yHiGRpI?si=AWAz5MeAANk33Z-H','series');

repMus.setInicio(60);
repPel.setInicio(120);
repSer.setInicio(35);

repMus.playMultimedia();
repPel.playMultimedia();
repSer.playMultimedia();
