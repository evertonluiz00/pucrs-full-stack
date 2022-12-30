class Carro {
    #_litrosNoTanque
    #_capacidadeDoTanque

    constructor (capacidadeDoTanque) {
        this.#_litrosNoTanque = 0;
        this.#_capacidadeDoTanque = capacidadeDoTanque;
    }

    get getLitrosNoTanque() {
        return this.#_litrosNoTanque;
    }

    get getCapacidadeDoTanque() {
        return this.#_capacidadeDoTanque;
    }

    set abastecer(litrosAbastecer) {
        if (litrosAbastecer > 0) {
            if(litrosAbastecer + this.#_litrosNoTanque > this.#_capacidadeDoTanque){
                this.#_litrosNoTanque = this.#_capacidadeDoTanque;
            } else {
                this.#_litrosNoTanque += litrosAbastecer;
            }
        }
    }
}

module.exports = Carro;