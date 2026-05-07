import { Ionicons } from "@expo/vector-icons";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cloud">
      <View className="px-6 pt-8">
        <Text className="text-sm font-bold uppercase tracking-[3px] text-stripe">
          Profil
        </Text>
        <Text className="mt-3 text-4xl font-black text-ink">
          Parametres et bio
        </Text>

        <View className="mt-8 rounded-[36px] bg-white p-6 shadow-sm">
          <View className="flex-row items-center gap-4">
            <Image
              className="h-20 w-20 rounded-3xl"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
              }}
            />
            <View className="flex-1">
              <Text className="text-2xl font-black text-ink">KREATOR Studio</Text>
              <Text className="mt-1 text-sm font-semibold text-slate-500">
                Marque verifiee
              </Text>
            </View>
            <View className="h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
              <Ionicons color="#111827" name="settings-outline" size={21} />
            </View>
          </View>

          <View className="mt-6 rounded-[28px] bg-slate-50 p-5">
            <Text className="text-base font-extrabold text-ink">
              Bio marketplace
            </Text>
            <Text className="mt-2 text-sm leading-6 text-slate-500">
              Configurez votre bio, vos categories de campagne et vos
              preferences de paiement escrow pour la V1 France.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
