import Blockly from './blockly/blockly_compressed';
import './blockly/blocks_compressed';
import './blockly/msg/js/en'

var demoWorkspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});
