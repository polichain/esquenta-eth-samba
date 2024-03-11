// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Counter {
    int public i;

    constructor(int _i) {
        i = _i;
    }

    function inc() public {
        i++;
    }

    function dec() public {
        i--;
    }
}
