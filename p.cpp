#include <bits/stdc++.h>
#include<iostream>
#include <map>
#include <set>
#include <algorithm>
#include <vector>
#include <string>
#include <math.h>
using namespace std;
#define ll long long int
#define maxX(a,b) (a>b?a:b)
#define minX(a,b) (a<b?a:b)
#define isEven(a) ((a%2==0)?1: 0)
#define isOdd(a) ((a%2==0)?0: 1)
#define isNeg(a) ((a<0)?1: 0)
#define loop(n) for(int i = 0; i < n; i++)
#define loop2(n) for(int j = 0; j < n; j++)
#define abs(a) ((a<0)?-a:a)
int main(){
   int n;
   cin>>n;
   vector<int> arr(n);
   for(int i=0;i<n;i++) cin>>arr[i];
   int count=0;
   int start=0,end=0,i=0;
   while(i<n)
   {
    if(arr[i]>arr[i+1]) {
        arr.erase(arr.begin()+i);
       count++;
    }
    i++;
   }
   if(count%2==0) cout<<count/2<<endl;
   else cout<<count/2+1<<endl;
    
return 0;}