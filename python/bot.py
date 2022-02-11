#https://www.extremesudoku.info/

import time
import pyperclip
import pyautogui

def copy_clipboard():
  pyperclip.copy('')
  time.sleep(0.001)
  pyautogui.hotkey("ctrl","c")
  time.sleep(0.001)
  return pyperclip.paste()

def listToString(s): 
    str1 = "" 
    for ele in s: 
        str1 += ele  
    return str1

def copyContent():
  arr = []
  for x in range(0,81):
    var = copy_clipboard()
    if var == '':
      var = '0'
    arr.append(var) 
    pyautogui.press("tab")
  print(arr)
  sudoku = listToString(arr)
  f = open('solution.txt', 'a')
  f.write(sudoku+'\n')
  f.close()

time.sleep(5)
pyautogui.press("tab")

while True:
  pyautogui.press("tab")
  pyautogui.press("down")
  for x in range(0,4):
    pyautogui.press("tab")
  time.sleep(1)
  for x in range(0,5):
    pyautogui.press("tab")
    
  time.sleep(1)
  copyContent()
  time.sleep(1)
  
  for x in range(0,9):
    pyautogui.press("tab")
  time.sleep(1)
  pyautogui.press("enter")
  time.sleep(1)
  for x in range(0,27):
    pyautogui.press("tab")
    
  time.sleep(1)
  copyContent()
  time.sleep(1)
  
  for x in range(0,26):
    pyautogui.press("tab")
  time.sleep(1)
  
  f = open('solution.txt', 'a')
  f.write('\n')
  f.close()

# start
# 2t to select year (first time 1 down)
# 4t evil
# excessive, egregious, excrutiating, extreme
#
#
#
#
#
#