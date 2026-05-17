# QUY TẮC VÀ TIÊU CHUẨN CONVERT PHOENIX TEMPLATE (REACT) SANG NEXT.JS

## MỤC TIÊU CỐT LÕI (TUÂN THỦ TUYỆT ĐỐI)
1. **Bảo toàn 100% di sản:** Giữ nguyên toàn bộ cấu trúc UI/UX, CSS (Bootstrap 5), HTML, Fonts, định dạng file và **TẤT CẢ** các thư viện/dependencies (Echarts.js, Mapbox,...) đang tồn tại trong dự án gốc. CẤM loại bỏ hoặc thay thế các thư viện hiện có.
2. **Tối ưu hóa chuẩn Next.js:** Nâng cấp hệ thống rendering (SSR/CSR), routing và xử lý assets dựa trên các cơ chế tối ưu nội tại của Next.js mà không làm vỡ kiến trúc gốc.

---

## QUY TẮC 1: QUẢN LÝ THƯ VIỆN VÀ DEPENDENCIES
- **Giữ nguyên `package.json`:** Cài đặt đầy đủ 100% các packages đang có trong dự án Phoenix React gốc. Không xóa bỏ hay thay thế thư viện nào (Kể cả Bootstrap thuần hay React-Bootstrap).
- **Thêm mới (Không xóa cũ):** Chỉ bổ sung các thư viện đặc thù của Next.js (nếu cần thiết cho việc cấu hình) mà không đụng chạm đến các thư viện hiện tại.

## QUY TẮC 2: XỬ LÝ LÕI GIAO DIỆN VÀ STYLES (BOOTSTRAP 5, CSS, SCSS, FONT)
- **CSS/SCSS:** Bê nguyên thư mục styles của dự án gốc. Import các file CSS global (Bootstrap, Custom CSS của Phoenix, Theme CSS) trực tiếp vào file layout gốc (`app/layout.tsx` hoặc `pages/_app.tsx`).
- **ClassNames:** Giữ nguyên 100% các chuỗi `className="..."` của HTML/Bootstrap cũ. Cấm sửa đổi cấu trúc thẻ div hay class của template.
- **Fonts & Icons:** Giữ nguyên link CDN hoặc file local chứa fonts/icons. Để tối ưu hóa, có thể đưa các link này vào cơ chế quản lý `<head>` của Next.js hoặc sử dụng `next/font` để load font gốc mà không làm thay đổi typeface.

## QUY TẮC 3: XỬ LÝ ECHARTS.JS, MAPBOX VÀ CÁC THƯ VIỆN THAO TÁC DOM
Do Next.js render một phần ở Server (SSR) nơi không có đối tượng `window` và `document`, nên các thư viện như Mapbox và Echarts sẽ báo lỗi nếu không xử lý đúng.
- **Quy tắc bắt buộc:** Giữ nguyên thư viện gốc, nhưng khi import vào trang, **PHẢI** sử dụng cơ chế Client-Side Rendering (CSR).
- **Cách tối ưu:**
  - **Cách 1 (Khuyên dùng - App Router):** Thêm directive `"use client";` ở dòng trên cùng của các component chứa Mapbox hoặc Echarts.
  - **Cách 2:** Sử dụng Dynamic Import của Next.js để ngắt SSR cho component đó:
    ```javascript
    import dynamic from 'next/dynamic';
    const PhoenixMapbox = dynamic(() => import('@/components/PhoenixMapbox'), { ssr: false });

    QUY TẮC 4: TỐI ƯU HÓA ROUTING VÀ CHUYỂN TRANG
Bảo toàn giao diện: Giao diện điều hướng (Sidebar, Navbar) giữ nguyên HTML/CSS.

Chuyển đổi Logic:

Chuyển đổi toàn bộ các thẻ định tuyến (như <Link> của react-router-dom hoặc thẻ <a> thông thường) sang Component <Link> của Next.js (import Link from 'next/link').

Lợi ích: Tận dụng được cơ chế Prefetching của Next.js giúp trang chuyển tức thì (SPA feel) mà không load lại trang, trong khi vẫn giữ nguyên CSS class của template.

Ví dụ:
<a href="/dashboard" className="nav-link active">...</a>
=> <Link href="/dashboard" className="nav-link active">...</Link>

QUY TẮC 5: TỐI ƯU HÓA TÀI NGUYÊN (HÌNH ẢNH)
Không thay đổi thư mục lưu trữ ảnh (ví dụ: giữ nguyên thư mục /public/assets/img/).

Convert thẻ ảnh: Chuyển toàn bộ các thẻ <img src="..." /> có sẵn sang <Image/> của Next.js (import Image from 'next/image') để tự động tối ưu hóa dung lượng (WebP) và Lazy Loading.

Lưu ý cực kỳ quan trọng: Phải giữ lại toàn bộ các class css (ví dụ: className="img-fluid rounded") khi gắn vào component <Image> để đảm bảo giao diện không bị lệch một pixel nào so với bản gốc.

QUY TẮC 6: CẤU TRÚC LAYOUT VÀ COMPONENT
Giữ nguyên hệ thống Component: Toàn bộ folder components của dự án gốc phải được sao chép sang giữ nguyên cấu trúc.

Layout bọc ngoài: Tách phần Header, Sidebar, Footer của dự án cũ và đưa vào layout.tsx (hoặc Layout component tổng) của Next.js. Các trang con sẽ tự động được render vào phần children.

Quản lý State: Nếu template gốc dùng Context API, Redux hay Zustand, giữ nguyên toàn bộ và bọc Provider ở cấp độ cao nhất (Client Provider).

⚠️ CHECKLIST KIỂM TRA TRƯỚC KHI COMMIT (DÀNH CHO DEV):

[ ] Giao diện có giống 100% bản gốc Phoenix template không?

[ ] Bootstrap dropdown, modal, tooltip có hoạt động bình thường không?

[ ] Mapbox và Echarts có hiển thị tốt mà không báo lỗi window is not defined không?

[ ] Thẻ <a> nội bộ đã được bọc bằng next/link chưa?

[ ] Các ảnh lớn đã được dùng next/image chưa?

[ ] package.json đã được kế thừa đầy đủ thư viện gốc chưa?