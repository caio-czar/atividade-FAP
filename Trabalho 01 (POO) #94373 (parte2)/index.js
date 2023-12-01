class Video {
    constructor(titulo, FrameImportante, canal) {
        this.titulo = titulo; 
        this.FrameImportante = FrameImportante;
        this.canal = canal;
    }

    mostrarObjeto() {
        alert(
            "Objeto: Vídeo" +
            "\nTítulo do Vídeo: " + this.titulo +
            "\nHighlight: " + this.FrameImportante +
            "\nCanal: " + this.canal
        );
    }

    reproduzir() {
        alert("Vídeo rolando.");
    }

    pausar() {
        alert("Vídeo pausado.")
    }
}

let video1 = new Video("PARE DE MORRER NO COMEÇO DE NASUS - COMO COUNTER UMA MATCHUP DIFICIL", "14:50", "MARLONJLP");
video1.mostrarObjeto();
video1.reproduzir();
video1.pausar();

class Musica {
    constructor(titulo, tempoReproducao, artista) {
        this.titulo = titulo;
        this.tempoReproducao = tempoReproducao;
        this.artista = artista;
    }

    mostrarObjeto() {
        alert(
            "Objeto: Música\n" +
            "\nTítulo da Música: " + this.titulo +
            "\nTempo de Reprodução: " + this.tempoReproducao +
            "\nCanal: " + this.artista
        );
    }

    tocar() {
        alert("Tocando " + "" + this.titulo + "" + " por " + this.artista);
    }

    aumentarVolume() {
        alert("ESTOURA O CAIXA AI DJ, ESSA MÚSICA ME QUEBRA!!");
    }
}

let musica1 = new Musica("Pablo - Quase me chamou de amor", "00:44", "Pablo Do Arrocha");
musica1.mostrarObjeto();
musica1.tocar();
musica1.aumentarVolume();