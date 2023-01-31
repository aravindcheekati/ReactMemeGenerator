// Style your components here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Wrapper = styled(BackgroundContainer)`
  height: 50vh;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    width: 95%;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`

export const Container = styled.div`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Heading = styled.h1`
  font-size: 28px;
  color: #35469c;
`

export const Form = styled.form`
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const InputArea = styled.div`
  height: 60px;
  margin: 20px 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Label = styled.label`
  font-size: 16px;
  color: #5a7184;
  margin-bottom: 10px;
  font-family: 'Open Sans';
`

export const InputText = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  color: #5a7184;
  padding: 5px;
  border: 1px solid #5a7184;
  border-radius: 5px;
  outline: none;
`

export const Select = styled.select`
  width: 100%;
  height: 40px;
  color: #5a7184;
  padding: 5px;
  border: 1px solid #5a7184;
  border-radius: 5px;
  outline: none;
`

export const Option = styled.option`
  width: 100%;
`

export const Button = styled.button`
  width: 120px;
  height: 40px;
  color: #fff;
  background-color: #0b69ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  padding: 15px;
  background-image: url(${props => props.imageUrl});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  @media screen and (max-width: 768px) {
    margin: 10px 0px;
  }
`

export const TopText = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #fff;
`
