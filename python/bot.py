#https://www.extremesudoku.info/
import time 
import pyperclip
import pyautogui

file = 'solution.txt'

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
  f = open(file, 'a')
  f.write(sudoku+'\n')
  f.close()
  
time.sleep(5)
pyautogui.press("tab")
while True: #5277
  pyautogui.press("tab")
  pyautogui.press("down")
  for x in range(0,4):
    pyautogui.press("tab")
  for x in range(0,5):
    pyautogui.press("tab")
  copyContent()
  for x in range(0,9):
    pyautogui.press("tab")
  pyautogui.press("enter")
  for x in range(0,27):
    pyautogui.press("tab")
  copyContent()
  for x in range(0,26):
    pyautogui.press("tab")