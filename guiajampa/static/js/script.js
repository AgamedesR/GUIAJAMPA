// Task 08 - Inicializa o mapa centralizado em João Pessoa
const mapa = L.map('mapa').setView([-7.1195, -34.8450], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

// Task 09 - Marcadores fixos dos pontos turísticos
const pontos = [
    {
        nome: "Farol do Cabo Branco",
        descricao: "Símbolo de JP, ponto mais oriental das Américas.",
        lat: -7.1497,
        lng: -34.7943,
        link: "https://maps.google.com/?q=Farol+do+Cabo+Branco+João+Pessoa"
    },
    {
        nome: "Praia de Tambaú",
        descricao: "Uma das praias mais famosas da cidade.",
        lat: -7.1183,
        lng: -34.8303,
        link: "https://maps.google.com/?q=Praia+de+Tambaú+João+Pessoa"
    },
    {
        nome: "Ponta do Seixas",
        descricao: "Ponto geograficamente mais oriental das Américas.",
        lat: -7.1533,
        lng: -34.7928,
        link: "https://maps.google.com/?q=Ponta+do+Seixas+João+Pessoa"
    },
    {
        nome: "Parque Solon de Lucena",
        descricao: "Cartão-postal da cidade, rodeado por palmeiras imperiais.",
        lat: -7.1195,
        lng: -34.8639,
        link: "https://maps.google.com/?q=Parque+Solon+de+Lucena+João+Pessoa"
    },
    {
        nome: "Centro Histórico",
        descricao: "Conjunto arquitetônico colonial com igrejas barrocas.",
        lat: -7.1200,
        lng: -34.8700,
        link: "https://maps.google.com/?q=Centro+Histórico+João+Pessoa"
    },
    {
        nome: "Jardim Botânico",
        descricao: "Um dos maiores do Brasil, com mais de 500 espécies.",
        lat: -7.1133,
        lng: -34.8322,
        link: "https://maps.google.com/?q=Jardim+Botânico+João+Pessoa"
    },
    {
        nome: "Shopping Manaíra",
        descricao: "Maior shopping da cidade, com cinema IMAX.",
        lat: -7.1017,
        lng: -34.8300,
        link: "https://maps.google.com/?q=Shopping+Manaíra+João+Pessoa"
    },
    {
        nome: "Praia do Bessa",
        descricao: "Área nobre com estrutura para famílias e esportes aquáticos.",
        lat: -7.0917,
        lng: -34.8328,
        link: "https://maps.google.com/?q=Praia+do+Bessa+João+Pessoa"
    }
];

// Task 09, 10, 11 - Adiciona marcadores com hover e clique
pontos.forEach(ponto => {
    const marcador = L.marker([ponto.lat, ponto.lng]).addTo(mapa);

    // Task 10 - Hover com preview
    marcador.bindTooltip(`
        <strong>${ponto.nome}</strong><br>
        <small>${ponto.descricao}</small>
    `, { direction: 'top', offset: [0, -10] });

    // Task 11 - Clique → abre no Google Maps
    marcador.on('click', () => {
        window.open(ponto.link, '_blank');
    });
});