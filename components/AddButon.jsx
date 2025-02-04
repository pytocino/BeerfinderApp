import React, { useState, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AddButton() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animations] = useState([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const { width, height } = Dimensions.get("window");

  const navigation = useNavigation();

  const toggleMenu = useCallback(() => {
    setIsAnimating(true);
    if (menuVisible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        ...animations.map((anim) =>
          Animated.timing(anim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          })
        ),
      ]).start(() => {
        setIsAnimating(false);
        setMenuVisible(false);
      });
    } else {
      setMenuVisible(true);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        ...animations.map((anim, index) =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 200,
            delay: index * 50,
            useNativeDriver: true,
          })
        ),
      ]).start(() => {
        setIsAnimating(false);
      });
    }
  }, [menuVisible, animations, fadeAnim]);

  const menuItems = [
    {
      icon: "image",
      label: "Fotos",
      onPress: () => console.log("Photos"),
    },
    {
      icon: "create",
      label: "Publicar",
      onPress: () => navigation.navigate("AddScreen"),
    },
  ];

  return (
    <>
      {menuVisible && (
        <Animated.View
          style={{
            position: "absolute",
            width: width,
            height: height,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: fadeAnim,
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              height: "100%",
            }}
            activeOpacity={1}
            onPress={toggleMenu}
          />
        </Animated.View>
      )}

      <View className="absolute bottom-5 right-5 items-end">
        {(menuVisible || isAnimating) &&
          menuItems.map((item, index) => {
            const translateY = animations[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0, -(index + 1) * 60],
            });

            return (
              <Animated.View
                key={index}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: [{ translateY }],
                  opacity: animations[index],
                  minWidth: 180,
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    borderRadius: 25,
                    marginBottom: 8,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                  onPress={() => {
                    item.onPress();
                    toggleMenu();
                  }}
                >
                  <Ionicons name={item.icon} size={24} color="#1DA1F2" />
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 16,
                      color: "#1f2937",
                      fontWeight: "500",
                    }}
                    numberOfLines={1}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            );
          })}

        <TouchableOpacity
          className="bg-customBeer w-16 h-16 rounded-full justify-center items-center z-10"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={toggleMenu}
        >
          <Ionicons
            name={menuVisible ? "close" : "add"}
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
