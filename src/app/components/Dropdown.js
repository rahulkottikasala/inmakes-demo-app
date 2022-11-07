import {Component} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {color} from 'react-native-reanimated';
import {COLOR} from '../constant/Color';

export default class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: null,
      items: [
        {label: 'Apple', value: 'apple2'},
        {label: 'Banana1', value: 'banana1'},
        {label: 'Apple1', value: 'apple1'},
        {label: 'Banana', value: 'banana2'},
        {label: 'Apple3', value: 'apple3'},
        {label: 'Banana2', value: 'banana3'},
      ],
    };

    this.setValue = this.setValue;
  }

  setOpen = open => {
    this.setState({
      open,
    });
  };

  setValue = callback => {
    this.setState(state => ({
      value: callback(state.value),
    }));
  };

  setItems = callback => {
    this.setState(state => ({
      items: callback(state.items),
    }));
  };

  render() {
    const {open, value, items} = this.state;

    return (
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={this.setOpen}
        setValue={this.setValue}
        setItems={this.setItems}
        placeholder="Select State"
        style={{
          backgroundColor: COLOR.transparantColor,
          borderWidth: 0,
          height: 40,
        }}
        placeholderStyle={{
          fontSize: 15,
          color: COLOR.textColor,
          marginTop: -10,
        }}
        labelStyle={{
          fontSize: 15,
          color: COLOR.textColor,
        }}
        dropDownContainerStyle={{
          backgroundColor: COLOR.buttonColor,
        }}
      />
    );
  }
}
