# first input is the number of quarters she has since getting paid
# second-fourth inputs are the number of quarters each machine has played already
# first machine pays 30 quarters every 35th time
# second machine pays 60 quarters every 100th time
# third machine pays 9 quarters every 10th time

def slot_machines(quarter_count, plays_1, plays_2, plays_3):
    plays = 0 # plays 
    done = False
    while not done: # repeats while we still have coins
        for i in range(3): # loops through each machine
            if quarter_count == 0: # if we run out of quarters, stop
                done = True
                break
            else: # else, then we do a play
                plays += 1 # the amount of plays goes up
                quarter_count -= 1 # put in a quarter
                if i == 0: # if we are on the first machine
                    plays_1 += 1
                    if plays_1 == 35:
                        quarter_count += 30
                        plays_1 = 0
                elif i == 1: # if we are on the second machine
                    plays_2 += 1
                    if plays_2 == 100:
                        quarter_count += 60
                        plays_2 = 0
                elif i == 2: # if we are on the third machine
                    plays_3 += 1
                    if plays_3 == 10:
                        quarter_count += 9
                        plays_3 = 0
                        
    print(f"She plays {plays} times before going broke.")
    
slot_machines(48, 3, 10, 4)