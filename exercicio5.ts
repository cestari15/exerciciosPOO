class Evento {
    nome: string;
    data: string;
    horario: string;

    constructor(nome: string, data: string, horario: string) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}

class Agenda {
    private eventos: Evento[] = [];
  

    constructor() {

    }

    adicionarEvento(eventos: Evento) {
        this.eventos.push(eventos);
    }

    vizualizarEventos() {
        for (let i = 0; i < this.eventos.length; i++) {
            return this.eventos

        }

    }

    deletarEventos(evento: Evento) {
         
        this.eventos = this.eventos.filter((item) => item.nome != evento.nome);
        
        return "produto deletado"
         
    }

}

const evento1 = new Evento("Show", "15/02/2023", "20:00");

const evento2 = new Evento("Escola", "16/02/2023", "7:00");

const evento3 = new Evento("Casa do Claudio", "17/02/2023", "20:00");

const minhaAgenda = new Agenda();
minhaAgenda.adicionarEvento(evento1);
minhaAgenda.adicionarEvento(evento2);
minhaAgenda.adicionarEvento(evento3);
console.log(minhaAgenda.vizualizarEventos());

console.log(minhaAgenda.deletarEventos(evento1));
console.log(minhaAgenda.vizualizarEventos());