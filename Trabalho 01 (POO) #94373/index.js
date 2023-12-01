class Parafuso {
    constructor(EspessuraParafuso, TamanhoParafuso, TipoRosca) {
        this.EspessuraParafuso = EspessuraParafuso;
        this.TamanhoParafuso = TamanhoParafuso;
        this.TipoRosca = TipoRosca;
    }

    mostrarObjeto() {
        alert(
            "Objeto: Parafuso" +
            "\nEspessura: " + this.EspessuraParafuso +
            "\nTamanho Do Parafuso: " + this.TamanhoParafuso +
            "\nTipo De Rosca: " + this.TipoRosca
        );
    }

    escrever() {
        alert("Que belo parafuso ! é inox ?");
    }

    Parafusar() {
        alert("Irei usar a bucha da mesma espessura do parafuso, será de  " + this.EspessuraParafuso + "...");
    }
}

let Parafuso1 = new Parafuso("1/4", "2 1/2.", "Polegada");
Parafuso1.mostrarObjeto();
Parafuso1.escrever();
Parafuso1.Parafusar();

class Porca {
    constructor(EspessuraRosca, TipoDeRosca, Trava) {
        this.EspessuraRosca = EspessuraRosca;
        this.TipoDeRosca = TipoDeRosca;
        this.Trava = Trava;
    }

    mostrarObjeto() {
        alert(
            "Objeto: Porca" +
            "\nEspessura da Rosca: " + this.EspessuraRosca +
            "\nTipo de Rosca " + this.TipoDeRosca +
            "\nCom que tipo de Porca " + this.Trava
        );
    }

    enroscar() {
        alert("Você fez enroscou uma porca em um parafuso.")
    }

    desenroscar() {
        alert("Você desenroscou uma porca de um parafuso.")
    }
}

let Porca1 = new Porca("8mm", "Milimetro", "Travante");
Porca1.mostrarObjeto();
Porca1.enroscar();
Porca1.desenroscar();
