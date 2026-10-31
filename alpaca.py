import sys
data = sys.stdin.buffer.read().split()

N = data[0]
D = data[1]
K = data[2]
X = data[3]

u_horse_speeds = data[4:]
u_horse_speeds.sort()

horse_speeds = u_horse_speeds.reverse()


times_device_used = 0

for horse_speed in horse_speeds:
    device_this_horse = 0
    
    while horse_speed >= N:
        horse_speed *= ((100-X)/100)
        device_this_horse += 1
        
    if device_this_horse == 0:
        break
    
    times_device_used += device_this_horse
    if times_device_used > K:
        break
    
if(times_device_used > K):
    print("NO")
else:
    print("YES")