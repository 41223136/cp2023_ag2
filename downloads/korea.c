  // https://en.wikipedia.org/wiki/Flag_of_South_Korea
  // https://en.wikipedia.org/wiki/Flag_of_South_Korea#/media/File:Flag_of_South_Korea_(construction_sheet).svg
  #include <stdio.h>
  #include <gd.h>
  #include <math.h>

  // Function prototype
  void draw_korean_flag(gdImagePtr img);

  // Declare the rotation function
  void rotatePoints(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {
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
      // width 3: height 2
      int width = 1200;
      // 國旗長寬比為 72:48 = 12:8 = 3:2
      int height = (int)(width * 2.0 / 3.0);

      gdImagePtr img = gdImageCreateTrueColor(width, height);
      gdImageAlphaBlending(img, 0);

      draw_korean_flag(img);

      FILE *outputFile = fopen("./../images/korean_flag_in_gd_w15_step2.png", "wb");
      if (outputFile == NULL) {
          fprintf(stderr, "Error opening the output file.\n");
          return 1;
      }
      gdImagePngEx(img, outputFile, 9);
      fclose(outputFile);
      gdImageDestroy(img);
      return 0;
  }

  void draw_korean_flag(gdImagePtr img) {
      int width = gdImageSX(img);
      int height = gdImageSY(img);
      int red, blue, black, grey, white;
      // according to https://en.wikipedia.org/wiki/Flag_of_South_Korea#/media/File:Flag_of_South_Korea_(construction_sheet).svg
      double scale = width/72;
      int big_circle_dia = (int)24*scale;
      int small_circle_dia = (int) big_circle_dia/2;
      // left small circle rotated angle is rot_ang
      double rot_ang = atan2(48.0, 72.0);
      // rectangle rotated angle is rot_ang2;
      double rot_ang2 = atan2(72.0, 48.0);
      double degree = M_PI/180.0;
      int center_x = (int)(width / 2);
      int center_y = (int)(height / 2);
      gdPoint points[4];
      // for upper rectangle
      int rect_lower_left_x = center_x - (int)6*scale;
      int rect_lower_right_x = center_x + (int)6*scale;
      int rect_upper_left_x = rect_lower_left_x;
      int rect_upper_right_x = rect_lower_right_x;
      int rect_lower_left_y = center_y - (int)18*scale;
      int rect_lower_right_y = rect_lower_left_y;
      int rect_upper_left_y = rect_lower_left_y - (int)8*scale;
      int rect_upper_right_y = rect_upper_left_y;
      // get points
      points[0].x = rect_lower_left_x;
      points[0].y = rect_lower_left_y;
      points[1].x = rect_upper_left_x;
      points[1].y = rect_upper_left_y;
      points[2].x = rect_upper_right_x;
      points[2].y = rect_upper_right_y;
      points[3].x = rect_lower_right_x;
      points[3].y = rect_lower_right_y;

      printf("small_circle_dia is %d\n", small_circle_dia);
      int left_center_x = center_x - (small_circle_dia/2)*cos(rot_ang);
      printf("center_x is %d\n", center_x);
      printf("atan2(48.0, 72.0) is %f\n", atan2(48.0, 72.0));
      printf("left_center_x is %d\n", left_center_x);
      int left_center_y = center_y - (small_circle_dia/2)*sin(rot_ang);
      int right_center_x = center_x + (small_circle_dia/2)*cos(rot_ang);
      int right_center_y = center_y + (small_circle_dia/2)*sin(rot_ang);

      red = gdImageColorAllocate(img, 255, 0, 0);      // Red
      blue = gdImageColorAllocate(img, 0, 0, 255);     // Blue
      black = gdImageColorAllocate(img, 0, 0, 0);      // Black
      grey = gdImageColorAllocate(img, 125, 125, 125); // grey
      white = gdImageColorAllocate(img, 255, 255, 255); // white

      gdImageFilledRectangle(img, 0, 0, width, height, white);
      gdImageRectangle(img, 0, 0, width, height, black);

      // rectangle rotate to upper right
      rotatePoints(center_x, center_y, rot_ang2/degree, points, 4);
      gdImageFilledPolygon(img, points, 4, grey);
      //printf("rot_ang/degree is %f\n", rot_ang2/degree);
      // rectangle rotate to upper left
      rotatePoints(center_x, center_y, -2*rot_ang2/degree, points, 4);
      gdImageFilledPolygon(img, points, 4, grey);
      // rectangle rotate to lower ritht
      rotatePoints(center_x, center_y, - 2*rot_ang/degree, points, 4);
      gdImageFilledPolygon(img, points, 4, grey);
      // rectangle rotate to lower left
      rotatePoints(center_x, center_y, -2*rot_ang2/degree, points, 4);
      gdImageFilledPolygon(img, points, 4, grey);
      // Draw upper rectagle four lines
      /*
      gdImageLine(img, rect_lower_left_x, rect_lower_left_y, rect_upper_left_x, rect_upper_left_y, grey);
      gdImageLine(img, rect_lower_right_x, rect_lower_right_y, rect_upper_right_x, rect_upper_right_y, grey);
      gdImageLine(img, rect_lower_left_x, rect_lower_left_y, rect_lower_right_x, rect_lower_right_y, grey);
      gdImageLine(img, rect_upper_left_x, rect_upper_left_y, rect_upper_left_x, rect_upper_left_y, grey);
      */
      // Draw the big circle outline
      int circle_radius = (int)(height * 2.0 / 5.0);
      gdImageEllipse(img, center_x, center_y, big_circle_dia, big_circle_dia, black);
      // left small circle
      gdImageEllipse(img, left_center_x, left_center_y, small_circle_dia, small_circle_dia, red);
      // right small circle
      gdImageEllipse(img, right_center_x, right_center_y, small_circle_dia, small_circle_dia, blue);
      gdImageFill(img, left_center_x, left_center_y, red); // Fill left small circle with red
      gdImageFill(img, right_center_x, right_center_y - small_circle_dia/2-10, red);
      gdImageFill(img, right_center_x, right_center_y, blue); // Fill right small circle with blue
      gdImageFill(img, left_center_x, left_center_y + small_circle_dia/2+10, blue);
      // 用白色蓋掉先前的大圓黑線
      gdImageEllipse(img, center_x, center_y, big_circle_dia, big_circle_dia, white);

      // 接下來只要改變三個圓的邊框顏色, 並且利用 gdImageFill 對特定區域塗色
      // 應該就可以完成韓國國旗中間的紅藍區域圖案

      /*
      // Draw the second circle outline
      gdImageEllipse(img, center_x + circle_radius / 2, center_y, circle_radius * 2, circle_radius * 2, black);

      // Flood fill the left area with red
      gdImageFill(img, center_x - circle_radius + 1, center_y, red);

      // Flood fill the right area with blue
      gdImageFill(img, center_x + circle_radius + 1, center_y, blue);

      // Flood fill the intersection area with yellow
      gdImageFill(img, center_x, center_y, yellow);
      */
  }
