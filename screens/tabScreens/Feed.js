import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { tweets } from "../../data/tweets";
import Tweet from "../../components/Tweet";
import { useNavigation } from "@react-navigation/native";

export default function Feed() {
  console.log("feed");
  const navigation = useNavigation();

  const renderTweet = ({ item }) => {
    return <Tweet tweet={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tweets.slice(0, 30)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTweet}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("../../assets/beto.jpeg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
});
