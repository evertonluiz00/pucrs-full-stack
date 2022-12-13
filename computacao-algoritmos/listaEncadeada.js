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
        this.header = null;
        this.tail = null;
    }

    push(element) {
        const nodo = new Nodo(element);
        let current;

        if (this.header == null) {
            this.header = nodo;
        } else {
            current = this.header;

            while (current.next != null) {
                current = current.next;
            }

            current.next = nodo;
        }
        this.count++;
    }

    add(element) {
        if(this.count == 0) {
            this.header = this.tail = element;
        } else {
            this.tail.next = element;
            this.tail = element
        }

        this.count++;
    }

    print() {
        let aux = this.header;
        let lista = '';

        while(aux != null) {
            lista = lista == '' ? aux.element : lista + ',' + aux.element;
            aux = aux.next;
        }

        console.log(lista);
    }
}

let myList = new ListaEncadeada();

//myList.add(new Nodo(1));
myList.push(1);
myList.print();

//myList.add(new Nodo(2));
myList.push(2);
myList.print();

//myList.add(new Nodo('Suco'));
myList.push('Suco');
myList.print();

//myList.add(new Nodo(3));
myList.push(3);
myList.print();

//myList.add(new Nodo('Laranja'));
myList.push('Laranja');
myList.print();