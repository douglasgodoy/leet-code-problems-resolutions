class Solution:
    output= []
    
    map = {
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"],
    }

    def backtracking(self, currStr,digits,i):
        if len(currStr) == len(digits) :
            self.output.append(currStr)
            return

        for x in self.map[digits[i]]:
            self.backtracking(currStr + x,digits,i + 1)

    def letterCombinations(self, digits: str) -> List[str]:
        self.output = []
        if len(digits) < 1: return []
        self.backtracking("",digits,0)

        return self.output

