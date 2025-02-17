import React from 'react'
import SkillsComponent from './SkillsComponent'
import html from '/skill/html.png'
import css from '/skill/css.png'
import js from '/skill/js.png'
import tailwind from '/skill/tailwind.png'
import react from '/skill/react.png'
import next from '/skill/next.png'
import node from '/skill/node.png'
import express from '/skill/express.png'
import mongo from '/skill/mongo.png'
import wordpress from '/skill/wordpress.png'
import github from '/skill/github.png'
import git from '/skill/git.png'

export default function Skills() {
  return (
    <div className='pt-10'>
      <h1 className='text-center text-5xl'>SKILLS</h1>
      <section className='flex justify-center lg:mx-10 mx-2 mt-10 pb-5 flex-wrap gap-2'>
        <SkillsComponent img={html} title='HTML 5' />
        <SkillsComponent img={css} title='CSS 3' />
        <SkillsComponent img={js} title='JAVASCRIPT' />
        <SkillsComponent img={react} title='REACT JS' />
        <SkillsComponent img={next} title='NEXT JS' />
        <SkillsComponent img={node} title='NODE JS' />
        <SkillsComponent img={express} title='EXPRESS JS' />
        <SkillsComponent img={mongo} title='MONGO DB' />
        <SkillsComponent img={wordpress} title='WORDPRESS' />
        <SkillsComponent img={tailwind} title='TAILWIND CSS' />
        <SkillsComponent img={git} title='GIT' />
        <SkillsComponent img={github} title='GITHUB' />
      </section>
    </div>
  )
}
