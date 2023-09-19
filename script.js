const cartItems = [];
let cartTotal = 0;

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    cartTotal += productPrice;
    updateCart();
}

function removeFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Limpar a lista de itens do carrinho antes de atualizar
    cartList.innerHTML = '';

    cartItems.forEach((item, index) => {
        const newItem = document.createElement('li');
        newItem.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remover</button>`;
        cartList.appendChild(newItem);
    });

    cartTotalElement.innerText = cartTotal.toFixed(2);
}



const images = [
    { 'id': '1', 'url': 'https://s2-techtudo.glbimg.com/RbkxWLIWMD70MQQ1IWt9BiexRgA=/0x0:725x544/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/j/M/lXTV3MQIOw8E9lUowx2A/xiaomi13-pro-01.jpg' },
    { 'id': '2', 'url': 'https://img.band.uol.com.br/image/2023/07/10/celulares-flip-de-volta-ao-mercado-115448.jpg' },
    { 'id': '3', 'url': 'https://lojajonathancell.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/e/celular-xiaomi-redmi-note-10-128gb-branco01.jpg' },
    { 'id': '4', 'url': 'https://classic.exame.com/wp-content/uploads/2020/11/iphone12thiagolavado1-e1612006829724.jpg?quality=70&strip=info&w=1024' }
]

const container = document.querySelector('.container-items');
for (const image of images) {
    container.innerHTML += `
                <div class='item'>
                <img src='${image.url}'
                </div> `
}

let items = document.querySelectorAll('.item');

document.querySelector('#next').addEventListener('click', () => {
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
});

document.querySelector('#previous').addEventListener('click', () => {
    const lastItem = items[items.length - 1];
    container.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
});


function toggleMode() {
    let html = document.documentElement
    html.classList.toggle('light')
}

//TROCA DE IMAGEM LIKE

var imagem = document.getElementById("imagem");
var imagens = ["1.png", "2.png"];
var indiceAtual = 0;

function toggleImagem() {
    var imagem = document.getElementById("imagem");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}

function toggleImagem2() {
    var imagem = document.getElementById("imagem2");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}

function toggleImagem3() {
    var imagem = document.getElementById("imagem3");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}

function toggleImagem4() {
    var imagem = document.getElementById("imagem4");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}

function toggleImagem5() {
    var imagem = document.getElementById("imagem5");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}

function toggleImagem6() {
    var imagem = document.getElementById("imagem6");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}


