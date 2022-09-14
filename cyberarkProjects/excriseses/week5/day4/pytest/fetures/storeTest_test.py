
import pytest


@pytest.fixture
def store():
  items = ("apple", "banana", "orange")
  amount = (2, 2, 1)
  return dict(zip(items, amount)) 


def dicreas_num_of_bananas(num,store):      
    if(store["banana"]>=num):
        store["banana"]-=num;
    return store;


def buy_banana(store):
 
  return dicreas_num_of_bananas(1,store)


def buy_two_bananas(store):
    return dicreas_num_of_bananas(2,store)


def test_buy_banana(store):
    assert buy_banana(store)=={'apple': 2, 'banana': 1, 'orange': 1}


def test_buy_two_bananas(store):
    assert buy_two_bananas(store)=={'apple': 2, 'banana': 0, 'orange': 1}


