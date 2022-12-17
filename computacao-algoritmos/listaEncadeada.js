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


    printNodo(nodo) {
        let nextElement = nodo.next != null ? nodo.next.element : ' ';
        return `[${nodo.element} | ${nextElement}]`;
    }


    printLista() {
        let printList = '';
        let nodoI = this.primeiro;

        while(nodoI != null) {
            printList = printList == '' ? this.printNodo(nodoI) : `${printList}  ->  ${this.printNodo(nodoI)}`;
            nodoI = nodoI.next;
        }

        console.log(printList);
    }
}

let myList = new ListaEncadeada();

//myList.add(new Nodo(1));
myList.push(1);
myList.printLista();

//myList.add(new Nodo(2));
myList.push(2);
myList.printLista();

//myList.add(new Nodo('Suco'));
myList.push('Suco');
myList.printLista();

//myList.add(new Nodo(3));
myList.push(3);
myList.printLista();

//myList.add(new Nodo('Laranja'));
myList.push('Laranja');
myList.printLista();