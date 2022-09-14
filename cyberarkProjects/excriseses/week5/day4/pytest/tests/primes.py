class Prime:
    def __init__(self,number):
        self.number=number

    def is_prime(number):
        if(number==0):
            return False
        for n in range(2,int(number**0.5)+1):
            if number%n==0:
                return False
        return True


    def are_prime_numbers(self,*args):
        primes_numbers = [self.is_prime(arg) for arg in args]
        return all(primes_numbers);
