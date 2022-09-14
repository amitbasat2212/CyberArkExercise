#excrice1 

import pytest


def Fibonacci(index):
    if index < 0:
        print("Incorrect input")

    elif index == 0:
        return 0

    elif index == 1 or index == 2:
        return 1
 
    else:
        return Fibonacci(index-1) + Fibonacci(index-2)

@pytest.mark.parametrize("num,answer", [(2,1),(5,4)])  
def test_fibonnaci(num,answer):
  assert Fibonacci(num)==answer


 
