// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Hack {

    function decodeThis(bytes memory _answer) public pure returns(string memory _decodedValue) {
    // bytes32 answer = 0x70b00831d459e9f2e4b22b203fbdfd5d1830d5c16a36579bcbb12f91de2159e9;

    (_decodedValue) = abi.decode(_answer, (string));
    }

}