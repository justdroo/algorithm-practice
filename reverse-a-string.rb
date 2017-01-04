require 'byebug'
def reverse_string(str)
  puts str.split(//).reverse.join()
end


reverse_string("hello")
reverse_string("My name is Drew.")
