class Musica{
    titulo:string;
    artista:string;
    duracao:number;

     constructor(titulo:string, artista:string, duracao:number){
        this.titulo=titulo;
        this.artista=artista;
        this.duracao=duracao;
    }
}


class Playlist{
   private musicas: Musica[] = [];
   private reproduzindo: boolean = false;
   private indceAtual: number = 0;

    constructor(){

    }

    adicionarMusica(musica:Musica){
        this.musicas.push(musica);
    }

    reproduzir(){
        if(this.musicas.length > 0){
            this.reproduzindo = true;
            return "Reproduzindo:" +this.musicas[this.indceAtual].titulo + '-'
            + this.musicas[this.indceAtual].artista;
        } else {
            return "A playlist está vazia";
        }
    }

    pausar(){
        if(this.reproduzindo == true){
            this.reproduzindo = false;
            return "Música pausada";
        } else{
            return "nenhuma música esta sendo reproduzida";
        }
    }

    proxima(){
        if(this.musicas.length > 0){
            this.indceAtual = (this.indceAtual + 1) % this.musicas.length;
            return this.reproduzir();
        } else {
            return "A Playlist está vazia";
        }
    }
    
}

const musica1=new Musica("Vai namorar Comigo sim", "henrique e Juliano", 300);

const musica2=new Musica("Vermelho neon", "Kontra", 400);

const musica3=new Musica("Halls na lingua", "Cadu martins", 500);

const minhaplaylist = new Playlist();
minhaplaylist.adicionarMusica(musica1);
minhaplaylist.adicionarMusica(musica2);
minhaplaylist.adicionarMusica(musica3);
console.log(minhaplaylist.reproduzir());
console.log(minhaplaylist.pausar());
console.log(minhaplaylist.proxima());
console.log(minhaplaylist.proxima());
console.log(minhaplaylist.proxima());
