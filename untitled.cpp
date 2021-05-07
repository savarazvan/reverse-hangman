#include <iostream>
#include <cstring>
#include <fstream>
using namespace std;

ifstream f("words.txt");
ofstream o("words.out");

int main(){
    char c[100];
    while (!f.eof())
    {
        f>>c;
        o<<"'"<<c<<"',";
    }
    
}