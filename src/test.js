import antlr4 from 'antlr4'
import { CLexer } from './antlr/CLexer'
import { CParser } from './antlr/CParser'
import { CListener } from './antlr/CListener'
import Blockly from './google-blockly/blockly_compressed'

class MyListener extends CListener {
  exitPrimaryExpression(ctx) {
    console.info("Finish Parsing");
  }
}


var input = "main() { printf(\"Hello World\n\"); }"
var chars = new antlr4.InputStream(input);
var lexer = new CLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new CParser(tokens);
parser.buildParseTrees = true;
var tree = parser.primaryExpression();

var myListener = new MyListener();

antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);
