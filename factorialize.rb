require 'byebug'
def factorial(n)
  if n == 0
    return 1
  end

  n * factorial(n - 1)
end

puts factorial(10)
