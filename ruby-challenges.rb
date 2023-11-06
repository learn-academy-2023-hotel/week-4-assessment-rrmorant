# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def odd_even (num)
    # odd_even method with num as an arguement
    if num % 2 == 0
    # a if statement takes the num and uses the modulo operator to see if the numb is evenly divided
        "#{num} is even"
    # will return num is even if num is even
    else
        "#{num} is odd"
    # will return num is odd if num is not even
    end
end

p odd_even reposts1 # "7 is odd"
p odd_even reposts2 # "42 is even"
p odd_even reposts3 # "221 is odd"
# return the results

# Pseudo code:

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowel (albums)
    # remove_vowel method with albums as the argument
    albums.delete "aeiouAEIOU"
    # .delete takes "aeiouAEIOU" out of the arguements from albums
end

p remove_vowel(beatles_album1) # "Rbbr Sl"
p remove_vowel(beatles_album2) # "Sgt Pppr"
p remove_vowel(beatles_album3) # "bby Rd"
# returns the results

# Pseudo code:

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def pal_test (string)
    # pal_test method with string as argument
    string = string.downcase
    # string.downcase ensures the words are lowered cased
    if
        string == string.reverse
    # string equal string.reverse which should be same letters in reverse
            return "#{string} is a palindrome"
    # if string is the same in reverse, it will say it's a palindrome
        else
            return "#{string} is not a palindrome"
    # if string is not the same in reverse, it will say it isn't a palindrome
    end
end

p pal_test(palindrome_test_case1) # "racecar is a palindrome"
p pal_test(palindrome_test_case2) # "learn is not a palindrome"
p pal_test(palindrome_test_case3) # "rotator is a palindrome"
# return results

# Pseudo code: