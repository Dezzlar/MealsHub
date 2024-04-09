import React, { useContext, useState, useEffect } from "react";
import MapView, { MapCallout, MapMarker } from "react-native-maps";
import { Text } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/restaurants/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapMarkerCallout } from "../components/mapmarker-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapMarker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapCallout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurants: restaurant,
                  })
                }
              >
                <MapMarkerCallout restaurant={restaurant} />
              </MapCallout>
            </MapMarker>
          );
        })}
      </Map>
    </>
  );
};
