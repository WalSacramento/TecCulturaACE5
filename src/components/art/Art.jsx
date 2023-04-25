import S from './styles.module.scss'
import Card from 'react-bootstrap/Card';


export function Art({src, title, description}) {
   return (
      <Card style={{border:'none'}}>
         <div className={S.imagem}>
            <Card.Img 
               variant="top"
               src={src}
               style={{width: '750px'}
               }
            />
         </div>

        <div className={S.TextCardArtItem}>
         <Card.Body>
            {/* <Card.Title style={{fontSize: '35px'}}>{title}</Card.Title> */}
            <Card.Text >{description}</Card.Text>
         </Card.Body>
        </div>

      </Card>
  );
}

