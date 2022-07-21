function calcularPreco(nomeProduto, precoProduto) {
    let frete = 0;

    if(precoProduto >= 1 && precoProduto <= 2000){
        frete = 300;
    }
    else if(precoProduto >= 2001 && precoProduto <= 4000){
        frete = 400;
    }
    else{
        frete = 700;
    }

    console.log("O produto", nomeProduto," custa ", precoProduto,". Seu custo de envio é ", frete,". Portanto o custo final é ", (precoProduto+frete));

    return 0;
}

calcularPreco('Macbook', 2500);
calcularPreco('Celular', 500);
calcularPreco('Playstation', 4500);
