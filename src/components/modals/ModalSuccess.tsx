import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  image: string
  title: string
  children?: JSX.Element
}

const ModalSuccess = ({ image, children, title }: Props) => {
  return (
    <div className='container__modal--success'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <figure className='container__modal--success--img'>
          <img src={image} alt={title} className='img' />
        </figure>
      </motion.div>
      <p className='container__modal--text'>{title}</p>
      {children}
    </div>
  )
}

export default ModalSuccess
