// FUNCTIONS
const salePrice = (price, discount) => {
    let finalPrice = Math.round((price - discount/100*price)*100)/100;
    return finalPrice;
}

const shipping = (seller) => {
    if (seller === 'PcComponentes') {
        return "Recíbelo mañana";
    } else {
        return "Recíbelo a partir del lunes, 27 de enero";
    }
}

const sortListByPrice = (list, order) => {
    const items = Array.from(list.children); // Convertir NodeList a Array

    // Ordenar los elementos por precio
    items.sort((a, b) => {
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
        return order === "asc" ? priceA - priceB : priceB - priceA;
    });

    // Reagregar los elementos en el orden correcto
    list.innerHTML = ""; // Vaciar la lista actual
    items.forEach(item => list.appendChild(item));
};

const sortListByStars = (list, order) => {
    const items = Array.from(list.children);
    items.sort((a, b) => {
        const starsA = parseFloat(a.dataset.stars);
        const starsB = parseFloat(b.dataset.stars);
        return order === "asc" ? starsA - starsB : starsB - starsA;
    });
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
};

const sortListByDiscount = (list, order) => {
    const items = Array.from(list.children);
    items.sort((a, b) => {
        const discountA = parseFloat(a.dataset.discount);
        const discountB = parseFloat(b.dataset.discount);
        return order === "asc" ? discountA - discountB : discountB - discountA;
    });
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
}

// ARRAYS
const filters = [
    {
        image: "https://assets.pccomponentes.com/files/2025/01/07/ad28335d-240f-4409-b46c-3bfb39cbac14/6318b861-df0a-429e-80d6-a8978779dfd6-asistente.png",
        imageDescription: "PC gaming",
        name: "Jugadores ocasionales"
    },
    {
        image: "https://assets.pccomponentes.com/files/2025/01/07/0e115758-4246-4878-ab56-5de404aabdb5/bd34f870-70e6-4b36-86c9-58b5a0373f27-asistente.png",
        imageDescription: "PC gaming",
        name: "Jugadores entusiastas"
    },
    {
        image: "https://assets.pccomponentes.com/files/2025/01/07/d48df333-efe9-44f2-83c6-04e737acc167/c29e2a47-0266-47cf-972d-4b470c68dcb7-asistente.png",
        imageDescription: "PC gaming",
        name: "Jugadores profesionales"
    },
    {
        image: "https://assets.pccomponentes.com/files/2024/12/20/6028be7a-d516-40d9-8041-c67af477902f/b9116bc1-6ed5-4bfc-89eb-18921ec123bf-asistente.png",
        imageDescription: "PC",
        name: "Estudiantes o trabajadores"
    },
    {
        image: "https://assets.pccomponentes.com/files/2025/01/03/a34ef4fe-463f-41a8-88fc-45b787cdd177/eb9e34f4-6720-4efc-8a00-162b46c06efa-asistente.png",
        imageDescription: "PC",
        name: "Uso básico con Windows instalado"
    },
    {
        image: "https://assets.pccomponentes.com/files/2024/12/20/c1f1d17e-c24e-4db5-b4e7-3ec029adabe7/eab06227-7425-4f7c-b937-0197b521933b-asistente.png",
        imageDescription: "PC",
        name: "Compactos ultrafinos"
    },
    {
        image: "https://assets.pccomponentes.com/files/2024/12/20/0433cf9c-68bc-4192-9d1e-194af80272b9/0a6a5a9a-061c-4f8e-bbee-7b8b9b689c8d-asistente.png",
        imageDescription: "PC",
        name: "Edición y diseño premium"
    },
    {
        image: "https://assets.pccomponentes.com/files/2025/01/13/bf3561a3-2059-49f3-8999-dfbcd06c497d/9b773cca-b7ab-4637-9d94-0926832b01ff-asistente.png",
        imageDescription: "refurbished computer icon",
        name: "Reacondicionados gaming"
    },
    {
        image: "https://assets.pccomponentes.com/files/2025/01/13/63aeb181-6b00-42c4-827a-5baf2a2f7f36/7ee718c6-11ee-4103-9a5d-5eaa7c7b52b7-asistente.jpeg",
        imageDescription: "refurbished computer icon",
        name: "Reacondicionados ofimática"
    },
    {
        image: "https://assets.pccomponentes.com/files/2024/09/25/438bf954-1388-4278-b060-2269e44797c0/e3248d11-84c4-47d3-a4a5-a8dae44aabc6-asistente.png",
        imageDescription: "Apple logo",
        name: "Mac"
    },
    {
        image: "https://assets.pccomponentes.com/files/2025/01/13/1d4d2317-3428-4360-9205-4c8e845566f3/7cba9279-2afb-4bd3-abba-df206d1b341a-asistente.jpeg",
        imageDescription: "MSI logo",
        name: "MSI"
    },
    {
        image: "https://assets.pccomponentes.com/files/2025/01/13/326f0a60-ec4a-4259-bb3a-e73f98999cc1/9628104f-d7ce-4e3a-97a9-f1dc29ca87f7-asistente.jpeg",
        imageDescription: "HP logo",
        name: "HP"
    },
    {
        image: "https://assets.pccomponentes.com/files/2025/01/13/ff2e9596-96e3-4f5e-b393-249c8da95eb0/50913834-7c39-4f2a-8e66-2d6758c01ffc-asistente.jpeg",
        imageDescription: "Asus logo",
        name: "Asus"
    },
    {
        image: "https://assets.pccomponentes.com/files/2025/01/13/88d395d3-00c4-4b5a-b7c4-d40c9a57a79d/c285bc2a-a11d-4181-8325-81644b73812c-asistente.jpeg",
        imageDescription: "Lenovo logo",
        name: "Lenovo"
    },
    {
        image: "https://assets.pccomponentes.com/files/2025/01/13/948ad4f1-ec82-473e-a14f-da6c88248104/e3622069-21f7-481a-b2c2-b81dcb20477f-asistente.jpeg",
        imageDescription: "Acer logo",
        name: "Acer"
    },
];

const products = [
    {
        name: 'Alurin Go Start Intel Celeron N4020/8GB/256GB SSD/15.6"',
        price: 309.99,
        offer: 26,
        stars: 4,
        reviews: 398,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1066/10663368/1710-alurin-go-start-intel-pentium-n4020-8gb-256gb-ssd-156-comprar.jpg',
        url: 'https://www.pccomponentes.com/alurin-go-start-intel-celeron-n4020-8gb-256gb-ssd-156',
        brand: 'Alurin'
    },
    {
        name: 'PcCom Revolt 4070 Intel Core i9-14900HX/32GB/1TB SSD/RTX 4070/17.3"',
        price: 2599.99,
        offer: 31,
        stars: 4.3,
        reviews: 82,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10813463/1304-pccom-revolt-4070-intel-core-i9-14900hx-32gb-1tb-ssd-rtx-4070-173.jpg',
        url: 'https://www.pccomponentes.com/pccom-revolt-4070-intel-core-i9-14900hx-32gb-1tb-ssd-rtx-4070-173',
        brand: 'PcCom'
    },
    {
        name: 'HP OMEN 17-db0005ns AMD Ryzen 9 8945HS/32GB/1TB SSD/RTX 4060/17.3"',
        price: 1699,
        offer: 24,
        stars: 4.5,
        reviews: 113,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1082/10828811/1353-hp-omen-17-db0005ns-amd-ryzen-9-8945hs-32gb-1tb-ssd-rtx-4060-173.jpg',
        url: 'https://www.pccomponentes.com/hp-omen-17-db0005ns-amd-ryzen-9-8945hs-32gb-1tb-ssd-rtx-4060-173',
        brand: 'HP'
    },
    {
        name: 'Acer Gaming Nitro V 15 ANV15-41 AMD Ryzen 7 7735HS/32GB/1TB SSD/RTX 4060/15.6"',
        price: 1199,
        offer: 13,
        stars: 4.4,
        reviews: 1188,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10840369/1500-acer-nitro-v-15-anv15-41-amd-ryzen-7-7735hs-32gb-1tb-ssd-rtx-4060-156-453aa583-2c46-432f-a8a6-02abd5494d4e.jpg',
        url: 'https://www.pccomponentes.com/portatil-acer-gaming-nitro-v-15-anv15-41-amd-ryzen-7-7735hs-32gb-1tb-ssd-rtx-4060-156',
        brand: 'Acer'
    },
    {
        name: 'Acer Aspire 3 15 A315-44P AMD Ryzen 7 5700U/16GB/512 GB SSD/15.6"',
        price: 599,
        offer: 17,
        stars: 4.4,
        reviews: 59,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10847941/1454-acer-aspire-3-15-a315-44p-amd-ryzen-7-5700u-16gb-512-gb-ssd-156.jpg',
        url: 'https://www.pccomponentes.com/portatil-acer-aspire-3-15-a315-44p-amd-ryzen-7-5700u-16gb-512-gb-ssd-156',
        brand: 'Acer'
    },
    {
        name: 'Acer Nitro V 15 ANV15-41 AMD Ryzen 7 7735HS/16GB/1TB SSD/RTX 4050/15.6"',
        price: 1099,
        offer: 23,
        stars: 4.4,
        reviews: 57,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10848917/1687-acer-nitro-v-15-anv15-41-amd-ryzen-7-7735hs-16gb-1tb-ssd-rtx-4050-156.jpg',
        url: 'https://www.pccomponentes.com/portatil-acer-nitro-v-15-anv15-41-amd-ryzen-7-7735hs-16gb-1tb-ssd-rtx-4050-156',
        brand: 'Acer'
    },
    {
        name: 'Acer Chromebook 315 Intel Celeron N4500/8GB/64GB eMMC/15.6"',
        price: 399,
        offer: 38,
        stars: 4.5,
        reviews: 150,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1073/10736823/1887-acer-chromebook-315-intel-celeron-n4500-8gb-64gb-emmc-156.jpg',
        url: 'https://www.pccomponentes.com/acer-chromebook-315-intel-celeron-n4500-8gb-64gb-emmc-156',
        brand: 'Acer'
    },
    {
        name: 'HP Victus Gaming 16-r0036ns Intel Core i7-13620H/32GB/1TB SSD/RTX 4060/16.1"',
        price: 1399,
        offer: 19,
        stars: 4.6,
        reviews: 1191,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1082/10828807/1363-hp-victus-gaming-16-r0036ns-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4060-161-30d96809-76dd-4c80-9557-320067220314.jpg',
        url: 'https://www.pccomponentes.com/hp-victus-gaming-16-r0036ns-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4060-161',
        brand: 'HP'
    },
    {
        name: 'Lenovo LOQ Gen 7 15ARP9 AMD Ryzen 7 7435HS/24GB/1TB SSD/RTX 4060/15.6"',
        price: 1099,
        offer: 11,
        stars: 4.5,
        reviews: 43,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10847197/1844-lenovo-loq-gen-7-15arp9-amd-ryzen-7-7435hs-24gb-1tb-ssd-rtx-4060-156.jpg',
        url: 'https://www.pccomponentes.com/portatil-lenovo-loq-gen-7-15arp9-amd-ryzen-7-7435hs-24gb-1tb-ssd-rtx-4060-156',
        brand: 'Lenovo'
    },
    {
        name: 'ASUS TUF Gaming A15 FA506NCR-HN006 AMD Ryzen 7 7435HS/16GB/512GB SSD/RTX 3050/15.6"',
        price: 899.01,
        offer: 17,
        stars: 4.6,
        reviews: 250,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10848624/1163-asus-tuf-gaming-a15-fa506ncr-hn006-amd-ryzen-7-7435hs-16gb-512gb-ssd-rtx-3050-156.jpg',
        url: 'https://www.pccomponentes.com/portatil-asus-tuf-gaming-a15-fa506ncr-hn006-amd-ryzen-7-7435hs-16gb-512gb-ssd-rtx-3050-156',
        brand: 'Asus'
    },
    {
        name: 'HP 15-fd0080ns Intel Core i5-1334U/16GB/512GB SSD/15.6"',
        price: 679,
        offer: 15,
        stars: 4.6,
        reviews: 506,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1082/10828801/1405-hp-15-fd0080ns-intel-core-i5-1334u-16gb-512gb-ssd-156.jpg',
        url: 'https://www.pccomponentes.com/hp-15-fd0080ns-intel-core-i5-1334u-16gb-512gb-ssd-156',
        brand: 'HP'
    },
    {
        name: 'Lenovo IdeaPad Slim 3 15IAH8 Intel Core i5-12450H/16GB/1TB SSD/15.6"',
        price: 679,
        offer: 12,
        stars: 4.6,
        reviews: 510,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1080/10803445/1686-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-1tb-ssd-156.jpg',
        url: 'https://www.pccomponentes.com/lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-1tb-ssd-156',
        brand: 'Lenovo'
    },
    {
        name: 'Lenovo IdeaPad Slim 3 15IAH8 Intel Core i5-12450H/16GB/512GB SSD/15.6"',
        price: 599,
        offer: 20,
        stars: 4.6,
        reviews: 1289,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1079/10797786/1581-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-512gb-ssd-156.jpg',
        url: 'https://www.pccomponentes.com/lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-512gb-ssd-156',
        brand: 'Lenovo'
    },
    {
        name: 'ASUS Vivobook 15 F1504ZA-NJ1657 Intel Core i5-1235U/16GB/512GB SSD/15.6"',
        price: 529,
        offer: 8,
        stars: 4.5,
        reviews: 69,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1085/10853130/1933-asus-vivobook-15-f1504za-nj1657-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg',
        url: 'https://www.pccomponentes.com/portatil-asus-vivobook-15-f1504za-nj1657-intel-core-i5-1235u-16gb-512gb-ssd-156',
        brand: 'Asus'
    },
    {
        name: 'Acer Gaming Nitro 5 AN515-58 Intel Core i9-12900H/32GB/1TB SSD/RTX 4060/15.6"',
        price: 1599,
        offer: 31,
        stars: 4.7,
        reviews: 61,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1079/10792745/1774-acer-nitro-5-an515-58-77yb-intel-core-i9-12900h-32gb-1tb-ssd-rtx-4060-156-opiniones.jpg',
        url: 'https://www.pccomponentes.com/portatil-acer-gaming-nitro-5-an515-58-intel-core-i9-12900h-32gb-1tb-ssd-rtx-4060-156',
        brand: 'Acer'
    },
    {
        name: 'Apple MacBook Air Apple M3 8 Núcleos/16GB/256GB SSD/GPU 8 Núcleos/13.6" Medianoche',
        price: 1299,
        offer: 10,
        stars: 4.8,
        reviews: 287,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1086/10861596/1629-apple-macbook-air-apple-m3-8-nucleos-16gb-256gb-ssd-gpu-8-nucleos-136-medianoche.jpg',
        url: 'https://www.pccomponentes.com/portatil-apple-macbook-air-apple-m3-8-nucleos-16gb-256gb-ssd-gpu-8-nucleos-136-medianoche',
        brand: 'Apple'
    },
    {
        name: 'Lenovo IdeaPad Slim 3 Gen 8 15IRH8 Intel Core i7-13620H/16GB/1TB SSD/15.6"',
        price: 849,
        offer: 14,
        stars: 4.4,
        reviews: 48,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10847192/1390-lenovo-ideapad-slim-3-gen-8-15irh8-intel-core-i7-13620h-16gb-1tb-ssd-156.jpg',
        url: 'https://www.pccomponentes.com/portatil-lenovo-ideapad-slim-3-gen-8-15irh8-intel-core-i7-13620h-16gb-1tb-ssd-156',
        brand: 'Lenovo'
    },
    {
        name: 'MSI Cyborg 15 A13VF-879XES Intel Core i7-13620H/32GB/1TB SSD/RTX 4060/15.6"',
        price: 1349,
        offer: 19,
        stars: 4.6,
        reviews: 459,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10812222/1834-msi-cyborg-15-a13vf-879xes-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4060-156-c61e902c-f640-48da-9f43-5bc595c18181.jpg',
        url: 'https://www.pccomponentes.com/msi-cyborg-15-a13vf-879xes-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4060-156',
        brand: 'MSI'
    },
    {
        name: 'HP Victus Gaming 16-r0037ns Intel Core i7-13620H/32GB/1TB SSD/RTX 4070/16.1"',
        price: 1599,
        offer: 19,
        stars: 4.6,
        reviews: 1191,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1082/10828808/1711-hp-victus-gaming-16-r0037ns-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4070-161.jpg',
        url: 'https://www.pccomponentes.com/hp-victus-gaming-16-r0037ns-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4070-161',
        brand: 'HP'
    },
    {
        name: 'Lenovo IdeaPad Slim 3 15IRH8 Intel Core i5-13420H/16GB/512GB SSD/15.6"',
        price: 669,
        offer: 21,
        stars: 4.6,
        reviews: 199,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1086/10864240/1655-lenovo-ideapad-slim-3-15irh8-intel-core-i5-13420h-16gb-512gb-ssd-156.jpg',
        url: 'https://www.pccomponentes.com/portatil-lenovo-ideapad-slim-3-15irh8-intel-core-i5-13420h-16gb-512gb-ssd-156',
        brand: 'Lenovo'
    },
    {
        name: 'Lenovo IdeaPad 1 Gen 7 15ALC7 AMD Ryzen 7 5700U/16GB/1 TB SSD/15.6"',
        price: 899.01,
        offer: 28,
        stars: 4.5,
        reviews: 26,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10847190/1624-lenovo-ideapad-1-gen-7-15alc7-amd-ryzen-7-5700u-16gb-1-tb-ssd-156.jpg',
        url: 'https://www.pccomponentes.com/portatil-lenovo-ideapad-1-gen-7-15alc7-amd-ryzen-7-5700u-16gb-1-tb-ssd-156',
        brand: 'Lenovo'
    },
    {
        name: 'Lenovo V15 G4 IRU Intel Core i5-13420H/16GB/512GB SSD/15.6"',
        price: 740,
        offer: 15,
        stars: 4.5,
        reviews: 252,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10811256/1634-lenovo-v15-g4-iru-intel-core-i5-13420h-16gb-512gb-ssd-156.jpg',
        url: 'https://www.pccomponentes.com/lenovo-v15-g4-iru-intel-core-i5-13420h-16gb-512gb-ssd-156',
        brand: 'Lenovo'
    },
    {
        name: 'MSI Thin 15 B12UC-1839XES Intel Core i7-12650H/16GB/1TB SSD/RTX 3050/15.6"',
        price: 919,
        offer: 9,
        stars: 4.5,
        reviews: 441,
        seller: 'TINSER',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10846498/1331-msi-thin-15-b12uc-1839xes-intel-core-i7-12650h-16gb-1tb-ssd-rtx-3050-156.jpg',
        url: 'https://www.pccomponentes.com/portatil-msi-thin-15-b12uc-1839xes-intel-core-i7-12650h-16gb-1tb-ssd-rtx-3050-156',
        brand: 'MSI'
    },
    {
        name: 'Acer Gaming Nitro V 16 ANV16-41 AMD Ryzen 7 8845HS/32GB/1TB SSD/RTX',
        price: 1309,
        offer: 16,
        stars: 4.7,
        reviews: 46,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10848918/128-acer-nitro-v-16-anv16-41-amd-ryzen-7-8845hs-32gb-1tb-ssd-rtx-4060-16-eae55101-bb16-4c75-8b37-90a8e4c376fe.jpg',
        url: 'https://www.pccomponentes.com/portatil-acer-gaming-nitro-v-16-anv16-41-amd-ryzen-7-8845hs-32gb-1tb-ssd-rtx-4060-16',
        brand: 'Acer'
    },
    {
        name: 'HP Victus 16-s0011ns AMD Ryzen 7 7840HS/32GB/1TB SSD/RTX 4060/16.1"',
        price: 1399,
        offer: 20,
        stars: 4.6,
        reviews: 23,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1073/10733294/1394-hp-victus-16-s0011ns-amd-ryzen-7-7840hs-32gb-1tb-ssd-rtx-4060-161.jpg',
        url: 'https://www.pccomponentes.com/hp-victus-16-s0011ns-amd-ryzen-7-7840hs-32gb-1tb-ssd-rtx-4060-161',
        brand: 'HP'
    },
    {
        name: 'ASUS TUF Gaming A15 FA507NVR-LP010W AMD Ryzen 7 7435HS/16GB/1TB SSD/RTX',
        price: 1239,
        offer: 7,
        stars: 4.9,
        reviews: 8,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1085/10858538/1506-asus-tuf-gaming-a15-fa507nvr-lp010w-amd-ryzen-7-7435hs-16gb-1tb-ssd-rtx-4060-156-921a2d47-a9b6-41db-bbcd-8573abf01eeb.jpg',
        url: 'https://www.pccomponentes.com/portatil-asus-tuf-gaming-a15-fa507nvr-lp010w-amd-ryzen-7-7435hs-16gb-1tb-ssd-rtx-4060-156?_gl=1*1bkqi4*_up*MQ..*_gs*MQ..&gclid=Cj0KCQiAy8K8BhCZARIsAKJ8sfQYQq5-wRrJMtORzcKQNzR9fuIYJsUStqkymEO01aZEqh2KI0_9uBIaAhGTEALw_wcB',
        brand: 'Asus'
    },
    {
        name: 'Apple MacBook Air Apple M3 8 Núcleos/16GB/256GB SSD/GPU 10 Núcleos/15.3" Medianoche',
        price: 1599,
        offer: 8,
        stars: 5,
        reviews: 2,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1086/10861604/1174-apple-macbook-air-apple-m3-8-nucleos-16gb-256gb-ssd-gpu-10-nucleos-153-medianoche.jpg',
        url: 'https://www.pccomponentes.com/portatil-apple-macbook-air-apple-m3-8-nucleos-16gb-256gb-ssd-gpu-10-nucleos-153-medianoche?_gl=1*lx0wh3*_up*MQ..*_gs*MQ..&gclid=Cj0KCQiAy8K8BhCZARIsAKJ8sfQYQq5-wRrJMtORzcKQNzR9fuIYJsUStqkymEO01aZEqh2KI0_9uBIaAhGTEALw_wcB',
        brand: 'Apple'
    },
    {
        name: 'MSI Modern 15 H C13M-087XES Intel Core i7-13620H/32GB/1TB SSD/15.6"',
        price: 892,
        offer: 10,
        stars: 4.5,
        reviews: 884,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10810280/1102-msi-modern-15-h-c13m-087xes-intel-core-i7-13620h-32gb-1tb-ssd-156.jpg',
        url: 'https://www.pccomponentes.com/msi-modern-15-h-c13m-087xes-intel-core-i7-13620h-32gb-1tb-ssd-156?_gl=1*16hhwsf*_up*MQ..*_gs*MQ..&gclid=Cj0KCQiAy8K8BhCZARIsAKJ8sfQYQq5-wRrJMtORzcKQNzR9fuIYJsUStqkymEO01aZEqh2KI0_9uBIaAhGTEALw_wcB',
        brand: 'MSI'
    },
    {
        name: 'Apple MacBook Air Apple M3 8 Núcleos/16GB/256GB SSD/GPU 8 Núcleos/13.6" Blanco Estrella',
        price: 1299,
        offer: 7,
        stars: 4.8,
        reviews: 288,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1086/10861595/1756-apple-macbook-air-apple-m3-8-nucleos-16gb-256gb-ssd-gpu-8-nucleos-136-blanco-estrella-3f427744-99eb-41e0-a60b-09e37b7d4c2f.jpg',
        url: 'https://www.pccomponentes.com/portatil-apple-macbook-air-apple-m3-8-nucleos-16gb-256gb-ssd-gpu-8-nucleos-136-blanco-estrella?_gl=1*1ty0hqm*_up*MQ..*_gs*MQ..&gclid=Cj0KCQiAy8K8BhCZARIsAKJ8sfQYQq5-wRrJMtORzcKQNzR9fuIYJsUStqkymEO01aZEqh2KI0_9uBIaAhGTEALw_wcB',
        brand: 'Apple'
    },
    {
        name: 'PcCom Revolt 4070 Intel Core i9-14900HX/32GB/2TB SSD/RTX 4070/17.3"',
        price: 2679.99,
        offer: 30,
        stars: 4.3,
        reviews: 82,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10813468/1637-pccom-revolt-4070-intel-core-i9-14900hx-32gb-2tb-ssd-rtx-4070-173.jpg',
        url: 'https://www.pccomponentes.com/pccom-revolt-4070-intel-core-i9-14900hx-32gb-2tb-ssd-rtx-4070-173',
        brand: 'PcCom'
    },
    {
        name: 'ASUS Vivobook S 14 OLED S5406MA-QD162W Intel Core Ultra 5 125H/16GB/512GB',
        price: 999,
        offer: 10,
        stars: 4.3,
        reviews: 39,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1083/10839444/1539-asus-vivobook-s-14-oled-s5406ma-qd162w-intel-core-ultra-5-125h-16gb-512gb-ssd-14-foto.jpg',
        url: 'https://www.pccomponentes.com/portatil-asus-vivobook-s-14-oled-s5406ma-qd162w-intel-core-ultra-5-125h-16gb-512gb-ssd-14',
        brand: 'Asus'
    },
    {
        name: 'MSI Cyborg 15 A13VE-472XES Intel Core i7-13620H/16GB/1TB SSD/RTX 4050/15.6"',
        price: 1092,
        offer: 9,
        stars: 4.6,
        reviews: 460,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1075/10753244/1670-msi-cyborg-15-a13ve-472xes-intel-core-i7-13620h-16gb-1tb-ssd-rtx-4050-156.jpg',
        url: 'https://www.pccomponentes.com/msi-cyborg-15-a13ve-472xes-intel-core-i7-13620h-16gb-1tb-ssd-rtx-4050-156',
        brand: 'MSI'
    },
];

// HTML
const header = document.querySelector("header");
header.innerHTML = `
<a id="logo" href="index.html">
    <img src="./assets/PcComponentes_logo.png" alt="PcComponentes logo">
</a>
<div id="menu" class="hoverGrey">
    <img src="./assets/icons/burger_menu.svg" alt="burger menu icon">
    <p>Todas las categorías</p>
</div>
<div id="search">
    <select name="catalog" id="catalog">
        <option value="all">Todo el catálogo</option>
        <option value="reconditioned">Reacondicionados</option>
    </select>
    <input type="search" name="searchingBar" id="searchingBar" placeholder="Buscar">
</div>
<div id="login">
    <a class="accountLink hoverGrey" href="https://www.pccomponentes.com/login?_gl=1*1eljdpj*_up*MQ..&gclid=Cj0KCQiA1p28BhCBARIsADP9HrOLzUuvhJYE3tLxYEdmo4pPFbMyexZtDFhUQ9ciZ1skPjBQGrXuNq4aApfNEALw_wcB">
        <img src="./assets/icons/profile_icon.svg" alt="profile icon">
        <p>Mi cuenta</p>
    </a>
    <a class="accountLink hoverGrey" href="#">
        <img src="./assets/icons/shopping_cart_icon.svg" alt="shopping cart icon">
        <p>Mi cesta</p>
    </a>
</div>
`

const main = document.querySelector("main");
const offerSection = document.createElement("section");
offerSection.id = "offerSection";
main.appendChild(offerSection);
offerSection.innerHTML = `
<div id="discount">
    <p>🎁 Consigue <span>10€ de descuento en tu primera compra</span></p>
    <p class="underline">Haz click aquí</p>
</div>
<div id="offers">
    <ul>
        <li><a class="hoverGrey" href="https://www.pccomponentes.com/smartphone-moviles/redmi-note-14-4g/redmi-note-14-5g/redmi-note-14-pro-4g/redmi-note-14-pro-5g/redmi-note-14-pro-plus-5g/xiaomi">Nuevo Redmi Note 14</a></li>
        <li><a class="hoverGrey" href="#">Portátiles</a></li>
        <li><a class="hoverGrey" href="https://www.pccomponentes.com/configurador/">Configurador PC</a></li>
        <li><a id="fiftyPercent" href="https://www.pccomponentes.com/ofertas-de-enero">¡<span>Ofertas</span> hasta -50%!</a></li>
    </ul>
</div>
`

const mainSection = document.createElement("section");
mainSection.id = "mainSection";
main.appendChild(mainSection);
mainSection.innerHTML = `
<div id="mainHeader">
    <nav id="navBar">
        <ul>
            <li><a href="https://www.pccomponentes.com/">Home</a></li>
            <li class="between"><a href="https://www.pccomponentes.com/ordenadores">Ordenadores</a></li>
            <li class="between"><a href="https://www.pccomponentes.com/ordenadores-portatiles">Ordenadores Portátiles</a></li>
            <li class="between"><a href="#products">Portátiles</a></li>
        </ul>
    </nav>
    <h1>Portátiles</h1>
    <div id="subtitle">
        <p>Exprime hasta la última hora del día con <span class="bold">nuestros portátiles de las mejores marcas</span>: <a class="underline" href="https://www.pccomponentes.com/portatil-hp">HP</a>, <a class="underline" href="https://www.pccomponentes.com/portatil-acer">Acer</a>, <a class="underline" href="https://www.pccomponentes.com/portatiles-msi">MSI</a>, <a class="underline" href="https://www.pccomponentes.com/portatiles-lenovo">Lenovo</a>, <a class="underline" href="https://www.pccomponentes.com/portatiles-dell">Dell</a>, <a class="underline" href="https://www.pccomponentes.com/portatiles/gigabyte">Gigabyte</a>, <a class="underline" href="https://www.pccomponentes.com/portatiles/lg">LG</a>, <a class="underline" href="https://www.pccomponentes.com/portatil-asus">Asus</a> y <a class="underline" href="https://www.pccomponentes.com/macbook">Macbook</a>. Visita nuestra sección de <a class="underline" href="https://www.pccomponentes.com/portatiles-baratos">portátiles baratos</a>.</p>
    </div>
</div>
<div id="sideBar">
    <section id="filter">
        <div id="popularFilter">
            <h4>Filtros populares</h4>
            <ul>
                <li class="hoverGrey">Asus VivoBook 15</li>
                <li class="hoverGrey">Acer Nitro 5</li>
                <li class="hoverGrey">LG Gram</li>
                <li class="hoverGrey">MacBook Air M3</li>
            </ul>
            <button id="resetFilter" class="hoverGrey">Borrar filtros</button>
        </div>
        <div id="filterSearch">
            <h4>Búsqueda de filtros</h4>
            <input type="search" name="searchingFilter" id="searchingFilter" placeholder="Buscar...">
        </div>
       <div id="priceFilter" class="open" class="hoverGrey">
            <h4 class="hoverGrey">Precio</h4>
            <input type="range" name="priceRange" id="priceRange" min="148" max="8994" step="20">
            <div>
                <p class="box">149€</p>
                <p>-</p>
                <p class="box">8994€</p>
            </div>
       </div>
        <div id="brandFilter" class="open" class="hoverGrey">
            <h4 class="hoverGrey">Marcas</h4>
            <input type="search" name="brandSearch" id="brandSearch" placeholder="Buscar...">
            <ul>
                <li>
                    <input type="checkbox" name="asus" id="asus">
                    <label for="asus">Asus</label>
                </li>
                <li>
                    <input type="checkbox" name="hp" id="hp">
                    <label for="hp">HP</label>
                </li>
                <li>
                    <input type="checkbox" name="lenovo" id="lenovo">
                    <label for="lenovo">Lenovo</label>
                </li>
                <li>
                    <input type="checkbox" name="MSI" id="MSI">
                    <label for="MSI">MSI</label>
                </li>
                <li>
                    <input type="checkbox" name="apple" id="apple">
                    <label for="apple">Apple</label>
                </li>
            </ul>
            <button class="showMore hoverGrey">Ver más</button>
        </div>
        <div id="pcType" class="open" class="hoverGrey">
            <h4 class="hoverGrey">Tipo de Portátil</h4>
            <ul>
                <li>
                    <input type="checkbox" name="gaming" id="gaming">
                    <label for="gaming">Gaming</label>
                </li>
                <li>
                    <input type="checkbox" name="work" id="work">
                    <label for="work">Para estudiar o trabajar</label>
                </li>
                <li>
                    <input type="checkbox" name="ultrabook" id="ultrabook">
                    <label for="ultrabook">Ultrabook</label>
                </li>
                <li>
                    <input type="checkbox" name="convertible" id="convertible">
                    <label for="convertible">2 en 1 Convertible</label>
                </li>
                <li>
                    <input type="checkbox" name="workstation" id="workstation">
                    <label for="workstation">Workstation</label>
                </li>
            </ul>
            <button class="showMore hoverGrey">Ver más</button>
        </div>
        <div id="processorFilter" class="open">
            <h4 class="hoverGrey">Procesador</h4>
            <input type="search" name="processorSearch" id="processorSearch" placeholder="Buscar...">
            <ul>
                <li>
                    <input type="checkbox" name="i7" id="i7">
                    <label for="i7">Intel Core i7</label>
                </li>
                <li>
                    <input type="checkbox" name="i5" id="i5">
                    <label for="i5">Intel Core i5</label>
                </li>
                <li>
                    <input type="checkbox" name="i9" id="i9">
                    <label for="i9">Intel Core i9</label>
                </li>
                <li>
                    <input type="checkbox" name="ryzen7" id="ryzen7">
                    <label for="ryzen7">AMD Ryzen 7</label>
                </li>
            </ul>
            <button class="showMore hoverGrey">Ver más</button>
        </div>
        <div id="moreFilter">
            <ul>
                <li>Memoria RAM</li>
                <li>Tarjeta Gráfica</li>
                <li>Sistema Operativo</li>
                <li>Idioma del Teclado</li>
                <li>Pulgadas</li>
                <li>Almacenamiento SSD</li>
                <li>Inteligencia Artificial</li>
                <li>Tipo Pantalla</li>
                <li>Tipo Memoria</li>
                <li>Resolución</li>
                <li>Conexiones</li>
                <li>Almacenamiento</li>
                <li>Frecuencia de Refresco</li>
                <li>Clase de Teclado</li>
                <li>Color</li>
                <li>Conectividad</li>
                <li>Baterías</li>
                <li>Características Especiales</li>
                <li>Pccom</li>
                <li>Generación</li>
                <li>Unidad Óptica</li>
                <li>Destacados</li>
                <li>Entrega</li>
                <li>Vendido por</li>
                <li>Valoración</li>
                <li>Disponibilidad en tienda</li>
                <li>Estado del Artículo</li>
            </ul>
        </div>
    <section id="blogLinks">
        <ul>
            <li><a href="https://www.pccomponentes.com/mejor-portatil-gamer-calidad-precio">Mejores portátiles relación calidad precio</a></li>
            <li><a href="https://www.pccomponentes.com/como-elegir-el-mejor-portatil-para-ti">¿Cómo elegir un portátil?</a></li>
            <li><a href="https://www.pccomponentes.com/como-elegir-un-portatil-para-estudiantes">¿Cómo elegir portátil para un estudiante?</a></li>
            <li><a href="https://www.pccomponentes.com/como-elegir-mejor-portatil-para-trabajar">¿Cómo elegir el mejor portátil para trabajar?</a></li>
            <li><a href="https://www.pccomponentes.com/mejores-portatiles-gaming">Mejores portátiles gaming</a></li>
            <li><a href="https://www.pccomponentes.com/mejores-portatiles-ligeros">Mejores portátiles ligeros</a></li>
            <li><a href="https://www.pccomponentes.com/mejores-portatiles-para-ninos">Mejores portátiles para niños</a></li>
            <li><a href="https://www.pccomponentes.com/mejores-marcas-de-portatiles">Mejores marcas de ordenadores portátiles</a></li>
        </ul>
    </section>
</div>
<div id="mainContent">
</div>
`

const mainContent = document.querySelector("#mainContent");
const filterList = document.createElement("ul");
filterList.id = "filterList";
for (const filter of filters) {
    const filterElement = document.createElement("li");
    filterElement.innerHTML = `
    <div>
        <img src="${filter.image}" alt="${filter.imageDescription}"/>
    </div>
    <p>${filter.name}</p>
    `
    filterList.appendChild(filterElement);
}
mainContent.appendChild(filterList);

const compare = document.createElement("div");
compare.id="compare";
mainContent.appendChild(compare);

const compareBtn = document.createElement("button");
compareBtn.innerText = "Comparar";
compare.appendChild(compareBtn);

const comparisonElements = document.createElement("ul");
comparisonElements.innerHTML = `
    <li class="selected">Relevancia</li>
    <li id="filterByLowestPrice">Precio más bajo</li>
    <li id="filterByHighestPrice">Precio más alto</li>
    <li>Más vendidos</li>
    <li id="filterByDiscount">Oferta</li>
    <li id="filterByStars">Mejor valorados</li>
    <li>Novedades</li>
`
compare.appendChild(comparisonElements);

const productCounter = document.createElement("p");
productCounter.innerText = "2325 artículos";
compare.appendChild(productCounter);

const productSection = document.createElement("section");
productSection.id="products";
const productList = document.createElement("ul");

for (const product of products) {
    const productItem = document.createElement("li");
    product.finalPrice = salePrice(product.price, product.offer);
    productItem.innerHTML = `
    <div>
        <p>-${product.offer}%</p>
        <a href="${product.url}">
            <img src="${product.image}" alt="${product.name}">
        </a>
    </div>
    <h2>${product.name}</h2>
    <div id="prices">
        <p>${product.finalPrice}€</p>
        <p id="price">${product.price}€</p>
    </div>
    <div id="reviews">
        <p>${product.stars}/5</p>
        <img src="./assets/star.svg" alt="star">
        <p>${product.reviews} opiniones</p>
    </div>
    <div id="shipping">
        <img src="./assets/favicon.png" alt="PcComponentes logo">
        <p><span>Envío gratis.</span> ${shipping(product.seller)}</p>
    </div>
    `
    productItem.dataset.price = product.finalPrice;
    productItem.dataset.discount = product.offer;
    productItem.dataset.stars = product.stars;
    productList.appendChild(productItem);
}
productSection.appendChild(productList);

const pageCounter = document.createElement("div");
pageCounter.id = "pageCounter";
pageCounter.innerHTML = `
<p>Página 1 de 60</p>
<a href="https://www.pccomponentes.com/portatiles?page=2">⟩</a>
`
productSection.appendChild(pageCounter);

mainContent.appendChild(productSection);

const aside = document.querySelector("aside");
aside.innerHTML = `
<h4>Páginas relacionadas</h4>
<ul>
    <li><a href="https://www.pccomponentes.com/portatiles/lenovo-loq">lenovo loq</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/hp-victus-16">hp victus 16</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/acer-aspire-3">acer aspire 3</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/surface-pro-9">surface pro 9</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/macbook-air-m2">macbook air m2</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/lenovo-ideapad-3">lenovo ideapad 3</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/chromebook-tactil">chromebook tactil</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/msi-cyborg-15">msi cyborg 15</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/asus-zenbook-14">asus zenbook 14</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/lenovo-legion-5">lenovo legion 5</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/pccom-revolt">pccom revolt</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/macbook-pro-m3">mackbook pro m3</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/lenovo-v15">lenovo v15</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/hp-victus-15">hp victus 15</a></li>
    <li><a href="https://www.pccomponentes.com/monitores-pc/asus-oled">asus oled</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/portatiles-ligeros">portátiles ligeros</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/msi-thin-gf63">msi thing gf63</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/samsung-galaxy-book">samsung galaxy book</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/macbook-pro-m1">macbook pro m1</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/msi-katana-15">msi katana 15</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/msi-katana-17">msi katana 17</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/surface-pro-11">surface pro 11</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/asus-tuf-gaming-a15">asus tuf gaming a15</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/asus-vivobook-16x">asus vivobook 16x</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/asus-tuf-a15">asus tuf a15</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/asus-rog-zephyrus-g16">asus rog zephyrus g16</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/macbook-pro-m2">macbook pro m2</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/lenovo-ideapad-slim-3">lenovo ideapad slim 3</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/microsoft-surface-pro">microsoft surface pro</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles/asus-tuf-f15">asus tuf f15</a></li>
</ul>
`

const footer = document.querySelector("footer");
footer.innerHTML = `
<div id="links">
    <div id="info">
        <h4>Por qué comprar</h4>
        <ul>
            <li><a href="https://help.pccomponentes.com/hc/es-es/categories/19806130438813-C%C3%B3mo-comprar">Cómo comprar</a></li>
            <li><a href="https://help.pccomponentes.com/hc/es-es/articles/19503812615197--C%C3%B3mo-puedo-pagar-en-PcComponentes">Formas de pago</a></li>
            <li><a href="https://help.pccomponentes.com/hc/es-es/articles/19503927607709-Gastos-de-env%C3%ADo">Gastos de envío</a></li>
            <li><a href="https://www.pccomponentes.com/cupones-descuento-y-codigos-promocionales">Cupones descuento</a></li>
            <li><a href="https://help.pccomponentes.com/hc/es-es">Preguntas frecuentes</a></li>
            <li><a href="https://www.pccomponentes.com/opiniones">Opiniones de clientes</a></li>
            <li><a href="https://www.pccomponentes.com/tarjetas-regalo">Tarjetas regalo</a></li>
        </ul>
    </div>
    <div id="about">
        <h4>Quiénes somos</h4>
        <ul>
            <li><a href="https://www.pccomponentes.com/quienes-somos">Quiénes somos</a></li>
            <li><a href="https://www.pccomponentes.com/compromisos">Compromisos</a></li>
            <li><a href="https://www.pccomponentes.com/tiendas">Nuestras tiendas</a></li>
            <li><a href="https://www.pccomponentes.com/nuestras-marcas">Nuestras marcas</a></li>
            <li><a href="https://www.pccomponentes.com/condiciones-de-compra">Condiciones de compra</a></li>
            <li><a href="https://www.pccomponentes.com/afiliados">Afiliados</a></li>
            <li><a href="https://www.pccomponentes.com/aviso-legal">Aviso legal</a></li>
            <li><a href="https://www.pccomponentes.com/privacidad">Privacidad</a></li>
            <li><a href="https://www.pccomponentes.com/condiciones-generales-de-marketplace">Condiciones Generales Marketplace</a></li>
            
        </ul>
    </div>
    <div id="contact">
        <h4>Contactar</h4>
        <ul>
            <li><a href="https://www.pccomponentes.com/soporte/contacto">Contacto y Ayuda</a></li>
            <li><a href="https://help.pccomponentes.com/hc/es-es/categories/19806195784221-Garant%C3%ADas-y-devoluciones">Devoluciones y Garantías</a></li>
            <li><a href="https://www.pccomponentes.com/wiki">Wiki PcComponentes</a></li>
            <li><a href="https://www.pccomponentes.com/opina-y-gana">Opina y Gana</a></li>
            <li><a href="https://pcads.pccomponentes.com/">Publicidad</a></li>
            <li><a href="https://jobs.pccomponentes.com/">Trabaja con nosotros</a></li>
            <li><a href="https://pccomponentes.canaletico.app/inicio">Canal ético</a></li>
            <li><a href="https://www.pccomponentes.com/cookies">Política de cookies</a></li>
        </ul>
    </div>
    <div id="other">
        <h4>Otros</h4>
        <ul>
            <li><a href="https://www.pccomponentes.com/replay">Replay</a></li>
            <li><a href="https://www.pccomponentes.com/black-friday">Black Friday</a></li>
            <li><a href="https://www.pccomponentes.com/cyber-monday">Cyber Monday</a></li>
            <li><a href="https://www.pccomponentes.com/pcdays">PcDays</a></li>
            <li><a href="https://www.pccomponentes.com/marketplace">Marketplace</a></li>
            <li><a href="https://fulfillment.pccomponentes.com/">Servicio logístico Fulfillment</a></li>
            <li><a href="https://www.pccomponentes.com/servicio-de-reparaciones">Servicio de reparaciones</a></li>
            <li><a href="https://www.pccomponentes.com/concursos-pccomponentes">Concursos</a></li>
            <li><a href="https://www.pccomponentes.com/servicio-tecnico-remoto-asre">Cita asistencia técnica</a></li>
            <li><a href="https://www.pccomponentes.com/programa-embajadores">Programa de embajadores</a></li>
        </ul>
    </div>
    <div id="comunity">
        <h4>Comunidad</h4>
        <ul>
            <li>
                <a href="https://www.pccomponentes.com/blog">
                    <img src="./assets/favicon.png" alt="PcComponentes icon">
                    <p>Blog</p>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/pccomponentes/">
                    <img src="./assets/instagram.png" alt="Instagram logo">
                    <p>Instagram</p>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/pccomponentes">
                    <img src="./assets/twitter.png" alt="Twitter logo">
                    <p>Twitter</p>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/pccomponentes">
                    <img src="./assets/facebook.png" alt="Facebook logo">
                    <p>Facebook</p>
                </a>
            </li>
            <li>
                <a href="https://t.me/pccomponentesESP">
                    <img src="./assets/telegrama.png" alt="Telegram logo">
                    <p>Telegram</p>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/user/PcComponentescom">
                    <img src="./assets/youtube.png" alt="Youtube logo">
                    <p>Youtube</p>
                </a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@pccomponentes.com">
                    <img src="./assets/tik-tok.png" alt="TikTok logo">
                    <p>TikTok</p>
                </a>
            </li>
            <li>
                <a href="https://www.twitch.tv/pccomponenteses">
                    <img src="./assets/twitch.png" alt="Twitch logo">
                    <p>Twitch</p>
                </a>
            </li>
        </ul>
    </div>
    <div>
        <h4>PcComponentes en</h4>
        <select name="country" id="country">
            <option value="spain">España</option>
            <option value="portugal">Portugal</option>
            <option value="frace">Francia</option>
            <option value="italy">Italia</option>
            <option value="germany">Alemania</option>
        </select>
        <div id="awards">
            <img src="./assets/eawards.png" alt="eawards logo">
            <img src="./assets/ecommerceawards.png" alt="e-commerce awards españa logo">
        </div>
        <div id="paymentMethods">
            <img src="./assets/maestro.svg" alt="Maestro logo">
            <img src="./assets/mastercard.svg" alt="Mastercard logo">
            <img src="./assets/visa.svg" alt="Visa logo">
            <img src="./assets/paypal.svg" alt="PayPal logo">
        </div>
    </div>
</div>
<p id="adress">PC Componentes y Multimedia SLU CIF B73347494. AVDA Europa, Parcela 2-5 y 2-6. Polígono industrial Las Salinas, 30840, Alhama de Murcia, Murcia. ESPAÑA.</p>
`

// EVENTS
const filterByLowestPrice = document.querySelector("#filterByLowestPrice");
filterByLowestPrice.addEventListener("click", () => {
    
    sortListByPrice(productList, "asc");
});

const filterByHighestPrice = document.querySelector("#filterByHighestPrice");
filterByHighestPrice.addEventListener("click", () => {
    sortListByPrice(productList, "desc");
});

const filterByStars = document.querySelector("#filterByStars");
filterByStars.addEventListener("click", () => {
    sortListByStars(productList, "desc");
});

const filterByDiscount = document.querySelector("#filterByDiscount");
filterByDiscount.addEventListener("click", () => {
    sortListByDiscount(productList, "desc");
});

comparisonElements.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    comparisonElements.querySelectorAll("li").forEach(li => li.classList.remove("selected"));
    event.target.classList.add("selected");
  }
});
