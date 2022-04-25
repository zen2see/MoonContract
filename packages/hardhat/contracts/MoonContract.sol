// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "hardhat/console.sol";

/// @title Simple set and get contract
/// @author zen2see
/// @notice Most basic contract for LearnWeb3
/// @dev No side effects on the function calls
contract MoonContract {
    /// Variable called hodling
    string private hodling;

    /// @notice Get the hodling value
    /// @dev Possibly rename the function to justh holding
    /// @return Returns the value of hodling
    function getHodling() public view returns (string memory) {
        return hodling;
    }

    /// @notice Sets the hodling value
    /// @dev Using a console log statement showing old and new values
    /// @param _hodling The hodling value to be set
    function setHodling(string memory _hodling) public {
        console.log("Changing hodling from '%s' to '%s'", hodling, _hodling);
        hodling = _hodling;
    }
}
