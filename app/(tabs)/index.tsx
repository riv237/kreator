import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const GOLD = "#D4AF37";

const influencers = [
  {
    name: "Lina Veyra",
    category: "Lifestyle luxe",
    price: "2 400 EUR",
  },
  {
    name: "Milo Arden",
    category: "Tech premium",
    price: "3 150 EUR",
  },
  {
    name: "Sofia Kane",
    category: "Mode couture",
    price: "4 800 EUR",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>KREATOR Premium</Text>
        <Text style={styles.title}>Influenceurs d'exception</Text>
        <Text style={styles.subtitle}>
          Selection exclusive de createurs fictifs pour vos campagnes haut de
          gamme.
        </Text>

        <View style={styles.list}>
          {influencers.map((influencer) => (
            <View key={influencer.name} style={styles.card}>
              <View>
                <Text style={styles.name}>{influencer.name}</Text>
                <Text style={styles.category}>{influencer.category}</Text>
              </View>
              <Text style={styles.price}>{influencer.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: "#000000",
  },
  eyebrow: {
    color: GOLD,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 3,
    marginBottom: 16,
    textTransform: "uppercase",
  },
  title: {
    color: GOLD,
    fontSize: 40,
    fontWeight: "800",
    lineHeight: 46,
    marginBottom: 14,
  },
  subtitle: {
    color: GOLD,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 34,
    opacity: 0.82,
  },
  list: {
    gap: 18,
  },
  card: {
    alignItems: "center",
    backgroundColor: "#000000",
    borderColor: GOLD,
    borderRadius: 24,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 22,
  },
  name: {
    color: GOLD,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  category: {
    color: GOLD,
    fontSize: 14,
    opacity: 0.72,
  },
  price: {
    color: GOLD,
    fontSize: 16,
    fontWeight: "800",
  },
});
