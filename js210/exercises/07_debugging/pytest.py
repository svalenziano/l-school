def substrings(string):
    subs =  [string[start_idx: end_idx]
            for start_idx in range(len(string))
            for end_idx in range(start_idx + 1, len(string) + 1)]
    return subs

print(substrings('lorem ipsum'))

string = 'lorem ipsum'
print(substrings(string) == ['l', 'lo', 'lor', 'lore', 'lorem', 'lorem ', 'lorem i', 'lorem ip', 'lorem ips', 'lorem ipsu', 'lorem ipsum', 'o', 'or', 'ore', 'orem', 'orem ', 'orem i', 'orem ip', 'orem ips', 'orem ipsu', 'orem ipsum', 'r', 're', 'rem', 'rem ', 'rem i', 'rem ip', 'rem ips', 'rem ipsu', 'rem ipsum', 'e', 'em', 'em ', 'em i', 'em ip', 'em ips', 'em ipsu', 'em ipsum', 'm', 'm ', 'm i', 'm ip', 'm ips', 'm ipsu', 'm ipsum', ' ', ' i', ' ip', ' ips', ' ipsu', ' ipsum', 'i', 'ip', 'ips', 'ipsu', 'ipsum', 'p', 'ps', 'psu', 'psum', 's', 'su', 'sum', 'u', 'um', 'm'])