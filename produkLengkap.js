const productsData = {
    'rc-hair-n-skincare': {
        name: "Royal Canin Hair & Skin Care Cat Food",
        price: 87000,
        image: "image.png",
        rating: 5.0,
        sold: 10000,
        weight: 0.4,
        description: "Makanan kucing khusus untuk kesehatan bulu dan kulit. Diperkaya dengan omega 3 & 6, biotin, dan asam amino untuk menjaga kesehatan kulit dan keindahan bulu kucing Anda."
    },
    'proplan-u-1th': {
        name: "Pro Plan Puppy Under 1 Year",
        price: 1475900,
        image: "Purina-Pro-Plan-Puppy-Dry-Dog-Food-for-Under-1-Year-Real-Chicken-Rice-34-lb-Bag_5f82e175-a5ce-4add-98e0-e7c601205a42.a9cc9594c4ce8ef2e7da8427170ed99a.png",
        rating: 5.0,
        sold: 4000,
        weight: 15,
        description: "Makanan anak anjing bernutrisi tinggi untuk pertumbuhan optimal. Mengandung DHA untuk perkembangan otak dan vitamin untuk sistem imun yang kuat."
    },
    'pedigree': {
        name: "Padigree Adult Beef & Vegetable Dog Food",
        price: 859000,
        image: "pedigree_pedigree_beef_-_vegetables_makanan_anjing_-20_kg-_full01_8helhpe-removebg-preview.png",
        rating: 3.9,
        sold: 4000,
        weight: 20,
        description: "Makanan anjing dewasa dengan kombinasi daging sapi dan sayuran. Kaya serat dan nutrisi lengkap untuk anjing aktif."
    },
    'lola-co': {
        name: "Lola & Co Tofu Cat Litter",
        price: 99900,
        image: "th-11134207-7r98u-losfccwiviv1d0.png",
        rating: 5.0,
        sold: 6000,
        weight: 2.8,
        description: "Pasir kucing dari bahan tofu alami. Daya serap tinggi, tidak berdebu, mudah dibersihkan dan ramah lingkungan."
    },
    'benebone-bacon': {
        name: "Benebone Bacon Stick Medium",
        price: 410000,
        image: "Benebone-Bacon-Stick-Durable-Dog-Chew-Toy-Medium_2add0ce5-9bf7-4fcb-bcac-03e469761cff.c4a61a9cae8935446881b791aff3fb00.png",
        rating: 4.9,
        sold: 9000,
        weight: 3,
        description: "Mainan kunyah untuk anjing dengan aroma bacon. Terbuat dari nylon berkualitas tinggi, tahan lama dan aman untuk gigi anjing."
    },
    'pet-cargo-1': {
        name: "Pet Cargo Skudo IATA 6",
        price: 980900,
        image: "Img_skudo_6-removebg-preview.png",
        rating: 4.0,
        sold: 1000,
        weight: 8,
        description: "Kandang travel untuk hewan peliharaan berstandar IATA. Kokoh, aman, dan nyaman untuk perjalanan jauh atau pengiriman udara."
    },
    'hernes': {
        name: "Zee Dog H3D Jelly Softerwalk Harness",
        price: 420900,
        image: "Image copy 5.png",
        rating: 3.9,
        sold: 1000,
        weight: 0.3,
        description: "Hernes anjing premium Anti-Tarik."
    },
    'mao-mao': {
        name: "Mao Mao Cat Litter Tofu 7ltr",
        price: 52900,
        image: "Image copy 4.png",
        rating: 3.2,
        sold: 2000,
        weight: 2.4,
        description: "Mao Mao Cat Tofu Soya adalah pasir kucing yang terbuat dari 100% Grain natural yang dapat menggumpal dengan cepat dan tidak mengandung bahan yang berbahaya untuk kucing. Selain itu, Mao mao Cat Tofu Soya juga bisa langsung dibersihkan dengan disiram ke dalam toilet."
    },
    'npsc-dogfood': {
        name: "Nature's Protection White Dog Adult ",
        price: 920900,
        image: "Image copy 3.png",
        rating: 4.2,
        sold: 2000,
        weight: 1.5,
        description: "Makanan anjing kering lengkap ini mengandung formula Tear Stains off - asam amino yang dipilih dengan cermat, kompleks, dan bahan-bahan yang sepenuhnya seimbang dalam komposisinya. Diperkaya dengan bahan-bahan yang memberikan performa sempurna untuk kesejahteraan hewan peliharaan."
    },
    'rc-siamese': {
        name: "Royal Canin Siamese Cat Adult",
        price: 739900,
        image: "Image copy 2.png",
        rating: 4.9,
        sold: 2000,
        weight: 3,
        description: "Makanan kucing khusus untuk kucing Siamese dewasa (usia > 12 bulan)."
    },
    'pet-cargo-2': {
        name: "Pet Pawradise Pet Cargo Jumbo",
        price: 190900,
        image: "Image copy.png",
        rating: 3.9,
        sold: 3000,
        weight: 6,
        description: "Kandang travel untuk anabul. Kokoh, aman, dan nyaman untuk perjalanan jauh atau pengiriman udara."
    },
    'pg': {
        name: "Cat wall playground / Cat Tree",
        price: 559000,
        image: "Image copy 6.png",
        rating: 4.9,
        sold: 2000,
        weight: 5,
        description: "Playground kucing yang dilengkapi dengan 2 cat box ukuran besar dan jembatan gantung 1 meter."
    },
    'vitamin': {
        name: "Multivitamin Chews for Dogs",
        price: 285000,
        image: "Image copy 7.png",
        rating: 4.9,
        sold: 5000,
        weight: 0.3,
        description: "Multivitamin untuk mendukung kesehatan sendi dan tulang serta dapat meningkatkan daya tahan tubuh anjing."
    },
    'rc-persian': {
        name: "Royal Canin Persian Kitten",
        price: 300000,
        image: "Image copy 8.png",
        rating: 4.5,
        sold: 2500,
        weight: 2,
        description: "Makanan kucing khusus untuk anak kucing Persia hingga usia 12 bulan."
    },
    'rc-puppy': {
        name: "Royal Canin Puppy Mini",
        price: 700000,
        image: "Image copy 9.png",
        rating: 4.5,
        sold: 2500,
        weight: 8,
        description: "Makanan kucing khusus untuk anak anjing ras kecil (usia 2-10 bulan)."
    },
    'benebone-fish': {
        name: "Benebone Fishbone Medium Jack Salmon",
        price: 375000,
        image: "Image copy 10.png",
        rating: 4.7,
        sold: 3000,
        weight: 3,
        description: "Mainan kunyah untuk anjing dengan aroma Jack Salmon. Terbuat dari nylon berkualitas tinggi, tahan lama dan aman untuk gigi anjing."
    },
    'rc-indoor': {
        name: "Royal Canin Indoor Long Hair Cat",
        price: 489000,
        image: "Image copy 11.png",
        rating: 4.5,
        sold: 2500,
        weight: 4,
        description: "Makanan kucing khusus untuk kucing dalam rumah berbulu panjang."
    },
    'cat-toy': {
        name: "AimayaPet Mainan Kucing Dengan Laser",
        price: 95000,
        image: "Image copy 12.png",
        rating: 4.9,
        sold: 7800,
        weight: 0.5,
        description: "Mainan cerdas untuk kucing yang dirancang untuk memberikan hiburan dan stimulasi bagi hewan peliharaan Anda. Dengan teknologi laser inframerah, mainan ini mampu menarik perhatian kucing Anda dan memancingnya untuk bergerak aktif."
    },
};

function showProductDetail(productId) {
    const product = productsData[productId];
    
    if (!product) {
        alert('Produk tidak ditemukan!');
        return;
    }
    
    const modalHTML = `
        <div class="modal fade show product-modal" style="display: block; background: rgba(0,0,0,0.5);" onclick="closeModalOutside(event)">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-c-tua text-white">
                        <h5 class="modal-title">Detail Produk</h5>
                        <button type="button" class="btn-close btn-close-white" onclick="closeProductModal()"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 text-center">
                                <img src="${product.image}" alt="${product.name}" class="img-fluid" style="max-height: 400px;">
                            </div>
                            <div class="col-md-6">
                                <h3 class="coklat-tua mb-3">${product.name}</h3>
                                <h4 class="coklat-tua mb-3">Rp ${product.price.toLocaleString('id-ID')}</h4>
                                <p class="penilaian mb-3"><i class="bi bi-star-fill" style="color: #debc2a;"></i> ${product.rating} | ${(product.sold/1000).toFixed(0)}rb+ Terjual</p>
                                <hr>
                                <h5 class="coklat-tua">Berat:</h5>
                                <p class="coklat-muda">${product.weight}kg</p>
                                <hr>
                                <h5 class="coklat-tua">Deskripsi Produk:</h5>
                                <p class="coklat-muda">${product.description}</p>
                                <hr>
                                <button class="btn bg-c-tua text-white w-100 mt-3" 
                                    onclick="addToCartFromModal('${productId}')">
                                    <i class="bi bi-cart-plus me-2"></i>Tambah ke Keranjang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeProductModal() {
    const modal = document.querySelector('.product-modal');
    if (modal) {
        modal.remove();
    }
}

function closeModalOutside(event) {
    if (event.target.classList.contains('product-modal')) {
        closeProductModal();
    }
}

function addToCartFromModal(productId) {
    const product = productsData[productId];
    addToCart(product.name, product.price, product.image);
    closeProductModal();
}