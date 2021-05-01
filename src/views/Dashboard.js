import React, { useState } from "react"
import {View, Text, Button, StyleSheet} from "react-native"


const Dashboard = ({navigation}) => {

    const [availableRides, setAvailableRides] = useState([
        {
            start: '101 Main St',
            end: '130 South St',
            distance: 3.8,
            fare: 6.50
        },
        {
            start: '11 Elder St',
            end: '10 Sickamore St',
            distance: 10.8,
            fare: 19.50
        },
        {
            start: '1021 Caroll St',
            end: '1330 Broad St',
            distance: 6.2,
            fare: 9.50
        },
        {
            start: '10 1st St',
            end: '1000 Elmwood St',
            distance: 30.7,
            fare: 46.50
        },
        {
            start: '101 Main St',
            end: '130 South St',
            distance: 3.8,
            fare: 6.50
        },
        {
            start: '11 Elder St',
            end: '10 Sickamore St',
            distance: 10.8,
            fare: 19.50
        },
        {
            start: '1021 Caroll St',
            end: '1330 Broad St',
            distance: 6.2,
            fare: 9.50
        },
        {
            start: '10 1st St',
            end: '1000 Elmwood St',
            distance: 30.7,
            fare: 46.50
        },
        {
            start: '101 Main St',
            end: '130 South St',
            distance: 3.8,
            fare: 6.50
        },
        {
            start: '11 Elder St',
            end: '10 Sickamore St',
            distance: 10.8,
            fare: 19.50
        },
        {
            start: '1021 Caroll St',
            end: '1330 Broad St',
            distance: 6.2,
            fare: 9.50
        },
        {
            start: '10 1st St',
            end: '1000 Elmwood St',
            distance: 30.7,
            fare: 46.50
        },
        {
            start: '101 Main St',
            end: '130 South St',
            distance: 3.8,
            fare: 6.50
        },
        {
            start: '11 Elder St',
            end: '10 Sickamore St',
            distance: 10.8,
            fare: 19.50
        },
        {
            start: '1021 Caroll St',
            end: '1330 Broad St',
            distance: 6.2,
            fare: 9.50
        },
        {
            start: '10 1st St',
            end: '1000 Elmwood St',
            distance: 30.7,
            fare: 46.50
        },
    ])

    // const dummyData = [
    //     {
    //         start: '101 Main St',
    //         end: '130 South St',
    //         distance: 3.8,
    //         fare: 6.50
    //     },
    //     {
    //         start: '11 Elder St',
    //         end: '10 Sickamore St',
    //         distance: 10.8,
    //         fare: 19.50
    //     },
    //     {
    //         start: '1021 Caroll St',
    //         end: '1330 Broad St',
    //         distance: 6.2,
    //         fare: 9.50
    //     },
    //     {
    //         start: '10 1st St',
    //         end: '1000 Elmwood St',
    //         distance: 30.7,
    //         fare: 46.50
    //     },
    // ]

    const getAvailableRides = ({availableRides}) => {
        return 
                  availableRides.map((ride) => (
                <View>
                <Text>{ride.start}</Text>
                <Text>{ride.end}</Text>
                <Text>{ride.distance}</Text>
                <Text>{ride.fare}</Text>
                </View>
                ))
               
    }

    return (
        <View style={styles.container}>
             <Text style={styles.ridesHeader}>Available Rides</Text>
             <View style={styles.tableHeaders}>
                 <Text style={styles.headerFont}>Start</Text>
                 <Text style={styles.headerFont}>End</Text>
                 <Text style={styles.headerFont}>Distance</Text>
                 <Text style={styles.headerFont}>Fare</Text>
             </View>
             <View style={styles.tableData}>
                 {
                        availableRides.map((ride) => (
                            <View style={styles.individualRide}>
                            <Text style={styles.dataFont}>{ride.start}</Text>
                            <Text style={styles.dataFont}>{ride.end}</Text>
                            <Text style={styles.dataFont}>{ride.distance}</Text>
                            <Text style={styles.dataFont}>{ride.fare}</Text>
                            </View>
                            ))
                 }
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 150,
      alignItems: 'center'
    },
    ridesHeader: {
        color: '#71cdda',
        fontSize: 50,
        fontWeight: '200',
    },
    tableHeaders: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-evenly',
        marginTop: 50,
        paddingBottom: 0,
    },
    headerFont: {
        fontSize: 25
    },
    tableData: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        justifyContent: 'space-evenly',
    },
    individualRide: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dataFont: {
        fontSize: 18,
    }
})

export default Dashboard