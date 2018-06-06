import React from 'react';
import {View, NativeModules} from 'react-native';
import {
  Text,
  Button,
  Item,
  Form,
  Input,
  Label,
  Body
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {TabNavigator} from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <Grid>
           <Row style={{ backgroundColor: '#ffffff'}}>
             <Form>
               <Item stackedLabel="stackedLabel">
                 <Label>Name</Label>
                 <Input/>
               </Item>
               <Item stackedLabel="stackedLabel">
                 <Label>Address</Label>
                 <Input/>
               </Item>
               <Item stackedLabel="stackedLabel" last="last">
                 <Label>Phone number</Label>
                 <Input/>
               </Item>
               <Button style={{ padding: 10,
                   alignSelf: "center"
                 }}>
                 <Text>Save</Text>
               </Button>
             </Form>
           </Row>
           <Row style={{ backgroundColor: '#ffffff', height: 400 }}>
             <Form>
               <Item stackedLabel="stackedLabel">
                 <Label>Account number</Label>
                 <Input/>
               </Item>
               <Item stackedLabel="stackedLabel">
                 <Label>BIC</Label>
                 <Input/>
               </Item>
               <Button style={{ padding: 10,
                   alignSelf: "center"
                 }}>
                 <Text>Save</Text>
               </Button>
             </Form>
           </Row>
         </Grid>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (<View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Settings!</Text>
      <Text>Another text for testing</Text>
      <Button full="full" info="info" onPress={this.generateCode.bind(this)}>
        <Text>
          Click for native code
        </Text>
      </Button>
    </View>);
  }
}
var ProtectorModule = new ProtectorModule();

generateCode(){
  NativeModules.ProtectorModule.callProtectorApi();
  }

export default TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});
