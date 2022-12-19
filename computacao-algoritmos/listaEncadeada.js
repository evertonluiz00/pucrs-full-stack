console.log('Lista Encadeada');

class Nodo {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}

class ListaEncadeada {
    constructor() {
        this.count = 0;
        this.primeiro = null;
        this.ultimo = null;
    }


    push(element) {
        const nodo = new Nodo(element);

        if (this.primeiro == null) {
            this.primeiro = nodo;
            this.ultimo = nodo;
        } else {
            this.ultimo.next = nodo;
            this.ultimo = nodo;
        }

        this.count++;
    }


    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let nodo = this.primeiro
            for (let i = 0; i < index && nodo != null; i++) {
                nodo = nodo.next;
            }
            return nodo;
        }
        return undefined;
    }


    getPrintedNodo(nodo) {
        let nextElement = nodo.next != null ? nodo.next.element : ' ';
        return `[${nodo.element} | ${nextElement}]`;
    }


    printLista() {
        let printedList = '';
        let nodoI = this.primeiro;

        while(nodoI != null) {
            printedList = printedList == '' ? this.getPrintedNodo(nodoI) : `${printedList}  ->  ${this.getPrintedNodo(nodoI)}`;
            nodoI = nodoI.next;
        }

        console.log(printedList);
    }
}

let myList = new ListaEncadeada();

myList.push(1);
//myList.printLista();

myList.push(2);
//myList.printLista();

myList.push('Suco');
//myList.printLista();

myList.push(3);
//myList.printLista();

myList.push('Laranja');
myList.printLista();

//console.log(myList.getPrintedNodo(myList.getElementAt(1)));