// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "hardhat/console.sol";

/// @title Simple set and get contract
/// @author zen2see
/// @notice Most basic contract for LearnWeb3
/// @dev No side effects on the function calls
contract MoonContract {
    /// Variable called hodling
    string private mood;

    /// @notice Get the hodling value
    /// @dev Possibly rename the function to justh holding
    /// @return Returns the value of hodling
    function getMood() public view returns (string memory) {
        return mood;
    }

    /// @notice Sets the hodling value
    /// @dev Using a console log statement showing old and new values
    /// @param _mood The hodling value to be set
    function setMood(string memory _mood) public {
        console.log("Changing mood from '%s' to '%s'", mood, _mood);
        mood = _mood;
    }
}
