import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View, TouchableOpacity, Switch } from "react-native";
import styles from "../assets/stylesheet";
import { headerWithIcon, navTopBar } from "../assets/component";
import { settingIcon } from "../assets/svgXml";
import { vw, vh } from "react-native-expo-viewport-units";
import { SvgXml } from "react-native-svg";
import componentStyle, { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import DATA from "../assets/DATA";

export default function WifiManager() {
    const [test, setTest] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { permissionList, appList, permissionSelected, } = DATA();
    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: colorStyle.main3 }]}>
            <StatusBar style="light" />
            {headerWithIcon("Quản lý hệ thống", settingIcon('100%', '100%', colorStyle.main4), colorStyle.main4)}

        </SafeAreaView >
    )
}