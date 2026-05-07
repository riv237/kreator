import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, Text, View } from "react-native";

const missionSteps = [
  {
    title: "Brief valide",
    description: "Le client a confirme les attentes et le budget.",
    icon: "document-text-outline",
  },
  {
    title: "Paiement provisionne",
    description: "Les fonds sont bloques sur KREATOR avant le demarrage.",
    icon: "lock-closed-outline",
  },
  {
    title: "Video en production",
    description: "L'influenceur livre le contenu dans la conversation.",
    icon: "videocam-outline",
  },
] as const;

export default function MissionsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cloud">
      <View className="px-6 pt-8">
        <Text className="text-sm font-bold uppercase tracking-[3px] text-stripe">
          Missions
        </Text>
        <Text className="mt-3 text-4xl font-black text-ink">
          Contrats en cours
        </Text>
        <Text className="mt-3 text-base leading-6 text-slate-500">
          Suivez les etapes clefs du workflow escrow, du brief jusqu'a la
          liberation des gains.
        </Text>

        <View className="mt-8 rounded-[32px] border border-white bg-white p-5 shadow-sm">
          {missionSteps.map((step, index) => (
            <View
              className="flex-row gap-4 py-4"
              key={step.title}
            >
              <View className="h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                <Ionicons
                  color="#635BFF"
                  name={step.icon}
                  size={22}
                />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-extrabold text-ink">
                  {step.title}
                </Text>
                <Text className="mt-1 text-sm leading-5 text-slate-500">
                  {step.description}
                </Text>
                {index < missionSteps.length - 1 ? (
                  <View className="mt-4 h-px bg-slate-100" />
                ) : null}
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
