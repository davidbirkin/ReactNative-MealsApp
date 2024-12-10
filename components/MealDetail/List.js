import {StyleSheet, Text, View} from "react-native";

const List = ({data}) => {
  return data.map(dataPoint => {
    return (
      <View key={dataPoint} style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{dataPoint}</Text>
          </View>
        </View>
      </View>
    )
  })
}

const styles = StyleSheet.create({
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    flexDirection: "row",
    maxWidth: '80%',
  },
  listItem: {
    flex: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497'
  },
  itemText: {
    color: '#351401',
    textAlign: "center",
  }
})

export default List;
