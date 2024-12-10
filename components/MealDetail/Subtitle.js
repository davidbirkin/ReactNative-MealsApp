import {StyleSheet, Text, View} from "react-native";

const SubTitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",

  },
  subtitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    padding: 8,
    marginHorizontal: 54,
    marginVertical: 4
  }
})

export default SubTitle;