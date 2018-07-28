import antlr4 from 'antlr4'
import { CLexer } from './antlr/CLexer'
import { CParser } from './antlr/CParser'
import { CListener } from './antlr/CListener'

class MyListener extends CListener {
  exitPrimaryExpression(ctx) {
    console.info("Finish Parsing");
  }
}

class Transpiler {
  constructor() {
    var input = "main() { printf(\"Hello World\n\"); }"
    var myListener = new MyListener();
  }

  run(code) {
    var chars = new antlr4.InputStream(input);
    var lexer = new CLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new CParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.primaryExpression();

    antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);
  }
}
