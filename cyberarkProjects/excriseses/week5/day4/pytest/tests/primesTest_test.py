import imp


from primes import Prime

def test_is_three_prime():
    assert Prime.is_prime(3)==True


def test_five_six_seven():
   assert Prime.is_prime(5)==True
   assert Prime.is_prime(7)==True
   assert Prime.is_prime(6)==False 


def test_one():
    assert Prime.is_prime(0)==False 