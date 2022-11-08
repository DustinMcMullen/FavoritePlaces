import { StyleSheet, View } from "react-native"

import { Colors } from "../../constants/colors"
import { OutlinedButton } from "../UI/OutlinedButton"


export const LocationPicker = () => {

    function getLoactionHandler() {

    }

    function pickOnMapHandler() {

    }

    return (
        <View>
            <View style={styles.mapPreview}>

            </View>
            <View style={styles.actions}>
                <OutlinedButton
                    icon="location"
                    onPress={getLoactionHandler}
                >
                    Current Location
                </OutlinedButton>
                <OutlinedButton
                    icon="map"
                    onPress={pickOnMapHandler}
                >
                    Select on Map
                </OutlinedButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mapPreview: {
        with: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
})