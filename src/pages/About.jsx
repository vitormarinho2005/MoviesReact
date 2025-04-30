import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <h1>Sobre o Projeto</h1>
      <p>
        Este é um catálogo de filmes inspirado na Netflix, desenvolvido com React e Vite.
        O projeto consome a API do TMDB para listar filmes populares, mostrar detalhes
        e permitir que usuários explorem conteúdos visuais com uma interface moderna e responsiva.
      </p>
    </div>
  );
}
