import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>User research and analysis</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Interaction design</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Visual design</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Usability testing</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Adaptability</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BsCheck className='service__list-icon'/>
              <p>Code proficiency</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Adaptability</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Problem-solving</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Communication</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Attention to detail</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Technical knowledge</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Time management</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BsCheck className='service__list-icon'/>
              <p>Writing proficiency</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Creativity</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Research skills</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Adaptability</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Communication</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}
