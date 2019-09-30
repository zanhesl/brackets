module.exports =
    function check(str, bracketsConfig) {
        const bracketsStack = []; // create Stack structure

        str = str.split(``);
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (bracketsConfig[j].includes(str[i])) { //stack operating 
                    bracketsStack.push(str[i]);
                    if ((bracketsStack.length >= 2) && (bracketsStack[bracketsStack.length - 1] == bracketsConfig[j][1]) &&
                        (bracketsStack[bracketsStack.length - 2] == bracketsConfig[j][0])) {
                        bracketsStack.pop();
                        bracketsStack.pop();
                    }
                }
            }
        }
        if (bracketsStack.length === 0) {
            return true;
        }

        return false;
    }
