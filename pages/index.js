
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

   
const ProfileSideBar = (props) => {
  return(
    <Box >
    <img src={`https://github.com/${props.user}.png`} alt="" style={{borderRadius : '8px'}} />
  </Box>  
  )
}
 

export default function Home() {
  const gitHubUser = 'Maiav27'
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', ]
  return(
    <>
      <AlurakutMenu/>
      <MainGrid>
      <div className='profileArea' style={{gridArea : 'profileArea'}}>
        <ProfileSideBar user={gitHubUser}/>
      </div>
      <div style={{gridArea : 'welcomeArea'}}>
        <Box >
         <h1 className='title'>Bem vindo</h1>

         <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div style={{gridArea : 'profileRelationsArea'}}>
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
