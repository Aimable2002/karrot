import React from 'react';
import { Button, StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native';

const BottomButton = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Button title="Left" color="white" onPress={() => {/* Handle left button press */}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Button title="Right" color="white" onPress={() => {/* Handle right button press */}} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', // Aligns the buttons at the bottom
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute', // Fixed position
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: 'orange', // Optional: Background color for visibility
    },
    button: {
        flex: 1,
        marginHorizontal: 5, // Space between buttons
    },
});

export default BottomButton;
