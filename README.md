
# Dự án SoundHub

SoundHub là một nền tảng chia sẻ âm nhạc nơi người dùng có thể tải lên, chia sẻ và nghe các tệp MP3. Dự án được xây dựng dựa trên kiến trúc client server với client React Native và server Node.js.

## Cấu trúc dự án

```
├── mockups/ # Các file thiết kế Figma

├── README.md # File mô tả dự án này

├── setup/ # Các file thiết lập, bao gồm các script SQL

├── src/ # Mã nguồn

  ├── client/ # Mã nguồn phía client

  ├── server/ # Mã nguồn phía server

  ├── mysql/ # Cấu hình MySQL

  ├── nginx/ # Cấu hình Nginx

  ├── scripts/ # Các script hỗ trợ

  ├── docker-compose.yml # File docker-compose

├── thesis/  # Các tài liệu của dự án
├── docs/  # Các tài liệu về báo cáo và thuyết trình
```
## Mô tả chi tiết

### Phía client

Phía client được xây dựng dựa trên React Native. Cấu hình TypeScript có thể được tìm thấy trong file tsconfig.json.

### Phía server

Phía server được xây dựng dựa trên Node.js. Các tệp quan trọng bao gồm:

-   uploadMp3.js: Middleware để tải lên tệp MP3.
-   uploadImage.js: Middleware để tải lên hình ảnh.
-   mp3.controller.js: Controller xử lý các yêu cầu liên quan đến tệp MP3.
-   image.controller.js: Controller xử lý các yêu cầu liên quan đến hình ảnh.
- ....

### Docker

Dự án sử dụng Docker để đóng gói và triển khai. Cấu hình Docker có thể được tìm thấy trong file  Dockerfile.

## Cách chạy dự án

Để chạy dự án, bạn cần cài đặt Docker và Docker Compose. Sau đó, chạy lệnh sau:
```
cd src
docker-compose  up --build
```
Dự án sẽ được chạy tại  
>`http://localhost:8000`.