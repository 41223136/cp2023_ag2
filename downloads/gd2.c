#include <stdio.h>
#include <gd.h>
#include <math.h>

// Declare the rotation function
void rotateFilledPolygon(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {
    int i;
    double angle_rad = rotation_ang * M_PI / 180.0;

    for (i = 0; i < num_points; i++) {
        int x = points[i].x - x_orig;
        int y = points[i].y - y_orig;

        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));
        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));
    }
}

int main() {
    int width = 800;
    int height = 600;

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    FILE *outputFile = fopen("./../images/hellogd2.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }

    int red = gdImageColorAllocate(img, 255, 0, 0);
    int blue = gdImageColorAllocate(img, 0, 0, 255);
    int black = gdImageColorAllocate(img, 0, 0, 0);
    int white = gdImageColorAllocate(img, 255, 255, 255);

    gdImageFilledRectangle(img, 0, 0, width, height, white);
    gdImageFilledRectangle(img, 0, 0, (int)width / 4, (int)height / 4, blue);

    gdImageFilledEllipse(img, (int)width * 3 / 4, (int)height / 4, (int)width / 4, (int)width / 4, red);
    gdImageEllipse(img, (int)width * 3 / 4, (int)height * 3 / 4, (int)width / 4, (int)width / 4, red);
    gdImageLine(img, (int)width / 2, (int)height / 2, (int)width / 2, (int)height / 2 + 100, blue);

    gdPoint points[4];
    points[0].x = (int)width / 4;
    points[0].y = (int)height * 3 / 4;
    points[1].x = points[0].x + 100;
    points[1].y = points[0].y;
    points[2].x = points[1].x;
    points[2].y = points[1].y + 100;
    points[3].x = points[2].x - 100;
    points[3].y = points[2].y;

    // Call the rotation function multiple times
    for (int i = 0; i < 4; i++) {
        rotateFilledPolygon((int)width / 4 + 50, (int)height * 3 / 4 + 50, 30.0, points, 4);
        gdImagePolygon(img, points, 4, black);
    }

    gdPoint points2[4];
    points2[0].x = (int)width / 3;
    points2[0].y = (int)height / 2;
    points2[1].x = points2[0].x + 100;
    points2[1].y = points2[0].y;
    points2[2].x = points2[1].x;
    points2[2].y = points2[1].y + 100;
    points2[3].x = points2[2].x - 150;
    points2[3].y = points2[2].y;

    // Call the rotation function multiple times
    for (int i = 0; i < 12; i++) {
        //rotateFilledPolygon((int)width / 3 + 50, (int)height / 2 + 50, 30.0, points2, 4);
        rotateFilledPolygon(500, 200, 30.0, points2, 4);
        gdImageFilledPolygon(img, points2, 4, red);
    }

    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);

    return 0;
}