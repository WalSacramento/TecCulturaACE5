import Button from 'react-bootstrap/Button'


import S from './styles.module.scss'

export function Title({ title }) {
  const titleName = title ? title : 'Mostra TecCultura'
  return (
    <>
      <p className={S.title}>{titleName}</p>
      
    </>
  )
}
