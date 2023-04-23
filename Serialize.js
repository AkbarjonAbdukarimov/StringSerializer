"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Serialize {
    constructor(nums) {
        this.nums = nums;
        this.str = "";
        this.initialLength = this.nums.join("").length;
        this.finalLength = 0;
    }
    serialize() {
        for (let i = 0; i < this.nums.length; i++) {
            this.str += String.fromCharCode(this.nums[i]);
        }
        this.finalLength = this.str.length;
    }
    logResults() {
        this.serialize();
        console.log("Initial length", this.initialLength);
        console.log("Final length", this.finalLength);
        console.log("Serialized string:", this.str);
    }
}
exports.default = Serialize;
