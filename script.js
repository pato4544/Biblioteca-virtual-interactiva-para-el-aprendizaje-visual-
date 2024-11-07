// script.js

// Data de ejemplo para mostrar
const topicsData = {
    science: [
      { title: "Física Cuántica", img: "img/fisicacuantica.jpg", description: "Explora los fundamentos de la física cuántica." },
      { title: "Anatomía", img: "img/anatomia.jpg", description: "Aprende sobre el cuerpo humano." }
    ],
    history: [
      { title: "Edad Media", img: "img/edadmedia.jpg", description: "Conoce la historia de la Edad Media." },
      { title: "Revolución Industrial", img: "img/revindustrial.jpg", description: "Los inicios de la tecnología moderna." }
    ],
    technology: [
      { title: "Inteligencia Artificial", img: "img/ia.jpg", description: "Descubre el mundo de la IA." },
      { title: "Blockchain", img: "img/blockchain.jpg", description: "Cómo funciona la tecnología blockchain." }
    ]
  };
  
  // Función para cargar tarjetas basadas en el tema seleccionado
  function loadTopics(topic) {
    const topicsContainer = document.getElementById('topics');
    topicsContainer.innerHTML = ''; // Limpiar contenido previo
  
    const selectedTopics = topicsData[topic] || [];
    selectedTopics.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      topicsContainer.appendChild(card);
    });
  }
  
  // Asignar evento de clic a cada enlace del tema
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const topic = link.getAttribute('data-topic');
      loadTopics(topic);
    });
  });
  
  // Cargar tema inicial (ej. Ciencia)
  loadTopics('science');
  