import React from 'react'
import images from '../../assets/img-index.js'

const { EditorMob } = images

const headingText =
  'text-2xl font-heading font-semibold text-blue-800 mb-3.5 text-center w-3/5'
const pText =
  'px-10 text-center leading-relaxed tracking-wider font-light font-heading text-blue-gray-800'

const SectionOne = () => (
  <div className="flex flex-col justify-center items-center pt-20">
    <h2 className={`pb-12 w-full ${headingText}`}>Designed for the future</h2>
    <div className="mb-14">
      <img className="w-full" src={EditorMob} alt="" />
    </div>
    <h2 className={` ${headingText}`}>Introducing an extensible editor</h2>
    <p className={`mb-12 ${pText}`}>
      Blogr features an exceedingly intuitive interface which lets you focus on
      one thing: creating content. The editor supports management of multiple
      blogs and allows easy manipulation of embeds such as images, videos, and
      Markdown. Extensibility with plugins and themes provide easy ways to add
      functionality or change the looks of a blog.
    </p>
    <h2 className={` ${headingText}`}>Robust content management</h2>
    <p className={`mb-12 ${pText}`}>
      Flexible content management enables users to easily move through posts.
      Increase the usability of your blog by adding customized categories,
      sections, format, or flow. With this functionality, you’re in full
      control.
    </p>
  </div>
)

export default SectionOne
