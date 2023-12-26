// https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China
// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621
// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library
// https://www.rapidtables.com/web/color/RGB_Color.html
// 幾何形狀著色與繪圖練習
// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖
#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_roc_flag(gdImagePtr img);
void draw_white_sun(gdImagePtr img, int x, int y, int size, int color);

int main() {
    // width 3: height 2
    int width = 1200;
    // 國旗長寬比為 3:2
    int height = (int)(width*2.0 / 3.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_roc_flag(img);

    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);
    return 0;
}

void draw_roc_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red, white, blue;
    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處
    int center_x = (int)(width/4);
    int center_y = (int)(height/4);
    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖
    // 由於中央白日圓形的半徑為青天寬度的 1/8
    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8
    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8
    int sun_radius = (int)(width/8);
    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑
    int white_circle_dia = sun_radius;
    // 中央藍色圓形半徑為中央白日的 1又 2/15
    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;
    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值
    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色
    white = gdImageColorAllocate(img, 255, 255, 255); // 白色
    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色
    // 根據畫布大小塗上紅色長方形區域
    gdImageFilledRectangle(img, 0, 0, width, height, red);
    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色
    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);
    // 先設法以填色畫出六個白色堆疊菱形
    draw_white_sun(img, center_x, center_y, sun_radius, white);
    // 利用一個藍色大圓與白色小圓畫出藍色環狀
    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);
    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);

}

void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {
    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位
    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度
    float deg = M_PI/180;
    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度
    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小
    float sr = sun_radius/tan(75*deg);
    int ax, ay, bx, by, dx, dy, ex, ey;
    gdPoint points[4];
    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確
    ax = center_x;
    ay = center_y - sun_radius;
    bx = center_x - sun_radius*tan(15*deg);
    by = center_y;
    ex = center_x;
    ey = center_y + sun_radius;
    dx = center_x + sun_radius*tan(15*deg);
    dy = center_y;
    // AB
    gdImageLine(img, ax, ay, bx, by, color);
    // BE
    gdImageLine(img, bx, by, ex, ey, color);
    // ED
    gdImageLine(img, ex, ey, dx, dy, color);
    // DA
    gdImageLine(img, dx, dy, ax, ay, color);
    */
    ax = center_x;
    ay = center_y - sun_radius;
    bx = center_x - sun_radius*tan(15*deg);
    by = center_y;
    ex = center_x;
    ey = center_y + sun_radius;
    dx = center_x + sun_radius*tan(15*deg);
    dy = center_y;
    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域
    for (int i=1;i<=6;i++){
    // A
    points[0].x = ax+sun_radius*sin(30*deg*i);
    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);
    // B
    points[1].x = bx+sr-sr*cos(30*deg*i);
    points[1].y = by-sr*sin(30*deg*i);
    // E
    points[2].x = ex-sun_radius*sin(30*deg*i);
    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));
    // D
    points[3].x = dx-(sr-sr*cos(30*deg*i));
    points[3].y = dy+sr*sin(30*deg*i);
    // 對菱形區域範圍塗色
    gdImageFilledPolygon(img, points, 4, color);
    // 在菱形區域外圍畫線, 明確界定菱形範圍
    gdImagePolygon(img, points, 4, color);
    }
}