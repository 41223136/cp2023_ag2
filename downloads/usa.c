#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_usa_flag(gdImagePtr img);
void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);

int main() {
    int width = 800;
    int height = (int)(width / 1.9);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_usa_flag(img);

    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "打开输出文件时出错。\n");
        return 1;
    }

    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);

    return 0;
}

void draw_usa_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red, white, blue;
    // 国旗颜色
    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹
    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹
    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形

    int stripe_height = height / 13;
    int stripe_width = width;
    int star_size = (int)(0.0308 * height); // 星星大小

    for (int y = 0; y < height; y += stripe_height) {
        if (y / stripe_height % 2 == 0) {
            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);
        } else {
            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);
        }
    }

    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);

    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距
    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距
    int star_start_x = (int)(0.125 * height); // 星星的起始X位置
    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置

    for (int row = 0; row < 9; row++) {
        int starsPerRow = (row % 2 == 0) ? 6 : 5;

        // 计算2、4、6和8排星星的偏移量
        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;

        for (int star = 0; star < starsPerRow; star++) {
            int x = star_start_x + star * star_spacing_x + offset_x;

            // 旋转角度（以弧度为单位）
            double rotation_angle = M_PI / 5; // 忘記多少度的旋转

            int y = star_start_y + row * star_spacing_y;
            draw_star(img, x, y, star_size, white, rotation_angle);
        }
    }
}

void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {
    gdPoint points[10];

    for (int i = 0; i < 10; i++) {
        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;
        int radius = (i % 2 == 0) ? size : size / 2;
        points[i].x = x + radius * cos(angle);
        points[i].y = y + radius * sin(angle);
    }

    // 用指定的颜色填充星星
    gdImageFilledPolygon(img, points, 10, color);
}