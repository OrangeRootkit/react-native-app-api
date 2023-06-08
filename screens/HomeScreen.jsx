import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Post } from "../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const API = "https://hp-api.onrender.com/api/characters";

const URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/1794_Boulton_and_Anville_Wall_Map_of_Africa_%28most_important_18th_cntry_map_of_Africa%29_-_Geographicus_-_Africa2-boulton-1794.jpg/500px-1794_Boulton_and_Anville_Wall_Map_of_Africa_%28most_important_18th_cntry_map_of_Africa%29_-_Geographicus_-_Africa2-boulton-1794.jpg";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const makePosts = () => {
    setIsLoading(true);
    axios
      .get(API)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(makePosts, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      {/* <StatusBar theme="auto"/> */}
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={makePosts} />
        }
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: item.id,
                title: item.name,
                date: item.dateOfBirth,
                image: item.image,
              })
            }
          >
            <Post
              title={item.name}
              date={item.dateOfBirth}
              urlImage={item.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
