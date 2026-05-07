import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, Text, View } from "react-native";

export default function WalletScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cloud">
      <View className="px-6 pt-8">
        <Text className="text-sm font-bold uppercase tracking-[3px] text-stripe">
          Portefeuille
        </Text>
        <Text className="mt-3 text-4xl font-black text-ink">
          Gains et retraits
        </Text>

        <View className="mt-8 rounded-[36px] bg-ink p-6 shadow-lg">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm font-semibold uppercase tracking-[2px] text-slate-300">
              Disponible
            </Text>
            <View className="rounded-full bg-white/10 px-3 py-2">
              <Text className="text-xs font-bold text-white">Stripe Connect</Text>
            </View>
          </View>
          <Text className="mt-6 text-5xl font-black text-white">2 480 EUR</Text>
          <Text className="mt-3 text-sm leading-5 text-slate-300">
            Les fonds valides par les clients arrivent ici avant retrait vers le
            compte bancaire connecte.
          </Text>
        </View>

        <View className="mt-5 flex-row gap-4">
          <View className="flex-1 rounded-[28px] bg-white p-5 shadow-sm">
            <Ionicons color="#10B981" name="trending-up-outline" size={26} />
            <Text className="mt-4 text-2xl font-black text-ink">8</Text>
            <Text className="mt-1 text-sm text-slate-500">Missions payees</Text>
          </View>
          <View className="flex-1 rounded-[28px] bg-white p-5 shadow-sm">
            <Ionicons color="#F59E0B" name="time-outline" size={26} />
            <Text className="mt-4 text-2xl font-black text-ink">640 EUR</Text>
            <Text className="mt-1 text-sm text-slate-500">En validation</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
