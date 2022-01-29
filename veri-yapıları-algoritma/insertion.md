# Insertion Sort Projesi
## [22,27,16,2,18,6] -> Insertion Sort Aşamaları
1. 2,27,16,22,18,6
2. 2,6,16,22,18,27
3. 2,6,16,18,22,27
## Big O Gösterimi
n+(n-1)+(n-2)+(n-3)+(n-4)+(n-5)+1= n.(n+1)/2= (n2+n)/2
### Big O= O (n2)
## Time Complexity
Best Case: 2 Average Case: 16,18 Worst Case: 27  
Dizi sıralandıktan sonra 18 sayısını bulmak average case kapsamına girer.
## [7,3,5,8,2,9,4,15,6] -> Insertion Sort Aşamaları
1. 2,3,5,8,7,9,4,15,6
2. 2,3,4,8,7,9,5,15,6
3. 2,3,4,5,7,9,8,15,6
4. 2,3,4,5,6,8,9,15,7
5. 2,3,4,5,6,7,9,15,8
6. 2,3,4,5,6,7,8,15,9
7. 2,3,4,5,6,7,8,9,15