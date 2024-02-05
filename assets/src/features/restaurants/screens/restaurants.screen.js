import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeView } from "../../../components/Utility/safearea.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchBarView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);
  return (
    <SafeView>
      <SearchBarView>
        <Searchbar />
      </SearchBarView>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeView>
  );
};
