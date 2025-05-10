import "../../index.css";

function Tintuc() {
    return (
        <div className="pb-[100px]">
            <div className="relative">
                <img
                    src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-e-commerce-book-knowledge-teacher-education-banner-background-image_186718.jpg"
                    className="w-full h-72 object-cover"
                />

                {/* Breadcrumb đè lên ảnh, căn giữa */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="flex text-white font-semibold text-sm drop-shadow-md">
                        <a href="/" className="breadcrumb-arrow-left bg-gray-400 px-4 py-2">
                            Trang chủ
                        </a>
                        <div className="breadcrumb-arrow-right bg-orange-500 px-8 py-2">
                            Trang Tin Tức
                        </div>
                    </div>
                </div>
            </div>

               <div className="max-w-[1000px] mx-auto px-4 mt-8">
            <div className="grid grid-cols-2 gap-x-6">
                <div className="flex flex-col gap-y-4">
                  <p className="text-justify font-semibold text-blue-500 italic">
TIN TỨC TẠI ĐÂY                                              </p>

                    <p className="text-justify">

Một trong những yếu tố tạo nên uy tín và chất lượng đào tạo vượt trội tại Trung tâm Ngoại ngữ Quốc tế BlueOcean chính là đội ngũ giáo viên chuyên nghiệp, tâm huyết và giàu kinh nghiệm. Chúng tôi luôn tin rằng: "Một người thầy giỏi có thể thay đổi cả cuộc đời người học." Chính vì vậy, BlueOcean đặt ra những tiêu chuẩn tuyển chọn và đào tạo đội ngũ giảng viên một cách nghiêm túc, bài bản và có định hướng lâu dài.

1. Chuyên môn vững vàng, giàu kinh nghiệm thực tế
Đội ngũ giáo viên của BlueOcean là những người có trình độ chuyên môn cao, tốt nghiệp từ các trường đại học, học viện uy tín trong và ngoài nước. Nhiều thầy cô từng sinh sống, học tập hoặc làm việc tại các quốc gia sử dụng ngôn ngữ giảng dạy như Trung Quốc, Nhật Bản, Hàn Quốc, Anh, Mỹ... nên có hiểu biết sâu sắc về ngôn ngữ cũng như văn hóa bản địa.

Bên cạnh bằng cấp chuyên môn, các giáo viên tại trung tâm đều có kinh nghiệm giảng dạy thực tế lâu năm, biết cách tạo dựng sự hứng thú trong lớp học và hỗ trợ học viên tiếp thu kiến thức hiệu quả, phù hợp với từng trình độ và mục tiêu cụ thể.

2. Phương pháp giảng dạy hiện đại, linh hoạt
Tại BlueOcean, chúng tôi luôn đề cao tính thực tiễn và ứng dụng trong quá trình giảng dạy. Đội ngũ giảng viên thường xuyên được tập huấn để cập nhật phương pháp giảng dạy hiện đại, kết hợp giữa truyền thống và công nghệ, sử dụng các công cụ trực quan, tình huống thực tế, hoạt động nhóm, đóng vai... nhằm tăng cường tương tác và giúp học viên phát triển đồng đều cả 4 kỹ năng: nghe – nói – đọc – viết.

Giáo viên không chỉ là người truyền đạt kiến thức, mà còn là người truyền cảm hứng, khơi dậy đam mê học tập và tinh thần cầu tiến nơi học viên.

3. Tận tâm và luôn đồng hành cùng học viên
Hơn cả một người thầy, giáo viên tại BlueOcean là người bạn đồng hành, luôn quan tâm, lắng nghe và sẵn sàng hỗ trợ học viên vượt qua những khó khăn trong quá trình học. Mỗi học viên đều được quan tâm sát sao, được hướng dẫn theo lộ trình cá nhân hóa để phát huy tối đa khả năng của bản thân.

Chúng tôi hiểu rằng, mỗi người học có xuất phát điểm khác nhau, và nhiệm vụ của giáo viên không chỉ là giảng bài, mà còn là khơi dậy sự tự tin và niềm tin vào bản thân nơi học viên.

BlueOcean – nơi học viên không chỉ học ngôn ngữ, mà còn học từ chính trái tim của những người thầy.
                        </p>

                        
                </div>
                <img src="http://localhost:3000/center.jpg" className="w-full h-auto" />
            </div>
            </div>
        </div>
    );
}

export default Tintuc;
