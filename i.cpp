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
int n,m,q;
cin>>n>>m>>q;
while(q--)
{
    int xs,ys,xe,ye,k;
    cin>>xs>>ys>>xe>>ye>>k;
    int ans=0;
    int sx=(xs<xe)? xs:xe;
    int lx=(xs>=xe)?xs:xe;
    int sy=(ys<ye)? ys:ye;
    int ly=(ys>=ye)? ys: ye;
    if((lx-sx)%k==0&&(ly-sy)%k==0)
    {
        
        ans=((lx-sx)/k)+((ly-sy)/k);
        cout<<ans<<endl;
    }
    else{
        cout<<"-1"<<endl;
    }
}
return 0;}