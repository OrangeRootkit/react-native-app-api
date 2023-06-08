import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
`;

const PostDetails = styled.View`
  justify-content: center;
  padding-left: 15px;
`;

const PostTitle = styled.Text`
  font-size: 32px;
  font-weight: 700;
`;

const PostData = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const URL =
"https://img3.akspic.ru/previews/5/5/4/1/7/171455/171455-zhivopis-illustracia-art-voda-oblako-500x.jpg"

const URL1 = "https://img1.akspic.ru/previews/8/1/3/1/7/171318/171318-toyota_supra-toyota-legkovyye_avtomobili-sportkar-koleso-500x.jpg"


export const Post = ({ title, date, id, image}) => {
  return (
    <PostView key={id}>
    <PostImage
      source={{
        uri: image
      }}
    />
    <PostDetails>
      <PostTitle>{title}</PostTitle>
      <PostData>{date}</PostData>
    </PostDetails>
  </PostView>
  )
}
