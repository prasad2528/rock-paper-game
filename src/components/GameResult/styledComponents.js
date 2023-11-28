import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 600px;
`
export const GameButton = styled.button`
  height: 250px;
  width: 250px;
  outline: none;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: transparent;
`
export const GameImage = styled.img`
  height: 150px;
  width: 150px;
  background-color: transparent;
  cursor: pointer;
`

export const ResultContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
`
export const ResultName = styled.p``

export const ResultImage = styled.img`
  width: 150px;
  height: 150px;
`

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  background-color: #fff;
  height: 40px;
  width: 130px;
  border-radius: 12px;
  cursor: pointer;
`
