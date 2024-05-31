def longest_word(sentence):
    words = sentence.split()
    saved_word = words.pop(0)

    for word in words:
        if len(saved_word) < len(word):
            saved_word = word

    return saved_word