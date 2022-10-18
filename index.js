/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App/App';
import { name as appName } from './app.json';
import database from './App/db';
if(__DEV__){
    const { connectDatabases,WatermelonDB} = require("react-native-flipper-databases")
    connectDatabases([
        new WatermelonDB(database)
    ])
}

AppRegistry.registerComponent(appName, () => App);
