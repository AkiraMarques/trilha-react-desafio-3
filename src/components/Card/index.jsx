import React from "react";
import { FiThumbsUp } from 'react-icons/fi';

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

import fundo from '../../assets/fundo.png';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={fundo}/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                <div>
                    <h4>Pablo Henrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
