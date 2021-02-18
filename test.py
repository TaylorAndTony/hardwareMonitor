import psutil

a = psutil.cpu_percent(0.5)
print(a, type(a))