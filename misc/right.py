# D
def longest_word(sentence):
    words = sentence.split()
    saved_word = words[0]

    for word in words:
        if len(word) >= len(saved_word):
            saved_word = word

    return saved_word