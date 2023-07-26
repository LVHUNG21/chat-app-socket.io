#include<iostream>
#include<cmath>
#include<string>
using namespace std;
int main(){
//     bien: variable 
// int - stores integers (whole numbers), without decimals, such as 123 or -123
// double - stores floating point numbers, with decimals, such as 19.99 or -19.99
// char - stores sing as "Hello World". String vle characters, such as 'a' or 'B'. Char values are surrounded by single quotes
// string - stores text, suchalues are surrounded by double quotes
// bool - stores values with two states: true or false

// cach khai bao bien (declare variable)

// type variableName = value;
 
// ctrl + ? : comment ,chú thích
// bien chi khai bao mot lan ;
//    int tuoi;
// moi bien chiem mot o nho trong bo nho 
   int songuoi=200;
   int tuoi = 12;// kieu so nguyen
   double luong = 12.5; // kieu so thuc
   char ten = 'g'; // luu tru mot ki tu 
   string tendaydu="levanhung";// luu tru mot chuoi ki tu 
   bool lyhon=false; // true or false,  1 or 0

    // cout <<"co hang xom da ly hon chua :"<<lyhon<<endl;    

  // cin user input

   // int tuoithat;
   // string quequan;
   // double chieucao;
   // cout << "moi ban nhap tuoi"<<endl;
   // cin >> tuoithat; 
   // cin>>quequan;
   // cin>>chieucao;

   // cout<< "tuoi la " <<tuoithat << endl;
   // cout<< "que quan la"<<quequan<<endl;
   // cout<< "chieu cao la"<<chieucao<<endl;

   //operator
   // = gan gia tri 
   // int x=1;
   // int y=2;
   // double z=3;
    
   
   // int tong=x+y;
   // int hieu=x-y;
   // int tich=x*y;
   // int chia= z/y;
   // int chialaydu=x%y; // cung type data 
   // // x=++x;
   // x++;
   // cout<< "tongla:"<<tong<<endl;
   // cout<<"hieu la:"<<hieu<<endl;
   // cout<<"tich la:"<<tich<<endl;
   // cout<<"chia la:"<<chia<<endl;
   // cout<<"chialaydula:"<<chialaydu<<endl;
   // cout<< "x++:"<<x<<endl;

   // CONDITIONS C++
   // int score=10;
   // if(score>80){
   //    cout<<"Ban da thang roi"<<endl;
   // }
   // else{
   //    cout<<"ban da thua roi"<<endl;
   // }
   
   int age=17;
   if(age>=20){
      cout<<"du tuoi de con"<<endl;
   }
   else if (age>=18){
         cout<<"du tuoi de cuoi"<<endl;
   }
   else if(age>=16){
         cout<<"dung gu de yeu"<<endl;
   }
   else{
      cout<<"co ay chua du tuoi"<<endl;
   }

   // if(diem > 8.0){
   //    cout<<"hoc sinh gioi"<<endl;
   // }
   // else if(6.5<diem<8.0){
   //    cout<<" hoc sinh kha"<<endl;
   // }
   // else if(5<diem<6.5){
   //    cout<<" hoc sinh tb"<<endl;
   // }
   // else{
   //    cout<<"hoc sinh kem"<<endl;
   // }
 
}
