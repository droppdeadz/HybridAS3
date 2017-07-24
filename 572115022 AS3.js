/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Picker
} from 'react-native';

export default class hello extends Component {

    state = {
        name: '',
        weather: '',
        icon: 'openweathermap.org/img/w/10d.png',
        temp: 0,
        unit: '°C',
        date: '',
        theme: 'theme1'

    };
    _log() {
        console.log(this.state);
    }

    _handleName(event) {

        var name = event.nativeEvent.text;
        var appid = '49b745799ce58d0b327e512ecb70ce08';
        var units = ""

        if (this.state.unit === "°C") {
            units = "metric"
        } else if (this.state.unit === "°F") {
            units = "imperial"
        }
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + name + '&appid=' + appid + '&units=' + units)
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({
                    weather: [responseJSON.list[0].weather[0].main,
                    responseJSON.list[8].weather[0].main,
                    responseJSON.list[16].weather[0].main,
                    responseJSON.list[24].weather[0].main,
                    responseJSON.list[32].weather[0].main],
                    icon: ['openweathermap.org/img/w/' + responseJSON.list[0].weather[0].icon + '.png',
                    'openweathermap.org/img/w/' + responseJSON.list[8].weather[0].icon + '.png',
                    'openweathermap.org/img/w/' + responseJSON.list[16].weather[0].icon + '.png',
                    'openweathermap.org/img/w/' + responseJSON.list[24].weather[0].icon + '.png',
                    'openweathermap.org/img/w/' + responseJSON.list[32].weather[0].icon + '.png',],
                    temp: [responseJSON.list[0].main.temp,
                    responseJSON.list[8].main.temp,
                    responseJSON.list[16].main.temp,
                    responseJSON.list[24].main.temp,
                    responseJSON.list[32].main.temp,],
                    date: [responseJSON.list[0].dt_txt,
                    responseJSON.list[8].dt_txt,
                    responseJSON.list[16].dt_txt,
                    responseJSON.list[24].dt_txt,
                    responseJSON.list[32].dt_txt,]
                });
                console.log(this.state.weather);
            })
            .catch((error) => {
                console.warn(error);
            });


        this.setState({
            name: name,
        },
        );
    }
    _handlePicker(itemValue, itemIndex) {

        this.setState({
            unit: itemValue
        }, this._log);

    }


    render() {
        var string = 'http://img09.deviantart.net/37b3/i/2012/076/6/e/sky_bg_stock_by_1989juni-d4t04uv.jpg';
        if (this.state.theme === 'theme1') {
            string = 'http://img09.deviantart.net/37b3/i/2012/076/6/e/sky_bg_stock_by_1989juni-d4t04uv.jpg'
        } else {
            string = 'http://www.colegioayala.com/media/static/css/bg/public/body_bg_sky2.jpg'

        }
        return (
            <Image
                style={styles.img}
                source={{ uri: string }}
            >
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Text style={{ fontSize: 18, color: "black" }}>
                            Search
                            </Text>
                        <TextInput style={{ width: 350, height: 50 }}
                            onSubmitEditing={(event) => this._handleName(event)} />
                        <Picker style={{ width: 80, height: 50 }}
                            selectedValue={this.state.unit}
                            onValueChange={(itemValue, itemIndex) => this._handlePicker(itemValue, itemIndex)}>
                            <Picker.Item label="°C" value="°C" />
                            <Picker.Item label="°F" value="°F" />
                        </Picker>

                    </View>


                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.container3}>

                            <Text>
                                {this.state.name}
                            </Text>

                            <Text>
                                {this.state.weather[0]}
                            </Text>
                            <Text>
                                {this.state.temp[0]}{this.state.unit}
                            </Text>
                            <Text>
                                {this.state.date[0]}
                            </Text>

                            <Image
                                source={{ uri: 'http://' + this.state.icon[0] }}
                                style={{ width: 50, height: 50, borderWidth: 1 }}
                            />
                        </View>
                        <View style={styles.container3}>

                            <Text>
                                {this.state.name}
                            </Text>

                            <Text>
                                {this.state.weather[1]}
                            </Text>
                            <Text>
                                {this.state.temp[1]}{this.state.unit}
                            </Text>
                            <Text>
                                {this.state.date[1]}
                            </Text>

                            <Image
                                source={{ uri: 'http://' + this.state.icon[1] }}
                                style={{ width: 50, height: 50, borderWidth: 1 }}
                            />
                        </View>
                        <View style={styles.container3}>

                            <Text>
                                {this.state.name}
                            </Text>

                            <Text>
                                {this.state.weather[2]}
                            </Text>
                            <Text>
                                {this.state.temp[2]}{this.state.unit}
                            </Text>
                            <Text>
                                {this.state.date[2]}
                            </Text>

                            <Image
                                source={{ uri: 'http://' + this.state.icon[2] }}
                                style={{ width: 50, height: 50, borderWidth: 1 }}
                            />
                        </View>

                        <View style={styles.container3}>

                            <Text>
                                {this.state.name}
                            </Text>

                            <Text>
                                {this.state.weather[3]}
                            </Text>
                            <Text>
                                {this.state.temp[3]}{this.state.unit}
                            </Text>
                            <Text>
                                {this.state.date[3]}
                            </Text>

                            <Image
                                source={{ uri: 'http://' + this.state.icon[3] }}
                                style={{ width: 50, height: 50, borderWidth: 1 }}
                            />
                        </View>
                        <View style={styles.container3}>

                            <Text>
                                {this.state.name}
                            </Text>

                            <Text>
                                {this.state.weather[4]}
                            </Text>
                            <Text>
                                {this.state.temp[4]}{this.state.unit}
                            </Text>
                            <Text>
                                {this.state.date[4]}
                            </Text>

                            <Image
                                source={{ uri: 'http://' + this.state.icon[4] }}
                                style={{ width: 50, height: 50, borderWidth: 1 }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Picker
                        selectedValue={this.state.theme}
                        onValueChange={(itemValue, itemIndex) => this.setState({ theme: itemValue })}>
                        <Picker.Item label="Theme1" value="theme1" />
                        <Picker.Item label="Theme2" value="theme2" />
                    </Picker>

                </View>

            </Image >
        );
    }
}
const moreStyles = StyleSheet.create({
    name: {
        color: '#0000ff'
    }
})

const styles = StyleSheet.create({
    img: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
    },
    container2: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        flexDirection: 'column',
        flex: 1
        ,
    },
    container3: {
        margin: 5,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 3,
        flex: 5,
    },
    container4: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 3,
        flex: 2,
    },
    footer: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        flex: 0.1,
        justifyContent: 'center',

    }
});