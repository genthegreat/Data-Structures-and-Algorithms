class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,value])
    }

    get(key) {
        let index = this._hash(key)
        let position = this.keyMap[index]
        if (!position) {
            return undefined
        }
        for (let i = 0; i < position.length; i++){
            if(position[i][0] === key) return position[i][1]
        }
    }

    keys() {
        let keys = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0])) {
                        keys.push(this.keyMap[i][j][0])
                    }
                }
            }
        }

        return keys
    }

    values() {
        let values = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!values.includes(this.keyMap[i][j][1])) {
                        values.push(this.keyMap[i][j][1])
                    }
                }
            }
        }

        return values
    }
}