import { Video, ShieldCheck, Users, Trophy, Award, Zap } from 'lucide-react';
import { Feature, Module, Testimonial, FaqItem } from './types';

// --- IMAGENS ---
// ATENÇÃO: Substitua as URLs abaixo pelas imagens do seu domínio 
// Exemplo: 'https://www.escoladeskateonline.com/imagens/hero.jpg'

export const IMAGES = {
  heroBg: 'https://images.unsplash.com/photo-1520045864981-8a8a325233e1?q=80&w=1920&auto=format&fit=crop',
  instructor: '/instructor.jpg', // Imagem local do instrutor
  moduleBeginner: 'https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?q=80&w=600&auto=format&fit=crop',
  moduleAdvanced: 'https://images.unsplash.com/photo-1566796125843-42a5b02cc95c?q=80&w=600&auto=format&fit=crop',
  logoPlaceholder: 'https://via.placeholder.com/150x50/FFC700/000000?text=ESCOLA+SKATE', 
};

export const SITE_DATA = {
  price: "197,00",
  originalPrice: "497,00",
  checkoutUrl: "https://pay.hotmart.com/V47894709T?checkoutMode=2" // Link para o checkout (Hotmart, Eduzz, etc)
};

export const FEATURES: Feature[] = [
  {
    title: "Aulas 100% Online",
    description: "Assista quando e onde quiser, pelo celular ou computador.",
    icon: Video
  },
  {
    title: "Método Passo a Passo",
    description: "Do zero absoluto até as manobras avançadas.",
    icon: Trophy
  },
  {
    title: "Comunidade Exclusiva",
    description: "Troque ideias e vídeos com outros alunos e evolua junto.",
    icon: Users
  },
  {
    title: "Certificado de Conclusão",
    description: "Ao finalizar o curso, você recebe seu certificado oficial.",
    icon: Award
  }
];

export const MODULES: Module[] = [
  {
    title: "Módulo 1: A Base Sólida",
    items: ["Escolhendo o skate ideal", "Posicionamento dos pés (Base)", "Remada e Equilíbrio", "Como cair sem se machucar"]
  },
  {
    title: "Módulo 2: Primeiras Manobras",
    items: ["Ollie: O segredo do pulo", "Shove-it", "Manual", "Subindo e descendo calçadas"]
  },
  {
    title: "Módulo 3: Street Avançado",
    items: ["Flip (Kickflip)", "Heelflip", "Grinds e Slides (Corrimão e Borda)", "Linhas e fluidez"]
  },
  {
    title: "Módulo 4: Pista e Transições",
    items: ["Dropar na rampa", "Rock to Fakie", "Axle Stall", "Curvas em velocidade"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Gabriel Silva",
    role: "Aluno Iniciante",
    content: "Eu tinha medo até de subir no skate. Em 2 semanas já estava dando meu primeiro Ollie. O método é muito seguro!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Mariana Souza",
    role: "Aluna Intermediária",
    content: "Sempre travei no Flip. As dicas de correção de postura do curso foram essenciais. Finalmente acertei!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Pedro Santos",
    role: "Aluno Avançado",
    content: "O melhor investimento que fiz. A comunidade ajuda demais a manter a motivação.",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Preciso ter experiência prévia?",
    answer: "Não! O curso foi desenhado para quem nunca subiu em um skate, ensinando desde como escolher as peças até as manobras."
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "O acesso é vitalício. Você paga uma vez e o curso é seu para sempre, incluindo atualizações."
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro."
  },
  {
    question: "O curso serve para crianças?",
    answer: "Não. O Curso é ideal para pessoas acima de 15 anos. No caso de crianças, indicamos que os pais assistam e pratiquem junto aos filhos."
  }
];