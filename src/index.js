module.exports =
function check(str, bracketsConfig) {
    const bracketsStack = [];                                                            // and Getting rid of undefined for further counting

    str = str.split(``);
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j].includes(str[i])) {
                if (bracketsConfig[j].indexOf(str[i]) === 0){
                    if ((bracketsConfig[j][0] == bracketsConfig[j][1])&&(bracketsStack.length > 0)&&(bracketsStack[bracketsStack.length-1][0] == j)){
                        bracketsStack.pop()
                    } else {
                        bracketsStack.push([j, `open`]);
                    }
                } else {
                    if (((bracketsStack.length > 0)&&(bracketsStack[bracketsStack.length-1][0] == j)&&bracketsStack[bracketsStack.length-1][1] == `open`)) {
                        bracketsStack.pop()
                    } else {
                        bracketsStack.push([j, `close`]);
                    }
                }
            }
        }
    }
    if (bracketsStack.length === 0){
        return true;
    }

    return false;
}
