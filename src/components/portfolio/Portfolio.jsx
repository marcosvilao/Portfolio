import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/eventix.png'
import IMG2 from '../../assets/countries.png'
import IMG3 from '../../assets/pokemons.png'
import IMG4 from '../../assets/todoapp.png'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Eventix</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Marcosvilaobarrio/Eventix" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://eventix-snowy.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>Countries</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Marcosvilaobarrio/BACKEND-COUNTRIES" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Marcosvilaobarrio/FRONTEND-COUNTRIES" className='btn btn-primary' target='_blank' rel="noreferrer">No Deploy</a>
            </div>
          
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Pokemons</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Marcosvilaobarrio/PI-POKEMON" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Marcosvilaobarrio/PI-POKEMON" className='btn btn-primary' target='_blank' rel="noreferrer">No Deploy</a>
            </div>
          
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>To do App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Marcosvilaobarrio/ToDoApp" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Marcosvilaobarrio/ToDoApp" className='btn btn-primary' target='_blank' rel="noreferrer">No Deploy</a>
            </div>
          
        </article>
      </div>
    </section>
  )
}
