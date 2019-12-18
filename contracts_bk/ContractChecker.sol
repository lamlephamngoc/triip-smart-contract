pragma solidity ^0.4.25;

// Rinkeby : 0x76fb91275c723154b1ff47a533307f56f1b54212

contract ContractChecker {
    
    function isContract(address _addr) private returns (bool hasCode) {
      uint length;
      assembly { length := extcodesize(_addr) }
      return length > 0;
    }

    function checkBatchAddress(address[] _addresses) public returns (bool[] results) {
        
        results = new bool[] (_addresses.length);

        for(uint16 i = 0; i < _addresses.length; ++i) {
            results[i] = isContract(_addresses[i]);
        }

        return results;
    
    }
}

