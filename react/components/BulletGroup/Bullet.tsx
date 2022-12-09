import React from 'react'
import { Link } from 'vtex.render-runtime'
import { LinkProps } from './BulletTypes'
import { useCssHandles } from 'vtex.css-handles'

import "./styles.css"

type Props = {
  image: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({ image, titleBullet, link }: Props) => {
  const CSS_HANDLES = [
    "bullet__item",
    "bullet__item--titleBullet",
    "bullet__item--image",
    "bullet__item--link"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className= {handles.bullet__item}>
      <Link to={link.url} className= {handles["bullet__item--link"]}>
        <img src={image} className = {handles["bullet__item--image"]}/>
        <p className={handles["bullet__item--titleBullet"]}>{titleBullet}</p>
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "Imagen de Bullet",
      type: "string",
      widget: {
        "ui.widget": "image-uploader"
      }
    }
  }
}

export default Bullet

