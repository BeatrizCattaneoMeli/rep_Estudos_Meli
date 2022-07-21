let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

function criarID(products){

    for(i=0; i<products.length; i++){
        products[i]['id'] = i+1
        //console.log(products[i]);
    }

}

function imprimirNomeProduto(){
    for(i=0; i<products.length; i++){
        console.log(products[i].name);
    }
}

function imprimirProduto3(){
    console.log(`entrei`)
    let filter = products.filter(function(element){
        return element.id == 3;
    })

    let find = products.find(function(element){
        id => element.id == 3;
    })
    console.log(filter);
}

function imprimirBlack(){
    //console.log(`black`);
        filter = products.filter(function(element){
            return element.colors.find(function(c){
                return c == 'black';
            })
        })
        
        console.log(filter);
}

function imprimirSemCor(){
    filter = products.filter(function(element){
        return element.colors.length == 0;
    })
    
    console.log(filter);
}

/*products.find((element) =>{
    if(element.colors.includes()){
        console.log(element);
    }
})*/

function adicionarProduto(){
    const bicicleta = {
        name: 'bicicleta',
        price: 350,
        quantity: 50,
        colors: ['red', 'black', 'green'], 
        id: 11
    }

    products.push(bicicleta);
}

function removerProdutos(){
    products.forEach((product, index) => {
        if (product.quantity <= 0) {
            products.splice(index, 1);
        }
    });   
}

function somaProdutos(){
    let soma = 0;

    products.forEach(element => {
        soma += element.quantity;
    });

    console.log('soma: ', soma);
    return soma;
}

function maiorPreco(biggerPrice){
    let maior = 0;

    products.forEach(element =>{
        if(element.price > biggerPrice){
            maior = element.price;
            console.log('maior: ', maior);
            return maior;
        }
    })
}

function nomeComO(){
    
    products.map(element => {
        if(element.name.includes('o')){
            console.log(element.name);
        }
    });

}


criarID(products);
//imprimirNomeProduto();
//imprimirProduto3();
//imprimirBlack();
//imprimirSemCor();
//adicionarProduto();
//removerProdutos();
//somaProdutos();
//maiorPreco(89);
nomeComO();

//console.log(products)
