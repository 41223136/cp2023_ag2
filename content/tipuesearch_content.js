var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n 組別倉儲  https://github.com/41223136/cp2023_ag2 \n 組員網站 \n 7號  https://lin41223107.github.io/cp2023/content/index.html \n 8號  https://41223108.github.io/cp2023/content/index.html \n 23號  https://g8people.github.io/cp2023/content/index.html \n 36號  https://41223136.github.io/cp2023/content/index.html \n 41號  https://41223141.github.io/cp2023/content/index.html \n 46號  https://41223146.github.io/cp2023/content/index.html \n 52號  https://41223152.github.io/cp2023/content/index.html \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'gd練習', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \n// Declare the rotation function\nvoid rotateFilledPolygon(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {\n    int i;\n    double angle_rad = rotation_ang * M_PI / 180.0;\n \n    for (i = 0; i < num_points; i++) {\n        int x = points[i].x - x_orig;\n        int y = points[i].y - y_orig;\n \n        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));\n        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));\n    }\n}\n \nint main() {\n    int width = 800;\n    int height = 600;\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    FILE *outputFile = fopen("hellogd1.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n \n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n \n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width / 4, (int)height / 4, blue);\n \n    gdImageFilledEllipse(img, (int)width * 3 / 4, (int)height / 4, (int)width / 4, (int)width / 4, red);\n    gdImageEllipse(img, (int)width * 3 / 4, (int)height * 3 / 4, (int)width / 4, (int)width / 4, red);\n    gdImageLine(img, (int)width / 2, (int)height / 2, (int)width / 2, (int)height / 2 + 100, blue);\n \n    gdPoint points[4];\n    points[0].x = (int)width / 4;\n    points[0].y = (int)height * 3 / 4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n \n    // Call the rotation function\n    rotateFilledPolygon((int)width / 4 + 50, (int)height * 3 / 4 + 50, 45.0, points, 4);\n    gdImagePolygon(img, points, 4, black);\n \n    gdPoint points2[4];\n    points2[0].x = (int)width / 3;\n    points2[0].y = (int)height / 2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n \n    // Call the rotation function\n    rotateFilledPolygon((int)width / 3 + 50, (int)height / 2 + 50, 30.0, points2, 4);\n    gdImageFilledPolygon(img, points2, 4, red);\n \n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n \n    return 0;\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \n// Declare the rotation function\nvoid rotateFilledPolygon(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {\n    int i;\n    double angle_rad = rotation_ang * M_PI / 180.0;\n \n    for (i = 0; i < num_points; i++) {\n        int x = points[i].x - x_orig;\n        int y = points[i].y - y_orig;\n \n        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));\n        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));\n    }\n}\n \nint main() {\n    int width = 800;\n    int height = 600;\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    FILE *outputFile = fopen("./../images/hellogd2.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n \n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n \n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width / 4, (int)height / 4, blue);\n \n    gdImageFilledEllipse(img, (int)width * 3 / 4, (int)height / 4, (int)width / 4, (int)width / 4, red);\n    gdImageEllipse(img, (int)width * 3 / 4, (int)height * 3 / 4, (int)width / 4, (int)width / 4, red);\n    gdImageLine(img, (int)width / 2, (int)height / 2, (int)width / 2, (int)height / 2 + 100, blue);\n \n    gdPoint points[4];\n    points[0].x = (int)width / 4;\n    points[0].y = (int)height * 3 / 4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n \n    // Call the rotation function multiple times\n    for (int i = 0; i < 4; i++) {\n        rotateFilledPolygon((int)width / 4 + 50, (int)height * 3 / 4 + 50, 30.0, points, 4);\n        gdImagePolygon(img, points, 4, black);\n    }\n \n    gdPoint points2[4];\n    points2[0].x = (int)width / 3;\n    points2[0].y = (int)height / 2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n \n    // Call the rotation function multiple times\n    for (int i = 0; i < 12; i++) {\n        //rotateFilledPolygon((int)width / 3 + 50, (int)height / 2 + 50, 30.0, points2, 4);\n        rotateFilledPolygon(500, 200, 30.0, points2, 4);\n        gdImageFilledPolygon(img, points2, 4, red);\n    }\n \n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n \n    return 0;\n} \n', 'tags': '', 'url': 'gd練習.html'}, {'title': 'work', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h> \n 利用程式庫繪製各國國旗 \n gd程式庫練習', 'tags': '', 'url': 'work.html'}, {'title': 'ROC', 'text': '// https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n} \n \n', 'tags': '', 'url': 'ROC.html'}, {'title': 'USA', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n', 'tags': '', 'url': 'USA.html'}, {'title': 'JAPAN', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    int originalWidth = 1200;\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    // 新的宽度和高度以适应 "images" 文件夹\n    int newWidth = 600;\n    int newHeight = (int)(newWidth * 2.0 / 3.0);\n\n    // 创建新图像并进行缩放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    // 创建一个白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\n    // 绘制红色圆圈（太阳）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n  // 減小 size 的值,例如將他的值減半\n  size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n} \n \n', 'tags': '', 'url': 'JAPAN.html'}, {'title': 'UK', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n \nint main() {\n    // 设置国旗的宽和高\n    int width = 1200;\n    int height = width / 2;\n \n    // 创建图像\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    // 绘制英国国旗\n    draw_uk_flag(img);\n \n    // 将图像保存到文件\n    FILE *outputFile = fopen("./../images/uk_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时发生错误。\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \n \n \nvoid draw_uk_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n \n    int red, white, blue;\n    red = gdImageColorAllocate(img, 204, 0, 0);       // 红色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 153);      // 蓝色\n \n    gdImageFilledRectangle(img, 0, 0, width, height, blue);\n \n \n  int x1, y1, x2, y2, x3, y3;\n  {\n    int line_thickness = 100;\n    gdImageSetThickness(img, line_thickness);\n \n    int x1, y1, x2, y2, x3, y3;\n \n    // 绘制白色斜线\n    x1 = 0;\n    y1 = 600;\n    x2 = 1200;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n    x1 = 0;\n    y1 = 0;\n    x2 = 1200;\n    y2 = 600;\n    gdImageLine(img, x1, y1, x2, y2, white);\n}\n  {\n    int line_thickness = 33;\n    gdImageSetThickness(img, line_thickness);\n \n \n    // 绘制红色斜线\n    x1 = 566;\n    y1 = 300;\n    x2 = 1166;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 1233;\n    y1 = 600;\n    x2 = 633;\n    y2 = 300;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 566;\n    y1 = 300;\n    x2 = -33;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 600;\n    y1 = 316.5;\n    x2 = 0;\n    y2 = 616.5;\n    gdImageLine(img, x1, y1, x2, y2, red);\n  }\n  {\n  int line_thickness = 33;\n  gdImageSetThickness(img, line_thickness);\n \n  int x1, y1, x2, y2, x3, y3;\n \n  // 绘制  斜线\n  x1 = 0;\n  y1 = 600;\n  x2 = 1200;\n  y2 = 0;\n  gdImageLine(img, x1, y1, x2, y2, red );\n \n \n  x1 = 1200;\n    y1 = 16.5;\n    x2 = 600;\n    y2 = 316.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n \n  x1 = 0;\n    y1 = 583.5;\n    x2 = 600;\n    y2 = 283.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n \n  }\n \n    // 绘制白色十字\n    int cross_width = width / 32;\n    int cross_arm_width = width / 32;\n    int center_x = width / 2;\n    int center_y = height / 2;\n \n    gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\n    gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n \n    // 绘制红色十字\n    gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\n    gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n} \n \n', 'tags': '', 'url': 'UK.html'}, {'title': 'korea', 'text': '// https://en.wikipedia.org/wiki/Flag_of_South_Korea\n// https://en.wikipedia.org/wiki/Flag_of_South_Korea#/media/File:Flag_of_South_Korea_(construction_sheet).svg\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n// Function prototype\nvoid draw_korean_flag(gdImagePtr img);\n\n// Declare the rotation function\nvoid rotatePoints(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {\n    int i;\n    double angle_rad = rotation_ang * M_PI / 180.0;\n\n    for (i = 0; i < num_points; i++) {\n        int x = points[i].x - x_orig;\n        int y = points[i].y - y_orig;\n\n        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));\n        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));\n    }\n}\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 72:48 = 12:8 = 3:2\n    int height = (int)(width * 2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_korean_flag(img);\n\n    FILE *outputFile = fopen("korean_flag_in_gd_w15_step2.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_korean_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, blue, black, grey, white;\n    // according to https://en.wikipedia.org/wiki/Flag_of_South_Korea#/media/File:Flag_of_South_Korea_(construction_sheet).svg\n    double scale = width/72;\n    int big_circle_dia = (int)24*scale;\n    int small_circle_dia = (int) big_circle_dia/2;\n    // left small circle rotated angle is rot_ang\n    double rot_ang = atan2(48.0, 72.0);\n    // rectangle rotated angle is rot_ang2;\n    double rot_ang2 = atan2(72.0, 48.0);\n    double degree = M_PI/180.0;\n    int center_x = (int)(width / 2);\n    int center_y = (int)(height / 2);\n    gdPoint points[4];\n    // for upper rectangle\n    int rect_lower_left_x = center_x - (int)6*scale;\n    int rect_lower_right_x = center_x + (int)6*scale;\n    int rect_upper_left_x = rect_lower_left_x;\n    int rect_upper_right_x = rect_lower_right_x;\n    int rect_lower_left_y = center_y - (int)18*scale;\n    int rect_lower_right_y = rect_lower_left_y;\n    int rect_upper_left_y = rect_lower_left_y - (int)8*scale;\n    int rect_upper_right_y = rect_upper_left_y;\n    // get points\n    points[0].x = rect_lower_left_x;\n    points[0].y = rect_lower_left_y;\n    points[1].x = rect_upper_left_x;\n    points[1].y = rect_upper_left_y;\n    points[2].x = rect_upper_right_x;\n    points[2].y = rect_upper_right_y;\n    points[3].x = rect_lower_right_x;\n    points[3].y = rect_lower_right_y;\n\n    printf("small_circle_dia is %d\\n", small_circle_dia);\n    int left_center_x = center_x - (small_circle_dia/2)*cos(rot_ang);\n    printf("center_x is %d\\n", center_x);\n    printf("atan2(48.0, 72.0) is %f\\n", atan2(48.0, 72.0));\n    printf("left_center_x is %d\\n", left_center_x);\n    int left_center_y = center_y - (small_circle_dia/2)*sin(rot_ang);\n    int right_center_x = center_x + (small_circle_dia/2)*cos(rot_ang);\n    int right_center_y = center_y + (small_circle_dia/2)*sin(rot_ang);\n\n    red = gdImageColorAllocate(img, 255, 0, 0);      // Red\n    blue = gdImageColorAllocate(img, 0, 0, 255);     // Blue\n    black = gdImageColorAllocate(img, 0, 0, 0);      // Black\n    grey = gdImageColorAllocate(img, 125, 125, 125); // grey\n    white = gdImageColorAllocate(img, 255, 255, 255); // white\n\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageRectangle(img, 0, 0, width, height, black);\n    \n    // rectangle rotate to upper right\n    rotatePoints(center_x, center_y, rot_ang2/degree, points, 4);\n    gdImageFilledPolygon(img, points, 4, grey);\n    //printf("rot_ang/degree is %f\\n", rot_ang2/degree);\n    // rectangle rotate to upper left\n    rotatePoints(center_x, center_y, -2*rot_ang2/degree, points, 4);\n    gdImageFilledPolygon(img, points, 4, grey);\n    // rectangle rotate to lower ritht\n    rotatePoints(center_x, center_y, - 2*rot_ang/degree, points, 4);\n    gdImageFilledPolygon(img, points, 4, grey);\n    // rectangle rotate to lower left\n    rotatePoints(center_x, center_y, -2*rot_ang2/degree, points, 4);\n    gdImageFilledPolygon(img, points, 4, grey);\n    // Draw upper rectagle four lines\n    /*\n    gdImageLine(img, rect_lower_left_x, rect_lower_left_y, rect_upper_left_x, rect_upper_left_y, grey);\n    gdImageLine(img, rect_lower_right_x, rect_lower_right_y, rect_upper_right_x, rect_upper_right_y, grey);\n    gdImageLine(img, rect_lower_left_x, rect_lower_left_y, rect_lower_right_x, rect_lower_right_y, grey);\n    gdImageLine(img, rect_upper_left_x, rect_upper_left_y, rect_upper_left_x, rect_upper_left_y, grey);\n    */\n    // Draw the big circle outline\n    int circle_radius = (int)(height * 2.0 / 5.0);\n    gdImageEllipse(img, center_x, center_y, big_circle_dia, big_circle_dia, black);\n    // left small circle\n    gdImageEllipse(img, left_center_x, left_center_y, small_circle_dia, small_circle_dia, red);\n    // right small circle\n    gdImageEllipse(img, right_center_x, right_center_y, small_circle_dia, small_circle_dia, blue);\n    gdImageFill(img, left_center_x, left_center_y, red); // Fill left small circle with red\n    gdImageFill(img, right_center_x, right_center_y - small_circle_dia/2-10, red);\n    gdImageFill(img, right_center_x, right_center_y, blue); // Fill right small circle with blue\n    gdImageFill(img, left_center_x, left_center_y + small_circle_dia/2+10, blue);\n    // 用白色蓋掉先前的大圓黑線\n    gdImageEllipse(img, center_x, center_y, big_circle_dia, big_circle_dia, white);\n    \n    // 接下來只要改變三個圓的邊框顏色, 並且利用 gdImageFill 對特定區域塗色\n    // 應該就可以完成韓國國旗中間的紅藍區域圖案\n\n    /*\n    // Draw the second circle outline\n    gdImageEllipse(img, center_x + circle_radius / 2, center_y, circle_radius * 2, circle_radius * 2, black);\n\n    // Flood fill the left area with red\n    gdImageFill(img, center_x - circle_radius + 1, center_y, red);\n\n    // Flood fill the right area with blue\n    gdImageFill(img, center_x + circle_radius + 1, center_y, blue);\n\n    // Flood fill the intersection area with yellow\n    gdImageFill(img, center_x, center_y, yellow);\n    */\n}\n \n \n', 'tags': '', 'url': 'korea.html'}, {'title': '個人學習心得', 'text': '41223107:剛開始上這門課時，還可以擔任去教同學的角色，但後來慢慢地越來越聽不懂，不懂老師說每周推幾次幾次究竟是甚麼，為甚麼學姊們都可以那麼多，還有一開始的ipv4跳到ipv6這之間我也是有聽沒有懂，於是我就鼓起勇氣去問學姊，但為我解決最多問題的還是老師，老師都會直接過來我電腦這邊親自操作給我看，一步一步的解釋原因，不會很敷衍地看一看就走人，也很感謝學姊都特別照顧我們，沒有架子，考試的內容大多也是課堂有講到的，還記得當時建立倉儲時的我手忙腳亂，進度落後，很擔心都跟不上，但看到很多同學都跟我差不多，稍微有起到安心的作用， 這門課也讓我學到很多我不知道的東。 希望能順利通過這門課。 \n 41223108: \n 41223112: \n 41223123:在計算機課堂中，一開始非常的不知道要幹嘛，只知道怎麼連ipv4，有網路之後，創建自己的replit跟githud後，我就不會了，但自從第9周後，老師說要帶著我們一步一步地走，從那時候我就非常的認真地在聽課，也慢慢摸懂了replit怎麼用，國旗怎麼畫，怎麼問GPT，也很感謝我們的組長，放學後我都會拿著筆電去找他請教他，他都會不厭其煩的去教導我﹐還記得在課堂中，replit突然不能推上去，請教老師解決，老師也是很有耐心的教導，還跟我們講到了人生方向還有當代大學生的現狀，利用有趣的例子讓我們能懂再說甚麼，也是更加地有趣，但很可惜的是，1/1號replit就不能用了，要用倉儲就是另外一大麻煩了，希望新事物能讓我更快的上手，不要像剛開學那樣甚麼都不懂。 \n 41223136:123 \n 41223141: \n 41223146:123 \n 41223152:這學期我上計算機這門課,我學到了如何進行網路設定,可以使電腦輕易連線,只需要帶隨身碟,裡面下載一些程式,就會有網路,而且速度超快,都不會跑不動,之後上課就開始學程式的應用,但我開始遇到了困難,就是我英文非常的不好,所以很多的英文單字都看不懂,學習的速度就比別人還慢,需要先去查單字的翻譯,才能了解程式的意思,在架設網站的部分我沒學習得很好,沒有跟上老師的腳步,只好利用放學空閒的時間去詢問其他會的同學,他們都很熱心的一步一步教導我,我才慢慢跟上腳步,在網站中設計國旗出來,一開始使用chatgpt得時候,都不知道要如何去問他,他給我的程式都非常的奇怪,後來才知道要一步一步地去問他,可能程式是錯的,就從錯誤中告訴chatgpt,他就會幫你修改,給你要的程式,之後就非常上手製作國旗的速度也變得非常快,還能去教其他同學,這學期就即將要結束了,希望能在最後做個統整,把這學期學的程式應用更加上手,希望下學期能學習到更多不一樣得程式設計,去增進自己。', 'tags': '', 'url': '個人學習心得.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};