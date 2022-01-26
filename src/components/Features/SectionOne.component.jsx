import React from 'react'
import images from '../../assets/img-index.js'
import styles from './styles/SectionOne.module.css'

const { EditorMob, EditorDesk } = images

const headingText =
  'text-2xl font-heading font-semibold text-blue-800 mb-3.5 text-center z-40 w-3/5 md:text-3xl md:text-left md:w-full'
const subHeading = 'md:pl-20 lg:pl-28'
const pText =
  'px-10 mb-12 text-center leading-relaxed tracking-wider font-light font-heading text-blue-gray-800 md:text-left md:px-20 lg:px-28'

const SectionOne = () => (
  <div className="flex flex-col justify-center items-center pt-20 pb-12 md:pb-36 md:pt-24 lg:pt-32">
    <h2
      className={`pb-12 md:pb-20 lg:pb-28 w-full md:text-center ${headingText}`}
    >
      Designed for the future
    </h2>
    <div className="relative flex flex-col justify-center items-center md:grid md:grid-cols-2 md:grid-rows-1">
      <div
        className={`md:absolute mb-14 col-start-2 col-end-3 ${styles.imgWrapper}`}
      >
        <picture>
          <source srcSet={EditorDesk} media="(min-width: 1024px)" />
          <img className="w-full" src={EditorMob} alt="" />
        </picture>
      </div>
      <div className="flex flex-col justify-center items-center row-start-1 md:items-start">
        <h2 className={`${subHeading} ${headingText}`}>
          Introducing an extensible editor
        </h2>
        <p className={`${pText}`}>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h2 className={`${subHeading} ${headingText}`}>
          Robust content management
        </h2>
        <p className={`${pText}`}>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </div>
    </div>
  </div>
)

export default SectionOne
