const Memory = require('./memory')
const mem = new Memory

class Array {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length)
    }
}