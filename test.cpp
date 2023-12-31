#include <iostream>
#include <cmath>
#include <string>
using namespace std;
int main()
{
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
   int songuoi = 200;
   int tuoi = 12;                 // kieu so nguyen
   double luong = 12.5;           // kieu so thuc
   char ten = 'g';                // luu tru mot ki tu
   string tendaydu = "levanhung"; // luu tru mot chuoi ki tu
   bool lyhon = false;            // true or false,  1 or 0

   // array C++

   int array[4] = {2, 3, 4, 5}; // array[0]=2, array[1]=3, array[2]=4, array[3]=5

   // int array[3]={1,2,3}//

   // string a[2]={"aba","bcd"}; // a[0]="aba", a[1]="bcd";

   // array[0]=7;
   // int a;

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

   // operator
   //  = gan gia tri
   //  int x=1;
   //  int y=2;
   //  double z=3;

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

   int age = 18;
   // if(age>=20){
   //    cout<<"du tuoi de con"<<endl;
   // }
   // else if (age>=18){
   //       cout<<"du tuoi de cuoi"<<endl;
   // }
   // else if(age>=16){
   //       cout<<"dung gu de yeu"<<endl;
   // }
   // else{
   //    cout<<"co ay chua du tuoi"<<endl;
   // }

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

   /// chi xet cac truong hop bang hoac co gia tri cu the
   // switch(age){
   //    case 20:
   //       cout<<"du tuoi decon"<<endl;
   //       break;
   //    case 18:
   //       cout<<"du tuoi lay chong"<<endl;
   //       break;
   //    case 16:
   //       cout<<"du tuoi yeu"<<endl;
   //       break;
   //    default:
   //       cout<<"du tuoi lam quen"<<endl;
   // }

   /// C++ loop

   // while loop
   int tuoicuanhom[4] = {23, 25, 31, 20};
   for (int i = 0; i < 4; i++)
   {
      // handle conditions continue and break using in if else
      // break ket thuc vong lap, continue bat dau lai vong lap moi
      // chi in ra den vi tri i=2 ,
      if (i == 2)
      {
         continue; ///
      }
      cout << tuoicuanhom[i] << endl;
   }
   // references : tham chieu &
   //    When a variable is created in C++, a memory address is assigned to the variable. And when we assign a value to the variable, it is stored in this memory address.
   // To access it, use the & operator, and the result will represent where the variable is stored:
   string food = "Pizza";

   // string meal = food;
   string &meal = food;

   meal = "hunng";

   // cout << food << "\n"; // Outputs Pizza
   // cout << meal << "\n"; // Outputs Pizza

   string *contro = &meal;
   // variable has value and address memory
   // Access the memory address of food and output its value (Pizza)
   cout << *contro << "\n";

   cout << contro << endl;
   // cout << &contro << endl;
   // cout << &food << endl; // Outputs 0x6dfed4
}
