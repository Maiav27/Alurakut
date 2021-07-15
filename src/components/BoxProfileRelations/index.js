
const BoxProfileRelations = (props) => {
 return (
     <>
    <h2 className='smallTitle'>
    {props.name} ({props.array.length})
  </h2>
  <ul>
   {  
    props.array.map((iremAtual, index) => {
  
     if(index <= 5){

       return(
         
         <li key={itemAtual.id}>
            <a href={`/users/${iremAtual.titulo}`} > 
              <img src={iremAtual.imagem} alt="" />
              <span key={iremAtual.titulo}>{iremAtual.titulo}</span>
            </a>
         </li>
       )
     }
   })}
  </ul>
  </>
 )
}