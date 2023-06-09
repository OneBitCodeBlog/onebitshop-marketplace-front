import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Search from "../screens/Search";
import UserProfile from "../screens/UserProfile";
import SellerProfile from "../screens/SellerProfile";
import AllAddress from "../screens/AllAddress";
import AddAddress from "../screens/AddAddress";
import AddProduct from "../screens/AddProduct";
import Categories from "../screens/Categories";
import Category from "../screens/Category";
import ProductScreen from "../screens/Product";
import Denounce from "../screens/Denounce";
import Feedback from "../screens/Feedback";
import AllChats from "../screens/AllChats";
import Chat from "../screens/Chat";

import { Image, Product } from "../entities/Product";
import useAuth from "../hook/useAuth";
import UpdateProduct from "../screens/UpdateProduct";
import { Messages } from "../entities/Messages";

export type PropsNavigationStack = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Search: {
    query: string;
  };
  UserProfile: undefined;
  SellerProfile: {
    sellerId: string;
  };
  AllAddress: {
    newAddress: boolean;
  };
  AddAddress: undefined;
  AddProduct: undefined;
  UpdateProduct: {
    _id: string;
    name: string;
    price: string;
    description: string;
    images: Image[];
    category: string;
    addressId: string;
    published: string;
  };
  Categories: undefined;
  Category: {
    _id: string;
    products: Product[];
  };
  Product: Product;
  Denounce: undefined;
  Feedback: undefined;
  AllChats: undefined;
  Chat: {
    _id?: string;
    product: Product;
    sellerName: string;
    sellerId: string;
    buyerId: string;
    messages: Messages[];
  };
};

const Stack = createNativeStackNavigator<PropsNavigationStack>();

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;

const Routes = () => {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {token === null ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="SellerProfile" component={SellerProfile} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Product" component={ProductScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="SellerProfile" component={SellerProfile} />
            <Stack.Screen name="AllAddress" component={AllAddress} />
            <Stack.Screen name="AddAddress" component={AddAddress} />
            <Stack.Screen name="AddProduct" component={AddProduct} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Denounce" component={Denounce} />
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name="AllChats" component={AllChats} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
