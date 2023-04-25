import S from "./styles.module.scss";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from 'react-router-dom';

export function Cards({ src, title, description, nameBtn, to }) {
  return (
    
      <Card className={S.cardItem}>
        
        <Card.Img
          variant="top"
          src={src}
          style={{height: '298.5px'}}
        />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <div className={S.divBtns}>
            <Link to={to}>
               <Button variant="primary">{nameBtn}</Button>
            </Link>
          </div>

        </Card.Body>
      </Card>

      
  
  );
}
