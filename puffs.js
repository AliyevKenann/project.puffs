const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
}




// let basket = [];

// // Ürün sepete ekleme fonksiyonu
// function addToBasket(product1) {
//     const found = basket.find(item => item.id === product.id);
//     if (found) {
//         // Ürün zaten sepetteyse miktarını artır
//         found.quantity += 1;
//     } else {
//         // Ürün sepete ilk kez ekleniyorsa sepete ekle
//         basket.push({ ...product });
//     }
//     displayBasket();
// }

// // Ürünü sepetten çıkarma fonksiyonu
// function removeFromBasket(productId) {
//     basket = basket.filter(item => item.id !== productId);
//     displayBasket();
// }

// // Ürün miktarını azaltma fonksiyonu
// function decreaseQuantity(productId) {
//     const found = basket.find(item => item.id === productId);
//     if (found && found.quantity > 1) {
//         found.quantity -= 1;
//     } else {
//         removeFromBasket(productId);
//     }
//     displayBasket();
// }

// // Sepetin toplam fiyatını hesaplayan fonksiyon
// function calculateTotal() {
//     return basket.reduce((total, item) => total + item.price * item.quantity, 0);
// }

// // Sepeti ekranda gösteren fonksiyon
// function displayBasket() {
//     const basketDiv = document.getElementById('basket');
//     basketDiv.innerHTML = ''; // Sepeti temizle

//     if (basket.length === 0) {
//         basketDiv.innerHTML = '<p>Sepetiniz boş.</p>';
//         return;
//     }

//     basket.forEach(item => {
//         basketDiv.innerHTML += `
//             <div class="basket-item">
//                 <p>${item.name} - ${item.quantity} adet - ${item.price * item.quantity} ₺</p>
//                 <div>
//                     <button onclick="decreaseQuantity(${item.id})">Azalt</button>
//                     <button onclick="removeFromBasket(${item.id})">Sil</button>
//                 </div>
//             </div>
//         `;
//     });

//     // Sepet toplamını göster
//     basketDiv.innerHTML += `<p><strong>Toplam: ${calculateTotal()} ₺</strong></p>`;
// }
