import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView className="flex-1 bg-cloud">
      <View className="flex-1 px-6 pt-6">
        <View className="rounded-[32px] bg-white p-5 shadow-sm">
          <Text className="text-xs font-bold uppercase tracking-[2px] text-stripe">
            Mission #{id ?? "demo"}
          </Text>
          <Text className="mt-3 text-2xl font-black text-ink">
            Livraison video UGC
          </Text>
          <Text className="mt-2 text-sm leading-5 text-slate-500">
            Echangez avec le createur et deposez la video finale avant
            validation client.
          </Text>
        </View>

        <View className="mt-6 flex-1 justify-end gap-4">
          <View className="max-w-[86%] self-start rounded-[28px] rounded-bl-md bg-white px-5 py-4 shadow-sm">
            <Text className="text-sm leading-5 text-slate-600">
              Brief recu. Je commence le tournage et je vous envoie un premier
              rendu aujourd'hui.
            </Text>
          </View>
          <View className="max-w-[86%] self-end rounded-[28px] rounded-br-md bg-ink px-5 py-4">
            <Text className="text-sm leading-5 text-white">
              Parfait. Le paiement est provisionne sur KREATOR.
            </Text>
          </View>
        </View>

        <View className="mb-3 mt-5 flex-row items-center gap-3 rounded-[28px] bg-white p-3 shadow-sm">
          <Pressable className="h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
            <Ionicons color="#635BFF" name="cloud-upload-outline" size={23} />
          </Pressable>
          <TextInput
            className="flex-1 text-base text-ink"
            placeholder="Message ou note de livraison"
            placeholderTextColor="#94A3B8"
          />
          <Pressable className="h-12 w-12 items-center justify-center rounded-2xl bg-stripe">
            <Ionicons color="#FFFFFF" name="send" size={20} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
