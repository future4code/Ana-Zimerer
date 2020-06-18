import styled from 'styled-components';

export const ContainerRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    width: 400px;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    width: 100%;
    border: 1px solid black;   
    img{/*logo*/
        width: 30%;
        height: 60%;
    }
`
export const SectionPhotos = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50%;
    width: 100%;
    img{/*photos of lovers*/
        width: 100%;
        height: 55vh;
        border: solid black;
    }
`
export const DivInfos = styled.div`
    width: 100%;
`
export const SectionButtons = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 100%;
    border: 1px solid black;
    button{
        height: 70px;
        width: 70px;
        border-radius: 90%;
        margin: 10px;
        
        
    }
`
