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

    add(element) {
        if(this.count == 0) {
            this.primeiro = this.ultimo = element;
        } else {
            this.ultimo.next = element;
            this.ultimo = element;
        }

        this.count++;
    }

    print() {
        let aux = this.primeiro;
        let lista = '';

        while(aux != null) {
            lista = lista == '' ? aux.element : lista + ',' + aux.element;
            //lista = lista == '' ? `| ${aux.element} | `  : lista + ',' + aux.element;
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