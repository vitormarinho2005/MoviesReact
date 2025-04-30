import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // básico
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

export default function Carousel({ movies }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="carousel-title">{movie.title}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
