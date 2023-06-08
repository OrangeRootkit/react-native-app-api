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
// import { Post } from "../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import HomeScreen from "./screens/HomeScreen";
import FullPost from "./screens/FullPost";
import Navigation from "./components/Navigation";

// const API = "https://hp-api.onrender.com/api/characters";

// const URL =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/1794_Boulton_and_Anville_Wall_Map_of_Africa_%28most_important_18th_cntry_map_of_Africa%29_-_Geographicus_-_Africa2-boulton-1794.jpg/500px-1794_Boulton_and_Anville_Wall_Map_of_Africa_%28most_important_18th_cntry_map_of_Africa%29_-_Geographicus_-_Africa2-boulton-1794.jpg";

export default function App() {
  return <Navigation />;

  // (
  //   // <View>
  //   //   {/* <StatusBar theme="auto"/> */}
  //   //   <FullPost />
  //   //   {/* <HomeScreen/> */}
  //   // </View>
  // );
}
