import S from './styles.module.scss' 

export function Buttons({ name }) {
   return(

         <button className={S.btn}>  
            {name}
         </button>

   )
}