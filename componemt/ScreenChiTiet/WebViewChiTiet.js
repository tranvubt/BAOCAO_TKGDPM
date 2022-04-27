import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

export default function WebViewChiTiet() {
  return (
    <WebView
      numberOfLines={1}
      adjustsFontSizeToFit
      style={styles.webView}
      source={{
        html: '<! DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0"> </head> <body><p>Ngày 01/7/2019 vừa qua, Công ty CP Dịch vụ Sân bay Quốc tế Cam Ranh đã đưa vào hoạt động thêm một phòng chờ hạng thương gia – The Champ Lounge - tại Cảng HKQT Cam Ranh. Thiết kế của The Champ Lounge xuất phát từ ý tưởng mang đến cho hành khách không gian phòng chờ tại sân bay vừa đạt các tiêu chuẩn dịch vụ cao cấp vừa mang nét văn hóa độc đáo của địa phương.</p> <p>Điểm nhấn của The Champ Lounge chính là những nét văn hóa Chăm - văn hóa bản địa cổ xưa ở khu vực Nha Trang, Khánh Hòa – được thể hiện rõ nét từ tên gọi của phòng chờ cho đến trang phục của nhân viên, ẩm thực phục vụ khách hàng,….</p> <p><br></p> <center><img src="https://statics.vinpearl.com/du-lich-xanh-2-_1632732498.jpg"></center> <p>Khu vực ẩm thực được đánh giá cao với các món ăn đa dạng, mang đậm hương vị địa phương và thế giới.</p> <p>Dịch vụ sử dụng máy tính tra cứu dữ liệu cũng như không gian sang trọng, đẳng cấp chắc chắn là những điểm cộng mà quý khách không thể bỏ lỡ khi nghỉ chân tại The Champ Lounge. </p> <p>Điểm nhấn của The Champ Lounge chính là những nét văn hóa Chăm - văn hóa bản địa cổ xưa ở khu vực Nha Trang, Khánh Hòa – được thể hiện rõ nét từ tên gọi của phòng chờ cho đến trang phục của nhân viên, ẩm thực phục vụ khách hàng,…. </p></body> </html>',
      }}
    />
  );
}

const styles = StyleSheet.create({
  webView: {
    flex: 3,
    textAlign: "center",
    fontSize: 100,
  },
});
