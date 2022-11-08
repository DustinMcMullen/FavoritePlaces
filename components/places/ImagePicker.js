import { Alert, Button, Image, StyleSheet, Text, View } from "react-native"
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker"
import { useState } from "react";

import { Colors } from "../../constants/colors";
import { OutlinedButton } from "../UI/OutlinedButton";

export const ImagePicker = () => {

    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const [image, setImage] = useState();

    async function verifyPermissions() {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Cannot proceed", "Camera permissions must be enabled to use app");
            return false;
        }

        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });
        setImage(image.uri);
        console.log("image: ", image.uri);
    }

    return(
        <View>
            <View style={styles.imagePreview}>
                {image ? 
                    <Image
                        style={styles.image}
                        source={{uri: image}}
                    />
                :
                    <Text>No image selected.</Text>
                }
            </View>
            <OutlinedButton
                icon="camera"
                onPress={takeImageHandler}
            >
                Take Picture
            </OutlinedButton>
        </View>
    )
}

const styles = StyleSheet.create({
    imagePreview: {
        with: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: "100%",
        height: "100%"
    }
})