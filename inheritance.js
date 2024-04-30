class vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;

    }
    move(){
        console.log('gari chole na chole na chole na re');
    }
}

class bus extends vehicle{
    constructor(name, price, seat, ticketePrice){
        super(name, price);
        this.seat = seat;
        this.ticketePrice = ticketePrice;
    }

}

class truck extends vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}

const truckma = new vehicle('bangle rod', 1000, 100, 50);
console.log(truckma);