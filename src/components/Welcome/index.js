import  Box from '../Box/index'

import { OrkutNostalgicIconSet } from '../../lib/AluraCommons'


const Welcome = (props) =>{
    
    return (
        <>
        <Box >
        <h1 className='title'>Bem vindo</h1>

        <OrkutNostalgicIconSet/>
        </Box>
        <Box>
          <h2 className='subTitle'> O que você deseja fazer ?</h2>
          <form onSubmit={props.onSubmit}>
            <div>
              <input 
              placeholder='Qual vai ser o nome da sua comunidade ?'
              name = 'title' 
                aria-label = 'Qual vai ser o nome da sua comunidade ?'
                type='text'  />
            </div>

            <div>
              <input 
              placeholder='Coloque uma URL para usarmos de capa'
              name = 'image' 
                aria-label = 'Coloque uma URL para usarmos de capa' type='text'/>
            </div>
            <button>Criar comunidade</button>
          </form>
        </Box>
        </>
    )
}
export default  Welcome