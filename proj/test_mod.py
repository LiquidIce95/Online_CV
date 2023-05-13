from unittest import TestCase
from util import *

class testing1(TestCase):
    def test1(self):
        data = 3

        res = multiply_two(data)
        self.assertEqual(res,6)
