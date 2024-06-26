import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../../components/spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.components";

const FavouritesView = styled.View`
  padding: 10px;
`;

export const FavouriteList = ({ favourites, onDetails }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesView>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurants) => {
          const key = restaurants.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onDetails("RestaurantDetail", { restaurants })}
              >
                <CompactRestaurantInfo restaurant={restaurants} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesView>
  );
};
