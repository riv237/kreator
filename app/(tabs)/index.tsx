import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Influencer = {
  id: string;
  name: string;
  handle: string;
  category: string;
  city: string;
  price: number;
  rating: number;
  imageUrl: string;
};

const influencers: Influencer[] = [
  {
    id: "lea-martin",
    name: "Lea Martin",
    handle: "@leacreative",
    category: "Beaute",
    city: "Paris",
    price: 450,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "noah-renard",
    name: "Noah Renard",
    handle: "@noahmotion",
    category: "Sport",
    city: "Lyon",
    price: 620,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "maya-dubois",
    name: "Maya Dubois",
    handle: "@mayatable",
    category: "Food",
    city: "Bordeaux",
    price: 380,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "sacha-morel",
    name: "Sacha Morel",
    handle: "@sachatech",
    category: "Tech",
    city: "Nantes",
    price: 780,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
];

const formatPrice = (price: number) => `${price.toLocaleString("fr-FR")} EUR`;

export default function ExplorerScreen() {
  const [query, setQuery] = useState("");

  const filteredInfluencers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return influencers;
    }

    return influencers.filter((influencer) =>
      [
        influencer.name,
        influencer.handle,
        influencer.category,
        influencer.city,
      ].some((value) => value.toLowerCase().includes(normalizedQuery)),
    );
  }, [query]);

  return (
    <SafeAreaView className="flex-1 bg-cloud">
      <FlatList
        contentContainerClassName="px-5 pb-10"
        data={filteredInfluencers}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <View className="mt-8 rounded-[30px] bg-white p-6">
            <Text className="text-center text-lg font-extrabold text-ink">
              Aucun createur trouve
            </Text>
            <Text className="mt-2 text-center text-sm text-slate-500">
              Essayez une autre categorie, ville ou recherche.
            </Text>
          </View>
        }
        ListHeaderComponent={
          <View className="pt-7">
            <View className="rounded-[36px] bg-ink p-6 shadow-xl">
              <View className="flex-row items-center justify-between">
                <View className="rounded-full bg-white/10 px-4 py-2">
                  <Text className="text-xs font-bold uppercase tracking-[2px] text-white">
                    KREATOR
                  </Text>
                </View>
                <View className="flex-row items-center gap-2 rounded-full bg-white px-3 py-2">
                  <View className="h-2 w-2 rounded-full bg-emerald-400" />
                  <Text className="text-xs font-bold text-ink">Escrow actif</Text>
                </View>
              </View>

              <Text className="mt-8 text-4xl font-black leading-[44px] text-white">
                Trouvez le createur UGC parfait.
              </Text>
              <Text className="mt-4 text-base leading-6 text-slate-300">
                Des talents verifies, des prix clairs en Euros, et un paiement
                securise jusqu'a la livraison.
              </Text>
            </View>

            <View className="-mt-7 mx-3 flex-row items-center gap-3 rounded-[28px] border border-white bg-white px-4 py-3 shadow-lg">
              <View className="h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
                <Ionicons color="#64748B" name="search-outline" size={21} />
              </View>
              <TextInput
                className="flex-1 text-base font-semibold text-ink"
                onChangeText={setQuery}
                placeholder="Rechercher par nom, ville, categorie"
                placeholderTextColor="#94A3B8"
                value={query}
              />
            </View>

            <View className="mt-8 flex-row items-end justify-between">
              <View>
                <Text className="text-sm font-bold uppercase tracking-[3px] text-stripe">
                  Explorer
                </Text>
                <Text className="mt-2 text-3xl font-black text-ink">
                  Influenceurs
                </Text>
              </View>
              <Text className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-500">
                {filteredInfluencers.length} profils
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable className="mt-4 rounded-[32px] border border-white bg-white p-4 shadow-sm">
            <View className="flex-row gap-4">
              <Image
                className="h-24 w-24 rounded-[26px]"
                source={{ uri: item.imageUrl }}
              />
              <View className="flex-1">
                <View className="flex-row items-start justify-between gap-3">
                  <View className="flex-1">
                    <Text className="text-xl font-black text-ink">
                      {item.name}
                    </Text>
                    <Text className="mt-1 text-sm font-semibold text-slate-400">
                      {item.handle}
                    </Text>
                  </View>
                  <View className="rounded-full bg-slate-100 px-3 py-2">
                    <Text className="text-xs font-black text-ink">
                      {item.category}
                    </Text>
                  </View>
                </View>

                <View className="mt-4 flex-row items-center justify-between">
                  <View className="flex-row items-center gap-1">
                    <Ionicons color="#F59E0B" name="star" size={16} />
                    <Text className="text-sm font-bold text-ink">
                      {item.rating}
                    </Text>
                    <Text className="text-sm text-slate-400">- {item.city}</Text>
                  </View>
                  <Text className="text-lg font-black text-stripe">
                    {formatPrice(item.price)}
                  </Text>
                </View>
              </View>
            </View>

            <View className="mt-4 flex-row items-center justify-between rounded-[24px] bg-slate-50 px-4 py-3">
              <Text className="text-sm font-semibold text-slate-500">
                Video UGC a partir de
              </Text>
              <View className="flex-row items-center gap-2">
                <Text className="text-sm font-black text-ink">Voir profil</Text>
                <Ionicons color="#111827" name="arrow-forward" size={16} />
              </View>
            </View>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
