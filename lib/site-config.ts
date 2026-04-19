export const siteConfig = {
  brand: {
    name: 'Jessika Tavares Makeup',
    tagline: 'Curso de automaquiagem "a sua melhor versão em minutos" com o meu método make express.',
    primaryButton: 'Saiba mais sobre o curso',
    secondaryButton: 'Conheça meu trabalho',
  },
  hero: {
    title: 'Aprenda maquiagem do básico ao profissional.',
    description:
      '',
    image: '/images/IMG_4002.JPG.webp',
    cardTitle: 'Jéssica Tavares',
    cardText: 'Maquiadora profissional, especialista em pele blindada. Ensinando mulheres a viverem de maquiagem.',
  },
  about: {
    eyebrow: '',
    title: 'Realce sua beleza com uma experiência única.',
    text: 'Pronta para destacar o que você tem de melhor ? Conheça meus serviços abaixo e encontre a produção ideal para você.',
    highlights: [
      'Noivas',
      'Formandas',
      'Maquigem social',
    ],
    image: '/images/IMG_4004.JPG.webp',
  },
  services: {
    eyebrow: 'Serviços',
    title: '',
    items: [
      {
        title: 'Noivas',
        image:'/images/IMG_4012.JPG.webp',
        description: 'Beleza inesquecivel para tornar seu grande dia ainda mais especial.',
      },
      {
        title: 'Formandas',
        image:'/images/IMG_4011.JPG.webp',
        description: 'Destaque sua conquista com uma beleza autênctica na sua formatura.',
      },
      {
        title: 'Maquiagem social',
        image:'/images/IMG_4007.JPG.webp',
        description: 'Um visual ímpecavel e sofisticado para você brilhar em qualquer evento.',
      },
    ],
  },
 
  location: {
    eyebrow: 'Localização',
    title: '',
    address: 'Rua engenheiro coelho sobrinho 40',
    city: 'Cajazeiras-PB',
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7922.012413404315!2d-38.5628166!3d-6.8898589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a473843a019e8b%3A0x6145b0ee3d297c96!2sR.%20Eng.%20Coelho%20Sobrinho%2C%2040%20-%20Centro%2C%20Cajazeiras%20-%20PB%2C%2058900-000!5e0!3m2!1spt-BR!2sbr!4v1776620358549!5m2!1spt-BR!2sbr",
  },
  contact: {
    eyebrow: 'Entre em contato',
    title: '',
    description: '',
    whatsappNumber: '5583991344009',
    whatsappMessage: 'Olá, quero saber mais informações.',
    instagram: 'https://www.instagram.com/maquiadora_jessicatavares?igsh=aTM4ZTZkYTB0anE1',
    
    floatingButtonText: 'Entrar em contato',
  },
  
};

export type SiteConfig = typeof siteConfig;
