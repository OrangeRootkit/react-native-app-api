import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import Loading from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const FullPost = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const { id, title, date, image } = route.params;

  const API = "https://hp-api.onrender.com/api/characters";

  useEffect(() => {
    navigation.setOptions({
      title,
    });
    axios
      .get(API)
      .then(({ data }) => setData(data.filter((el) => el.id === id)))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: image,
        }}
      />
      <PostText>{title}</PostText>
      <PostText>{date}</PostText>
    </View>
  );
};

export default FullPost;
