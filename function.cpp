#include <iostream>
using namespace std;
int tinhTong(int c, int d)
{
    int Tong = c + d;
    return Tong;
}
void Xinchao()
{
    int maso = 5;
    cout << "helloworld" << maso << endl;
}
int main()
{
    int a, b;
    Xinchao();
    Xinchao();
    Xinchao();
    Xinchao();
    Xinchao();
    cout << "nhap vao a" << endl;
    cin >> a;
    cout << "nhap vao b" << endl;
    cin >> b;

    // int tong = a + b;

    int tong = tinhTong(a, b);

    cout << tong << endl;
    // cout << "day la function" << endl;
}