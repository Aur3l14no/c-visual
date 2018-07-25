import _ from 'lodash';
import { Blockly } from './blockly/blockly_compressed'

function component() {
  var element = document.createElement('blocklyDiv');

  var demoWorkspace = Blockly.inject('blocklyDiv', {
      media: '../../media/',
      toolbox: document.getElementById('toolbox')
    });
  return element;
}

document.body.appendChild(component());
