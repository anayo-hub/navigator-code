import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import TweetContent from "../../components/TweetContent";

const TweetDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.tweet.author.name,
    });
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
      <TweetContent tweet={params.tweet} />
    </SafeAreaView>
  );
};

export default TweetDetailScreen;
