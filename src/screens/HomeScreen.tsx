import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={30} color="black" />
        <Text style={styles.headerText}>Tour Guide App</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.findText}>Find Your Trip</Text>
      </View>
      <View style={styles.contentHeader}>
        <Text style={styles.trips}>Popular Trips</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginHorizontal: "4%",
    marginTop: "5%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 19,
  },
  findText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20%",
    alignItems: "center",
  },
  trips: {
    fontWeight: "bold",
    fontSize: 20,
  },
  seeAll: {
    color: "dodgerblue",
    fontSize: 17,
  },
});

export default HomeScreen;
