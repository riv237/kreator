import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const GOLD = '#D4AF37';

const influencers = [
  {
    name: 'Maya Sterling',
    handle: '@maya.sterling',
    niche: 'Luxury lifestyle',
    followers: '1.2M',
    engagement: '6.8%',
    city: 'Paris',
  },
  {
    name: 'Noah Blake',
    handle: '@noahblake.fit',
    niche: 'Fitness premium',
    followers: '842K',
    engagement: '7.4%',
    city: 'London',
  },
  {
    name: 'Ava Laurent',
    handle: '@avalaurent',
    niche: 'Beauty creator',
    followers: '970K',
    engagement: '5.9%',
    city: 'Monaco',
  },
  {
    name: 'Leo Carter',
    handle: '@leocarter.media',
    niche: 'Travel reels',
    followers: '1.8M',
    engagement: '8.1%',
    city: 'Dubai',
  },
];

export default function TabOneScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.kicker}>KREATOR</Text>
          <Text style={styles.title}>Premium Creator Network</Text>
          <Text style={styles.subtitle}>
            Discover high-value influencers ready for exclusive campaigns.
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>4.8M+</Text>
          <Text style={styles.summaryLabel}>combined audience</Text>
          <View style={styles.divider} />
          <Text style={styles.summaryValue}>7.1%</Text>
          <Text style={styles.summaryLabel}>average engagement</Text>
        </View>

        <Text style={styles.sectionTitle}>Featured influencers</Text>

        {influencers.map((influencer) => (
          <View key={influencer.handle} style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{influencer.name.charAt(0)}</Text>
            </View>

            <View style={styles.cardBody}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.name}>{influencer.name}</Text>
                  <Text style={styles.handle}>{influencer.handle}</Text>
                </View>
                <Text style={styles.city}>{influencer.city}</Text>
              </View>

              <Text style={styles.niche}>{influencer.niche}</Text>

              <View style={styles.metrics}>
                <View style={styles.metric}>
                  <Text style={styles.metricValue}>{influencer.followers}</Text>
                  <Text style={styles.metricLabel}>followers</Text>
                </View>
                <View style={styles.metric}>
                  <Text style={styles.metricValue}>{influencer.engagement}</Text>
                  <Text style={styles.metricLabel}>engagement</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 64,
    paddingBottom: 36,
  },
  hero: {
    marginBottom: 26,
  },
  kicker: {
    color: GOLD,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 5,
  },
  title: {
    color: GOLD,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -0.5,
    lineHeight: 40,
    marginTop: 10,
  },
  subtitle: {
    color: '#B7B7B7',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
  },
  summaryCard: {
    backgroundColor: '#121212',
    borderColor: 'rgba(212, 175, 55, 0.35)',
    borderRadius: 28,
    borderWidth: 1,
    marginBottom: 30,
    padding: 24,
    shadowColor: GOLD,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 8,
  },
  summaryValue: {
    color: GOLD,
    fontSize: 30,
    fontWeight: '900',
  },
  summaryLabel: {
    color: '#E8E8E8',
    fontSize: 13,
    letterSpacing: 1,
    marginTop: 3,
    textTransform: 'uppercase',
  },
  divider: {
    backgroundColor: 'rgba(212, 175, 55, 0.25)',
    height: 1,
    marginVertical: 18,
  },
  sectionTitle: {
    color: GOLD,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#171717',
    borderColor: '#2B2B2B',
    borderRadius: 24,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: '#242424',
    borderColor: GOLD,
    borderRadius: 24,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    marginRight: 14,
    width: 48,
  },
  avatarText: {
    color: GOLD,
    fontSize: 22,
    fontWeight: '900',
  },
  cardBody: {
    flex: 1,
  },
  cardHeader: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  handle: {
    color: '#8E8E8E',
    fontSize: 13,
    marginTop: 3,
  },
  city: {
    color: GOLD,
    fontSize: 12,
    fontWeight: '700',
  },
  niche: {
    color: '#D9D9D9',
    fontSize: 14,
    marginTop: 14,
  },
  metrics: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  metric: {
    backgroundColor: '#202020',
    borderRadius: 14,
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  metricValue: {
    color: GOLD,
    fontSize: 16,
    fontWeight: '900',
  },
  metricLabel: {
    color: '#A8A8A8',
    fontSize: 11,
    marginTop: 3,
    textTransform: 'uppercase',
  },
});
