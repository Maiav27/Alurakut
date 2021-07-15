
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import Welcome from '../src/components/Welcome'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { useState } from 'react';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

   
const ProfileSideBar = (props) => {
  return(
    <Box as='aside' >
      <img src={`https://github.com/${props.user}.png`} alt="" style={{borderRadius : '8px'}} />
      <hr />
       <p>
        <a className="boxLink" href={`http://github.com/${props.user}`}>@{props.user}</a>
       </p>

      <hr />
      <AlurakutProfileSidebarMenuDefault/>
  </Box>  
  )
}
 






export default function Home() {
  
  const [comunidades, setComunidades] = useState([])

  const handleCriarComunidade = (e) => {
    e.preventDefault()
    
    console.log(document.getElementsByName('title')[0].value)
 
    const dadosDoForm = new FormData(e.target)

  
    
    if(!(dadosDoForm.get('title') === '') || !(dadosDoForm.get('image') === '')){
           console.log('entrou')
      const comunidade = {
        id : new Date().toISOString(),
        titulo : dadosDoForm.get('title'),
        imagem : dadosDoForm.get('image')
      }
      comunidades.push(comunidade)
      console.log(comunidades)
      setComunidades([...comunidades]) 
    } 

    document.getElementsByName('title')[0].value = ''
    document.getElementsByName('image')[0].value = ''
    
  
  }
  
  const gitHubUser = 'Maiav27'
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', ]
  return(
    <>
      <AlurakutMenu/>
      <MainGrid>
      <div className='profileArea' style={{gridArea : 'profileArea'}}>
        <ProfileSideBar user={gitHubUser}/>
      </div>

      <div className="welcomeArea" style={{gridArea : 'welcomeArea'}}>
         <Welcome onSubmit={handleCriarComunidade}/>
      </div>
      <div style={{gridArea : 'profileRelationsArea'}}>

        <ProfileRelationsBoxWrapper>
          <h2 className='smallTitle'>
            Comunidades ({comunidades.length})
          </h2>
          <ul>
           {  
            comunidades.map((comunidade, index) => {
          
             if(index <= 5){

            
             }
           })}
          </ul>
        </ProfileRelationsBoxWrapper>

        <ProfileRelationsBoxWrapper>
          <h2 className='smallTitle'>
          Pessoas  da Comunidade ({pessoasFavoritas.length})
          </h2>
       
      
         
          <ul>
          {pessoasFavoritas.map(itemAtual => {
            return (
                <a href={`/users/${itemAtual}`} key={itemAtual}>
                  <img style={{borderRadius : '8px'}} src={`https://github.com/${itemAtual}.png`}/>
                
                </a>
            )
          })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
      
    
        

      </MainGrid>
    </>
  )
}
