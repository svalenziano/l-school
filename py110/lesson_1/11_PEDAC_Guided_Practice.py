
# TESTS
def test1():
    layer_block_qty_test = [
        # format: layer number**, number of blocks
        # **starting at the top and going down
        (1, 1),   
        (2, 4),
        (3, 3**2),
        (4, 4**2),
        (5, 5**2),
    ]
    for layer_num, block_qty in layer_block_qty_test:
        print(block_qty == blocks_required_for_layer(layer_num))
# test1()


def test_leftovers():
    # Format: number of blocks at your disposal, leftover blocks
    # leftover = blocks at disposal - largest sum of squares 
    results = [
        (0, 0),
        (1, 0),
        (2, 1),
        (4, 3),
        (5, 0),
        (6, 1),
        (10, 5),
        (14, 0),
        (20, 6),
        (30, 0),
        (40, 10),
        (50, 20),
    ]
    for input, output in results:
        # print(f"Input = {input}, Expected output = {output}")
        # print(f"Actual output = {leftover_blocks(input)}")
        # print()
        print(f"{input} ==> {output} ==> {leftover_blocks(input) == output}")


def print_squares():
    squares = [num**2 for num in range(0,10)]
    sums = [sum(squares[0: idx + 1]) for idx in range(0, len(squares))]
    print(f"Squares: {squares} ")
    print(f"Sums:    {sums}")



def blocks_required_for_layer(layer_number:int):
    return layer_number ** 2


def leftover_blocks(blocks_available):
    structure = []
    current_layer_number = 1
    blocks_required = blocks_required_for_layer(current_layer_number)
    while blocks_required <= blocks_available:
        # building a structure is not req'd, but is nice to have for debugging
        # print(f"Req'd = {blocks_required}, Avail = {blocks_available}.")
        structure.append(blocks_required)
        blocks_available -= blocks_required
        current_layer_number += 1
        blocks_required = blocks_required_for_layer(current_layer_number)
    return blocks_available

def main():
    # print_squares()
    test_leftovers()

if __name__ == '__main__':
    main()