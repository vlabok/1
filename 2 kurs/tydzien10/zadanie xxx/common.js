function fun(){
            return Math.floor(Math.random() * 100);
        }
        let lista = [fun(), fun(), fun(), fun(), fun(), fun(), fun(), fun(), fun(), fun()];
        console.log(lista);
        console.log(lista[7]);
        lista.sort((a, b) => b - a);
        console.log(lista);
        lista.pop();
        console.log(lista);
        lista.unshift(Math.floor(Math.random() * 100));
        if (lista[0] > 69) {
            lista[0] = 'secretInput';
        }
        console.log(lista);
        
        let temp = lista[lista.length - 1];
        lista[lista.length - 1] = lista[lista.length - 2];
        lista[lista.length - 2] = temp;
        console.log(lista);