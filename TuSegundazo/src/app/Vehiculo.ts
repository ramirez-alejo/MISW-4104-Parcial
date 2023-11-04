export class Vehiculo {

    constructor(id:string, marca:string, linea:string, referencia:string, modelo:number, kilometraje:number, color:string, imagen:string) {
        this.id = parseInt(id);
        this.marca = marca;
        this.linea = linea;
        this.referencia = referencia;
        this.modelo = modelo;
        this.kilometraje = kilometraje;
        this.color = color;
        this.imagen = imagen;
    
    }
    id: number;
    marca: string;
    linea: string;
    referencia: string;
    modelo: number;
    kilometraje: number;
    color: string;
    imagen: string;
}
