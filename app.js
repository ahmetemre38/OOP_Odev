class Nokta {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class Ucgen {
    constructor(k1,k2,k3)
    {
        let _kose1 = new Nokta(k1.x,k1.y);
        let _kose2 = new Nokta(k2.x,k2.y);
        let _kose3 = new Nokta(k3.x,k3.y);
        this.k1 = _kose1;
        this.k2 = _kose2;
        this.k3 = _kose3;
    }

    uzunluk = (kose1,kose2) => {

        return Math.sqrt(((kose2.x-kose1.x)**2) + ((kose2.y-kose1.y)**2));
    }

    cevreHesap = () => {
        let cevre = this.uzunluk(this.k1,this.k2) + this.uzunluk(this.k2,this.k3) + this.uzunluk(this.k3,this.k1);
        return cevre;
    }

    alanHesap = () => {
        let k1 = this.k1;
        let k2 = this.k2;
        let k3 = this.k3;
        let alan = Math.abs(((k1.x*k2.y)+(k2.x*k3.y)+(k3.x*k1.y))-((k1.y*k2.x)+(k2.y*k3.x)+(k3.y*k1.x)))/2;
        return alan;
    }
    

}

let kose1 = new Nokta(1,1);
let kose2 = new Nokta(5,1);
let kose3 = new Nokta(5,4);

let ucgen = new Ucgen(kose1,kose2,kose3);
console.log(ucgen.cevreHesap());
console.log(ucgen.alanHesap());
